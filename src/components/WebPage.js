import React, {Component} from 'react';
import CarsList from '../containers/car-list';
import Details from './reducers/details';

class WebPage extends Component{
  
  render(){
    return(
      <div>
        <h3>Cars:</h3>
        <CarsList/>
        <hr />
        <h3>Details:</h3>
        <Details />
      </div>    
    )
  }
}

export default WebPage;