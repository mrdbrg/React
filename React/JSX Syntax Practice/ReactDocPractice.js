const user = {
  firstName: 'Maverick',
  lastName: 'Bianchi'
};

const attributes = {
  headColor: "colorBlue"
};

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

function getGreeting(user, attr) {
  if (user) {
    return (
      <div>
        <h1 className={attr.headColor}>Hello, {formatName(user)}!</h1>
        <h2>It is good to see you.</h2>
      </div>
    )
  }
  return <h1>Hello, Stranger.</h1>
}

const element = (
  getGreeting(user, attributes)
);

ReactDOM.render(
  element,
  document.getElementById('root')
);


// const name = "Maverick Bianchi";
// const element = <h1>Hello, {name}</h1>;

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
