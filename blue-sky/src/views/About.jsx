import React, { Component } from 'react';
import '../css/about.css';
import about1 from '../img/about1.webp';

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
            } else if(window.scrollY < 875) {
                this.setState({ ...this.state, opacity1: 1})
                console.log(window.scrollY);
            } else if(window.scrollY < 1000) {
                this.setState({ ...this.state, opacity2: 1})
                console.log(window.scrollY);
            } else if(window.scrollY < 1200) {
                this.setState({ ...this.state, opacity3: 1})
                console.log(window.scrollY);
            } else if(window.scrollY < 1400) {
                this.setState({ ...this.state, opacity4: 1})
                console.log(window.scrollY);
            } else if(window.scrollY < 1600) {
                this.setState({ ...this.state, opacity5: 1})
                console.log(window.scrollY);
            } else {
                this.setState({ ...this.state, opacity6: 1})
                console.log(window.scrollY);
            }
        })

    }


    render() {
        return (
            <div className="about-area" id="about">
                <div className="aboutBlocks">
                    <div className="aboutBlock" style={{opacity: this.state.opacity1}}>
                        <img src={about1} alt="about1" />
                        <p>
                            Blue Sky's mission is to provide high terpene, 
                            full spectrum, bud-run extraction.  We believe 
                            hydrocarbon extraction process handles cannabinoids 
                            and terpenes gently, allowing the best transfer of 
                            these properties to capture the essence of the full 
                            plant.
                        </p>
                    </div>
                    <div className="aboutBlock" style={{opacity: this.state.opacity2}}>
                        <p>
                            Blue Sky's mission is to provide high terpene, 
                            full spectrum, bud-run extraction.  We believe 
                            hydrocarbon extraction process handles cannabinoids 
                            and terpenes gently, allowing the best transfer of 
                            these properties to capture the essence of the full 
                            plant.
                        </p>
                        <img src={about1} alt="about1" />
                    </div>
                    <div className="aboutBlock" style={{opacity: this.state.opacity3}}>
                        <img src={about1} alt="about1" />
                        <p>
                            Blue Sky's mission is to provide high terpene, 
                            full spectrum, bud-run extraction.  We believe 
                            hydrocarbon extraction process handles cannabinoids 
                            and terpenes gently, allowing the best transfer of 
                            these properties to capture the essence of the full 
                            plant.
                        </p>
                    </div>
                    <div className="aboutBlock" style={{opacity: this.state.opacity4}}>
                        <p>
                            Blue Sky's mission is to provide high terpene, 
                            full spectrum, bud-run extraction.  We believe 
                            hydrocarbon extraction process handles cannabinoids 
                            and terpenes gently, allowing the best transfer of 
                            these properties to capture the essence of the full 
                            plant.
                        </p>
                        <img src={about1} alt="about1" />
                    </div>
                    <div className="aboutBlock" style={{opacity: this.state.opacity5}}>
                        <img src={about1} alt="about1" />
                        <p>
                            Blue Sky's mission is to provide high terpene, 
                            full spectrum, bud-run extraction.  We believe 
                            hydrocarbon extraction process handles cannabinoids 
                            and terpenes gently, allowing the best transfer of 
                            these properties to capture the essence of the full 
                            plant.
                        </p>
                    </div>
                    <div className="aboutBlock" style={{opacity: this.state.opacity6}}>
                        <p>
                            Blue Sky's mission is to provide high terpene, 
                            full spectrum, bud-run extraction.  We believe 
                            hydrocarbon extraction process handles cannabinoids 
                            and terpenes gently, allowing the best transfer of 
                            these properties to capture the essence of the full 
                            plant.
                        </p>
                        <img src={about1} alt="about1" />
                    </div>
                </div>
            </div>
        )
    }
}

export default About;