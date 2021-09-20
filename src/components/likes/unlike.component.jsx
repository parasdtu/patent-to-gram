import React from 'react';
import './unlike.styles.css';

export const Unlike = props => (
    <div className="card-actions">
        <button class="testUnlike" onClick={() => props.setChange(props.index)}><i class="fas fa-heart"></i> Unlike</button>
    </div>
);