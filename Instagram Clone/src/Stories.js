import React from 'react'
import "./Stories.css"
import { Avatar } from '@material-ui/core'
import Kohli from "./Images/download.jpg";
import Chris from "./Images/Chris.jpg";
import Naruto from "./Images/Naruto.jpg";
import RRR from "./Images/RRR.jpg";
import Marvel from "./Images/Marvel.png";
import Sam from "./Images/Sam.jpg";
import Ramcharan from "./Images/RamCharan.jpg"

function Stories() {
  return (
    <div>
        <div className='Stories'>
            <div className='Status'>
                <Avatar className='Status_avatar' src={Ramcharan}/>
                <div className='Name'>RamCharan</div>
            </div>
            <div className='Status'>
                <Avatar className='Status_avatar' src={Sam}/>
                <div className='Name'>Samantha</div>
            </div>
            <div className='Status'>
                <Avatar className='Status_avatar' src={Kohli}/>
                <div className='Name'>Kohli</div>
            </div>
            <div className='Status'>
                <Avatar className='Status_avatar' src={Chris}/>
                <div className='Name'>ChrisHemsworth</div>
            </div>
            <div className='Status'>
                <Avatar className='Status_avatar' src={Naruto}/>
                <div className='Name'>NarutoUzumaki</div>
            </div>
            <div className='Status'>
                <Avatar className='Status_avatar' src={Marvel}/>
                <div className='Name'>Marvel</div>
            </div>
            <div className='Status'>
                <Avatar className='Status_avatar' src={RRR}/>
                <div className='Name'>RRR</div>
            </div>
        </div>
    </div>
  )
}

export default Stories