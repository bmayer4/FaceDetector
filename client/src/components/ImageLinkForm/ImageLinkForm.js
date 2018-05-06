import React from 'react';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    return (
        <div>
        <p className='f3'>
       {'This Magic Brain will detect faces in your pictures. Give it a try!'}
       </p>
       <div>
        <input type='text' className='f4 pa2 w-50' onChange={onInputChange}/>
        <button onClick={onSubmit} className='f4 link ph4 pv2 ma1 dib white bg-dark-gray br1'>DETECT</button>
        </div>
        </div>
    );
}

export default ImageLinkForm;