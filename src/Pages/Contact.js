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
  createTheme,
} from "@mui/material";

const CodeReviewerPopup = ({ theme, open, closePopup, darkMode }) => {
  const customTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const styles = {
    dialogContent: {
      backgroundColor: darkMode ? "#121212" : "#f5f5f5",
      color: darkMode ? "#ffffff" : "#000000",
      padding: "20px",
      borderRadius: "8px",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      textAlign: "center",
    },
    contentText: {
      fontSize: "1.2rem",
      lineHeight: "1.8",
      marginBottom: "1rem",
    },
    listItem: {
      fontSize: "1.1rem",
    },
    button: {
      margin: "10px",
      fontWeight: "bold",
      backgroundColor: darkMode ? "#FFEB3B" : "#FF5722",
      color: darkMode ? "#121212" : "#ffffff",
    },
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Dialog open={open} onClose={closePopup} fullWidth maxWidth="sm">
        <DialogTitle style={styles.title}>Efficient Code Review Automation</DialogTitle>
        <DialogContent style={styles.dialogContent}>
          <Typography style={styles.contentText}>
            This project automates the code review process using AWS CodeGuru. It includes features like:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Middleware for handling file uploads to S3." style={styles.listItem} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Automated pull requests to APIs." style={styles.listItem} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Integration with ReactJS frontend." style={styles.listItem} />
            </ListItem>
          </List>
          <Typography style={styles.contentText}>
            The backend is built with NodeJS, adhering to corporate coding standards and supporting multiple environments (dev, test, prod).
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={closePopup} style={styles.button} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default CodeReviewerPopup;
