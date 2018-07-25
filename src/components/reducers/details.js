import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

  render() {
    if(!this.props.car){
      return(<p>Please,choose the auto! </p>);
    }
    return (
      <div>
        <h2>{this.props.car.car}</h2>
        <p>{this.props.car.speed}</p>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  car: state.active
})


export default connect(mapStateToProps)(Details);