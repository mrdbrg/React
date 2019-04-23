/*
Keys
Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.
*/
function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => <ListItem key={number.toString()} value={number} /> );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1,2,3,4,5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);


/*
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number * 2}
  </li>
);
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1,2,3,4,5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
*/
