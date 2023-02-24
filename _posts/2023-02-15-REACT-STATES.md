---
layout: post
title:  "Using React States"
summary: "Learning how to use react states in your application"
author: smokeyoy
date: '2023-02-15'
category: ['react', 'reactjs', 'nodejs', 'javascript']
tags: react, reactjs, nodejs, javascript
thumbnail: /assets/img/posts/react-js.png
keywords: react, reactjs, nodejs, javascript
usemathjax: false
permalink: /blog/using-react-states/
---
React states are a fundamental concept in React programming. They are used to store and manage data that changes over time, such as user input, API responses, or component updates. In this article, we'll explore what React states are, how they work, and how to use them in your React projects.
<!--more-->
## What are React States?

React states are JavaScript objects that hold information about a component's state. They are used to store and update data that can change over time, such as a component's user interface or its data model. States are essential for building interactive and responsive user interfaces in React, and they allow developers to manage complex application logic with ease.

## How do React States Work?

When a component's state changes, React automatically re-renders the component and its child components. This ensures that the user interface reflects the current state of the application. States are typically initialized in the component's constructor, and they are updated using the setState method. The setState method is used to update the component's state, and it takes an object as an argument. The object can contain one or more key-value pairs, where the key represents the state property, and the value represents its new value. When setState is called, React updates the component's state and re-renders the component.

Here's an example of a simple React state:

**jsx**
```js
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
```

In this example, the Counter component has a state property count, which is initialized to 0 in the constructor. The render method displays the current count value, and the onClick event handler updates the count state by calling the setState method.

## How to Use React States in Your Projects

To use React states in your projects, you'll need to follow these steps:

- Create a new React component and import the React and Component modules.
- Define the component's state properties in the constructor method.
- Render the component's user interface using the state properties.
- Add event handlers to update the component's state when necessary.

Here's an example of a more complex React state:

**jsx**
```js
import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      rememberMe: false,
      loading: false,
      error: ''
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ loading: true });

    // Call API to submit form data
    submitLoginForm(this.state)
      .then(response => {
        // Handle success response
      })
      .catch(error => {
        this.setState({ loading: false, error: error.message });
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </label>
        <br
```

To see a working example of React states go over to my ["CodeFolio"](https://github.com/yosileyid/CodeFolio) repo and browse the react apps folder, in there you will find an app called ["tic-tac-toe"](https://github.com/yosileyid/CodeFolio/tree/main/apps/tic-tac-toe) which is using react states in a very simple way to run a tic tac toe game.