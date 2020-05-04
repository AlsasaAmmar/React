import React from 'react';



const GuaranteeItem = ({guaranteeItem}) =>{
console.log("GuaranteeItem -> props", guaranteeItem.alt)
   return ( 
       <div>
        <img src={guaranteeItem.pic} alt={guaranteeItem.alt} />
        <h3> {guaranteeItem.title} </h3>
        <p> {guaranteeItem.description}</p>
       </div>
   )
}

export default GuaranteeItem;