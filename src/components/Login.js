import { Button, Container, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { Context } from '..';
import firebase from 'firebase/compat/app';

const Login = () => {

   const { auth } = useContext(Context)

   const login = async () => {
      const provider = new firebase.auth.GoogleAuthProvider()
      const { user } = await auth.signInWithPopup(provider)
      console.log(user)

   }


   return (
      <Container>
         <Grid container
            style={{ height: window.innerHeight - 50 }}
            alignItems="center"
            justifyContent="center"
         >

            <Grid style={{ width: 400, background: 'lightgrey' }}
               container
               alignItems='center'
               direction='column'
            >
               <Box p={5}>
                  <Button onClick={login} color='secondary' variant="contained"> Войти с помощью Google</Button>
               </Box>
            </Grid>



         </Grid>

      </Container>
   )
}
export default Login