// Import the useState hook from React
import { useState } from 'react';

// Define the interface for the ExpandButtonProps object
interface ExpandButtonProps {
  children: React.ReactNode;
}

// Define the ExpandButton component
function ExpandButton({ children }: ExpandButtonProps) {
  // Declare a state variable "isExpanded" and a function to update it "setIsExpanded"
  const [isExpanded, setIsExpanded] = useState(false);

  // Define the handleClick function
  const handleClick = () => {
    // Toggle the value of "isExpanded" when the button is clicked
    setIsExpanded(!isExpanded);
  };

  // Render the ExpandButton component
  return (
    <div>
      {/* Render a clickable div with an onClick event handler */}
      <div onClick={handleClick}>
        {/* Render an image based on the value of "isExpanded" */}
        {isExpanded ? <img src='./icons/expand_more.png' alt='expand more'></img> : <img src='./icons/expand_less.png' alt='expand less'></img>}
      </div>
      {/* Render the children (content) if "isExpanded" is true */}
      {isExpanded && children}
    </div>
  );
}

// Export the ExpandButton component as the default export
export default ExpandButton;
