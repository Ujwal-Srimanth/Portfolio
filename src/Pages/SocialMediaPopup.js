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
import CodeDemoVideo from "./social media.mp4";

const SocialMediaPopup = ({ theme, open, closePopup, darkMode }) => {
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
          Social Media Application
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
              This is a feature-rich social media application developed using React, Redux, MongoDB, Node.js, Express, and MUI. The application provides functionalities like creating accounts, uploading posts, liking posts, managing profiles, adding/removing friends, and more. It also supports both dark mode and light mode themes. Recently, a basic chat application feature has been added, allowing users to chat with friends in real time, with seen and delivered indicators.
            </Typography>
          </div>

          <div style={sectionStyle}>
            <Typography variant="h6" gutterBottom style={headingStyle}>
              Features
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="User Authentication: Create an account and securely log in." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Post Management: Upload posts, view posts, and like them." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Profile Section: View and edit your profile." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Friend Management: Add and remove friends." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Chat Application: Send and receive messages in real time, with delivered and seen statuses." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Theme Options: Switch between dark mode and light mode." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Sponsored Ads: Display of sponsored advertisements." />
              </ListItem>
              <ListItem>
                <ListItemText primary="View Other Profiles: Explore profiles of other users." />
              </ListItem>
            </List>
          </div>

          <div style={sectionStyle}>
            <Typography variant="h6" gutterBottom style={headingStyle}>
              Upcoming Features
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Advanced Messaging: Notifications and multimedia sharing (audio, video, attachments)." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Public Private Feature: Mimicking Instagram." />
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

export default SocialMediaPopup;
