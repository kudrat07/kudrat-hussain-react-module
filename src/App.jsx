import { useState, useEffect } from "react";
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
  const [firstLetter, setFirstLetter] = useState("");
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [btnStatus, setBtnStatus] = useState(false);

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    if (btnStatus) {
      setCurrentComponent("Home");
      setBtnStatus(false);
    }
  }, [btnStatus]);

  const changeComponent = (
    component,
    heading = "",
    color,
    firstLetter,
    index
  ) => {
    setCurrentComponent(component);
    setHeading(heading);
    setNotesIndex(index);
    setColor(color);
    setFirstLetter(firstLetter);
  };

  return (
    <div className="app__container">
      {(currentComponent !== "AddNotes" || screenSize > 576) && (
        <Sidebar
          setCurrentComponent={changeComponent}
          notes={notes}
          setNotes={setNotes}
          setBtnStatus={setBtnStatus}
        />
      )}

      {currentComponent === "Home" ? (
        <Home className="main" />
      ) : screenSize <= 576 && currentComponent === "AddNotes" ? (
        <AddNotes
          heading={heading}
          initialNotes={notes[notesIndex]?.notes || []}
          setNotes={setNotes}
          notesIndex={notesIndex}
          color={color}
          firstLetter={firstLetter}
          setBtnStatus={setBtnStatus}
        />
      ) : (
        currentComponent === "AddNotes" && (
          <AddNotes
            heading={heading}
            initialNotes={notes[notesIndex]?.notes || []}
            setNotes={setNotes}
            notesIndex={notesIndex}
            color={color}
            firstLetter={firstLetter}
          />
        )
      )}
    </div>
  );
};

export default App;
