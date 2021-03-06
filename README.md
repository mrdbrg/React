# Important in React

## List and Keys

- When maping over data and returning components, you get a warning about keys for list items.
- Key is a special string attr to include when creating lists of elements.
- Keys help React identify which items have changed/added/removed.
- Keys should be given to repeated elements to provide a stable identity.

### Picking a Key

- Use string that uniquely identifies item among siblings. 
- Most often you would use IDs from your data as keys:

EXAMPLE:
```
let todoItems = this.state.todos.map(todo => 
  <li key={todo.id}>
    {todo.text}
  </li>
)
```

### Last Resort

- When you don't have stable IDs for rendered items, you may use iteration index as a key as a last resort.
```
let todoItems = this.state.todos.map((todo, idx) => 
  <li key={idx}>
    {todo.text}
  </li>
)
```

- Do not use indexes for keys if item order may change or items can be deleted. This can cause performance problems or bugs with component state.
Article from [Robin Pokorny explains](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318).

### Libraries that will help create unique ID's:
*If you ever need to create IDs and you need them to be unique across your application, these libraries are a great tool to use it*

- [shortid](https://www.npmjs.com/package/shortid)
- [uuid](https://www.npmjs.com/package/uuid)

**uuid installation:**
1. Open the terminal and cd into the react app you'd like to use the library.
2. Instal uuid library
```
npm install uuid
```
3. Open your project on your preferred source-code editor and at the top of your component import uuid.
```
import uuid from "uuid/v4"
```
4. To assign an unique ID throughout the app just call the function: 
```
// This will generate a unique id.
uuid()
```

## Forms

### The htmlFor Attribute

- Whenever you add a *label* element to your form and need to associate it with the *input* element through the id attribute, in plain HTML we use the attribute **for**. But in React we will use **htmlFor** instead - the same way we use **className** instead of **class**-.

Example:
```
<label htmlFor="username">User Name</label>
<input id="username"/>
```
- Keep in mind that *label*s not only create a better experience for users reading the form, but also a much better experience for users using screen readers.
