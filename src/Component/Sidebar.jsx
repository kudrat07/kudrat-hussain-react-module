import "../Main.css";

const Sidebar = () => {
    const addGroup = () => {
        alert("button clicked")
    }
  return (
    <>
        <div className="sidebar">
          <h3 className="sidebar__title">Pocket Notes</h3>
          <div className="btn__wrapper">
            <button className="btn" onClick={addGroup}>+</button>
          </div>
        </div>
    </>
  )
}

export default Sidebar