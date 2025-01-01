import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  ThemeProvider,
  useTheme,
} from "@mui/material";
import CodeDemoVideo from "./code demo.mp4";

const CodeReviewerPopup = ({ theme, open, closePopup, darkMode }) => {
  const currentTheme = useTheme();

  const sectionStyle = {
    marginBottom: "1.5rem",
    padding: "1rem",
    borderRadius: "8px",
    backgroundColor: darkMode ? "#333" : "#f9f9f9",
    color: darkMode ? "#fff" : "#000",
  };

  const headingStyle = {
    color: darkMode ? "#ffd700" : "#FF5722",
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog open={open} onClose={closePopup} fullWidth maxWidth="md">
        <DialogTitle style={headingStyle}>
          Efficient Code Review Automation
        </DialogTitle>
        <DialogContent>
          <div style={{ marginBottom: "1.5rem" }}>
            <video width="100%" controls>
              <source src={CodeDemoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div style={sectionStyle}>
            <Typography variant="h6" gutterBottom style={headingStyle}>
              Project Overview
            </Typography>
            <Typography variant="body1">
              The "Efficient Code Review Automation" project aims to streamline
              and automate the code review process using AWS CodeGuru.
              Traditionally, developers had to manually upload their code to an
              S3 bucket and initiate a pull request to get code recommendations
              from AWS CodeGuru. This project eliminates the manual steps and
              provides a seamless experience for developers.
            </Typography>
          </div>

          <div style={sectionStyle}>
            <Typography variant="h6" gutterBottom style={headingStyle}>
              Purpose
            </Typography>
            <Typography variant="body1">
              To automate the code review process by providing a web-based
              application where users can upload their Java or Python code, and
              the system handles the rest. The project automates the following
              tasks:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Accepts uploaded code files." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Uploads the files to an S3 bucket." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Automates the pull request process to AWS CodeGuru’s API." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Retrieves and processes the code review recommendations." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Sends the recommendations back to the frontend for display." />
              </ListItem>
            </List>
          </div>

          <div style={sectionStyle}>
            <Typography variant="h6" gutterBottom style={headingStyle}>
              Role
            </Typography>
            <Typography variant="body1">
              As a Backend Developer, my responsibilities included:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Developing middleware for handling file uploads to S3." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Automating the pull request process to AWS CodeGuru’s API." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Retrieving and processing the code review recommendations." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Sending the recommendations back to the frontend for user display." />
              </ListItem>
            </List>
          </div>

          <div style={sectionStyle}>
            <Typography variant="h6" gutterBottom style={headingStyle}>
              Tech Stack
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="NodeJS: Used for backend development to handle the API requests and interact with AWS services." />
              </ListItem>
              <ListItem>
                <ListItemText primary="ReactJS: Used for the frontend to create a user-friendly interface for code uploads and displaying review results." />
              </ListItem>
              <ListItem>
                <ListItemText primary="AWS: Utilized AWS services like S3 for file storage and AWS CodeGuru for automated code reviews." />
              </ListItem>
            </List>
          </div>

        </DialogContent>
        <DialogActions>
          <Button onClick={closePopup} color="primary" variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default CodeReviewerPopup;
