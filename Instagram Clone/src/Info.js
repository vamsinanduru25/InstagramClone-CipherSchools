import React,{ useState } from 'react';
import { Avatar } from '@material-ui/core'
import Profile from "./Images/profile.jpg"
import Grid from '@material-ui/core/Grid';

import "./Info.css";
function Rightpage() {
  return (
    <div className='Info'>
       <div>
        <Grid container>
          <Grid className='Profileclass'><Avatar className='Profilepic' src={Profile}/>
        <p className='username'>vamsi.nanduru</p>
        <p className='Switch'>Switch</p>
        <p className='Nameclass'>Vamsi Nanduru</p>
       </Grid>
       <Grid className='Recommendations'>{
        

       }
       
       </Grid>
        
        </Grid>
        </div>
        
    </div>
  )
}

export default Rightpage