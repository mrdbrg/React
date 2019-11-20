# Important in React

## List and Keys

- When maping over data and returning components, you get a warning about keys for list items.
- Key is a special string attr to include when creating lists of elements.
- Keys help React identify which items have changed/added/removed.
- Keys should be given to repeated elements to provide a stable identity.

## Picking a Key

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

## Last Resort

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

## Libraries that will help create unique identifiers:
- [shortid](https://www.npmjs.com/package/shortid)
- [uuid](https://www.npmjs.com/package/uuid)
