import React from 'react'
import { Grid, Typography, Paper } from '@mui/material'
import { styled,  } from '@mui/material/styles'

import { SocketContext } from '../SocketContext'


const StyledVideo = styled('video')(({theme})=>({
   width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
}))

const GridContainer = styled(Grid)(({ theme }) => ({
  justifyContent: 'center',
  [theme.breakpoints.down('xs')]: {
    flexDirection: 'column',
  },
}))

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: '10px',
  border: '2px solid black',
  margin: '10px',
}))



const VideoPlayer = () => {
  const classes = useStyles()
  return (
    <GridContainer container className={classes.gridContainer}>
      {/* Own Video*/}
      <StyledPaper className={classes.paper}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            {' '}
            Name{' '}
          </Typography>
          <StyledVideo playsInline muted ref={myVideo} autoPlay></StyledVideo>
        </Grid>
      </StyledPaper>
      {/* User Video*/}
      <StyledPaper className={classes.paper}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            {' '}
            Name{' '}
          </Typography>
          <StyledVideo playsInline  ref={userVideo} autoPlay></StyledVideo>
        </Grid>
      </StyledPaper>
    </GridContainer>
  )
}

export default VideoPlayer
