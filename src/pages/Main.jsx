import React, { Component } from 'react';

import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


import LazyLoad from 'react-lazyload';

//services
import projectService from '../services/project.service';

// import i from '../Images/projects/showroom/1.png';

//Cmps 
import NavBar from '../cmps/NavBar';
import Home from '../cmps/Home';
import About from '../cmps/About';
import Projects from '../cmps/Projects';
import Contact from '../cmps/Contact';

class Main extends Component {

    state = {
        projects: []
    }

    async componentDidMount() {
        const projects = await projectService.query();
        this.setState({ projects });
    }

    render() {
        return (<>

            <NavBar />

            <LazyLoad height='120vh'>
                <Element name="home">
                    <Home />
                </Element>
            </LazyLoad>

            <LazyLoad height='100vh' offset={-300}>
                <Element name="about" >
                    <About />
                </Element>
            </LazyLoad>

            <LazyLoad height='100vh' offset={-300}>
                <Element name="projects">

                    <Projects projects={this.state.projects} />

                </Element>
            </LazyLoad>


            <LazyLoad height='100vh'>
                <Element name="contact">
                    <div>
                        <Contact />
                    </div>
                </Element>
            </LazyLoad>

        </>)
    }
}
export default Main