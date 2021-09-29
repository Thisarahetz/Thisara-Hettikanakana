import React from "react";
// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,buildStyles
  } from "react-circular-progressbar";
const LanguageTopup = (props) => {
    
    return ( 
        <>
        
    <CircularProgressbar className="w-60 h-80 ml-20 mr-10 text-justify"
  value={props.percentage}
  text={`${props.percentage}%`}
  styles={{
    rotation: 0,
    // Customize the root svg element
    root: {},
    // Customize the path, i.e. the "completed progress"
    path: {
      // Path color
      stroke: `rgb(59,130,246, ${props.percentage / 100})`,
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'round',
      // Customize transition animation
      transition: 'stroke-dashoffset 0.5s ease 0s',
      // Rotate the path
      transform: 'rotate(0turn)',
      transformOrigin: 'center center',
    },
    // Customize the circle behind the path, i.e. the "total progress"
    trail: {
      // Trail color
      stroke: '#d6d6d6',
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'butt',
      // Rotate the trail
      transform: 'rotate(0.0turn)',
      transformOrigin: 'center',
    },
    // Customize the text
    text: {
      // Text color
      fill: '#f7f8f9',
      // Text size
      fontSize: '16px',    
      
    },
    // Customize background - only used when the `background` prop is true
    background: {
      fill: '#3e98c7',
    },

  }}
/>
        </>
     );
}
 
export default LanguageTopup;