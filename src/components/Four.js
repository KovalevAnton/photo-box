import React from "react";
import Webcam from "react-webcam";
import styled from 'styled-components'
import next from '../img/next.png'
import shoot from '../img/shoot.png'
import prev from '../img/prev.png'
import close from '../img/button.svg'

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const WebcamCapture = (props) => {
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      props.takePhoto(imageSrc)
    },
    [props]
  );

  return (
    <Wrap>
      <WrapCamera>
      {props.photo ?
        <PreviewWrap>
          <CloseIcon alt='' src={close} onClick={() => props.deletePhoto()}/>  
          <Image src={props.photo}/>
       </PreviewWrap> : 
       <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      }
    </WrapCamera>
      <WrapButtons>
      <Button alt='' src={prev} onClick={() => props.prev()}/>  
    <Button size='big' alt='' src={shoot} onClick={
        capture
      }/>
    <Button alt='' src={next} onClick={() => {
        props.next()
    }}/>  
      </WrapButtons>
  </Wrap>
  );
};

export default WebcamCapture;

const PreviewWrap = styled.div`
position: relative;
`
const Image = styled.img`
height: 720px;
`
const Wrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100%;

`

const CloseIcon = styled.img`
position: absolute;
    width: 7%;
    right: -25px;
    top: -25px;
    color: black;
    background-color: #fff;
    border-radius: 55px;
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
