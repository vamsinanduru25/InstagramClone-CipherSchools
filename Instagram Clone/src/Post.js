import React from 'react';
import "./Post.css";
import {Avatar} from "@material-ui/core";
import "./Images/Chris.jpg";
import Heart from "./Images/hearticon.jpg";
import Comment from "./Images/Comment.png";
import Share from "./Images/share.jpg";
import Save from "./Images/save.jpg";
import Profile from "./Images/profile.jpg";

function Post({username, caption, imageUrl}) {
  return (
    <div className='post'>
      
      <div className='post_header'>
      <Avatar className="Avatar_post" src={Profile}> </Avatar>
      <h3>{username}</h3>
      </div>
        <img className='Thor' src={imageUrl}/>
        <div>
        <img className='heart_icon' src={Heart}/>
        <img className='Comment' src={Comment}/>
        <img className='Share' src={Share}/>
        <img className='Save' src={Save}/>
        </div>
        <h4 className='Post_caption'><strong>{username}</strong> {caption}</h4>
        <input className='Comment1' placeholder='Add a Comment'/>
    </div>
    
  ) 
}

export default Post