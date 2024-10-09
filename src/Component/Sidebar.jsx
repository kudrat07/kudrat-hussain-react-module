/* eslint-disable react/prop-types */
import "./home.css";
import Modal from "./Modal";
import { useState, useEffect } from "react";

const Sidebar = ({ setCurrentComponent, notes, setNotes }) => {
  const [showModal, setShowModal] = useState(false);
  const [color, setColor] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isActive, setIsActive] = useState(null);

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, [setNotes]);

  


  const handleClick = (index) => {
    setIsActive(index);
    const selectedGroup = notes[index];

    setCurrentComponent("AddNotes", selectedGroup.inputValue, selectedGroup.color, selectedGroup.firstLetter,  index);
  };


  const createNotesGroup = () => {
    if (inputValue.trim() === "") return; 
    const newGroup = {
      color,
      inputValue,
      firstLetter: getFirstLetter(inputValue),
      notes: [], 
    };

    const updatedNotes = [...notes, newGroup];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setColor("");
    setInputValue("");
    setShowModal(false);
  };

  function getFirstLetter(inputValue) {
    const words = inputValue.trim().split(" ");
    return words.length === 1
      ? words[0].charAt(0).toUpperCase()
      : words[0].charAt(0).toUpperCase() + words[words.length - 1].charAt(0).toUpperCase();
  }

  return (
    <div className="sidebar">
      <div className="sidebar__title--container">
        <h1 className="sidebar__title">Pocket Notes</h1>
      </div>

      <div className="notes">
        {notes.map((map, index) => (
          <div
            key={index}
            className={`test ${isActive === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            <div className="group__container">
              <div className="circle__container">
                <div className="circle" style={{ backgroundColor: map.color }}>
                  <p className="group__title--logo">{map.firstLetter}</p>
                </div>
              </div>
              <h3 className="group__title">{map.inputValue}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="btn__wrapper">
        <button className="btn" onClick={() => setShowModal(true)}>
          +
        </button>
      </div>
      {showModal && (
        <Modal
          setColor={setColor}
          setInputValue={setInputValue}
          setShowModal={setShowModal}
          inputValue={inputValue}
          createNotes={createNotesGroup}
          color = {color}
        />
      )}
    </div>
  );
};

export default Sidebar;
