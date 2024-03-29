import React, { Component } from 'react';
import { Element, } from 'react-scroll';



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
                    <About />             
            </Element>

            <Element name="projects">
                    <Projects projects={this.state.projects} />
            </Element>

            <Element name="experience">
                    <Experience />
            </Element>


            <Element name="contact">
                    <Contact />
            </Element>

        </>)
    }
}
export default Main