# Mutable State Structures

## Immutable State Updates

_Mutating nested data structures in your state can cause problems with React._

Instead you can make a copy of the data structure in question by making use of Pure Functions such as **.map()**, **.filter()**, and **.reduce()** or the spread operator.

- Immutable State just means that there is an old state object and a new state object that are both a snapshots in time
- The safest way to update state is to make a copy of it, and then call this.setState with the new copy.
- This pattern is a good habit to get into for React apps and _required_ for using Redux.

_The content described in the README file was extracted from the_ [The Modern React Bootcamp](https://www.udemy.com/course/modern-react-bootcamp/) _from Colt Steele._

_The concept was learned by following the step by step tutorial from Colt Steele's course. This practice exercise, however, have been done from scratch (not copied and pasted) and modified to implement previous concepts._
