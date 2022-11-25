import React from 'react'
import SaveNewsletter from '../SaveNewsletter/SaveNewsletter'
import { useState } from 'react'

export default function Newsletter() {

        const [newsletter, setnewsletter] = useState([

            { 
              tel: '667222431',
              user_newslett_name: 'Zbyszek'
            },
            { 
              tel: '667222431',
              user_newslett_name: 'Zbyszek'
            }
           
        ])

  return (
    <div>
        <SaveNewsletter newsletter={newsletter} setnewsletter={setnewsletter}/>

      <div></div>
    </div>
  )
}
