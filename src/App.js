import React,{Component} from 'react';
import City from "./city"

class App extends Component{
  
    
    state={
      cities:[],
      v: [],
    };


  getCities = () =>
  { const zipCode = document.getElementById("zipcode").value;
    const url = "http://ctp-zip-api.herokuapp.com/zip/"+zipCode;
    fetch(url).
    then(response => response.json()).
    then(responseJson => {
      console.log(responseJson);
      this.setState({cities: responseJson});
    }).
    then(error => console.log("error:"));
    
    this.getCityComponents();
  }

  getCityComponents = () =>
  {
    
     for(let i in this.state.cities)
     {
       console.log(i);
       var joined = this.state.v.concat(<City city={this.state.cities[i]}/>);
       this.setState({ v: joined });
       console.log(this.state.v[i]);
       console.log(this.state.cities[i]);
     }  
  } 
  

  

  render(){
   

    return (
    <div>
      <h1>Zip Code Search</h1>
      <form id ="form">
         <p>Zip Code </p> <input id="zipcode" placeholder="12345" type="text"/>
         <button type ="button" onClick={this.getCities}> Submit</button>
       </form>
        {this.state.v[1]}
       
    </div>)
  }
}
export default App;
