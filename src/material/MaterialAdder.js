import React, {Component} from 'react'

class MaterialAdder extends Component {
  constructor(){
    super()

    this.state = {
      isEditing: false,
      item: '',
      from: '',
      quantity: '',
      price: ''
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    event.target.reset()
    this.props.addMaterial(this.state.item, this.state.from, this.state.quantity, this.state.price)
  }

  render(){
    return(
      <form className="material-adder" onSubmit={this.handleSubmit}>
        <label htmlFor="item">Item</label>
        <input className="material-cell" type="text" name="item" onChange={this.handleChange} />
        <label htmlFor="from">From</label>
        <input className="material-cell" type="text" name="from" onChange={this.handleChange}/>
        <label htmlFor="quantity">Quantity</label>
        <input className="material-cell" type="text" name="quantity" onChange={this.handleChange} />
        <label htmlFor="price">Price</label>
        <input className="material-cell" type="text" name="price" onChange={this.handleChange} />
        <span className="material-cell add-cell">
          <input className="add-button" type="submit" value="Submit" /> 
        </span>  
      </form>
    )
  }
}

export default MaterialAdder
