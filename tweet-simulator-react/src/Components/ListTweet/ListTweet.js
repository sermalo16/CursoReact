import React from 'react';
import {Grid} from '@material-ui/core';
import './ListTweet.scss';
import Tweet from "../Tweet";

export default function ListTweet(props){
    const { allTweets, deleteTweet} = props;


    if(!allTweets || allTweets.length === 0){
        
        return (
        <div className="list-tweets-empty">
            <h2>No hay tweets</h2>
        </div>)
    }

    return (
        <Grid container spacing={3} className="list-tweets">
            {allTweets.map((tweet, index) =>(
                <Grid key={index} item xs={4}>
                    <Tweet tweet={tweet} index={index} deleteTweet={deleteTweet}/>
                </Grid>
            ))}
        </Grid>
    )
}