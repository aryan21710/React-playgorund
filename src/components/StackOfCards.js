import React from 'react'
import { ToggleCard, TinderLikeCard, StackCard } from 'react-stack-cards'
import img1 from '../public/resume_skeleton_0001.jpg'
import img2 from '../public/resume_skeleton_0002.jpg'
import img3 from '../public/resume_skeleton_0003.jpg'
import img4 from '../public/resume_skeleton_0004.jpg'
import '../index.css';
import {Cards} from './Cards'


 
export class StackOfCards extends React.Component {
  state = {
    directionTinder: "swipeCornerDownRight",
    directionToggle: "sideSlide",
    directionStack: "topRight",
    isOpen: false
  }
  
  onTinderSwipe() {
    this.Tinder.swipe()
  }
  onToggle() {
    this.setState({isOpen: !this.state.isOpen})
  }
 
  render() {
    this.Tinder = null
    const arr = [<Cards/>,<Cards/>]
    return (
      <div>
        <div style={{border: "2px solid red", padding: "1vh 1vw", width: "40vw"}}>
        <ToggleCard 
          images={arr}
          width="350"
          height="240"
          direction={this.state.directionToggle}
          duration={400}
          className="toggle"
          isOpen={this.state.isOpen}
          onClick={()=> alert("Hello")}
        >
        { arr.map((i,idx) => <div>{idx}</div> )}
        </ToggleCard>
        <button onClick={()=>this.onToggle()}>Toggle</button>
        </div>
        
        <div style={{border: "2px solid red", padding: "1vh 1vw", width: "40vw"}}>

        <TinderLikeCard
            images={arr}
            width="350"
            height="250"
            direction={this.state.directionTinder}
            duration={400}
            ref={(node) => this.Tinder = node}
            className="tinder mytoggle"
        >
        { arr.map((i,idx) => <div>{idx}</div> )}
        </TinderLikeCard>
        <button onClick={this.onTinderSwipe.bind(this)}>Swipe</button>
        </div>

        <div style={{border: "2px solid red", padding: "1vh 1vw", width: "40vw"}}>

        <StackCard
          images={arr}
          color={"#f95c5c"}
          width="350"
          height="240"
          direction={this.state.directionStack}
          onClick={()=> alert("Hello")}
        >
          <div>i</div>
        </StackCard>
        
        </div>

      </div>
    );
  }
}


