import React from 'react'
// In the 'square/box' component (which belongs to the 'body'):

// Pass down a 'name' prop to each square. The names should be 'square 1', 'square 2', and 'square 3' and should be displayed within each square.
// Provide a background image for each square.
function Square({name}) {
    const squareStyle = {
        width: "100px",
        height: "100px"
    }
  return (
    <div style={squareStyle}>
        {name}
    </div>
  )
}

export default Square