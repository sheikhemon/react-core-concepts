// Similar in loop different in data
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person2></Person2>
      <Person2></Person2>
      <Person3></Person3>
      <Person3></Person3>
    </div>
  );
}
function Person() {
  // using with app css
  return (
    <div className="person">
      <h2>Name: Emon Sheikh</h2>
      <h4>Profession: React Developer</h4>
    </div>

  )
}
function Person2() {
  const person2 = {
    backgroundColor: "salmon",
    border: "3px solid rgb(189, 8, 212)",
    borderRadius: "20px",
    margin: "20px",
    padding: "20px"
  }
  return (
    // using with object style
    <div style={person2}>
      <h2>Name: Simon Sheikh</h2>
      <h4>Profession: Student</h4>
    </div>
  )
}
function Person3() {
  return (
    <div style={{ backgroundColor: 'goldenrod', border: '3px solid red', borderRadius: '20px', margin: '20px', padding: '20px' }}>
      <h2>Name: Sheikh Faysal</h2>
      <h4>Profession: Sr. Full Stack Web Developer</h4>
    </div>
  )
}
export default App;
