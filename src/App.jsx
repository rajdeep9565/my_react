import logo from './logo.svg';
import './App.css';

function App() {
  const array = ["Android","Blackberry","iPhone","Windows Phone"]
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      {array.map((e) => (<li>{e}</li>))}

      <h1>Mobile Manufacturers</h1>
      <MANUFACTURERS/>
    </div>
  );
}

export default App;

function MANUFACTURERS() {
  const arr = ["Samsung","HTC","Micromax","Apple"]
  return arr.map((e) => (<li>{e}</li>))
}