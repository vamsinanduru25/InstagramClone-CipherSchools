import React from "react";
import "./Suggestions.css";
import Profile from "./Images/profile.jpg";
import { Avatar } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Kohli from "./Images/download.jpg";
import Mahesh from "./Images/maheshbabu.jpg";
import Anime from "./Images/Anime.jpg"
import Swiss from "./Images/Swiss.jpg";

function rec(){
    return(
        <div>
            <div className="sugg_contain">
                <div className="sugg_header">
                    <div>Suggestions For You</div>
                    
                </div>
                
                <div className="sugg_body">
                    <div className="friends"></div>
                    <Grid container>
                        <Grid className="sug1">
                        <Avatar src={Kohli} className="sugg_image"/>
                    <div className="sug_username">virat.kohli</div>
                    <p className='Follow'>Follow</p>
                        </Grid>
                        <Grid className="sug1">
                        <Avatar src={Profile} className="sugg_image"/>
                    <div className="sug_username">anonymous</div>
                    <p className='Follow'>Follow</p>
                        </Grid>
                        <Grid className="sug1">
                        <Avatar src={Mahesh} className="sugg_image"/>
                    <div className="sug_username">mahesh_babu</div>
                    <p className='Follow'>Follow</p>
                        </Grid>
                        <Grid className="sug1">
                        <Avatar src={Anime} className="sugg_image"/>
                    <div className="sug_username">happy_soul</div>
                    <p className='Follow'>Follow</p>
                        </Grid>
                        <Grid className="sug1">
                        <Avatar src={Swiss} className="sugg_image"/>
                    <div className="sug_username">travel_withme</div>
                    <p className='Follow'>Follow</p>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}
export default rec;