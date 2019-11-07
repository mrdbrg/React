class App extends React.Component {
  render() {
    return (
      <div>
        <Hello 
          to="John" 
          from="Dan" 
          data={[1,2,3,4,5]}
          num={10}
          bangs={4}
        />  
        <Hello 
          to="Tom" 
          from="Rod" 
          bangs={11}
          img={"https://images.unsplash.com/photo-1535551951406-a19828b0a76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1046&q=80"}
        />  
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));