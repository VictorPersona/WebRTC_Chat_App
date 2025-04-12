import React from 'react'
import { Typography,AppBar } from '@mui/material'
import {styled} from '@mui/material/styles'
import VideoPlayer from './src/components/VideoPlayer'
import Options from './src/components/Options'
import Notifications from './src/components/Notifications'


const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
}))

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: 15,
  margin: '30px 100px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '600px',
  border: '2px solid black',

  [theme.breakpoints.down('xs')]: {
    width: '90%',
  },
}))



const App = () => {
  
  return (
    <Wrapper>
        <CustomAppBar  position='static' color='inherit'>

        <Typography variant='h2' align='center'>
          Video Chat
        </Typography>

        </CustomAppBar>

        <VideoPlayer/>
        
        <Options>
            <Notifications/>
        </Options>
    </Wrapper>
  )
}

export default App