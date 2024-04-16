# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


# Web developer challenge

## Objective

The objective of this challenge is not necessarily just to solve the problem - but to
evaluate your software development skills, code quality, creativity, and resourcefulness as a
potential future colleague. Please share the necessary artifacts you would provide to your
colleagues in a real-world professional setting.

# Test

We have a simple API that returns a JSON array. We would like you to use HTML, CSS and
Javascript to read the API and display it in an organized way. In addition, you should add in
sorting and pagination features to the app. Use preferably Vue.js as base and feel free to add
any other framework or library you would consider necessary to achieve the task.

[https://github.com/15Dkatz/official_joke_api/](https://github.com/15Dkatz/official_joke_api/)

You can use this API server code as base or provide your own
Feel free to improve the existing code and add more features to the app such as rating, remove
or add more jokes, etc.
There is no right answer - just looking for an understanding of how you interpret the assignment
and what decisions you make to build a simple project.
After finishing your code, please answer the following questions in a separate document from
the source code:

1. What's a closure? Where in the code is there a closure?
- A closure is when a function retains access, states or values from a parent element (outer scope) even after the execution ended.
- In this code in particular the handleSubmit function within AddJokeForm not only access and uses values like type or setup within AddJokeForm  but also uses jokes from the App's context and the onAdd function from the outer scope. After AddJokeForm ended execution.

2. Which are the potential side-effects in any function? Could you point out any of these cases in
your code? Are they expected? Can they be avoided?

- In JavaScript, side effects refer to any changes that a function makes outside of its scope, such as modifying global variables, mutating state, making network requests, or modifying the DOM. Side effects can lead to unexpected behavior.

In the provided code, there are a few potential side effects:

Network Request: The fetchJokes function inside the JokesPage component makes a network request to fetch jokes from an external API. This is a side effect because it affects the external state of the application (i.e., the data fetched from the API).

State Mutation: The setJokes function inside the JokesPage and App components mutates the state by updating the jokes state variable. This is a side effect because it modifies the application's internal state.

Setting Timeout: In the handleSubmit function inside the AddJokeForm component, a setTimeout function is used to hide the success message after 3 seconds. This is a side effect because it causes a delay and affects the behavior of the application.

These side effects are expected in these cases because they are necessary for the application to function correctly. However, side effects can sometimes lead to issues such as race conditions, bugs, or unpredictable behavior.

To minimize side effects and make the code more predictable and maintainable, you can follow these practices:

Separation of Concerns: Split your code into smaller, more manageable functions, each responsible for a specific task. This makes it easier to reason about the code and reduces the likelihood of unintended side effects.

Pure Functions: Write functions that have no side effects and only depend on their input parameters (pure functions). Pure functions are easier to test, debug, and reason about because they have no hidden dependencies or side effects. 

Immutability: Favor immutable data structures and avoid mutating state directly. Instead of modifying state in place, create new copies of data when updates are needed. This helps prevent unintended side effects and makes the code easier to reason about.

Use Hooks Effectively: When working with React functional components, use hooks like useEffect to manage side effects such as fetching data, subscribing to events, or updating the DOM. By encapsulating side effects within hooks, you can keep them separate from your component's rendering logic and prevent them from interfering with component lifecycle.

By following these best practices, you can minimize the potential for side effects in your code and make it easier to maintain and debug.


