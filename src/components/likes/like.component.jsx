import React from 'react';
import './like.styles.css';

export const Like = props => (
    <div className="card-actions">
        <button class="test" onClick={() => props.setChange(props.index)}><i class="fas fa-heart"></i> Like</button>
    </div>
);