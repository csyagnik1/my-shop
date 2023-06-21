import { Box, Grid } from '@mui/material'
import React from 'react'
import Myform from './Myform'



function ContactForm() {
  return (
    <div>
      <Box sx={{position:'relative', top: '70px',height: '80vh'}}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} >
            <Box className='map w3-center w3-margin' >
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7375083911843!2d72.56406257370341!3d23.033408215926798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848ac8a7faf3%3A0x61bc852aeef56a03!2sAdani%20Wilmar%20Limited!5e0!3m2!1sen!2sin!4v1686738010613!5m2!1sen!2sin"
                style={{ border: 3 }} allowFullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">

              </iframe>

            </Box>
          </Grid>
          <Myform />

      
        </Grid>
      </Box>
    </div>
  )
}

export default ContactForm
