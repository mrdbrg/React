# React Event Handlers and Binding Methods Techniques

## Introducing Event handlers and pros/cons of each binding technique

### You can bind your methods in 3 different ways:

## 1. Bind inline
```
<div> 
  onClick={this.handleClick.bind(this)}
</div>
```

### PROS:
- It's very explicit.

### CONS:
- If we need to pass to multiple components we need to bind it multiple times.
- Binds create a new function each time a component is rendered inside render(). * In more complex apps it can have an impact in the app's performance. *

## 2. Arrow function
```
<div> 
  onClick={() => this.handleClick()}
</div>
```
### PROS:
- No mention of bind.

### CONS:
- Intent less clear.
- If we need to pass to multiple components we need to create an arrow function every time.
- Binds create a new function each time a component is rendered inside render(). * In more complex apps it can have an impact in the app's performance. *

## 3. Bind in the constructor
```
constructor(props) {
  super(props)
  (...code...)
  this.handleClick = this.handleClick.bind(this)
}

<div> 
  onClick={this.handleClick}
</div>
```
### PROS:
- You only need to bind once.
- It's more performant.

### CONS:
- It's lengthy.

_The content described in this README file is often a summary from the_ [The Modern React Bootcamp](https://www.udemy.com/course/modern-react-bootcamp/) _by Colt Steele._

_The concepts in this practice exercise were learned by following the step by step tutorial from Colt Steele's course. This exercise however, like in most of my repositories, have been done from scratch (not copied and pasted) and modified to implement previous or new concepts._
