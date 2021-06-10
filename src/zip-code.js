import React from 'react';
import {Component} from 'react';

function zipCode(props){
    return(<div className="zipCode">
      <h3>{props.name}</h3>
      <p>{props.message}</p>
      <h3>Number of likes</h3>
    </div>)
  }
export default zipCode;
