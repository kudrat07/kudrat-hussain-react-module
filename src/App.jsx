import  { useState, useEffect } from "react";
import "./App.css";
import Home from "./Component/Home";
import Sidebar from "./Component/Sidebar";
import AddNotes from "./Component/AddNotes";

const App = () => {
  const [currentComponent, setCurrentComponent] = useState("Home");
  const [heading, setHeading] = useState("");
  const [notes, setNotes] = useState([]);
  const [notesIndex, setNotesIndex] = useState(null);
  const [color, setColor] = useState();
  const [firstLetter, setFirstLetter] = useState("")

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  const changeComponent = (component, heading = "",color ,
    firstLetter,index) => {
    setCurrentComponent(component);
    setHeading(heading);
    setNotesIndex(index);
    setColor(color)
    setFirstLetter(firstLetter)
  };

  console.log(firstLetter);


  return (
    <div className="app__container">
      <Sidebar
        setCurrentComponent={changeComponent}
        notes={notes}
        setNotes={setNotes}
      />
      
      {currentComponent === "Home" ? (
        <Home className="main" />
      ) : (
        <AddNotes 
          heading={heading} 
          initialNotes={notes[notesIndex]?.notes || []} 
          setNotes={setNotes} 
          notesIndex={notesIndex} 
          color={color}
          firstLetter={firstLetter}
        />
      )}
    </div>
  );
};

export default App;
