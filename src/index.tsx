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
        const selection = window.getSelection();
        const postLinkClicked =
          e.target instanceof HTMLAnchorElement ||
          (e.target as HTMLElement).parentElement instanceof HTMLAnchorElement;

        const textIsSelected = selection && selection.toString().length > 0;
        if (textIsSelected || postLinkClicked) {
          return;
        }

        // Check if onClick prop is defined and execute it
        if (typeof onClick === 'function') {
          onClick(e);
        }

        // If onClick prop was not handled or preventDefault was not called, navigate to the link
        if (!e.defaultPrevented) {
          target === "_blank"
            ? window.open(link, "_blank")
            : (window.location.href = link);
        }
      };

      myRef.current.addEventListener("click", handleClick);
      
      return () => {
        myRef.current?.removeEventListener("click", handleClick);
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
