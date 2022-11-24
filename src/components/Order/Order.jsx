import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Order.css'


export default function Order(props) {

    const style = {
        yourFinance: {fontFamily: 'Marck Script', position: 'absolute', right: '10%'}, 
        shopping: {cursor: 'pointer'}
    }

    const cardOpen = () => {
        const cardOpen = document.querySelector('.cardOpen')
        cardOpen.classList.toggle('active')
        cardOpen.classList.add('scale-in-hor-center')
    }

  return (
    <div>
      <div className="orderBox">
      <div style={style.yourFinance}>
            Twoje zamówienie: {props.allBasket} zł
            <ShoppingCartIcon style={style.shopping}
            onClick={cardOpen}/>
        </div>
      </div>
      <div className="cardOpen">
              <div className="firstTitle allNameColor">
              Twoje zamówienie: {props.allName}
              </div>             
      </div>
    </div>
  )
}
