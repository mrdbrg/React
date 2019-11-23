# React Forms

## Forms

- HTML form elements work differently than other DOM elements in React.
  - Form elements naturally keep some internal state.
  - For example, this form in plain HTML accepts a single name.
```
 <form>
  <label for="fullname">Full Name:<label>
  <input for="fullname" />
  <button>Add</button>
 </form>
```

## Thinking About State

- It's convinient to have a JS function that:
  - Handles the submission of the form and 
  - has access to the data the user entered
- The technique to get this is **controlled component**

## Controlled Components

- In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on use input.

- In React, mutable state is kept in the state of components, and only 
  updated with setState().
