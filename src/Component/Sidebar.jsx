/* eslint-disable react/prop-types */
import "./home.css";
import Modal from "./Modal";
import { useState, useEffect } from "react";

const Sidebar = ({ setCurrentComponent }) => {
  const [showModal, setShowModal] = useState(false);
  const [color, setColor] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  const [isActive, setIsActive] = useState(false);

  const handleClick = (index) => {
    setIsActive(index);
    setCurrentComponent("AddNotes", notes[index].inputValue, notes[index].notes || []); // Pass group title and its notes
  };

  function getFirstLetter(inputValue) {
    const words = inputValue.trim().split(" ");
    return words.length === 1
      ? words[0].charAt(0).toUpperCase()
      : words[0].charAt(0).toUpperCase() + words[words.length - 1].charAt(0).toUpperCase();
  }

  function createNotes() {
    const addItem = {
      color,
      inputValue,
      firstLetter: getFirstLetter(inputValue),
      notes: [], // Initialize with an empty notes array
    };

    const updatedNotes = [...notes, addItem];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setColor("");
    setInputValue("");
    setShowModal(false);
  }

  return (
    <>
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
            createNotes={createNotes}
          />
        )}
      </div>
    </>
  );
};

export default Sidebar;
