import React from "react";
import Webcam from "react-webcam";
import styled from 'styled-components'
import next from '../img/next.png'
import prev from '../img/prev.png'

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log(imageSrc)
    },
    [webcamRef]
  );

  return (
    <Wrap>
      <WrapCamera>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
    </WrapCamera>
      <WrapButtons>
      <Button alt='' src={prev} onClick={() => this.props.prev()}/>  
    <Button size='big' alt='' src={prev} onClick={
        capture
      }/>  
    <Button alt='' src={next} onClick={() => {
        this.props.setBackground(this.state.bg)
        this.props.next()
    }}/>  
      </WrapButtons>
  </Wrap>
  );
};


// import React, { Component } from 'react';
// import 'react-html5-camera-photo/build/css/index.css';
// import Webcam from "react-webcam";


// class WebcamCapture extends React.Component {
//   render() {
//     const videoConstraints = {
//       facingMode: "user"
//     };
//     return (
      
//     
//     audio={false}
//         height={720}
//         screenshotFormat="image/jpeg"
//         width={1280}
//         />
    
    

//     )
//   }
// }

export default WebcamCapture;

const Wrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100%;

`

const Button = styled.img``

const WrapButtons = styled.div`
display: flex;
justify-content: flex-end;
align-items: space-between;
`

const WrapCamera = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
width: 80%;
`
