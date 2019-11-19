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
1. It's very explicit.

### CONS:
1. If we need to pass to multiple components we need to bind it multiple times.
2. Binds create a new function each time a component is rendered inside render(). * In more complex apps it can have an impact in the app's performance. *

## 2. Arrow function
```
<div> 
  onClick={() => this.handleClick()}
</div>
```
### PROS:
1. No mention of bind.

### CONS:
1. Intent less clear.
2. If we need to pass to multiple components we need to create an arrow function every time.
3. Binds create a new function each time a component is rendered inside render(). * In more complex apps it can have an impact in the app's performance. *

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
1. You only need to bind once.
2. It's more performant.

### CONS:
1. It's lengthy.

- It's easier to test with a plain function.
- It's easier to read.
- This pattern comes up all the time in REDUX. 

_The content described in this README file was extracted from the_ [The Modern React Bootcamp](https://www.udemy.com/course/modern-react-bootcamp/) _by Colt Steele._

_The concepts in this practice exercise were learned by following the step by step tutorial from Colt Steele's course. This exercise however, like in most of my repositories, have been done from scratch (not copied and pasted) and modified to implement previous concepts._
