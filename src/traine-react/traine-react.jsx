
// function Welcome(props) {
//   return <h1> Hello, {props.name} {props.age} </h1>
// }

// class Welcome extends React.Component {
//     render() {
//       return <h1> Hello, {this.props.name}, my age: {this.props.age} </h1>
//     }
//   }

//   ReactDOM.render(
//     <Welcome name = "Jack" age = "145"/>, 
//     document.querySelector('#root')
//   );


// const cities = ["London", "New York", "Donetsk"]

// function App() {
//   return <select>
//     {
//       cities.map((city) => {
//         return <option> {city} </option>
//       })
//     }
//   </select>;
// }

// ReactDOM.render(
//   <App />,
//   document.querySelector('#root')
// );

// 
// class CustomTextInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.focus = this.focus.bind(this);
//     }

//     focus() {
//         this.textInput.focus();
//         this.textInput.style.border = "5px solid red";
//     }

//     render() {
//         return (
//             <div>
//                 <input
//                 type="text"
//                 ref={(input)=> { this.textInput = input; }}/>
//                 <input
//                 type="button"
//                 value="Focus the text input"
//                 onClick= {this.focus}                
//                 />
//             </div>
//         );
//     }
// }

// render(
//         <CustomTextInput />,
//         document.querySelector('#root')
//       );