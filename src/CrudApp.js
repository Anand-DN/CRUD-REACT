import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import * as React from 'react';



const CrudApp =() => {
  return(
    <div className='Container'>
      <h1><center>CrudApp</center></h1>
      <center>
      <Stack direction="row" spacing={10}  style={{float:'right'}}>
      <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" sx={{ width: 56, height:56  }}/>
    </Stack>
      <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' }, '& .MuiTextField-root': { m: 1, width: '25ch' } ,width:650,maxWidth:'100%'}}
      noValidate
      autoComplete="off"
    >

      <TextField required id="outlined-advanced-search" label="FirstName" variant="outlined" color="secondary"  />
      <TextField required id="outlined-advanced-search" label="LastName" variant="outlined" color="secondary" />
      <TextField required id="outlined-advanced-search" label="Email" variant="outlined" color="success" />
      <TextField optional id="outlined-advanced-search" label="Phone" variant="outlined" color="success"  />
      <TextField required id="outlined-advanced-search" label="Subject" variant="outlined" />
      <TextField id="outline-multiline-flexible" multiline maxRows={4} label="Description" />
    </Box>

    <Button variant ="contained" size="large">Submit</Button>
    </center>
    </div>

  );
};

export default CrudApp;
