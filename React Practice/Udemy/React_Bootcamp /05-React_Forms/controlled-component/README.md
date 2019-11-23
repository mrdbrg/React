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

  - In HTML, form elements such as *input*, *textarea*, and *select* typically maintain their own state and update it based on use input.
  - React mutable state is kept in the state of components, and only updated with setState.
  
## One Source of Truth

- We make the React state be the "single source of truth"
- React controls:
  - What is shown (the value of the component).
  - What happens when the user types (this gets kept in state).
- Input elements controlled in this way are called **"controlled components"**.

## How the Controlled Form Works

- Since value attribute is set on element, displayed value will always be this.state.propertyName - making the React state the source of truth.
- Since handleChange runs on every keystroke to update the React state, the displayed value will update as the user types.
- With a controller component, every state mutaton will have an associated handler function. This makes it easier to modify or validate user input.

## handleChange Method example:

```
class NameForm extends Component {
... 
handleChange(event) {
// runs on every keystroke
this.setState({
  fullName: event.target.value
});
}
...
}
```
