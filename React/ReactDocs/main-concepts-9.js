function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello,</h1>
      {
        unreadMessages.length > 0 &&
        <h2 className={'styling'}>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['You got this!', 'Dont waste time.', 'Its gonna be awesome'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);


//
// <style>
//   .styling {
//     border: 3px solid red;
//     border-radius: 15px;
//     text-align: center;
//
//   }
// </style>
