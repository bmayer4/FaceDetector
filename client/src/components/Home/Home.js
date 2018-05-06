import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import Rank from '../Rank/Rank';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'f79d44c4bfee40caa193653bb0d22734'
 });

const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class Home extends Component {

  state = {
    input: '',
    imageURL: '',
    boxes: []
  }

  onInputChange = (e) => { this.setState({ input: e.target.value}); }

  onSubmit = () => { 
    this.setState({ imageURL: this.state.input })
                                                  
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then((response) => {
     const boxes = response.outputs[0].data.regions.map((item) => { return item.region_info.bounding_box });
      //dispatch action to increment count
     this.displayFaceBox(this.calcFaceLocation(boxes));
    }).catch((err) => {
      console.log('error', err);
    });
  }

  displayFaceBox = (boxes) => { this.setState({ boxes: boxes }); }

  calcFaceLocation = (data) => {
    const image = document.getElementById('inputImage');
    const w = Number(image.width); 
    const h = Number(image.height);

    return data.map((data) => { 
      return {
        leftCol: data.left_col * w,
        topRow: data.top_row * h,
        rightCol: w - (data.right_col * w),
        bottomRow: h - (data.bottom_row * h)
      }
    })
  }

  render() {
    return (
      <div className="App">
      <Particles params={ particlesOptions } className='particles' />
      <Navigation />
      {  
        <div>
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        <FaceRecognition imageUrl={this.state.imageURL} boxes={this.state.boxes}/>
        </div> 
      }
      </div>
    );
  }
}

export default Home;