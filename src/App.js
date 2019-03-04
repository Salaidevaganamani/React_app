import React, { Component } from 'react';
import './App.css';
import Add from "./components/add";

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
       name: '',
       phone: '',
       address: '',
       telephone: telephone
    }
    this.updateName = this.updateName.bind(this);
    this.updatePhone = this.updatePhone.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
    this.SubmitValues = this.SubmitValues.bind(this);
    this.renderList = this.renderList.bind(this);
    this.deleteValue = this.deleteValue.bind(this);
 };

  updateName(e) {
      this.setState({name: e.target.value});
      console.log(this.state.name)
   }
  updatePhone(e) {
      this.setState({phone: e.target.value});
      console.log(this.state.phone)
  }
  updateAddress(e) {
      this.setState({address: e.target.value});
      console.log(this.state.address)
  }
  SubmitValues(){
    let obj = {name: this.state.name, phone: this.state.phone, address: this.state.address}
    let datas = this.state.telephone;
    datas.push(obj)
    this.setState({
      telephone: datas
    });
    console.log(obj, this.state.telephone)
  }

  deleteValue(index) {
    let datas = this.state.telephone;
    datas.splice(index,1);
    this.setState({
      telephone: datas
    });
    console.log(index, this.state.telephone);
  }

  renderList() {
    return (
          telephone.map((item, index) => {
            return(
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td>
                <button onClick = {() => this.deleteValue(index)}>Delete</button>
              </td>
            </tr>
            )
          })
    )
  }
  
  render() {
    return (
      <div>
      <h1>Telephone Directory</h1>
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Option</th>
          </tr>
          {this.renderList()}
        </table>

        
      </div>
      <Add 
        name = {this.state.name}
        phone = {this.state.phone}
        address= {this.state.address}
        updateName = {this.updateName}
        updatePhone = {this.updatePhone}
        updateAddress = {this.updateAddress}
        SubmitValues = {this.SubmitValues}
      />
      </div>
    );
  }
}
const telephone = [
  {name: 'Salai', phone: '123456', address: 'Bangalore'},
  {name: 'Deva', phone: '12345', address: 'Bangarpet'},
  {name: 'Gana', phone: '6789', address: 'Kolar'},
  {name: 'Mani', phone: '1234', address: 'Bangalore'},
]
export default App;
