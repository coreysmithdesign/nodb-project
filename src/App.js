import React, { Component } from 'react';
import Header from './Header'
import Material from './material/Material'
import Tally from './Tally'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      material: []
    }

    this.addMaterial = this.addMaterial.bind(this)
    this.updateMaterial = this.updateMaterial.bind(this)
    this.deleteMaterial = this.deleteMaterial.bind(this)
  }
 
  componentDidMount(){
    axios.get('/api/materials')
      .then(res => {
        this.setState({material: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  addMaterial(item, from, quantity, price){
    const body = { item, from, quantity, price }
    axios.post('/api/materials', body)
      .then(res => {
        this.setState({material: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  updateMaterial(id, item, from, quantity, price){
    const body = { item, from, quantity, price }
    axios.put(`/api/materials/${id}`, body)
      .then(res => {this.setState({material: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  deleteMaterial(id){
    axios.delete(`/api/materials/${id}`)
      .then(res => {
        this.setState({material: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  render(){
    return (
      <div className="app">
        {console.log(this.state.material)}
        <Header />
        <Material 
          material={this.state.material} 
          addMaterial={this.addMaterial}
          updateMaterial={this.updateMaterial}
          deleteMaterial={this.deleteMaterial} />
        <Tally material={this.state.material} />
      </div>
    );
  }
}

export default App;
