import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component';

export const CardList = props => (
     <div className='card-list'> 
    {props.patents.map(patent => (

        <Card key={patent[0]} patent={patent} isLiked={props.isLiked} setChange={props.setChange} />

        ))} 
        
        </div>
);