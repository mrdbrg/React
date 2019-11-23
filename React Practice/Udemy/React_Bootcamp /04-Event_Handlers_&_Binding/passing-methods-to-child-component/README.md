# Passing Methods To Child Components

- This is a very common pattern in React.
- The idea is that children are often stateful, but need to tell parents to change state.
- Children send data "back up" to a parent component.

## How data flows:
- A parent component defines a function.
- The function is passed as props to child component.
- The child component invokes the prop.
- The parent function is called, usually setting new state.
- The parent component is re-rendered along with its children.

_The content described in this README file is often a summary from the_ [The Modern React Bootcamp](https://www.udemy.com/course/modern-react-bootcamp/) _by Colt Steele._

_The concepts in this practice exercise were learned by following the step by step tutorial from Colt Steele's course. This exercise however, like in most of my repositories, have been done from scratch (not copied and pasted) and modified to implement previous or new concepts._

