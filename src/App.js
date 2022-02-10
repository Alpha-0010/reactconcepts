import React,{ useState,useEffect } from 'react';
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

  /* Using useState:--> First element of useState is the inital state and second element which 
  it return is the function which can be used to change the initial state. */

  const [emotion,setEmotion] = useState("Happy");
  const [secondary,setSecondary] = useState("Tired");

  /* useEffect Hook:  By using this Hook, you tell React that your component needs to do something after 
  render. */
  useEffect( ()=>{
    console.log(`It's ${emotion} around here`);
  },[emotion]);

  useEffect( ()=>{
    console.log(`It's ${secondary} around here`);
  },[secondary]);

  /*
  Fetching data from remote sources.
  */
  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);

  useEffect( ()=>{
    if(!props.login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${props.login}`)
      .then((response) => response.json())
      .then(setData)
      .then(setLoading(false))
      .catch(setError);
  },[props.login]);

  if(loading) return <h3>Loading...</h3>;
  if(error) return <pre>{JSON.stringify(error,null,2)}</pre>;

  if(!data) return null;

  if(data){
    return (<div>
      <h3>{data.name}</h3>
    </div>);
  }else{
    return (
      <div className="App">
        <Header name="Cindy"/>
        <Main dishes={dishesObject}/>
        <Footer/>
        {props.authorized ? ( <SecretComponent/> ) : ( <RegularComponent/> )}
        <h1> Current emotion is {emotion} and {secondary}.</h1>
        <button onClick={ () => setEmotion("Happy") }>
          Make Happy
        </button>
        <button onClick={() => setEmotion("Frustrated") }>
          Make Frustrate
        </button>
        <button onClick={ () => setSecondary("Crabby") }>
          Make Crabby
        </button>
        <button onClick={() => setEmotion("Enthusiastic")}>
          Make Enthusiastic
        </button>   
      </div>
    );
  
  }

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
