### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  React is a front-end framework that allows developers to create reusable components that can be rendered dynamically on a web page.

- What is Babel?
  Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

- What is JSX?
  JSX is a syntax extension to JavaScript. JSX essentially combines markup(HTML) and logic(JavaScript) into loosely coupled units called components that contain both.

- How is a Component created in React?
  A component is created by defining a JavaScript function. This function should at least contain some sort of JSX that is returned to render HTML or other components onto the page. This JavaScript function can also contain logic or other functions that can be passed into child components or HTML elements.

- What are some difference between state and props?
  While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function). Generally, props are meant to be immutable data whereas state is often instantiated because its data will be constantly changing.

- What does "downward data flow" refer to in React?
  Downward data flow is the idea that parent components pass data down to their children via props. In order to make data go the other way, we have to instantiate a piece of state and then pass a function down from the parent that the child can then call with that piece of state.

- What is a controlled component?
  A controlled component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component.

- What is an uncontrolled component?
  A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it.

- What is the purpose of the `key` prop when rendering a list of components?
  Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  This is a poor choice because an element can be removed from the array and thus the index for all the other elements will change, which can mess with how React identifies and renders each element in the array.

- Describe useEffect. What use cases is it used for in React components?
  useEffect is a hook that is used within a React component. By default, it will run some snippet of code every time the component re-renders. useEffect can be customized such that it will only run when certain variables or pieces of state change.

- What does useRef do? Does a change to a ref value cause a rerender of a component?
  useRef can be used to store data values just like useState, however it does NOT cause a re-render.

- When would you use a ref? When wouldn't you use one?
  A ref is useful when you are trying to keep track of a variable (similar to a global variable) but you don't want to re-render the component every time it changes.

- What is a custom hook in React? When would you want to write one?
  A custom hook is a function that instantiates a piece of state and does something with it. This becomes useful when a React app utilizes useState for the same purpose over and over again. For example we could write a custom hook to toggle a piece of state or to fetch data using a piece of state.
