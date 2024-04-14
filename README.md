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
- **Strict Mode**: React offers `<StrictMode>` component that helps highlight potential problems in you application. You can wrap your app within `<StrictMode>` during development.
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
### State management
**State management** is a crucial aspect of building dynamic and interactive React applications. It involves controlling and updating the data that drives your UI, ensuring changes are reflected efficiently and consistently.
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
``` javascript
const [stateVariable, setStateFunction] = useState(initialValue);
```

- The `useState` call returns an array with two elements, which you destructure into two variables:
  - **stateVariable**: This variable holds the current state value.
  - **setStateFunction**: This function is used to update the state.

##### 2. Updating state
- To update the state, call `setStateFunction` with the new value:
``` javascript
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

