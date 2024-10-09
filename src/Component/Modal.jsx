/* eslint-disable react/prop-types */
import "./modal.css";

function Modal({
  setShowModal,
  setColor,
  setInputValue,
  inputValue,
  color,
  createNotes,
}) {


  const handleCreatebtn = () => {
    if (!inputValue.trim()) {
      alert("Please enter a group name");
      return;
    }
    
    if (!color) {
      alert("Please select a color");
      return;
    }


    createNotes();
  };

  return (
    <>
      <div onClick={() => setShowModal(false)} className="overlay__container">
        {" "}
      </div>

      <div className="overlay">
        <div className="content">
          <h3 className="modal__title">Create New Group</h3>
          <div className="input__wrapper">
            <label className="input__title">Group Name</label>
            <input
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              type="text"
              name="name"
              placeholder="Enter group name"
            />
          </div>
          <div className="colors">
            <p className="color__heading">Choose colour</p>
            <div
              tabIndex={0}
              onClick={() => setColor("#B38FBA")}
              className="color--1 color"
            ></div>

            <div
              tabIndex={0}
              onClick={() => setColor("#FF79F2")}
              className="color--2 color"
            ></div>

            <div
              tabIndex={0}
              onClick={() => setColor("#43E6FC")}
              className="color--3 color"
            ></div>

            <div
              tabIndex={0}
              onClick={() => setColor("#F19576")}
              className="color--4 color"
            ></div>

            <div
              tabIndex={0}
              onClick={() => setColor("#0047FF")}
              className="color--5 color"
            ></div>

            <div
              tabIndex={0}
              onClick={() => setColor("#6691FF")}
              className="color--6 color"
            ></div>
          </div>
          <button onClick={handleCreatebtn} className="modal__btn">
            Create
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
