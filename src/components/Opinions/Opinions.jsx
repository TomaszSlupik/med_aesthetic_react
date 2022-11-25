import React, { useState } from 'react'
import Add from '../Add/Add'
import './Opinions.css'

export default function Opinions() {

const [users, setUsers] = useState([
    {
        first_name: 'Ola', 
        email: 'olka92@gmail.com', 
        description: 'Świetne usługi. Jeszcze nie raz skorzystam', 
        opinion: 5
    }, 
    {
        first_name: 'Kamil', 
        email: 'kamilkazik@gmail.com', 
        description: 'Super ceny i pełen profesjonalizm', 
        opinion: 5
    }, 
])    


  return (
    <div>
        <Add users={users}/>

    <table className="table">
            <thead>
                <tr>
                <th scope="col">Klient</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody >
            {
                        users.map((el, index) => {
                            return (
            
                <tr key={index}>
                <td>{el.first_name}</td>
                <td>{el.email}</td>
                <td>{el.description}</td>
                <td>{el.opinion}</td>
                </tr>
            
            )
            })
            }
            </tbody>
    </table>          
    </div>
  )
}
