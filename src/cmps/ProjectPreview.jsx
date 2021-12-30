import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import ProjectDetails from './ProjectDetails';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        // overflow: scroll

    },
}));

export default function TransitionsModal(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { project } = props

    return (<>
        <div className="project" onClick={handleOpen} style={{ backgroundImage: `url( ${project.imgs[0]})` }}>
            <div className="overlay">
                <ul>
                    {project.technical.map((tech => {
                        return <li key={tech} className="blue txt">{tech}</li>
                    }))}
                </ul>
            </div>
        </div>


        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}>

            <Fade in={open}>
                <div className="project-modal">
                    <ProjectDetails onClose={handleClose} project={project}></ProjectDetails>
                </div>
            </Fade>
        </Modal>



    </>)
}