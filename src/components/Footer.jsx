import React from 'react'
// In the 'footer':

// Include a copyright notice and your name.

function Footer() {
    const FooterStyle = {
        backgroundColor: "#C67FAE", //Crocus
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        height: "10vh",
        marginTop: "18px"
    }
  return (
    <footer style={FooterStyle}>
      &copy; Randall A. Murphy
    </footer>
  )
}

export default Footer
