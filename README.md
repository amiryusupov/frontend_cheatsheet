# 📚 Frontend Cheat Sheet
This repository is a cheat sheet to Front-end for daily use. It contains a lot of snippets from my own use / official documentation and I'll improve it soon!

## Table of contents
1. **[React](#1---react)**
<!-- 2. [Redux](#redux)
3. [Axios](#axios) -->

## 1 - React
### What is React.js?
React.js is a JavaScript library used for building user interfaces (UIs) for web applications. In simple terms, it helps developers create interactive and dynamic elements on websites.
### Key features
- **Component-Based**: React lets you build UIs by breaking them into smaller, reusable pieces called components.
- **Declarative Syntax**: With React, you describe how your UI should look at any given point in time, and React takes care of updating the actual UI to match this description. It's like telling React what you want, and React figures out how to make it happen.
- **Virtual DOM**: React uses a virtual representation of the actual DOM (the structure of your web page) to keep track of changes. When there's a change in your data or UI, React first updates this virtual DOM, then efficiently updates only the necessary parts of the actual DOM. It's like having a blueprint of your web page that React can quickly modify without needing to rebuild everything from scratch.
- **JSX**: JSX is a syntax extension that allows you to write HTML-like code directly in your JavaScript files. It's like mixing HTML with JavaScript, which makes it easier to create and visualize UI components in React.
---
### Create React App
```bash
# npm
npx create-react-app my-app

# yarn
yarn create react-app my-app

# npm (Vite)
npm create vite@latest my-react-app --template react

# yarn (Vite)
yarn create vite my-react-app --template react
```

```bash
# how to run (npm)
npm start

# yarn
yarn start

# npm (Vite)
npm run dev

# yarn (Vite)
yarn dev
```
---
### React Use
**Default main.jsx**
```javascript
// import React ReactDOM and App component
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
```

```javascript
// Create a root using ReactDOM.createRoot and attach it to the DOM element with the ID "root".
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
```
```javascript
// Render the App component inside the root element using root.render()
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```
- **Strict Mode**: React offers `<StrictMode>` component that helps highlight potential problems in your application. You can wrap your app within `<StrictMode>` during development.
---
### JSX
**JSX** is a syntax extension for JavaScript that allows you to write HTML-like code directly within your React components.
```javascript
// JSX produce React Element
const element = <h1>My JSX Element</h1>;
```
```javascript
// Use curly braces to embed some Javascript
const element = <div>{getContent()}</div>;
```
```javascript
// Use camelCase for attribute name
const element = <div className="example"></div>;
```
```javascript
// Use curly braces to embed some Javascript
const element = <img src={image.url}></img>;
```
```javascript
// Self close if tag is empty
const item = <div />;
```
---
### Components
1. **Functional Components:**
- Defined as JavaScript functions.
- Receive props (properties) as input and return JSX describing the UI.

```javascript
// Stateless Functional Component
function Heading(props) {
  return <h1>{props.title}</h1>;
}
```
```javascript
// Stateless Functional Component (with arrow function)
const Heading = (props) => {
  return <h1>{props.title}</h1>;
}
```
```javascript
// Instead of props you can write curly brackets
const Heading({title}) {
  return <h1>{title}</h1>
}
```

2. **Class Components**
- Defined as ES6 classes that extend React.Component.
- Have a render() method that returns JSX.
```javascript
class Heading extends React.Component {
  render() {
    return Hello, {this.props.name};
  }
}
```

> **Note:** Always start component names with capital, like this: `<Heading />`
---
### Hooks
Hooks are special functions that allow you to "hook into" React state and other features from functional components. Hooks provide a more concise and flexible way to achieve the same functionality without needing classes.
#### 1. useState Hook: The Basics
- **Functional State**: `useState` is a built-in Hook that allows you to add state to functional components.
- **State Initialization**: You call useState with an initial value, and it returns an array containing two elements:
  - Current State Value: The first element holds the current state value.
  - State Update Function: The second element is a function used to update the state.

##### 1. useState Syntax and Usage:
- Import `useState` from the 'react' library:
```javascript
import React, { useState } from 'react';
```

- Within your functional component, call `useState` with the initial state value:
```javascript
const [stateVariable, setStateFunction] = useState(initialValue);
```

- The `useState` call returns an array with two elements, which you destructure into two variables:
  - **stateVariable**: This variable holds the current state value.
  - **setStateFunction**: This function is used to update the state.

##### 2. Updating state
- To update the state, call `setStateFunction` with the new value:
```javascript
setStateFunction(newValue);
```

- When the new state depends on the previous state, you can pass a function to `setStateFunction`:
```javascript
setStateFunction((prevState) => prevState + 1);
```
##### 3. Working with Objects and Arrays:
- Always create a new object or array when updating state to ensure React detects the change and re-renders. Avoid directly modifying the existing state object/array.
- Use the **spread operator** `...` to create a new object/array with the updated values:
```javascript
const [person, setPerson] = useState({ name: 'Alice', age: 30 });

// Correct way to update age (object)
setPerson(prevPerson => ({ ...prevPerson, age: 31 }));
```
**Array:**

```javascript
const [items, setItems] = useState(['apple', 'banana']);

// Correct way to add a new item (array)
setItems(prevItems => [...prevItems, 'orange']);
```
**Don'ts:**

- Avoid directly mutating the state object/array using methods like `push`, `pop`, or property assignment. This can lead to unexpected behavior and prevent React from detecting changes.

**Example(don't):**
```javascript
// Incorrect way to update age
person.age = 31;
setPerson(person); // This won't trigger a re-render
```

- When updating a specific property or element, remember to spread the existing properties/elements to avoid losing data.

**Example(don't):**
```javascript
// Incorrect way to update name, losing the age property
setPerson({ name: 'Bob' });
```
> **Note:** Don't do these☝️. Don't use array methods and don't forget to spread elements.

---
#### 2. useEffect Hook:
The `useEffect` hook allows you to perform actions after a component renders. These actions are typically side effects, which can include:
- Fetching data from APIs
- Setting up subscriptions (e.g., to listen for data changes)
- Running timers or intervals

**How it Works:**

- `useEffect` accepts two arguments:
  - **Effect callback:** This is a function that contains the side effect logic you want to run.
  - **Dependency array (optional):** This is an optional array of values. The effect callback will only run again if one of the values in the dependency array changes.

The **useEffect** hook uses a function as its first argument, and this function can optionally return another function. Let's break it down:

**1. Effect Callback:** The first argument you pass to useEffect is a function that contains the logic for your side effect. This function typically performs actions like fetching data, setting up subscriptions, or running timers.

**2. Optional Cleanup Function:**  The effect callback can optionally return a function. This function serves as a cleanup mechanism and is executed when:

- The component unmounts (is removed from the DOM).
- The effect runs again due to changes in the dependency array (if provided).

**The dependency array:**
The dependency array is crucial for optimizing performance. If you omit the dependency array, the effect runs after every render, which can be inefficient.

```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();

    // Cleanup function (optional)
    return () => {
      // unsubscribe from any subscriptions here
    };
  }, []); // Empty dependency array: fetch data only on mount

  return (
    <div>
      {data ? (
        <p>Fetched Data: {data.message}</p>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

```

---
### Event Handling
**Event handling** allows users to interact  with your components, triggering actions and updates in response to events like clicks, form submissions and keyboard input.

#### 1. Event Handlers as props:
- Event handler prop names typically start with `on` followed by the event name (e.g., `onClick`, `onSubmit`, `onChange`).
```javascript
function Button({ onClick }) {
  return 'Click me';
}
```

#### 2. Handling Events in Functional Components

```javascript
function MyComponent() {
  const handleClick = (event) => {
    console.log('Button clicked!', event);
    // ... perform actions based on the event
  };
    return <button onClick={handleClick}>Click me<button>;
}
```
- The `event` argument you see in functional component event handlers in React.js is a special object that provides information about the user interaction that triggered the event. It returns several things like type of event, target element, mouse poisition, keyboard information, form data and etc. when clicking the button. For example: `event.target` or `event.type`.
- We can also change the name `event` to another. This name `event` only makes it easier to understand the code.
- Don't add `()` parentheses at the end of the function name.  If you add parentheses after the function name (e.g., `onClick={handleClick()}`), you're actually calling the `handleClick` function right there in the JSX. This would result in the function being executed immediately during rendering, and not when the button is clicked.

#### 3. Common events

##### Click: `onClick` 
`onClick` used to detect when a user clicks on a specific HTML element.
```html
<button onClick={handleClick}>Click me</button>
```

##### Submit: `onSubmit`
`onSubmit` is specifically used for handling form submissions. It's triggered when a user submits a form, typically by clicking a submit button or pressing the Enter key within the form.
```html
<form onSubmit={handleSubmit}>
   <!-- Form fields and elements here -->
  <button type="submit">Submit</button>
</form>
```

##### Change: `onChange` (for input elements)
The `onChange` event handler is used to detect changes in the value of form elements like text inputs, textareas, and select elements. It allows you to capture user input in real-time and update your component's state accordingly.
```html
<input type="text" value={name} onChange={handleChange} />
```

##### Key Press: `onKeyDown, onKeyUp`
The `onKeyDown` and `onKeyUp` event handlers are used to detect key presses and releases within specific elements, typically input fields like text boxes or textareas. They provide finer control compared to onChange, which focuses on changes in the element's value.

**1. `onKeyDown` event:**
  - Triggers when a user **presses** a key down on the keyboard.
  - Useful for capturing specific key presses (e.g., Enter, Escape) or performing actions before the character is displayed.

**2. `onKeyUp` event:** 
  - Triggers when a user **releases** a key after pressing it down.
  - Useful for capturing the actual character typed or performing actions after the value has been updated.

  [Example of Key events](./KeyEvents.jsx)

##### Mouse Events: `onMouseEnter`, `onMouseLeave`,`onMouseMove`, etc.
The `onMouseEnter` event triggers when the mouse cursor enters the boundaries of a specific element.
  - `event.clientX`: X-coordinate of the mouse cursor relative to the viewport.
  - `event.clientY`: Y-coordinate of the mouse cursor relative to the viewport.

The `onMouseLeave` event triggers when the mouse cursor leaves the boundaries of a specific element.
  - Same properties as `onMouseEnter` but when cursor leaves.

The `onMouseMove` event triggers continuously as the mouse cursor moves over the element. Mostly it used for dynamic interactions like dragging elements, drawing effects, or for interactive games.

[Example of Mouse events](./MouseEvents.jsx)

**preventDefault():** The main point of `preventDefault()` is to give your JavaScript code a chance to **handle** the event **before the browser's default behavior** takes place. In the case of forms, the default behavior is to submit the form data to a server and potentially reload the page. By calling `preventDefault()`, you essentially tell the browser to pause and wait for your JavaScript code to handle the form submission instead. This gives you the opportunity to validate form data, for example.

Example:
```javascript
function handleSubmit(event) {
  event.preventDefault();

  // Validate form data here
  if (/* validation fails */) {
    alert('Please enter valid data!');
  } else {
    // Submit the form or process the data here
  }
}
```

#### Here is the real example with explanation with each of common events:
[Go to the Example](./EventHandling.jsx)

---

### Conditional Rendering
**Conditional Rendering** allows you to control which JSX elements are rendered on the screen and when, creating dynamic and interactive user interfaces.
```javascript
// Using if operator with props
function Message(props) {
  const isHome = props.isHome;
  if (isHome) {
    return <HomeHeading />;
  }
  return <PageHeading />;
}
```
This concise syntax is often used for simpler conditions:
```javascript
// Using the Logical AND Operator (&&):
function LoginButton(props) {
  return !props.isLoggedIn && <button onClick={props.onClick}>Log In</button>;
}
```
This compact operator is useful for short conditional expressions:
```javascript
// Using the Ternary Operator ( ? : )
function VoteCount(props) {
  return (
    <p>
      Votes: {props.count} {props.count > 1 ? 'votes' : 'vote'}
    </p>
  );
}
```
```javascript
// Also we can use for the Modals
function Modal(props) {
  if (!props.isShow) {
    return null;
  }

  return (
    <div>
      Modal
    </div>
  );
}
```

---

### Component Communication

#### 1. Props Drilling:

- This is the most basic approach and involves passing data down the component tree from parent to child components.
  - Parents define props (properties) in the opening tag of a child component.
  - Children access these props using the props object within their component.

```javaScript
// ParentComponent.jsx
function ParentComponent() {
  const name = "Alice";
  return (
    <ChildComponent name={name} />
  );
}

// ChildComponent.jsx
function ChildComponent(props) {
  return (
    <p>Hello, {props.name}!</p>
  );
}
```

#### 2. Lifting State Up:

- When a child component needs to modify data that's also used by a parent component, we can "lift" the state up to the common parent.
  - The child component raises an event (usually through a callback function passed as a prop) to inform the parent about the state change.
  - The parent component updates its state and passes the updated data down to its children through props.

```javaScript
// ParentComponent.jsx
function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <ChildComponent count={count} onIncrement={handleIncrement} />
    </div>
  );
}

// ChildComponent.jsx
function ChildComponent(props) {
  return (
    <div>
      <p>Count: {props.count}</p>
      <button onClick={props.onIncrement}>Increment</button>
    </div>
  );
}
```

#### 3. React Context Api

I have explained about it below

---

### Portal
`createPortal` from React DOM provides a way to render content outside the normal component hierarchy, often referred to as creating a "portal".

```javascript
function MyComponent() {
  return (
    <div>
      {/* Regular content */}
      {
        createPortal(
        <div>This content is rendered in a portal!</div>,
        document.body
        )
      }
    </div>
  );
}
```

In a nutshell, `createPortal` lets you break free from the normal component hierarchy. It allows you to render content (like modals, tooltips, or third-party widgets) in a specific DOM element, even if that element isn't directly nested within your component tree. This gives you more control over positioning and isolation of certain UI elements in your React application.

