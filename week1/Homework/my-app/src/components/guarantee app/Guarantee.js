import React from 'react';
import GuaranteeItem from './Guarantee item'


const guaranteeInfo = [
    {
      pic: require('../../photos/f-delivery.png'),
      alt: 'a car going fast',
      title: "free shipping",
      description: "In consectetur minim nulla sunt commodo ex nisi fugiat commodo id nostrud. Ad ipsum nisi deserunt esse. Pariatur proident ex ipsum Lorem cupidatat anim do.",
    },
    {
      pic: require('../../photos/coin.png'),
      alt: 'a hand holding a coin',
      title: "100% Money back",
      description: "In consectetur minim nulla sunt commodo ex nisi fugiat commodo id nostrud. Ad ipsum nisi deserunt esse. Pariatur proident ex ipsum Lorem cupidatat anim do.",
    },
    {
      pic: require('../../photos/chat.png'),
      alt: 'chat boxes',
      title: "Online support 24/07",
      description: " In consectetur minim nulla sunt commodo ex nisi fugiat commodo id nostrud. Ad ipsum nisi deserunt esse. Pariatur proident ex ipsum Lorem cupidatat anim do.",
    },
  ]
  
function Guarantee() {
    return (
        <div>
           {guaranteeInfo.map(guaranteeItem =>{
            return <GuaranteeItem guaranteeItem={guaranteeItem}/>     
           })}
        </div>
    )
}

export default Guarantee;
