import React from 'react'

function MaterialHeader(){
  return(
    <li className="material-header  material-row">
      <span className="material-cell">
        Item 
      </span>  
      <span className="material-cell">
        From
      </span>  
      <span className="material-cell type-number">
        Quantity
      </span>  
      <span className="material-cell type-number">
        Price
      </span>  
      <span className="material-cell type-number">
        Total
      </span>  
      <span className="material-cell"></span>  
    </li>
  )
}

export default MaterialHeader
