import React from 'react';
import '../css/team.css';
import part1 from '../img/part1.webp';
import part2 from '../img/part2.webp';
import part3 from '../img/part3.webp';


function Team() {
    return (
        <div className="teamPage" id="team">
              <h1>The Team</h1>
              <h2 className="emptyLine"></h2>
              <div className="teamContainer">
                <div className="teamBlock">
                    <img src={part1} alt="part1" />
                    <h3>Growing Expertise</h3>
                    <p>
                        Chad Crandall oversees the grow operations 
                        of Blue Sky.  He has extensive experience as a 
                        strain cultivator with expertise in RSO, CBD/THC 
                        blends, THC distillate, and other oil-based 
                        products and concentrates.  Chad began as a 
                        licensed medical marijuana caregiver in the 
                        state of Maine.  He can be reached on his 
                        mobile at 207 491 4336 and email 
                        chad@blueskylabextracts.com
                    </p>
                </div>
                <div className="teamBlock">
                    <img src={part2} alt="part2" />
                    <h3>Extraction Talent</h3>
                    <p>
                        Jake Daku oversees extraction processes, 
                        quality control, and diagnostics.  He has a deep 
                        skill set with quality closed-loop hydrocarbon extraction, 
                        terpene preservation, and additional methodologies.  
                        Jake has expertise with engineering management, 
                        assurance verification, testing, and quality control.  
                        <br/>To provide the purest extracted products for growers,
                        Blue Sky has invested heavily in its extraction room, 
                        design and construction, and extraction equipment. 
                    </p>
                </div>
                <div className="teamBlock">
                    <img src={part3} alt="part3" />
                    <h3>Teamwork</h3>
                    <p>
                        Jonathan Friend and Chris Swenson have decades of expertise in 
                        business and financial management.  Jon and Chris are responsible 
                        for assisting with Blue Sky's growth strategy.   
                        <br/>Blue Sky has a team of dedicated, trained individuals 
                        who can assist growers with their inquiries, order fulfillment, 
                        and service needs.
                    </p>
                </div>
              </div>
          </div>
    )
}

export default Team;