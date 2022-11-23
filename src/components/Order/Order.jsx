import React from 'react'

export default function Order(props) {

    const style = {
        yourFinance: {fontFamily: 'Marck Script'}
    }

  return (
    <div>
        <div style={style.yourFinance}>
            Twoje zamówienie: {props.allBasket} zł
        </div>
    </div>
  )
}
