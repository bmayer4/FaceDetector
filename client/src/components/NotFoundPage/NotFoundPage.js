import React from 'react';

const NotFoundPage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '140px'}}>
        <p style={{color: 'white', fontSize: '25px', fontWeight: '300'}}>Unable to find page. Rawr!</p>
        <img src='trex.svg' style={{ width: '160px', height: '160px', display: 'block', margin: '0 auto', marginTop: '20px'}}/>
        </div>
    )
}

export default NotFoundPage;