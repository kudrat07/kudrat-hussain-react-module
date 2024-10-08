import "./addNotes.css";
import arrow from "../assets/Arrow.png";

const AddNotes = () => {
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
  const currentMont = monthsName[date.getMonth()];

  let hour = date.getHours();
  hour = hour % 12;
  hour = hour ? hour : 12;

  const minute = date.getMinutes();
  const formattedMinute = minute < 10 ? "0" + minute : minute;
  const ampm = hour >= 12 ? "PM" : "AM";

  return (
    <>
      <div className="container">
        <nav className="navbar">
          <div className="nav__container">
            <div className="nav__circle">P</div>
            <h3 className="nav__title">My Notes</h3>
          </div>
        </nav>
        <div className="notes__content">
          <div className="notes__content--description">
            <p className="notes__para">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              unde neque excepturi voluptas esse aliquid laboriosam sit,
              explicabo blanditiis autem quos libero consequuntur pariatur sunt
              alias a eius ex voluptatem nihil, aliquam porro, dicta veniam. Ab,
              asperiores sunt, harum quisquam maiores blanditiis, corporis
              explicabo ullam eius debitis nostrum deserunt fugit
            </p>
            <div className="date__wrapper">
              <p className="date">
                {`${currentDate} ${currentMont.slice(0, 3)} ${year}`}{" "}
                <span className="dot">.</span>
                {`${hour}:${formattedMinute} ${ampm}`}
              </p>
            </div>
          </div>
          <div className="notes__content--description">
            <p className="notes__para">
              npm run Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Natus unde neque excepturi voluptas esse aliquid laboriosam sit,
              explicabo blanditiis autem quos libero consequuntur pariatur sunt
              alias a eius ex voluptatem nihil, aliquam porro, dicta veniam. Ab,
              asperiores sunt, harum quisquam maiores blanditiis, corporis
              explicabo ullam eius debitis nostrum deserunt fugit.
            </p>
          </div>
          <div className="notes__content--description">
            <p className="notes__para">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              unde neque excepturi voluptas esse aliquid laboriosam sit,
              explicabo blanditiis autem quos libero consequuntur pariatur sunt
              alias a eius ex voluptatem nihil, aliquam porro, dicta veniam. Ab,
              asperiores sunt, harum quisquam maiores blanditiis, corporis
              explicabo ullam eius debitis nostrum deserunt fugit.
            </p>
          </div>
          <div className="notes__content--description">
            <p className="notes__para">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              unde neque excepturi voluptas esse aliquid laboriosam sit,
              explicabo blanditiis autem quos libero consequuntur pariatur sunt
              alias a eius ex voluptatem nihil, aliquam porro, dicta veniam. Ab,
              asperiores sunt, harum quisquam maiores blanditiis, corporis
              explicabo ullam eius debitis nostrum deserunt fugit.
            </p>
          </div>
          <div className="notes__content--description">
            <p className="notes__para">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              unde neque excepturi voluptas esse aliquid laboriosam sit,
              explicabo blanditiis autem quos libero consequuntur pariatur sunt
              alias a eius ex voluptatem nihil, aliquam porro, dicta veniam. Ab,
              asperiores sunt, harum quisquam maiores blanditiis, corporis
              explicabo ullam eius debitis nostrum deserunt fugit.
            </p>
          </div>
          <div className="notes__content--description">
            <p className="notes__para">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              unde neque excepturi voluptas esse aliquid laboriosam sit,
              explicabo blanditiis autem quos libero consequuntur pariatur sunt
              alias a eius ex voluptatem nihil, aliquam porro, dicta veniam. Ab,
              asperiores sunt, harum quisquam maiores blanditiis, corporis
              explicabo ullam eius debitis nostrum deserunt fugit.
            </p>
          </div>
          <div className="notes__content--description">
            <p className="notes__para">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              unde neque excepturi voluptas esse aliquid laboriosam sit,
              explicabo blanditiis autem quos libero consequuntur pariatur sunt
              alias a eius ex voluptatem nihil, aliquam porro, dicta veniam. Ab,
              asperiores sunt, harum quisquam maiores blanditiis, corporis
              explicabo ullam eius debitis nostrum deserunt fugit.
            </p>
          </div>
          <div className="notes__content--description">
            <p className="notes__para">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              unde neque excepturi voluptas esse aliquid laboriosam sit,
              explicabo blanditiis autem quos libero consequuntur pariatur sunt
              alias a eius ex voluptatem nihil, aliquam porro, dicta veniam. Ab,
              asperiores sunt, harum quisquam maiores blanditiis, corporis
              explicabo ullam eius debitis nostrum deserunt fugit.
            </p>
          </div>
          <div className="notes__content--description">
            <p className="notes__para">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              unde neque excepturi voluptas esse aliquid laboriosam sit,
              explicabo blanditiis autem quos libero consequuntur pariatur sunt
              alias a eius ex voluptatem nihil, aliquam porro, dicta veniam. Ab,
              asperiores sunt, harum quisquam maiores blanditiis, corporis
              explicabo ullam eius debitis nostrum deserunt fugit.
            </p>
          </div>
          <div className="notes__content--description">
            <p className="notes__para">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              unde neque excepturi voluptas esse aliquid laboriosam sit,
              explicabo blanditiis autem quos libero consequuntur pariatur sunt
              alias a eius ex voluptatem nihil, aliquam porro, dicta veniam. Ab,
              asperiores sunt, harum quisquam maiores blanditiis, corporis
              explicabo ullam eius debitis nostrum deserunt fugit.
            </p>
          </div>
          <div className="notes__content--description">
            <p className="notes__para">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              unde neque excepturi voluptas esse aliquid laboriosam sit,
              explicabo blanditiis autem quos libero consequuntur pariatur sunt
              alias a eius ex voluptatem nihil, aliquam porro, dicta veniam. Ab,
              asperiores sunt, harum quisquam maiores blanditiis, corporis
              explicabo ullam eius debitis nostrum deserunt fugit.
            </p>
          </div>
          <div className="notes__content--description">
            <p className="notes__para">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              unde neque excepturi voluptas esse aliquid laboriosam sit,
              explicabo blanditiis autem quos libero consequuntur pariatur sunt
              alias a eius ex voluptatem nihil, aliquam porro, dicta veniam. Ab,
              asperiores sunt, harum quisquam maiores blanditiis, corporis
              explicabo ullam eius debitis nostrum deserunt fugit.
            </p>
          </div>
          <div className="textarea__container">
            <div className="textarea__wrapper">
              <textarea
                name="name"
                id="message"
                placeholder="Enter your text here........"
                className="text"
              />
              <button className="textarea__btn">
                <img className="arrow__logo" src={arrow} alt="arrow__img" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNotes;
