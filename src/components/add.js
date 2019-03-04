import React, { Component } from "react";

class Add extends Component {
  render() {
    return (
      <div>
        <p><b>Add Telephone Directory</b></p>
          <p>Name: <input type="text" placeholder="Name" value = {this.props.name} onChange={this.props.updateName}/></p>
          <p>Phone Number: <input type="text" placeholder="Phone Number" value = {this.props.phone} onChange={this.props.updatePhone}/></p>
          <p>Address: <input type="text" placeholder="Address" value = {this.props.address} onChange={this.props.updateAddress}/></p>
          <button onClick={this.props.SubmitValues}>Submit</button>
      </div>
    );
  }
}

export default Add;
