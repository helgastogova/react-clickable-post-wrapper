import React, { useEffect, useRef } from "react";
import cx from "classnames";

type PostWrapperProps = {
  className?: string;
  children?: React.ReactNode;
  link?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  onClick?: (event: MouseEvent) => void;
};

const PostWrapper: React.FC<PostWrapperProps> = React.forwardRef<HTMLDivElement, PostWrapperProps>(
  ({ className, children, link, target = "_self", onClick }, ref) => {

    const myRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (!myRef.current || !link) return;

      const handleClick = (e: MouseEvent) => {
        const targetElement = e.target as HTMLElement;

        // Check if the clicked element or its parent is an anchor tag
        const clickedOnAnchor = targetElement.tagName === "A" || targetElement.parentElement?.tagName === "A";
        
        // Check if the clicked element is inside the wrapper element
        const clickedInsideWrapper = myRef.current?.contains(targetElement);
        
        if (!clickedOnAnchor && clickedInsideWrapper) {
          // If clicked inside the wrapper and not on an anchor, prevent the default action
          e.preventDefault();

          // Check if onClick prop is defined and execute it
          if (typeof onClick === 'function') {
            onClick(e);
          }
        } else {
          // If clicked on an anchor or outside the wrapper, navigate to the link
          target === "_blank"
            ? window.open(link, "_blank")
            : (window.location.href = link);
        }
      };

      document.addEventListener("click", handleClick);
      
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }, [link, target, onClick]);

    return (
      <div ref={myRef} className={cx(className)}>
        {children}
      </div>
    );
  }
);

PostWrapper.defaultProps = {
  className: "",
  children: null,
  link: "",
  target: "_self",
};

export default PostWrapper;
