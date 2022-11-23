import React, { useEffect, useState } from 'react'
import './Services.css'
import { Button } from '@mui/material'
import Order from '../Order/Order'

export default function Services() {

    // const services =[
        
    // ]

    const style = {
        cardTitle: {
            textTransform: 'uppercase', color: '#d9c187'
        }, 

        btn: { bottom: '2%', left: '2%', backgroundColor: '#e3cfa6'}
    }

    const [services, setOrder] = useState([{
        name_service: 'powiększanie ust', 
        img: '/img/lips.jpg', 
        price: 200
    },
    {
        name_service: 'usuwanie zmarszczek', 
        img: '/img/portrait.jpg',
        price: 100
    },
    {
        name_service: 'testowanie',
        img: '', 
        price: 30
    },])

//    Dodanie propsa Kliknięto/ Nie kliknięto
    useEffect( ()=> {
        services.map((el)=>{
            el.checked = false
            return el
        })
    setOrder(services)
    
}, [])

const [price, setPrice] = useState(0)


const yourorder  = (el) => {
    
    setOrder(
        services.map( item => {
            if (item.name_service === el.name_service) item.checked = !item.checked
            return item
        })
    )
   
    setPrice(   
        services.reduce((sumAll, el) => {
            return el.checked === true ? parseFloat(sumAll) + parseFloat(el.price) : parseFloat (sumAll)     
        }, 0)  
    )
    console.log(price)
}

console.log(price)

  return (
    <div>
        <Order allBasket={price}/>
        <div className="wrapperBox">
            <div className="services">
                {
                    services.map((el, index) => {
                        return (
                            <div className="card" key={index} >
                            <img src={process.env.PUBLIC_URL + el.img} className="card-img-top" alt="Zdjęcia usługi" />
                            <div className="card-body">
                            <h5 className="card-title" style={style.cardTitle}>{el.name_service}</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laudantium error suscipit asperiores, voluptas assumenda autem dicta nemo, aliquam fugit dignissimos repudiandae alias, quaerat eum quas obcaecati inventore omnis est!</p>
                            <div className="boxunderservice">
                            <Button 
                            onClick={() => yourorder (el)}
                            style={style.btn} variant="contained">Zamów</Button>
                            <div className='price' checked={el.checked}>{el.price} zł</div>
                            </div>
                            </div>
                        </div>
                        )
                    })
                }
            </div>       
        </div>
    </div>
  )
}
