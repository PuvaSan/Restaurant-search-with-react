import './index.css';
import * as ReactDOM from "react-dom/client";
import App from './App';

// function Hello({name, age}) {

//   // var destructuring - can put inside the params
//   //const {name, age} = props;

//   return (
//     <div>
//       <h1>Hello, I am {name}, I am {age} years old</h1>
//     </div>
//   );
// }

const rootContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(rootContainer);
root.render(<App />);
