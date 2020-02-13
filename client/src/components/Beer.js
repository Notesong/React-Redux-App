import React from 'react';

const Beer = ({ beer }) => {
    return (
        <div className='beer'>
            <img src={beer.image_url} />
            <div>
                <h3>{beer.name}</h3>
                <p>{beer.description}</p>
            </div>
            
        </div>
    )
}

export default Beer;