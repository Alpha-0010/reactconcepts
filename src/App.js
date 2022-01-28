import './App.css';
import restaurant from './restaurant.jpg';

/* Here Header, Main and Footer are components. A component is nothing but a function in js 
which contains some ui part of the application. */

/* Using props in the Header component */
function Header(props) {
  console.log(props);
  return(
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

/* Working with lists and map(for-loop)  */
function Main(props) {

  return(
    <section>
      <p>We serve the most delicious food around!</p>
      <img src={restaurant} alt="Restaurant Pictures" style={{ height:"200px" }} />
      <ul style={{ textAlign: 'left'}}>
        {/* {props.dishes.map( (dish,i) => (
          <li key={i}>{dish}</li>
        ))} */}
        {props.dishes.map( (dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer() {
  return(
    <footer>
      <p>It's true!</p>
    </footer>
  );
}

const dishes =[
  "Macroni and cheese",
  "Salmon",
  "Pasta"
];

// Returning an object out of a list of dishes...
const dishesObject = dishes.map( (dish,i) => ({id: i, title: dish}) );
// console.log(dishesObject);

function RegularComponent() {
  return (
    <div>Regular Component acccessible to all the users!!!</div>
  );
}

function SecretComponent() {
  return (
    <div>Secret Component accessible only to authorized users!</div>
  );
}

function App(props) {
  return (
    <div className="App">
      <Header name="Cindy"/>
      <Main dishes={dishesObject}/>
      <Footer/>
      {props.authorized ? ( <SecretComponent/> ) : ( <RegularComponent/> )}   
    </div>
  );

  /* We cannot use if else inside return so we use conditional statement inside return instead */

  // if(props.authorized){
  //   return (
  //     <SecretComponent/>
  //   );
  // }else{
  //   return (
  //     <RegularComponent/>
  //   );
  // }

}

export default App;
