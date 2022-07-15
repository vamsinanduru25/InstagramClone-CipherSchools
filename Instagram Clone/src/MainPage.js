import './MainPage.css';
import instagram from './Images/instagram.png';
import Post from './Post';
import React, { useState } from 'react';
import Home from "./Images/Home.png";
import Message from "./Images/Message.jpg";
import Postpic from "./Images/post.jpg";
import Reels from "./Images/Reels.png";
import Heart from "./Images/hearticon.jpg";
import Profile from "./Images/profile.jpg";
import Info from "./Info.js";
import Stories from './Stories';
import Grid from '@material-ui/core/Grid';
import Suggestion from "./Suggestions.js"



function MainPage() {
     const [posts,setPosts]= useState([
        {username: "Chris Hemsworth", 
        caption: "IN theatres now",
        imageUrl: "https://sportshub.cbsistatic.com/i/2022/05/24/c9523ec9-5681-4e23-999e-0f40b5e12820/thor-love-and-thunder-poster.jpg"},
        {username:"Virat Kohli", 
        caption:" We go big", 
        imageUrl: "https://static.toiimg.com/thumb/msid-92754905,imgsize-34186,width-400,resizemode-4/92754905.jpg"},
        {username:"Naruto",
        caption:"Shadow Clone!!",
        imageUrl:"https://www.myfreewalls.com/public/uploads/preview/naruto-uzumaki-anime-manga-wallpaper-mobile-11631140774elelqcbbq0.jpg"},
        {username:"RRR",
        caption:"Ram and Bheem",
        imageUrl:"https://images.indianexpress.com/2022/05/RRR-movie-1200by667.jpg"}
     ]);
    return(
      
       <div className='App'>
        
        
         <div className='app_header'> 
            <Grid container>
                <Grid item xs={2}>
                  <img className='app_headerimage'
                   src={instagram} alt=""/>
                </Grid>
                <Grid items xs ={3}>
                <input className='Search_box' placeholder='Search'></input>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid className='Controls' item xs={3}>
                <img className='Home_button'
                  src={Home} alt=""
                />
                <img className='Message_button'
                src={Message} alt=""
                 />
                <img className='Post_button'
                src={Postpic} alt=""
                />
                <img className='Reels_button'
                src={Reels} alt=""
                />
                <img className='Heart_button'
                src={Heart} alt=""
                />
                <img className='Profile_button'
                src={Profile} alt=""
                />

                </Grid>
            </Grid>
            
           
            
            
        </div>
        <div>
            <Grid container>
                <Grid item xs={2}>
                   
                </Grid>
                <Grid item xs={5}>
                    <div>
                        <Stories/>
                    </div>
                    {
                      posts.map(post =>(
                      <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
                      ))
                    }
                </Grid>
                <Grid item xs={3}><Info/><Suggestion/></Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </div>
       </div>
    );
  
}

export default MainPage;
