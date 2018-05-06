import React from 'react';
import './FaceRecognition.css';
import { connect } from 'react-redux';

const FaceRecognition = (props) => {
    console.log('imagebox', props.image);

    const renderBoxes = props.image.boxes.length > 0 && props.image.boxes.map((box, i) => {
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
                <img id='inputImage' alt='' src={props.image.b} style={{
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

const mapStateToProps = (state) => {
    return {
       image: state.image
       }
  }
  
  
export default connect(mapStateToProps)(FaceRecognition);

