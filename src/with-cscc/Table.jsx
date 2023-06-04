import "./style.scss";
import Input from "./input";
import { useState, useEffect } from "react";

export default function Table() {
  const [fullName, setFullName] = useState("");
  const [excuse, setExcuse] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [students, setStudents] = useState([])

  const handleClick = () => {
    const newStudent = { fullName: fullName, excuse: excuse };
    setStudents([...students, newStudent]);
  };

  
  useEffect(() => {
    setIsButtonDisabled(fullName === "" || excuse === "");
  }, [fullName, excuse]);

  return (
    <div className="main-wrapper">
      <div className="flex">
        <div>
          <h3>Wall of shame</h3>
          <p>5 members</p>
        </div>
        <div className="flex input-conteiner">
          <Input type="name" onChange={(event) => setFullName(event)} />
          <Input type="excuse" onChange={(event) => setExcuse(event)} />
          <button             className={isButtonDisabled ? "disabled-button" : "enabled-button"}
 disabled={isButtonDisabled} onClick={handleClick}>
            Create
          </button>
        </div>
      </div>
      <div className="info-wrapper">
        <h6>Name</h6>
        <p>Excuse</p>
        <span>
          <p>count</p>
        </span>
      </div>
      {students.map((student) => (
        <div className="shame-wrapper">
        <h4 className="full-name">{student.fullName}</h4>
        <span className="spanForTextWidth">
          <p>{student.excuse}</p>
        </span>
        <span className="spanForCount">
          <p>3</p>
        </span>
        <span className="spanForButton">
          <button className="buttonForIncrease">Increase</button>
        </span>
      </div>
      ))}

    </div>
  );
}
