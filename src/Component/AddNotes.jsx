/* eslint-disable react/prop-types */
import "./addNotes.css";
import arrow from "../assets/Arrow.png";
import vector from "../assets/vector__colorful.png"
import { useState } from "react";

const AddNotes = ({ heading, initialNotes, setNotes, notesIndex, color, firstLetter }) => { 
  const [textAreaInput, setTextAreaInput] = useState("");
  const handleButton = () => {
    if (textAreaInput.trim() !== "") {
      const newNote = {
        text: textAreaInput,
        time: getFormattedTime(),
      };

      setNotes(prevNotes => {
        const newState = [...prevNotes];
        if (newState[notesIndex]) { 
          if (!newState[notesIndex].notes) {
            newState[notesIndex].notes = []; 
          }
          newState[notesIndex].notes.push(newNote); 
          localStorage.setItem("notes", JSON.stringify(newState)); 
        }
        return newState;
      });

      setTextAreaInput(""); 
    }
  };

  const getFormattedTime = () => {
    const date = new Date();
    const currentDate = date.getDate();
    const year = date.getFullYear();
    const monthsName = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const currentMonth = monthsName[date.getMonth()];

    let hour = date.getHours();
    hour = hour % 12;
    hour = hour ? hour : 12;

    const minute = date.getMinutes();
    const formattedMinute = minute < 10 ? "0" + minute : minute;
    const ampm = hour >= 12 ? "PM" : "AM";

    return `${currentDate} ${currentMonth.slice(0, 3)} ${year} . ${hour}:${formattedMinute} ${ampm}`;
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="nav__container">
          <div className="nav__circle" 
          style={{backgroundColor:color}}>{firstLetter}</div>
          <h3 className="nav__title">{heading}</h3>
        </div>
      </nav>
      <div className="notes__content">
        {initialNotes.map((map, index) => (
          <div key={index}>
            <div className="notes__content--description">
              <p className="notes__para">{map.text}</p>
              <div className="date__wrapper">
                <p className="date">{map.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="textarea__container">
        <div className="textarea__wrapper">
          <textarea
            placeholder="Enter your text here........"
            className="text"
            value={textAreaInput}
            onChange={(e) => setTextAreaInput(e.target.value)}
          />
          <button className="textarea__btn" onClick={handleButton}>
            
          {!textAreaInput ?   <img className="arrow__logo" src={arrow} alt="arrow__img" /> : <img className="arrow__logo" src={vector} /> }
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNotes;
