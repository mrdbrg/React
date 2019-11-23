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
  - in React, mutable state is kept in the state of components, and only updated with setState.
  
## One Source of Truth

- We make the React state be the "single source of truth"
- React controls:
  - What is shown (the value of the component).
  - What happens when the user types (this gets kept in state).
- Input elements controlled in this way are called **"controlled components"**.

```
class NameForm extends Component {
  constructor(props) {
    super(props);
    // default fullName is an empty string
    this.state = { fullName: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    // do something with form data
  }
  handleChange(evt) {
    // runs on every keystroke event
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="fullname">Full Name:</label>
        <input name="fullname" value={this.state.fullName}
          onChange={this.handleChange}
        />
        <button>Add!</button>
      </form>
    );
  }
}
```

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

## Writing Forms with Multiple Inputs

### Review ES2015

**Computed Property Names**
This includes the ability to create objects with dynamic keys based on JavaScript expressions.
### ES5
```
var employeesData = {};
var employeeId = 1234256;
employeedsData[employeeId] = "Kevin Hart";
```
### ES2015
```
var employeeId = 1234256;
var employeesData = {
  // property computed inside the object literal
  [employeeId] = "Kevin Hart"
};
```

### Application To React Form Components
Instead of making separate **onChage** hangler for every single input, we can make a generic function for multiple inputs.

## Handling Multiple Inputs
- To handle multiple controlled inputs, add the HTML **name** attribute to each JSX input element and let handler function decide the appropriate key in state to update based on **event.target.name.**

Example:
```
class NameForm extends Component {  // ...
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="firstName">First:</label>
          <input id="firstName" name="firstName"
                 value={this.state.firstName}
                 onChange={this.handleChange} />

          <label htmlFor="lastName">Last:</label>
          <input id="lastName" name="lastName"
                 value={this.state.lastName}
                 onChange={this.handleChange} />
          <button>Add a new person!</button>

        </form>
    );
  }
} // end
```
- Using this method, *the keys in state have to match the input name attributes exatly*.

## The htmlFor Attribute

- Whenever you add a *label* element to your form and need to associate it with the *input* element through the id attribute, in plain HTML we use the attribute **for**. But in React we will use **htmlFor** instead - the same way we use **className** instead of **class**-.

Example:
```
<label htmlFor="username">User Name</label>
<input id="username"/>
```
- Keep in mind that *label*s not only create a better experience for users reading the form, but also a much better experience for users using screen readers.

## Passing Data Up to a Parent Component
**In React we generally have downward data flow. "Smart" parent components with simpler child components.**

Forms, however, involve a lot of state to make a React form work. Forms are usually used across an application so it's common to make a form into its own component.  


