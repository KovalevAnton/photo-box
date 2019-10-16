import React from 'react'
import { render } from 'react-dom'
import Interactive from './Interactable'
import one from './sticker/1.png'
import two from './sticker/2.png'
import demo from './demo.jpg'
import styled from 'styled-components'

const resizableOptions = {
  edges: { left: true, right: true, bottom: true, top: true }, 
  restrictEdges: { outer: 'parent', endOnly: true },
  restrictSize: { min: {width: 50, height: 50}, max: {width: 300, height: 300}},
  inertia: true,
  onmove: event => {
     var target = event.target,
     x = (parseFloat(target.getAttribute('data-x')) || 0),
     y = (parseFloat(target.getAttribute('data-y')) || 0);
     // update the element's style
     target.style.width  = event.rect.width + 'px';
     target.style.height = event.rect.height + 'px';

     // translate when resizing from top or left edges
     x += event.deltaRect.left;
     y += event.deltaRect.top;

     target.style.webkitTransform = target.style.transform =
        'translate(' + x + 'px,' + y + 'px)';

     target.setAttribute('data-x', x);
     target.setAttribute('data-y', y);
     target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height);      
  }
};

const draggableOptions = {
	 onmove: event => {
		const target = event.target
	  // keep the dragged position in the data-x/data-y attributes
	  const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
	  const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

	  // translate the element
	  target.style.webkitTransform =
	  target.style.transform =
	    'translate(' + x + 'px, ' + y + 'px)'

	  // update the posiion attributes
	  target.setAttribute('data-x', x);
	  target.setAttribute('data-y', y);
	}
}
const Wrap = styled.div`
display: flex;
flex-direction: row;
`
const WrapInteractiveties = styled.div`
background-color: #eee;
height: -webkit-fill-available;
display: flex;
flex-direction: column;
`
const Mask = styled.img`
  width: 150px;
  position: absolute;
`
const Demo = styled.img`
`
const example = (
  <Wrap>
      <WrapInteractiveties>
      <Interactive gesturable draggable resizable draggableOptions={draggableOptions} resizableOptions={resizableOptions}>
        <Mask src={one}/>
    </Interactive>
      <Interactive gesturable draggable resizable draggableOptions={draggableOptions} resizableOptions={resizableOptions}>
        <Mask src={two}/>
    </Interactive>
      <Interactive gesturable draggable resizable draggableOptions={draggableOptions} resizableOptions={resizableOptions}>
        <Mask src={two}/>
    </Interactive>
      <Interactive gesturable draggable resizable draggableOptions={draggableOptions} resizableOptions={resizableOptions}>
        <Mask src={two}/>
    </Interactive>
      <Interactive gesturable draggable resizable draggableOptions={draggableOptions} resizableOptions={resizableOptions}>
        <Mask src={two}/>
    </Interactive>
    </WrapInteractiveties>
    <Demo src={demo}/>

  </Wrap>
)

render(example, document.getElementById('root'));