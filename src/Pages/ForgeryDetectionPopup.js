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

const ImageForgeryPopup = ({ theme, open, closePopup, darkMode }) => {
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
          Image Forgery Detection & Classification
        </DialogTitle>
        <DialogContent>
          {/* YouTube Video Embed */}
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, marginBottom: "1.5rem" }}>
            <iframe
              src="https://www.youtube.com/embed/quLxV1YYVh8"  // Replace with your actual video ID
              title="Image Forgery Detection Demo"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div style={sectionStyle}>
            <Typography variant="h6" gutterBottom style={headingStyle}>
              Project Overview
            </Typography>
            <Typography variant="body1" component="div">
              This project focuses on the detection and classification of image forgeries, addressing a significant gap in existing solutions that often struggle with detecting forgeries in scanned documents and printed media. We employ a combination of two deep learning models:
              <ul>
                <li>
                  <strong>ELA + CNN-Based Binary Mask Generation:</strong> This approach is used for detecting and localizing forged regions in digital images. We utilize the CASIA 2.0 dataset to train our models. The current model achieves an F1-Score of 0.57, but when tampering percentage exceeds 10%, the F1-Score improves to over 0.8, showing promising results. Our model is competitive with state-of-the-art architectures like MantraNet, making it highly effective for digital image forgery detection.
                </li>
                <li>
                  <strong>YOLOv8 for Scanned Document Forgery Localization:</strong> For scanned document detection, we use YOLOv8 to predict bounding boxes around tampered regions, along with confidence intervals to provide more accurate results. This approach is particularly effective on invoices and bills, offering a reliable solution for document forgery detection. We use the Roboflow dataset for training the model on scanned documents.
                </li>
              </ul>
              The backend of the project is powered by Python (Flask), with a simple HTML interface for user interaction. The solution includes live forgery localization, forgery classification, and downloadable results with highlighted tampered areas.
            </Typography>
          </div>

          <div style={sectionStyle}>
            <Typography variant="h6" gutterBottom style={headingStyle}>
              Features
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="ELA + CNN for Binary Mask Generation on Digital Images" />
              </ListItem>
              <ListItem>
                <ListItemText primary="YOLOv8-Based Forgery Localization for Scanned Documents" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Flask API with Simple HTML Frontend for User Interaction" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Supports Multiple Input Types: JPEG, and Scanned Document Images" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Results with Highlighted Tampered Regions for Images and Bounding Boxes and Confidence Percentage for Scanned Documents" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Trained on CASIA 2.0 and Roboflow Datasets for Scanned Documents" />
              </ListItem>
            </List>
          </div>

          <div style={sectionStyle}>
            <Typography variant="h6" gutterBottom style={headingStyle}>
              Upcoming Features
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Improvement of YOLOv8 Performance for Printed Media" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Extension of ELA + CNN to Support Additional Image Formats (JPEG, PNG, TIFF)" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Video Forgery Detection: Expanding the Model to Detect Forged Content in Videos" />
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

export default ImageForgeryPopup;
