import React, { useContext } from 'react'
import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import { Button, Grid } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/consts'
import { Context } from '..'
import { useAuthState } from 'react-firebase-hooks/auth'

const Navbar = () => {

   const {auth} = useContext(Context)
   const [user] = useAuthState(auth);
   
   return (
      <AppBar color={'secondary'} position="static">
         <Toolbar variant={'dense'} >
            <Grid container justify={'flex-end'}>
               {user ?
                  <Button  onClick={()=> auth.signOut()} color="secondary" variant="contained">Выйти</Button>
                  :
                  <NavLink to={LOGIN_ROUTE}>
                     <Button color="secondary" variant="contained">Логин</Button>
                  </NavLink>

               }



            </Grid>
         </Toolbar>
      </AppBar>
   )
}

export default Navbar;
