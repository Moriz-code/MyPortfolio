import React, { Component } from 'react';
import { Element, } from 'react-scroll';

import LazyLoad from 'react-lazyload';

//services
import projectService from '../services/project.service';


//Cmps 
import NavBar from '../cmps/NavBar';
import Home from '../cmps/Home';
import About from '../cmps/About';
import Projects from '../cmps/Projects';
import Experience from '../cmps/Experience';
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

            <Element name="home" height='100vh'>
                <Home />
            </Element>

            <Element name="about">
                <LazyLoad height='100vh'>
                    <About />
                </LazyLoad>
            </Element>

            <Element name="projects">
                <LazyLoad height='100vh'>
                    <Projects projects={this.state.projects} />
                </LazyLoad>
            </Element>

            <Element name="experience">
                <LazyLoad height='100vh'>
                    <Experience />
                </LazyLoad>
            </Element>


            <Element name="contact">
                <LazyLoad height='100vh'>
                    <Contact />
                </LazyLoad>
            </Element>

        </>)
    }
}
export default Main