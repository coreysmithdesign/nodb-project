import React from 'react'

function Tally(props) {

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  
  return (
    <footer className="app-footer">
      <div className="contain">
        <p className="tally-totals">Keeping track of {props.material.length} items.</p>
      </div>
    </footer>
  )
}

export default Tally
