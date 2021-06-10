import React from 'react';
import City from "./city"

class App extends React.Component{
  
  constructor(props) {
    super(props);
    var buildCity =[];
    this.state={
      cities:[],
    };
  }

  getCity()
  { const zipCode = document.getElementById("zipcode").value;
    const url = "http://ctp-zip-api.herokuapp.com/zip/"+zipCode;
    fetch(url).
    then(response => response.json()).
    //then(data => {console.log(data)}).
    then(data => {this.setState({cities: data})}).
    catch(error => console.log("error for zipcode"));
    console.log(this.state.cities);
  }

  getCityBar(){

  }

  render(){

    return (
    <div>
      <h1>Zip Code Search</h1>
      <form id ="form">
         <p>Zip Code </p> <input id="zipcode" placeholder="12345" type="text"/>
         <button type ="button" onClick={this.getCity}> Submit</button>
       </form>
       {this.getCityBar}
    </div>)
  }
}
export default App;
