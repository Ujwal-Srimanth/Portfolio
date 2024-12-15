import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Assignment } from '@mui/icons-material';
import Navbar from '../Components/Navbar.js';
import EmbPdf from './Emb.pdf'; // assuming it's in the same folder
import { Box, Typography, Button, Chip, Grid, Paper, Dialog, DialogTitle, DialogContent } from '@mui/material';
import SAP from './SAP.pdf'

const Projects = () => {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    const toggleDarkMode = () => setDarkMode(!darkMode);

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [isCertificateOpen, setCertificateOpen] = useState(false);

  const handleCertificateOpen = () => setCertificateOpen(true);
  const handleCertificateClose = () => setCertificateOpen(false);

    const styles = {
        container: (darkMode) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: darkMode ? '#121212' : '#f5f5f5',
            color: darkMode ? '#ffffff' : '#000000',
            padding: '20px',
            boxSizing: 'border-box',
            overflowY: 'scroll',  // Make the entire page scrollable
            paddingTop: '80px',  // Add top padding to prevent overlap with navbar
        }),
        innerContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Subtle background for dark mode
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
            maxWidth: '1200px',
            width: '100%',
        },
        title: {
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
        },
        projectContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '20px',
            width: '100%',
        },
        skillContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '10px',
        },
        skillItem: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            textAlign: 'center',
            padding: '8px',
            borderRadius: '8px',
            backgroundColor: darkMode ? '#333' : '#f5f5f5',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        skillImage: {
            width: '40px',
            height: '40px',
            marginBottom: '8px',
        },
        projectStatus: {
            marginTop: '20px',
        },
        description: {
            marginTop: '10px',
            fontSize: '0.9rem',
            maxWidth: '700px',
            textAlign: 'left',
        },
        githubButton: {
            marginTop: '10px',
            width: '100%', // Make the buttons same width
            height: '40px', // Set a fixed height for both buttons
        },
        certificateButton: {
            marginTop: '10px',
            width: '100%', // Make the buttons same width
            height: '40px', // Set a fixed height for both buttons
        },
        posterLink: {
            marginTop: '10px',
            fontSize: '0.9rem',
            color: '#007bff',
            textDecoration: 'underline',
        },
        projectBox: {
            padding: '15px', // Reduced padding for smaller height
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: darkMode ? '#333' : '#fff',
            marginBottom: '20px',
            height: '500px', // Fixed height for the project boxes
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', // Make sure content is spaced evenly
            maxHeight: '600px', // Maximum height for the boxes
            overflow: 'auto', // Allow scrolling if content overflows
        },        
        buttonContainer: {
            display: 'flex',
            justifyContent: 'space-between', // Space buttons evenly
            gap: '10px',
            marginTop: '20px',
        },
        pdfEmbed: {
            width: '100%',
            height: '500px',
          },
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={styles.container(darkMode)}>
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <div style={styles.innerContainer}>
                    <Typography variant="h4" style={styles.title}>
                        Projects
                    </Typography>

                    <Grid container spacing={4} justifyContent="center">
                        {/* Project 1: Efficient Code Review Automation */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper style={styles.projectBox}>
                                <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                                    Efficient Code Review Automation
                                </Typography>
                                <Typography variant="body2" style={styles.description}>
                                    Role: Backend Developer
                                </Typography>
                                <Typography variant="body2" style={styles.description}>
                                    Description: Developed a web-based application to automate the code review process. Created middleware to handle tasks such as accepting code uploads, automating pull requests to AWS CodeGuru, processing review recommendations, and displaying them to the user.
                                </Typography>

                                <div style={styles.skillContainer}>
                                    <div style={styles.skillItem}>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                                            alt="React"
                                            style={styles.skillImage}
                                        />
                                        <Typography variant="body2">React</Typography>
                                    </div>
                                    <div style={styles.skillItem}>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                                            alt="Node.js"
                                            style={styles.skillImage}
                                        />
                                        <Typography variant="body2">Node.js</Typography>
                                    </div>
                                    <div style={styles.skillItem}>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                                            alt="AWS"
                                            style={styles.skillImage}
                                        />
                                        <Typography variant="body2">AWS</Typography>
                                    </div>
                                </div>

                                <div style={styles.projectStatus}>
                                    <Chip label="Completed" color="primary" icon={<Assignment />} />
                                </div>

                                <div style={styles.buttonContainer}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        href="https://github.com/Ujwal-Srimanth/Efficient-Code-Review-Automation"
                                        target="_blank"
                                        style={styles.githubButton}
                                    >
                                        View on GitHub
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={handleCertificateOpen}
                                        style={styles.certificateButton}
                                    >
                                        View Certificate
                                        </Button>
                                </div>
                                <Dialog open={isCertificateOpen} onClose={handleCertificateClose} maxWidth="md" fullWidth>
        <DialogTitle>Certificate</DialogTitle>
        <DialogContent>
          <iframe src={SAP} title="SAP Certificate" style={styles.pdfEmbed}></iframe>
        </DialogContent>
      </Dialog>
                            </Paper>
                        </Grid>

                        {/* Project 2: Recommender Smart Cart */}
                        <Grid item xs={12} sm={6} md={4}>
            <Paper style={styles.projectBox}>
                <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                    Recommender Smart Cart
                </Typography>
                <Typography variant="body2" style={styles.description}>
                    Role: MicroPython Developer & Hardware Integration
                </Typography>
                <Typography variant="body2" style={styles.description}>
                    Description: Developed a prototype for an automated billing system to increase sales by recommending
                    closely associated products. Integrated Raspberry Pi Pico board and RFID tags for product
                    identification and tracking. Notifications were sent to the user's mobile device using the Pushbullet
                    API for product addition, current total, and additional product recommendations.
                </Typography>

                <div style={styles.skillContainer}>
                    <div style={styles.skillItem}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                            alt="Python"
                            style={styles.skillImage}
                        />
                        <Typography variant="body2">Python</Typography>
                    </div>
                </div>

                <div style={styles.projectStatus}>
                    <Chip label="Completed" color="primary" icon={<Assignment />} />
                </div>

                <Button variant="outlined" color="primary" onClick={handleOpen} style={{ marginTop: '16px' }}>
                    View Project Poster
                </Button>

                <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
                    <DialogTitle>Project Poster</DialogTitle>
                    <DialogContent>
                        <embed
                            src={EmbPdf}
                            type="application/pdf"
                            width="100%"
                            height="600px"
                        />
                    </DialogContent>
                </Dialog>
            </Paper>
        </Grid>

                        {/* Project 3: Brain Tumor Prediction */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper style={styles.projectBox}>
                                <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                                    Brain Tumor Prediction
                                </Typography>
                                <Typography variant="body2" style={styles.description}>
                                    Description: Developed a machine learning model to classify MRI scans into categories like melanoma tumor, pituitary tumor, no tumor, and glioma tumor using simpler algorithms like KNN. Preprocessed image data, addressed class imbalances, and applied PCA for dimensionality reduction to enhance performance.
                                </Typography>

                                <div style={styles.skillContainer}>
                                    <div style={styles.skillItem}>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                                            alt="Python"
                                            style={styles.skillImage}
                                        />
                                        <Typography variant="body2">Python</Typography>
                                    </div>
                                    <div style={styles.skillItem}>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
                                            alt="scikit-learn"
                                            style={styles.skillImage}
                                        />
                                        <Typography variant="body2">scikit-learn</Typography>
                                    </div>
                                </div>

                                <div style={styles.projectStatus}>
                                    <Chip label="Completed" color="primary" icon={<Assignment />} />
                                </div>
                                <div style={styles.buttonContainer}>
            <Button
                variant="contained"
                color="primary"
                href="https://github.com/Ujwal-Srimanth/Brain-Tumor-Classification-Using-Pure-Machine-Learning-Models"
                target="_blank"
                style={styles.githubButton}
            >
                View on GitHub
            </Button>
        </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
    <Paper style={styles.projectBox}>
        <Typography variant="h6" style={{ fontWeight: 'bold' }}>
            Social Media App
        </Typography>
        <Typography variant="body2" style={styles.description}>
            Description: Developing a social media app that emulates basic features such as viewing profiles, following friends, posting content, and liking posts. The app is built using React, Redux, MongoDB, and NodeJS.
        </Typography>
        
        <div style={styles.skillContainer}>
            <div style={styles.skillItem}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    alt="React"
                    style={styles.skillImage}
                />
                <Typography variant="body2">React</Typography>
            </div>
            <div style={styles.skillItem}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
                    alt="MongoDB"
                    style={styles.skillImage}
                />
                <Typography variant="body2">MongoDB</Typography>
            </div>
            <div style={styles.skillItem}>
                <img
                    src="https://redux.js.org/img/redux-logo-landscape.png"
                    alt="Redux Toolkit"
                    style={styles.skillImage}
                />
                <Typography variant="body2">Redux Toolkit</Typography>
            </div>
            <div style={styles.skillItem}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                    alt="Node.js"
                    style={styles.skillImage}
                />
                <Typography variant="body2">Node.js</Typography>
            </div>
        </div>

        <div style={styles.projectStatus}>
            <Chip label="Pending" color="secondary" icon={<Assignment />} />
        </div>

        <div style={styles.buttonContainer}>
            <Button
                variant="contained"
                color="primary"
                href="https://github.com/Ujwal-Srimanth/SocialMediaAPP"
                target="_blank"
                style={styles.githubButton}
            >
                View on GitHub
            </Button>
        </div>
    </Paper>
</Grid>
<Grid item xs={12} sm={6} md={4}>
    <Paper style={styles.projectBox}>
        <Typography variant="h6" style={{ fontWeight: 'bold' }}>
            Multimodal Emotion Recognition Using Audio and Text
        </Typography>
        <Typography variant="body2" style={styles.description}>
            Description: This project focuses on multimodal emotion recognition by combining audio and text data. Two approaches were implemented. The first approach utilized augmented multimodal fusion, combining TinyBERT for text embeddings and a 1D CNN for audio features. The second approach employed simplified multimodal fusion using DistilBERT for text embeddings and LSTM for audio processing, leading to improved accuracy and generalization.
        </Typography>

        <div style={styles.skillContainer}>
            <div style={styles.skillItem}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                    alt="Python"
                    style={styles.skillImage}
                />
                <Typography variant="body2">Python</Typography>
            </div>
            <div style={styles.skillItem}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg"
                    alt="TensorFlow"
                    style={styles.skillImage}
                />
                <Typography variant="body2">TensorFlow</Typography>
            </div>
        </div>

        <div style={styles.projectStatus}>
            <Chip label="Completed" color="primary" icon={<Assignment />} />
        </div>

        <div style={styles.buttonContainer}>
            <Button
                variant="contained"
                color="primary"
                href="https://github.com/Ujwal-Srimanth/Emotion_Recognition_Using_MultiModalApproach"
                target="_blank"
                style={styles.githubButton}
            >
                View on GitHub
            </Button>
        </div>
    </Paper>
</Grid>


                    </Grid>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Projects;
