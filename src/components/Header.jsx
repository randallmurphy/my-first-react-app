import React from 'react'
// In the 'header':
// Assign unique background colors to each of the components.
// Display your name.
function Header() {
    //const [headerStyle, setHeaderStyle] = useState(headerStyle)
    const headerStyle = {
        backgroundColor: "aqua",
        width: "100%",
        height: "20vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
  return (
    <header>
      <h1 style={headerStyle}>My First React Application</h1>
    </header>
  )
}

export default Header
