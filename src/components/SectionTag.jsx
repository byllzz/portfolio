import React from 'react'

export default function SectionTag(props) {
  return (
    <div style={sectionTagStyles} id='section-tag'>
  <span style={tagStyles}>{props.sectionTag}</span>
    </div>
  )
}


const sectionTagStyles = {
  display : "block" , lineHeight : "1" , overflow: "hidden"
};
const tagStyles = {
 textTransform : "uppercase" , lineHeight : '1' , letterSpacing : "3px" , fontFamily : "Jetbrains Mono" , fontSize : '11px' , color : '#ffffff' , opacity : ".5" ,
 fontWeight : "400"
}
