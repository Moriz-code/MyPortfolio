import React from 'react';

import me from '../Images/home/me_home.JPG';
import resume from '../files/Mor_Zeevi_Resume.docx';


const Home = () => {
    return (<div id="home" className="home bounce-in-top">
        <section className="content">
            <div className="intro-txt">
                <span className="pink txt bg tag">HI, I AM</span>
                <span className="name">Mor Zeevi</span>
                <span className="rule fs28">Full Stack Developer & Instructional Designer</span>
                <p>with a <span>BIG</span> passion for coding, pixel perfect and learning new technologies. </p>

                <button className="download-btn action-btn"><a href={resume} download>Download Resume</a></button>
            </div>

            <div className="image">
                <img alt="me" src={me} />
            </div>

        </section>
    </div>)

}
export default Home