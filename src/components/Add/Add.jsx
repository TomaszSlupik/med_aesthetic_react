import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


export default function Add(props) {
  
  const [userNameAdd, setuserNameAdd] = useState('')
  const [email, setemail] = useState('')
  const [value, setValue] = React.useState(2);

const firstAdd = (e) => {
    setuserNameAdd(e.target.value)
    console.log(userNameAdd)
}

const secondAdd = (e) => {
    setemail(e.target.value)
}
  const style = {
    firstField: {borderColor: '#e3cfa6'}
}

const theme = createTheme({
    palette: {
      primary: {
        main: '#e3cfa6',
      }
    },
  });
  
    return (
    
    <div>
        
        <ThemeProvider theme={theme}>
        <TextField 
        style={style.firstField}
        onChange={firstAdd}
        id="outlined-basic" label="Outlined" variant="outlined" />
         <TextField 
        style={style.firstField}
        onChange={secondAdd}
        id="outlined-basic" label="Outlined" variant="outlined" />
          <Typography component="legend">Opinia</Typography>
        <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
        />
        </ThemeProvider>
    </div>
  )
}
