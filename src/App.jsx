import  { useState, useEffect } from "react";
import "./App.css";
import Home from "./Component/Home";
import Sidebar from "./Component/Sidebar";
import AddNotes from "./Component/AddNotes";

const App = () => {
  const [currentComponent, setCurrentComponent] = useState("Home");
  const [heading, setHeading] = useState("");
  const [notes, setNotes] = useState([]);

  // Load notes from localStorage when the app first loads
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Function to change the current component and heading
  const changeComponent = (component, heading = "", groupNotes = []) => {
    setCurrentComponent(component);
    setHeading(heading);
    
    // Update notes for the specific group if provided
    if (groupNotes.length > 0) {
      setNotes(prevNotes => {
        // Find the index of the group being updated
        const updatedNotes = [...prevNotes];
        const groupIndex = updatedNotes.findIndex(note => note.inputValue === heading);
        if (groupIndex !== -1) {
          updatedNotes[groupIndex].notes = groupNotes; // Update the notes of that group
        }
        return updatedNotes;
      });
    }
  };

  return (
    <div className="app__container">
      <Sidebar
        setCurrentComponent={changeComponent}
        notes={notes} // Pass the notes state to Sidebar
      />
      
      {currentComponent === "Home" ? (
        <Home className="main" />
      ) : (
        <AddNotes heading={heading} initialNotes={notes.find(note => note.inputValue === heading)?.notes || []} /> // Pass the initial notes for the selected group
      )}
    </div>
  );
};

export default App;
