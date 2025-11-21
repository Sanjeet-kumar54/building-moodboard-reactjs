import React from "react";
// import "./App.css"; // Ensure your CSS file is imported

export function MoodBoardItem({ color, image, description }) {
  return (
    <div 
      className="mood-board-item" 
      // Modern Fix: Use color for a subtle accent border, not the background
      style={{ borderTop: `5px solid ${color}` }} 
    >
      <img 
        className="mood-board-image" 
        src={image} 
        alt={description} // Added alt text for accessibility
      />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard() {
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      
      <div className="mood-board">
        <MoodBoardItem
          color="#6366f1" /* Changed 'white' to a light grey for visibility */
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Janakisthan%2C_Sitamarhi%2C_Bihar.jpg/250px-Janakisthan%2C_Sitamarhi%2C_Bihar.jpg"
          description="Janki Temple"
        />
        
        <MoodBoardItem
          color="#6366f1" /* Changed 'blue' to the modern Indigo */
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Bodh_Gaya_statue_of_Buddha.jpg/600px-Bodh_Gaya_statue_of_Buddha.jpg?20180901063701"
          description="Bodh Gaya"
        />

        <MoodBoardItem
          color="#6366f1" /* Changed 'purple' to a modern Violet */
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Mahavir_Mandir%2C_Rosera.jpg/640px-Mahavir_Mandir%2C_Rosera.jpg"
          description="Mahavir Temple"
        />
      </div>
    </div>
  );
}