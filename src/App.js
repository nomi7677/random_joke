import React, {useState} from 'react';
import Axios from 'axios';

function App (){

  const [joke, setJoke] = useState (" ");
  
  const getJoke = () => {
  
  Axios.get("http://api.icndb.com/jokes/random").then(
  
  (response) => {
  console.log(response);
  setJoke ("Random Id is" +" "+ response.data.value.id +" and "+ "Joke for that Id is:" +" " + response.data.value.joke)
  }
  );
  };
  
  return(
  <div>
  <button style={{width:150,backgroundColor:'#99004d',marginTop:350, marginLeft:250, justifyContent: "center"}}  onClick={getJoke}>Get a Joke </button>
  {joke}
  
  </div>
  )
}
  

export default App;


