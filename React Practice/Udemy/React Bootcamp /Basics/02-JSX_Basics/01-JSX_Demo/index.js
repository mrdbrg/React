 class JSXDemo extends React.Component {
   render() {
     return (
       <div>
         <h1>Image</h1>
         <img src="https://images.unsplash.com/uploads/14115408840644deb16b0/2dc933e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80" />
       </div>
     );
   }
 }

 ReactDOM.render(<JSXDemo />, document.getElementById("root"));