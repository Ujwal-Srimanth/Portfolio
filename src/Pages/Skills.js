import React, { useState, useRef, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Components/Navbar.js';
import { ExpandMore } from '@mui/icons-material';

const Skills = ({ darkMode, toggleDarkMode }) => {
    const [expandedSkill, setExpandedSkill] = useState(null);
    const skillRefs = useRef({}); // To store references to skill items

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    const skills = [
        { name: 'React', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', projects: ['Portfolio Website', 'Social Media App', 'Efficient Code Review Automation', 'Internship at Providence'] },
        { name: 'Node.js', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', projects: ['Code Review Automation', 'Social Media APP', 'Internship at Providence'] },
        { name: 'MongoDB', img: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg', projects: ['Social Media Application'] },
        { name: 'PostgreSQL', img: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg', projects: ['Internship at Providence'] },
        { name: 'Python', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', projects: ['Brain Tumor Prediction', 'Recommender Smart Cart', 'Multimodal Emotion Recognition'] },
        { name: 'TensorFlow', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg', projects: ['Brain Tumor Prediction', 'Multimodal Emotion Recognition'] },
        { name: 'Scikit-learn', img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', projects: ['Brain Tumor Prediction', 'Multimodal Emotion Recognition'] },
        { name: 'Git', img: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg', projects: ['Version Control'] },
        { name: 'HTML', img: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg', projects: ['Basic E-Commerce Website'] },
        { name: 'CSS', img: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg', projects: ['Social Media APP', 'Portfolio Website', 'Efficient Code Review Automation', 'Internship at Providence'] },
        { name: 'React Native', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/React_Native.png', projects: ['Learning Phase'] },
        { name: 'Redux Toolkit', img: 'https://redux.js.org/img/redux-logo-landscape.png', projects: ['Internship at Providence'] },
    ];

    const styles = {
        container: (darkMode) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            height: '100%',
            backgroundColor: darkMode ? '#121212' : '#f5f5f5',
            color: darkMode ? '#ffffff' : '#000000',
            padding: '20px',
            boxSizing: 'border-box',
            paddingTop: "80px",
            overflowX: 'hidden',
        }),
        innerContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            maxWidth: '800px',
        },
        title: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: darkMode ? '#FFEB3B' : '#FF5722',
        },
        skillContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '20px',
        },
        skillItem: {
            position: 'relative',
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
        expandIcon: {
            position: 'absolute',
            top: '5px',
            right: '5px',
            cursor: 'pointer',
            transition: 'color 0.3s',
        },
        expandIconHover: {
            color: darkMode ? '#FFEB3B' : '#FF5722', // Yellow for dark mode, Orange for light mode
        },
        projectBox: {
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            marginTop: '10px',
            padding: '15px',
            borderRadius: '12px',
            backgroundColor: darkMode ? '#333' : '#fff',
            color: darkMode ? '#fff' : '#000',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            zIndex: 10,
            textAlign: 'left',
            minWidth: '200px',
            maxHeight: '300px',
            overflowY: 'auto',
        },
        projectHeading: {
            fontWeight: 'bold',
            marginBottom: '10px',
            fontSize: '1.1rem',
            color: darkMode ? '#FFEB3B' : '#FF5722',
        },
        projectItem: {
            marginBottom: '8px',
            padding: '8px 0',
            borderBottom: '1px solid #ccc',
            transition: 'background-color 0.3s, padding-left 0.3s',
            fontSize: '0.9rem',
        },
    };

    // Handle click outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if the click was outside any of the skill items
            const skillElements = Object.values(skillRefs.current);
            if (!skillElements.some((element) => element.contains(event.target))) {
                setExpandedSkill(null);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleToggle = (skillName) => {
        setExpandedSkill(expandedSkill === skillName ? null : skillName);
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={styles.container(darkMode)}>
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <div style={styles.innerContainer}>
                    <h1 style={styles.title}>My Skills</h1>
                    <div style={styles.skillContainer}>
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                style={styles.skillItem}
                                ref={(el) => (skillRefs.current[skill.name] = el)}
                            >
                                <img src={skill.img} alt={skill.name} style={styles.skillImage} />
                                <span style={styles.skillName}>{skill.name}</span>
                                <div
                                    onClick={() => handleToggle(skill.name)}
                                    style={{
                                        ...styles.expandIcon,
                                        ...(expandedSkill === skill.name ? styles.expandIconHover : {}),
                                    }}
                                >
                                    <ExpandMore />
                                </div>
                                {expandedSkill === skill.name && (
                                    <div style={styles.projectBox}>
                                        <div style={styles.projectHeading}>Used In:</div>
                                        {skill.projects.map((project, idx) => (
                                            <div key={idx} style={styles.projectItem}>
                                                {project}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Skills;
