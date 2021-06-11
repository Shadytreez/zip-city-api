import React,{Component} from 'react';
import City from "./city"
import './App.css';
class App extends Component{
  
    
    state={
      cities:[],
      v: [],
    };


    //use arrow function so we don't need to bind
  getCities = () =>
  { const zipCode = document.getElementById("zipcode").value; //from the submit
    const url = "http://ctp-zip-api.herokuapp.com/zip/"+zipCode; //url
    fetch(url). //fetch from url
    then(response => response.json()). //get response in json form
    then(responseJson => {
      console.log(responseJson);
      this.setState({cities: responseJson}); //after that we set the cities aray to responseJson array
    }).
    then(city => { //then get all of the data and put the coponent on it
      for(let i in this.state.cities)
      {
        console.log(i);
        var joined = this.state.v.concat(<City city={this.state.cities[i]}/>);
        console.log(joined);
        this.setState({ v: joined });
        console.log(this.state.v[i]);
        console.log(this.state.cities[i]);
      } 
    });
    
    
  }

  

  

  render(){
   

    return (
    <div className="content">
      <h1>Zip Code Search</h1>
      <form id ="form">
         <p>Zip Code </p> <input id="zipcode" placeholder="12345" type="text"/>
         <button type ="button" onClick={this.getCities}> Submit</button>
       </form>
        {this.state.v}
       
    </div>)
  }
}
export default App;
