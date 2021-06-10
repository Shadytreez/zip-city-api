import React from 'react';


class App extends React.Component{
  
  constructor(props) {
    super(props);
    this.state={
      cities:[],
    };
  }

  getCity()
  { const zipCode = document.getElementById("zipcode");
    const url = "http://ctp-zip-api.herokuapp.com/zip/"+zipCode;
    fetch(url).then(response => response.json()).then(data => {this.setState({cities: data})})

  }

  render(){
    return (
    <div>
      <h1>Zip Code Search</h1>
      <form id ="form">
         <p>Zip Code </p> <input placeholder="12345" type="text"/>
         <button type ="button" onClick={this.getCity}> Submit</button>
       </form>
    </div>)
  }
}
export default App;
