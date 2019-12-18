import React, { Component } from 'react';
import '../css/about.css';
import about1 from '../img/about1.webp';
import about2 from '../img/about2.webp';
import about3 from '../img/about3.webp';
import about4 from '../img/about4.webp';
import about5 from '../img/about5.webp';
import about6 from '../img/about6.webp';


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
                        <div className="imgContainer">
                            <img src={about1} alt="about1" />
                            <h1>OUR MISSION</h1>
                        </div>
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
                        <div className="imgContainer">
                            <img src={about2} alt="about2" />
                            <h1>WHAT WE DO</h1>
                        </div>
                    </div>
                    <div className="aboutBlock" style={{opacity: this.state.opacity3}}>
                        <div className="imgContainer">
                            <img src={about3} alt="about3" />
                            <h1>OUR VALUE</h1>
                        </div>
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
                        <div className="imgContainer">
                            <img src={about4} alt="about4" />
                            <h1>TEST RUNS</h1>
                        </div>
                    </div>
                    <div className="aboutBlock" style={{opacity: this.state.opacity5}}>
                        <div className="imgContainer">
                            <img src={about5} alt="about5" />
                            <h1>COMPLIANCE FOCUS</h1>
                        </div>
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
                        <div className="imgContainer">
                            <img src={about6} alt="about6" />
                            <h1>LOCAL MAINE PRESENCE</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;