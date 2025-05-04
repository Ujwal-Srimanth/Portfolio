import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Components/Navbar.js';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Tooltip } from '@mui/material';
import { PictureAsPdf } from '@mui/icons-material';
import letter from './letter.pdf';

const EducationExperience = ({darkMode,toggleDarkMode}) => {
   
    const [openDialog, setOpenDialog] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
        typography: {
            fontFamily: `'Roboto', sans-serif`,
        },
    });


    const handleDialogOpen = () => setOpenDialog(true);
    const handleDialogClose = () => setOpenDialog(false);

    const styles = {
        container: (darkMode) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            background: darkMode
                ? 'linear-gradient(to bottom, #121212, #1c1c1c)'
                : 'linear-gradient(to bottom, #f5f5f5, #eaeaea)',
            color: darkMode ? '#ffffff' : '#000000',
            padding: '20px',
            paddingTop: '80px',
            boxSizing: 'border-box',
        }),
        card: {
            width: '100%',
            maxWidth: '650px',
            marginBottom: '20px',
            padding: '20px',
            borderRadius: '12px',
            backgroundColor: darkMode ? '#1e1e1e' : '#ffffff',
            boxShadow: '0 8px 12px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            ':hover': {
                transform: 'scale(1.02)',
                boxShadow: '0 12px 16px rgba(0, 0, 0, 0.2)',
            },
        },
        title: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '10px',
            color: darkMode ? '#FFEB3B' : '#FF5722',
            textAlign: 'center',
        },
        item: {
            marginBottom: '15px',
        },
        boldText: {
            color: darkMode ? '#FFEB3B' : '#FF5722',
        },
        divider: {
            margin: '20px 0',
        },
        iconButton: {
            position: 'absolute',
            top: '20px',
            right: '20px',
            padding: '8px',
        },
        firstInternshipSection: {
            position: 'relative',
        },
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={styles.container(darkMode)}>
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <div style={styles.card}>
                    <h1 style={styles.title}>Experience</h1>
                    <div style={{ ...styles.item, ...styles.firstInternshipSection }}>
                        <h2 style={styles.boldText}>Software Development Intern</h2>
                        <strong>Providence Global India</strong> - June 2024 to August 2024 <br />
                        - Worked as a SDE Intern <br />
                        - Developed various features for an application.<br />
                        - Worked on React, NodeJS, ExpressJS, and PostgreSQL <br />
                    </div>
                    <Divider style={styles.divider} />
                    <div style={styles.item}>
                        <h2 style={styles.boldText}>Software Development Intern</h2> 
                        <strong>Providence Global India</strong> - January 2025 - Present <br />
                        - Working as a SDE Intern <br/>
                        - Working with Azure App Insights , Dotnet , Typescript <br/>
                    </div>
                    <Divider style={styles.divider} />
                    <div style={styles.item}>
                        <h2 style={styles.boldText}>SDE-1</h2> 
                        <strong>Providence Global India</strong> - July 2025 (Upcoming) <br />
                    </div>
                </div>
                <div style={styles.card}>
                    <h1 style={styles.title}>Education</h1>
                    <div style={styles.item}>
                        <strong style={styles.boldText}>DAV Public School</strong> - Passed Out: 2019 <br />
                        Scored: 95.8%
                    </div>
                    <div style={styles.item}>
                        <strong style={styles.boldText}>Sri Aakash Junior College</strong> - Passed Out: 2021 <br />
                        Scored: 96.4%
                    </div>
                    <div style={styles.item}>
                        <strong style={styles.boldText}>Amrita Vishwa Vidyapeetham</strong> - B.Tech in Computer Science & Engineering <br />
                        CGPA: 9.12 (2021 - Present, Expected Graduation: June 2025)
                    </div>
                </div>
            </div>

            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogTitle>Internship Completion Letter</DialogTitle>
                <DialogContent>
                    <embed
                        src={letter}
                        width="100%"
                        height="500px"
                        type="application/pdf"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
};

export default EducationExperience;
