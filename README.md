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
### React Use
**Default main.jsx**
```bash
# import React and ReactDOM
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
```
```bash
# Create a root using ReactDOM.createRoot and attach it to the DOM element with the ID "root".
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
```
```bash
# Render the App component inside the root element using root.render()
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```
- **Strict Mode**: React offers `<StrictMode>` component that helps highlight potential problems in you application. You can wrap your app within `<StrictMode>` during development.