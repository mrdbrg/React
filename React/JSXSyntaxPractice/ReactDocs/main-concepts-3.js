function formatDate(date) {
  return date.toLocaleDateString();
}

/*
A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be a reusable component.

source: https://bit.ly/2ywNi6n
*/

function Avatar(props) {
  return (
    <img
      className='Avatar'
      src={props.user_3.avatarUrl}
      alt={props.user_3.name}
     />
  );
}

function UserInfo(props) {
  return (
    <div className='UserInfo'>
      <Avatar user_3={props.user_2} />
      <div className='UserInfo-name'>
        {props.user_2.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className='Comment'>
      <UserInfo user_2={props.user_1} />
      <div className='Comment-text'>
          {props.text}
      </div>
      <div className='Comment-date'>
          {formatDate(props.date)}
      </div>
      <div className='Comment-text'>
          {props.manbojumbo}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Spidey',
    avatarUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Web_of_Spider-Man_Vol_1_129-1.png/250px-Web_of_Spider-Man_Vol_1_129-1.png'
  },
  manbojumbo: "Checking to see where 'props' is."

};

ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    user_1={comment.author}
    manbojumbo={comment.manbojumbo}
    />,
  document.getElementById('root')
);

//================================================
//           . . . Practicing . . .
//================================================
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name='Maverick' />;
// function App() {
//   return (
//     <div>
//       <Welcome name='Sara' />
//       <Welcome name='Cahal' />
//       <Welcome name='Edite' />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//     console.log(this.props)
//   }
// }
