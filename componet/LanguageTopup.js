import React from "react";
// Import react-circular-progressbar module and styles
import {
    CircularProgressbar
  } from "react-circular-progressbar";

  import "react-circular-progressbar/dist/styles.css";
const LanguageTopup = (props) => {
    
    return ( 
        <>
        <div className="grid grid-cols-1 justify-items-center">
        <img width="8%" src={props.imageTag}/>
                  <h2 className="ml-2 mb-3 font-extrabol text-4xl">{props.title}</h2>
    <CircularProgressbar className="w-40 h-60 ml-20 mr-10" 

    
  value={props.percentage}
  text={`${props.percentage}%`}
  styles={{
    rotation: 0,
    // Customize the root svg element
    root: {
    },
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
      fill: '#f7bd00',
      // Text size
      fontSize: '16px', 
      

      
    },
    // Customize background - only used when the `background` prop is true
    background: {
      fill: '#3e98c7',
    },
    

  }}
/>
</div>
        </>
     );
}
 
export default LanguageTopup;