import React from 'react';
import './card.styles.css';
import {Like} from '../../components/likes/like.component';
import {Unlike} from '../../components/likes/unlike.component';


export const Card = (props) => {
    let content="",heading="";
    for(let i=0;i<props.patent[3].length;i++){
        if(props.patent[3][i]==='<'){
            i=i+37;
            content=content + "engine ";
        }
        else {
            content=content + props.patent[3][i];
        }
    }
    for(let i=0;i<props.patent[2].length;i++){
        if(props.patent[2][i]==='<'){
            i=i+37;
            heading=heading + "engine ";
        }
        else {
            heading=heading + props.patent[2][i];
        }
    }
    if(heading.length<72)heading = heading + Array(2).fill('\xa0').join('\n') + ' ';
    return (
    <div className="card">
        <div className="card-header">
            <p className="user-name">{heading}</p>
            <p className="time">{props.patent[1]}</p>
        </div>
        <div className="card-image">
            <img alt="monster" src={props.patent[10]} width="100%" />
        </div>
        <div className="card-actions">
            {
                props.isLiked[props.patent[13]] ? <Unlike setChange={props.setChange} index={props.patent[13]} /> : <Like setChange={props.setChange} index={props.patent[13]} />
            }
	  </div>
        <div className="card-content">
            {/* eslint-disable-next-line */}
            <a href="#" class="hashtag">#{props.patent[5]}</a>
            <p>{content}</p>
        </div>
    </div>
    );
}
 