import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {

    const renderBoxes = boxes.map((box, i) => {
        return (
            <div key={i} className='bounding-box' style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
            }}>
            </div>
            )
    })

    return (
        <div className='center ma'>
            <div className='relative mt2'>
            <img id='inputImage' alt='' src={imageUrl} style={{
                width: '600px',
                height: 'auto',
                marginBottom: '30px',
                borderRadius: '2px'
            }}/>
            {
              renderBoxes
            }
            </div>
        </div>
    );
}

export default FaceRecognition;