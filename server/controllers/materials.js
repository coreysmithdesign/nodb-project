let material = [
  { id: 1, item: "Boards", from: "Lumber Yard", quantity: "5", price: "2.99"},
  { id: 2, item: "Nails", from: "Hardware Store", quantity: "200", price: "0.99"},
  { id: 3, item: "Tin Sheets", from: "Hardware Store", quantity: "10", price: "22.99"},
  { id: 4, item: "Tacks", from: "Hardware Store", quantity: "1", price: "0.05"}
]
let id = 5
  
module.exports = {
  allMaterial: ( req, res ) => {
    res.status(200).send(material)
  },

  addMaterial: ( req, res ) => {
    const { item, from, quantity, price } = req.body
    const newMaterial = { id, item, from, quantity, price }
    material.push(newMaterial)
    id++
    res.status(200).send(material)
  },

  editMaterial: ( req, res ) => {
    const {material_id} = req.params 
    const { item, from, quantity, price } = req.body
    const index = material.findIndex(element => element.id === +material_id)
    if(index === -1){
      return res.status(404).send('Material not found')
    }
    material[index].item = item
    material[index].from = from
    material[index].quantity = quantity
    material[index].price = price
    res.status(200).send(material)
  },

  removeMaterial: ( req, res ) => {
    const {material_id} = req.params
    const index = material.findIndex(element => element.id === +material_id)
    if(index === -1){
      return res.status(404).send('Material not found')
    }
    material.splice(index, 1)
    res.status(200).send(material)
  }
}
