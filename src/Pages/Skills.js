import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Components/Navbar.js';

const Skills = () => {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    const toggleDarkMode = () => setDarkMode(!darkMode);

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
            maxWidth: '800px',
        },
        title: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: darkMode ? '#FFEB3B' : '#FF5722', // Yellow for dark mode, orange for light mode
        },
        skillContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '20px',
        },
        skillItem: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '120px',
            textAlign: 'center',
            padding: '10px',
            borderRadius: '8px',
            backgroundColor: darkMode ? '#333' : '#f5f5f5',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        skillImage: {
            width: '50px',
            height: '50px',
            marginBottom: '10px',
        },
        skillName: {
            fontSize: '1rem',
            fontWeight: '600',
        },
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={styles.container(darkMode)}>
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <div style={styles.innerContainer}>
                    <h1 style={styles.title}>My Skills</h1>
                    <div style={styles.skillContainer}>
                        <div style={styles.skillItem}>
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                                alt="React" 
                                style={styles.skillImage} 
                            />
                            <span style={styles.skillName}>React</span>
                        </div>
                        <div style={styles.skillItem}>
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" 
                                alt="Node.js" 
                                style={styles.skillImage} 
                            />
                            <span style={styles.skillName}>Node.js</span>
                        </div>
                        <div style={styles.skillItem}>
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" 
                                alt="MongoDB" 
                                style={styles.skillImage} 
                            />
                            <span style={styles.skillName}>MongoDB</span>
                        </div>
                        <div style={styles.skillItem}>
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" 
                                alt="PostgreSQL" 
                                style={styles.skillImage} 
                            />
                            <span style={styles.skillName}>PostgreSQL</span>
                        </div>
                        <div style={styles.skillItem}>
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" 
                                alt="Python" 
                                style={styles.skillImage} 
                            />
                            <span style={styles.skillName}>Python</span>
                        </div>
                        <div style={styles.skillItem}>
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" 
                                alt="TensorFlow" 
                                style={styles.skillImage} 
                            />
                            <span style={styles.skillName}>TensorFlow</span>
                        </div>
                        <div style={styles.skillItem}>
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" 
                                alt="Scikit-learn" 
                                style={styles.skillImage} 
                            />
                            <span style={styles.skillName}>Scikit-learn</span>
                        </div>
                        <div style={styles.skillItem}>
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" 
                                alt="Git" 
                                style={styles.skillImage} 
                            />
                            <span style={styles.skillName}>Git</span>
                        </div>
                        <div style={styles.skillItem}>
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" 
                                alt="HTML" 
                                style={styles.skillImage} 
                            />
                            <span style={styles.skillName}>HTML</span>
                        </div>
                        <div style={styles.skillItem}>
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" 
                                alt="CSS" 
                                style={styles.skillImage} 
                            />
                            <span style={styles.skillName}>CSS</span>
                        </div>
                        {/* New Skills */}
                        <div style={styles.skillItem}>
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" 
                                alt="Git" 
                                style={styles.skillImage} 
                            />
                            <span style={styles.skillName}>Git</span>
                        </div>
                        <div style={styles.skillItem}>
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/d/d3/React_Native.png" 
                                alt="React Native" 
                                style={styles.skillImage} 
                            />
                            <span style={styles.skillName}>React Native</span>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Skills;
