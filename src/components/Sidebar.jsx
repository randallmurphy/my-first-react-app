//import React from 'react'
import React, { useState } from 'react';
// In the 'sidebar':

// Implement an unordered list with three different colors. When a color is clicked, it should change the background color of the sidebar to the selected one.



function Sidebar() {
    
    const [sidebarBgcolor, setSidebarBgColor] = useState("#A47864");
   
    const sidebarStyle = {
        backgroundColor: sidebarBgcolor,
        width: "20vw",
        height: "60vh"
    }
    const ulStyle = {
        listStyleType: "none",

    }
    
    // const colors = [
    //     {colorName: "red", toggleColor: "purple"},
    //     {colorName: "blue", toggleColor: "yellow"},
    //     {colorName: "green", toggleColor: "orange"}
    // ]
    // const liStyle = {
    //   width: "50px",
    //   height: "50px"
      
    // }
    //  function toggleColors(colors){
    //     if(colors[0].colorName === "red"){
    //         setSidebarBgColor("purple");
    //     }
    //     if(colors[1].colorName === "blue"){
    //         setSidebarBgColor("yellow");
    //     } 
    //     if(colors[2].colorName === "green"){
    //         setSidebarBgColor("orange");
    //     }
    // }
  //     function toggleRedClick() {
  //   setSidebarBgColor('purple');
  // }

  // function toggleBlueClick() {
  //   setSidebarBgColor('yellow');
  // }

  // function toggleGreenClick() {
  //   setSidebarBgColor('orange');
  // }
  return (
    <aside style={sidebarStyle}>
      <ul style={ulStyle}>
        <li style={{backgroundColor: "red"}} onClick={()=>setSidebarBgColor("purple")}></li>
        <li style={{backgroundColor: "blue"}} onClick={()=>setSidebarBgColor("yellow")}></li>
        <li style={{backgroundColor: "green"}} onClick={()=>setSidebarBgColor("orange")}></li>
      </ul>
    </aside>
  )
}

export default Sidebar
