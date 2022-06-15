import React, { Component } from 'react';
import './mouse.css'
import avatar  from '../imgs/avatar.png'

class Mouse extends Component {
    constructor(props) {
    super(props);
    this.init();
    }

    init() {
    this.state = {
        offsetX: '',
        offsetY: '',
        friction: 1 / 32
    }
    this.mouseMove = this.mouseMove.bind(this);
    }
    componentDidMount() {
    document.addEventListener('mousemove', this.mouseMove);
    }
    componentWillUnmount() {
    document.removeEventListener('mousemove', this.mouseMove);
    }
    
    mouseMove(e) {
    let followX = (window.innerWidth / 2 - e.clientX);
    let followY = (window.innerHeight / 2 - e.clientY);

    let x = 0,
        y = 0;
    x +=( (-followX - x) * this.state.friction);
    y += (followY - y) * this.state.friction;
    this.setState({
        offsetX: x,
        offsetY: y
    });
    }
    render() {
    let offset = {
        transform: `translate(-50%, -50%) perspective(600px)
                    rotateY(${this.state.offsetX}deg)
                    rotateX(${this.state.offsetY}deg)`
                }

    return (
        <section>
            <div id="heart">
                
            </div>
            {<div className='wrapper' style={offset}>
            
                <div className="shape">
                <img className='mouse_avatar' src={avatar} alt="" />
                </div>
            </div>}
        </section>
        
    )
    }
    
}


export default Mouse;