# React Clickable Post Wrapper

React Clickable Post Wrapper is a flexible and versatile npm package that allows you to wrap any post element within an interactive container. The container, when clicked, navigates to a designated URL while also allowing for any links inside the wrapper to be clickable. Furthermore, it provides the ability to select text within the wrapper without triggering the link redirection.

This component is ideal for developers seeking to increase interactivity and user experience in their React applications, particularly in scenarios where posts or feed items are used.

## Features
1. **Flexible and versatile:** Wrap any post element within an interactive container, providing enhanced functionality.
2. **Clickable links:** Navigate to a designated URL when the container is clicked, using the link prop.
3. **Child elements:** Render child elements within the wrapper for seamless integration with your content.
4. **Customizable styling:** Apply custom CSS classes using the className prop to match your project's styling.
5. **Target options:** Define the target window for the link using the target prop (_blank, _self, _parent, _top).
6. **Advanced event handling:** Intelligently handle click events to avoid triggering link navigation in specific scenarios.
7. **Efficient event management:** Use useRef and useEffect hooks for efficient event listener management.
8. **TypeScript support:** Written in TypeScript for type safety and improved developer experience.

These features make the React Clickable Post Wrapper a powerful tool for creating interactive and clickable post elements within your React applications. It provides enhanced control over link behavior while maintaining a user-friendly and customizable interface.

## Demo 
[https://codesandbox.io/p/sandbox/gifted-http-wlh3yg?welcome=true](https://codesandbox.io/p/sandbox/gifted-http-wlh3yg?welcome=true)

## Installation
`npm install react-clickable-post-wrapper`

## Usage
Here is an example of how you can use the React Clickable Post Wrapper component:
```jsx
import React from "react";
import PostWrapper from "react-clickable-post-wrapper";

const MyComponent = () => {
  return (
    <PostWrapper
      className="post-wrapper"
      link="https://example.com"
      target="_blank"
      onClick={(event) => {
        console.log("Clicked!", event);
      }}
    >
      <div>
        <h1>My Post</h1>
        <p>This is the content of my post.</p>
        <a href="https://inner-link-example.com">This is a link inside your post</a>
        <button onClick={() => console.log("Button clicked!")}>
          Click me
        </button>
      </div>
    </PostWrapper>
  );
};

export default MyComponent;
```

## Props
The PostWrapper component accepts the following props:

1. **className (optional):** A string representing the CSS class name for the wrapper container.
2. **children (optional):** React nodes to be wrapped inside the container.
3. **link (optional):** The URL to navigate to when the container is clicked.
4. **target (optional):** The target attribute for the link. Can be one of "_blank", "_self", "_parent", or "_top". Default is "_self".
5. **onClick (optional):** A function that will be called when the container is clicked. It receives the MouseEvent object as an argument.

Note: If both onClick and individual click handlers are defined on child elements, the onClick prop takes precedence and prevents the default link navigation when handled.

## License
React Clickable Post Wrapper is released under the MIT License.


