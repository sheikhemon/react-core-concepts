// Similar in look different in data
import logo from './logo.svg';
import './App.css';

function App() {
  const names = ['Rubel', 'Bappajaz', 'Sakib', 'Bappi', 'Rajib']
  const cinemas = [
    { name: 'Sakib', naika: 'Moushumi' },
    { name: 'Rubel', naika: 'Popi' },
    { name: 'Koober', naika: 'Kopila' },
    { name: 'Razzak', naika: 'Shabana' }
  ];
  return (
    <div className="App">
      <ul>
        {
          names.map(name => <li>{name}</li>)
        }
      </ul>
      {/* Using Object daynimic data show array in object*/}
      {/* <cinema name="J B" naika="cat w"></cinema> */}
      {
        cinemas.map(cinema => <Cinema name={cinema.name} naika={cinema.naika}></Cinema>)
      }
    </div >
  );
}
// Using Object daynimic data show array in object
// Function but component
function Cinema(props) {
  return (
    // JSX Inside Html in js
    <div className="person">
      <h2>Name: {props.name}</h2>
      <h5>Naika: {props.naika}</h5>
    </div>
  )
}
function Person(props) { //--> Props called a html properties or attribute parameter
  // using with app css
  return (
    <div className="person">
      <h2>Name: {props.name}</h2>
      <h4>Profession: {props.naika}</h4>
    </div>
  )
}
function Person2(props) {
  console.log(props);
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
      <h2>Name: {props.name}</h2>
      <h4>Hero of: {props.naika}</h4>
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

function Friend(props) {
  return (
    <div className="person">
      <h3>Phone: {props.phone}</h3>
      <h5>Address: {props.address}</h5>
    </div>
  )
}
export default App;


// Use props with dynamically
/*
      <ul>
        <li>{names[0]}</li>
        <li>{names[1]}</li>
        <li>{names[2]}</li>
      </ul>
*/
/*
      <Person name={names[0]} naika="Moisumi"></Person>
      <Person name={names[1]} naika="Lili"></Person>
      <Person name={names[2]} naika="Popi"></Person>
*/
/*
      <p id="title">Title</p>
      <Person></Person>
      <Person2 name="Rubel" naika="Moudhumi"></Person2>
      <Person2 name="Bapparaj" naika="Cheka"></Person2>
      <Person2 name="Sakib" naika="Cheka"></Person2>
      <Person3></Person3>
*/
/*
      <Friend phone="0177" address="Noakhali"></Friend>
      <Friend phone="0177" address="Jamalpur"></Friend>
      <Friend phone="0177" address="Dhaka"></Friend>
      <Friend phone="0177" address="Barishal"></Friend>
      <Friend phone="0177" address="Rajsahi"></Friend>
*/
