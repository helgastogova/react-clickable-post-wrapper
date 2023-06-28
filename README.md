# React Post Wrapper

React Post Wrapper is a flexible and versatile npm package that allows you to wrap any post element within an interactive container. The container, when clicked, navigates to a designated URL while also allowing for any links inside the wrapper to be clickable. Furthermore, it provides the ability to select text within the wrapper without triggering the link redirection.

This component is ideal for developers seeking to increase interactivity and user experience in their React applications, particularly in scenarios where posts or feed items are used.

## Features
1. Wraps any post or feed item within an interactive container.
2. Redirects to a specified URL upon clicking the wrapper.
3. Maintains clickable links within the wrapper.
4. Allows text selection within the wrapper without triggering redirection.

## Installation
`npm install react-post-wrapper`

## Usage
```jsx
import ReactPostWrapper from 'react-post-wrapper';

// ...

<ReactPostWrapper link="https://example.com" target="_blank">
  <YourPostComponent />
</ReactPostWrapper>
