import React from 'react'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'
import './SaveNewsletter.css'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function SaveNewsletter({newsletter, setnewsletter}) {

    const [valuePhone, setValuePhone] = useState('')
    const [userToNewsletter, setuserToNewsletter] = useState('')

    
    const changeNumber = (valuePhone) => {
        setValuePhone(valuePhone);
    }

    const changeUser = (e) => {
        setuserToNewsletter(e.target.value)
    }

    const style = {
        phone: {
            height: '50px', width: '50px'
        }
    }

    const theme = createTheme({
        palette: {
            primary: {
                main: '#e3cfa6',
            }
        }
    })

    const addUser = (e) => {
        e.preventDefault()
        const newPeople = {
            tel: valuePhone, 
            user_newslett_name: userToNewsletter
        }
        
    const allUserToNewsletter = [...newsletter, newPeople]
    setnewsletter(allUserToNewsletter)

    }
    


  return (
    <div>
        <ThemeProvider theme={theme}>
        <div className="boxPhone">
            <div>
            <PhoneInput
            style={style.phone}
            placeholder="Enter phone number"
            value={valuePhone}
            onChange={changeNumber}
            />
            
            </div>
            <div className='yourphone'>Twój numer: {valuePhone}</div>
            <div>
            <FormControl variant="standard">
                <InputLabel htmlFor="input-with-icon-adornment">
                Twoje imię
                </InputLabel>
                <Input
                onChange={changeUser}
                id="input-with-icon-adornment"
                startAdornment={
                    <InputAdornment position="start">
                    <AccountCircle />
                    </InputAdornment>
                }
                />
            </FormControl>
            <Button 
            onClick={addUser}
            variant="contained">Zapisz się</Button>
            </div>
        </div>
        </ThemeProvider>
        <div>Zapisani uczestnicy:</div>
        {
            newsletter.map((el, index)=> {
                return (
                    
                    <div key={index}>
                        <div>Imię: {el.user_newslett_name}</div>
                        <div>Tel.: {el.tel}</div>
                    </div>
                )
            })

        }        
    </div>
  )
}
