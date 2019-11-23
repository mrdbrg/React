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
  - In HTML, form elements such as <input>, <textarea>, and <select> 
  typically maintain their own state and update it based on use input.
  - In React, mutable state is kept in the state of components, and only 
  updated with **setState()**.

_The content described in this README file is often a summary from the_ [The Modern React Bootcamp](https://www.udemy.com/course/modern-react-bootcamp/) _by Colt Steele._

_The concepts in this practice exercise were learned by following the step by step tutorial from Colt Steele's course. This exercise however, like in most of my repositories, have been done from scratch (not copied and pasted) and modified to implement previous or new concepts._

