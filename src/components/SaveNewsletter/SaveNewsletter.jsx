import React from 'react'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'
import './SaveNewsletter.css'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';

export default function SaveNewsletter() {

    const [value, setValue] = useState()

    const style = {
        phone: {
            height: '50px', width: '50px'
        }
    }


  return (
    <div>
        <div className="boxPhone">
            <div>
            <PhoneInput
            style={style.phone}
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}/>
            
            </div>
            <div className='yourphone'>Twój numer: {value}</div>
            <div>
            <FormControl variant="standard">
                <InputLabel htmlFor="input-with-icon-adornment">
                Twoje imię
                </InputLabel>
                <Input
                id="input-with-icon-adornment"
                startAdornment={
                    <InputAdornment position="start">
                    <AccountCircle />
                    </InputAdornment>
                }
                />
            </FormControl>
            <Button variant="contained">Contained</Button>
            </div>
        </div>
    
       
    </div>
  )
}
