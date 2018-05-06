import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../FaceRecognition/FaceRecognition';
import Clarifai from 'clarifai';
import { connect } from 'react-redux';
import { addImage, image, box } from '../../actions';

const app = new Clarifai.App({
  apiKey: 'a275d7dc7fd34912a41fa811783c1b7c'  //only 100 available
 });


class Home extends Component {

  state = {
    input: '',
    boxes: []
  }

  onInputChange = (e) => { this.setState({ input: e.target.value}); }

  onSubmit = () => { 
    if (!this.state.input) { return }
        this.props.image(this.state.input);
        app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then((response) => {
          const boxes = response.outputs[0].data.regions.map((item) => { return item.region_info.bounding_box });
          this.displayFaceBox(this.calcFaceLocation(boxes));
          this.props.addImage();
          this.props.box(this.state.boxes);
         }).catch((err) => {
           console.log('error', err);
         });  
  }

  displayFaceBox = (boxes) => { this.setState({ boxes: boxes }) ;}

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
      <Navigation /> 
      <Logo />
      {  
        <div>
        <p className='entries'>{`You have ${this.props.auth.entries} entries`}</p>
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        <FaceRecognition />
        </div> 
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
     auth: state.auth
     }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addImage: () => dispatch(addImage()),
    image: (img) => dispatch(image(img)),
    box: (b) => dispatch(box(b))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);