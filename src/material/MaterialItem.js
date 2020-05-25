import React, {Component} from 'react'

class MaterialItem extends Component {
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

  toggleEdit(){
    this.setState({
      isEditing: true
    })
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
    this.props.updateMaterial(this.props.data.id, this.state.item, this.state.from, this.state.quantity, this.state.price)
    this.setState({
      isEditing: false
    })
  }
  
  totalAmount(quantity, price){
    let the_total = quantity * price
    return (the_total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  }

  render(){
    console.log("these props are " + this.state.item)
    return(

      <li className="material-item material-row">
        {!this.state.isEditing ? (
          <>
          <span className="material-cell">
            {this.props.data.item}
          </span>  
          <span className="material-cell">
            {this.props.data.from}
          </span>  
          <span className="material-cell type-number">
            {this.props.data.quantity}
          </span>  
          <span className="material-cell type-number">
            {this.props.data.price}
          </span>  
          <span className="material-cell type-number">
            ${this.totalAmount(this.props.data.quantity, this.props.data.price)}
          </span> 
          <span className="material-cell">
            <button onClick={() => this.toggleEdit()}>Edit</button> 
            <button onClick={() => this.props.deleteMaterial(this.props.data.id)}>Delete</button> 
          </span>  
          </>
        ) : (
          <form className="material-row" onSubmit={this.handleSubmit}>
            <span className="material-cell">
              <input htmlFor="item" type="text" name="item" value={this.props.data.item} onChange={this.handleChange} />
            </span>
            <span className="material-cell">
              <input htmlFor="from" type="text" name="from" value={this.props.data.from} onChange={this.handleChange} />
            </span>
            <span className="material-cell type-number">
              <input htmlFor="quantity" type="text" name="quantity" value={this.props.data.quantity} onChange={this.handleChange} />
            </span>
            <span className="material-cell type-number">
              <input htmlFor="price" type="text" name="price" value={this.props.data.price} onChange={this.handleChange} />
            </span>
            <span className="material-cell"></span>
            <span className="material-cell">
              <input type="submit" value="Submit" />
            </span>
          </form>
        )}
      </li>
    )
  }
}

export default MaterialItem
