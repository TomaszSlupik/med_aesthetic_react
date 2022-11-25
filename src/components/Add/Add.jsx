import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function Add({users,setUsers}) {
  
  const [userNameAdd, setuserNameAdd] = useState('')
  const [useremail, setuseremail] = useState('')
  const [userdescribe, setuserdescribe] = useState('')
  const [value, setValue] = React.useState(2);

const firstAdd = (e) => {
    setuserNameAdd(e.target.value)
    console.log(userNameAdd)
}

const secondAdd = (e) => {
    setuseremail(e.target.value)
}
  const style = {
    firstField: {borderColor: '#e3cfa6'}
}

const thirdAdd = (e) => {
  setuserdescribe(e.target.value)
}

const theme = createTheme({
    palette: {
      primary: {
        main: '#e3cfa6',
      }
    },
  });

  const addOpinion = (e) => {
    e.preventDefault()
    const newUsers = {
      first_name: userNameAdd,
      email: useremail, 
      description: userdescribe, 
      opinion: value
    }

    const userAll = [...users, newUsers]
    setUsers (userAll)
  }
  
    return (
    
    <div>
        
        <ThemeProvider theme={theme}>
        <TextField 
        style={style.firstField}
        onChange={firstAdd}
        id="outlined-basic" label="Imię" variant="outlined" />
         <TextField 
        style={style.firstField}
        onChange={secondAdd}
        id="outlined-basic" label="Email" variant="outlined" />
          <TextField 
        style={style.firstField}
        onChange={thirdAdd}
        id="outlined-basic" label="Komentarz" variant="outlined" />
          <Typography component="legend">Opinia</Typography>
        <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
        />
         <Button 
         onClick={addOpinion}
         variant="contained">Dodaj</Button>
        </ThemeProvider>
       
    </div>
  )
}
