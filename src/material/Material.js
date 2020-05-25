import React from 'react'
import MaterialHeader from './MaterialHeader'
import MaterialAdder from './MaterialAdder'
import MaterialItem from './MaterialItem'

function Material(props) {
  const materialMap = props.material.map(material_item => (
    <MaterialItem 
      key={material_item.id}
      updateMaterial={props.updateMaterial}
      deleteMaterial={props.deleteMaterial}
      data={material_item}
    />
  ))
  return(
    <div className="contain">
      <div className="material">
        <div className="material-table-list">
          <MaterialAdder addMaterial={props.addMaterial}/>
        </div>

        <ul className="material-table-list border">
          <MaterialHeader />
          {materialMap}
        </ul>
      </div>
    </div>
  )
}

export default Material
