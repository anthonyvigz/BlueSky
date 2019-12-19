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
            opacity6: 0,
            scrollHeight: '150px'
        }
    }

    componentDidMount() {

        let bgColor = document.getElementsByClassName('about-area')[0];

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
            } else if(window.scrollY < 879 && window.scrollY > 501) {
                this.setState({ ...this.state, opacity1: 1})
                this.setState({ ...this.state, scrollHeight: '350px'})
                bgColor.style.backgroundColor = 'rgba(255, 255, 255, 0)'
                console.log(window.scrollY);
            } else if(window.scrollY < 1000) {
                this.setState({ ...this.state, opacity2: 1})
                this.setState({ ...this.state, scrollHeight: '550px'})
                bgColor.style.backgroundColor = 'rgba(255, 255, 255, 0.274)'
                console.log(window.scrollY);
            } else if(window.scrollY < 1300) {
                this.setState({ ...this.state, opacity3: 1})
                this.setState({ ...this.state, scrollHeight: '750px'})
                console.log(window.scrollY);
            } else if(window.scrollY < 1400) {
                this.setState({ ...this.state, opacity4: 1})
                this.setState({ ...this.state, scrollHeight: '950px'})
                console.log(window.scrollY);
            } else if(window.scrollY < 1600) {
                this.setState({ ...this.state, opacity5: 1})
                this.setState({ ...this.state, scrollHeight: '1150px'})
                bgColor.style.backgroundColor = 'rgba(255, 255, 255, 0.274)'
                console.log(window.scrollY);
            } else {
                this.setState({ ...this.state, opacity6: 1})
                this.setState({ ...this.state, scrollHeight: '1550px'})
                bgColor.style.backgroundColor = 'rgba(255, 255, 255, 0)'
                console.log(window.scrollY);
            }
        })

    }


    render() {
        return (
            <div className="about-area" id="about">
                <div className="scrollDown" style={{height: this.state.scrollHeight}}></div>
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
                            Our closed-loop hydrocarbon facility is seeking 
                            national compliance with all processes related to 
                            extraction for the medical cannabis market. 
                            We offer terpene preservation, shatter, vape oils, 
                            isolate (diamonds), terp sauce and RSO.
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
                            We provide consistent quality extraction. We also seek to assist 
                            growers build their brand.   Our collaborative services include 
                            customized extraction orders, packaging and labeling of product. 
                            We have a dedicated business team available to assist with 
                            product questions and client service needs.
                        </p>
                    </div>
                    <div className="aboutBlock" style={{opacity: this.state.opacity4}}>
                        <p>
                            Not sure of a first step with Blue Sky? Call us for a informal discussion. 
                            Perhaps do a test run.  We price these test runs modestly to 
                            demonstrate the quality and customization we provide growers.  
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
                            We work in the medical cannabis space. 
                            As the market prepares for adult-use, compliance will be 
                            essential. We are completing final steps for national, 
                            peer-review C1D1 certification to meet this requirement.
                        </p>
                    </div>
                    <div className="aboutBlock" style={{opacity: this.state.opacity6}}>
                        <p>
                            We are local Maine farmers.  Our extraction focus is to provide 
                            service to premier growers in the state. We believe that 
                            building a strong brand requires collaboration and dialogue 
                            with local growers.  
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