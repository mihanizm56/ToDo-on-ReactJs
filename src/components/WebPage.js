import React, {Component} from 'react';
import CarsList from '../containers/car-list';


class WebPage extends Component{
  
  render(){
    return(
      <div>
        <h3>Cars:</h3>
        <CarsList/>
        <hr />
        <h3>Details:</h3>
      </div>    
    )
  }
}

export default WebPage;