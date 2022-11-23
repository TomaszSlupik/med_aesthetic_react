import React from 'react'
import './Menu.css'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom'

export default function Menu() {

  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const style = {
    list: {textDecoration: 'none', color: '#e3cfa6', textTransform: 'uppercase'}
  }
    
    const link = [
      {
        linknav: 'Home',
        href: '/'
      }, 
      {
        linknav: 'O nas', 
        href: '/aboutus'
      }, 
      {
        linknav: 'Usługi', 
        href: '/services'
      }
    ]
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List >
        {link.map((el, index) => (
          <ListItem key={index} disablePadding >
            <Link to={el.href} style={style.list}>
            <ListItemButton>
              <ListItemText primary={el.linknav} />
            </ListItemButton>
            </Link>
          </ListItem>
        ))}
       </List>
    </Box>
  );

  return (
    <div>
        <div className="menuWrapper">
            <div className="burgerMenu">
              <div>
            {(['top']).map((anchor, index) => (
            <React.Fragment key={index}>
            <MenuOpenIcon 
            onClick={toggleDrawer(anchor, true)}
            />
              <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
          </div>
            </div>
            
            <div className="shopMenu">
                  2zł
                <ShoppingCartIcon />
            </div>
        </div>
    </div>
  )
}
