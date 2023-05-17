import React from 'react';
import '../css/submenu.css';

// Define the SubMenu component
export const SubMenu: React.FC = () => {

  // Define a function to handle clicks on the "Run Transformation" button
  const handleRunTransformationClick = () => {
    console.log("hi")
    // Find the submit button in the document
    const submitButton = document.querySelector(
      'button[type="submit"]'
    ) as HTMLButtonElement;
    // Simulate a click on the submit button
    submitButton.click();
  };

  // Return the JSX for the SubMenu component
  return (
    <div className="secondary-menu-rules">
      <img src="./submenu_images/arrow_back.png" alt="back arrow" style={{paddingRight:"1%",paddingLeft:"1%"}}></img>
      <img src="./submenu_images/design.png" alt="design" ></img>
      <div className="title-main-p" style={{paddingLeft:"6.5%"}}>
        Group Similar Records 
        <br></br>
        Clustering・Last updated 2 days ago by Vitor Mouzinho
      </div>
      <button className="save-button-rules" onClick={handleRunTransformationClick}>Run Transformation</button>
    </div>
  );
};
