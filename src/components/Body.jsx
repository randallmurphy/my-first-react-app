import React from 'react'
// In the 'body':

// Include an image and a descriptive paragraph.
// Below the description, add three square elements by reusing the 'square/box' component. These squares should be centered on the page.
import Square from "./Square";
import reactLogo from '../assets/react.svg';
import square1 from '../assets/square1.jpeg';
import square2 from '../assets/square2.jpeg';
import square3 from '../assets/square3.jpeg';

function Body() {
    const bodyStyle = {
        backgroundColor: "salmon",
        textAlign: "center",
        width: "80vw",
        height: "60vh"
    }
    const imgStyle = {
        width: "300px"
    }
    const pStyle = {
        textAlign: "center",

    }
    const boxContainer = {
        display: "flex",
        justifyContent: "center",
        margin: "20px",
        
    }
  return (
    <main style={bodyStyle}>
        <img src={reactLogo} alt="react icon" style={imgStyle}/>
        <p style={pStyle}>this is the react logo paragraph describing what the image above looks like, isn't this outstanding!</p>
        <div style={boxContainer}>
            <Square name={"square 1"} bgImage={square1}/>
            <Square name={"square 2"} bgImage={square2}/>
            <Square name={"square 3"} bgImage={square3}/>
        </div>
    </main>
  )
}

export default Body
