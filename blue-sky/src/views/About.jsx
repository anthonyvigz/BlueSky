import React, { Component } from 'react';
import '../css/about.css';

class About extends Component {
    constructor() {
        super();
        this.state = {
            opacity1: 0,
            opacity2: 0,
            opacity3: 0,
            opacity4: 0,
            opacity5: 0,
            opacity6: 0
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            if(window.scrollY < 500) {
                this.setState({ ...this.state, 
                    opacity1: 0,
                    opacity2: 0,
                    opacity3: 0,
                    opacity4: 0,
                    opacity5: 0,
                    opacity6: 0
                })
                console.log(window.scrollY);
            } else if(window.scrollY < 700) {
                this.setState({ ...this.state, opacity1: 1})
                console.log(window.scrollY);
            } else if(window.scrollY < 1100) {
                this.setState({ ...this.state, opacity1: 0.5, opacity2: 1})
                console.log(window.scrollY);
            } else if(window.scrollY < 1500) {
                this.setState({ ...this.state, opacity1: 0, opacity2: 0.5, opacity3: 1})
                console.log(window.scrollY);
            } else if(window.scrollY < 1900) {
                this.setState({ ...this.state, opacity2: 0, opacity3: 0.5, opacity4: 1})
                console.log(window.scrollY);
            } else if(window.scrollY < 2200) {
                this.setState({ ...this.state, opacity3: 0, opacity4: 0.5, opacity5: 1})
                console.log(window.scrollY);
            } else {
                this.setState({ ...this.state, opacity4: 0, opacity5: 0.5, opacity6: 1})
                console.log(window.scrollY);
            }
        })

    }


    render() {
        return (
            <div className="about-area" id="about">
                <div className="aboutBlocks">
                    <div className="aboutBlock" style={{opacity: this.state.opacity1}}>
                        <h2>ABOUT 1</h2>
                    </div>
                    <div className="aboutBlock" style={{opacity: this.state.opacity2}}>
                        <h2>ABOUT 2</h2>
                    </div>
                    <div className="aboutBlock" style={{opacity: this.state.opacity3}}>
                        <h2>ABOUT 3</h2>
                    </div>
                    <div className="aboutBlock" style={{opacity: this.state.opacity4}}>
                        <h2>ABOUT 4</h2>
                    </div>
                    <div className="aboutBlock" style={{opacity: this.state.opacity5}}>
                        <h2>ABOUT 5</h2>
                    </div>
                    <div className="aboutBlock" style={{opacity: this.state.opacity6}}>
                        <h2>ABOUT 6</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;