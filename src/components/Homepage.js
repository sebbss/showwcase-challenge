import React from "react";
import Modal from "react-modal";
import Box from "./Box";
import Button from "./Button";
import Form from "./Form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    width: "30rem",
    backgroundColor: "#999",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function Homepage() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [inputValue, setValue] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [CGPA, setCGPA] = React.useState(0);
  const [degree, setDegree] = React.useState("");
  const [field, setField] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [school, setSchool] = React.useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newSchoolData = {
      school: school.name,
      degree,
      description,
      CGPA,
      field,
      startDate,
      endDate,
    };
    var saveddata = (await JSON.parse(localStorage.getItem("data"))) || [];
    await saveddata.unshift(newSchoolData);
    console.log(newSchoolData);
    localStorage.setItem("data", JSON.stringify(saveddata));
    setIsOpen(false);
  };

  const handleSchoolInputChange = (value) => {
    setSchool(value);
  };

  const handleInputChange = (value) => {
    setValue(value);
  };

  const loadOptions = (inputValue) => {
    return fetch(
      `http://universities.hipolabs.com/search?name=${inputValue}`
    ).then((res) => res.json());
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const name = sessionStorage.getItem("name");
  const getData = JSON.parse(localStorage.getItem("data"));

  return (
    <div>
      <div className="add-education">
  <p>Welcome to {name||'anonymus user'}'s education page</p>
        <Button onClick={openModal}>Add new school</Button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Form
          handleSubmit={handleSubmit}
          school={school}
          getOptionLabel={(e) => e.name}
          getOptionValue={(e) => e.name}
          loadOptions={loadOptions}
          handleInputChange={handleInputChange}
          handleSchoolInputChange={handleSchoolInputChange}
          setDegree={(e) => setDegree(e.target.value)}
          setField={(e) => setField(e.target.value)}
          setStartDate={(e) => setStartDate(e.target.value)}
          setEndDate={(e) => setEndDate(e.target.value)}
          setDescription={(e) => setDescription(e.target.value)}
          setCGPA={(e) => setCGPA(e.target.value)}
        />
        <Button onClick={closeModal} close>
          close
        </Button>
      </Modal>
      <div className="main">
        <div className="main-side-nav">
          {getData === null ? (
            <p>NO SCHOOl DATA</p>
          ) : (
            <div>
              <p>{getData[0].school}</p>
              <p>{getData[0].description}</p>
            </div>
          )}
        </div>
        <div className="main-layout">
          {getData === null ? (
            <p>No Education</p>
          ) : (
            getData.map((education) => {
              return (
                <Box
                  field={education.field}
                  school={education.school}
                  startDate={education.startDate}
                  endDate={education.endDate}
                  description={education.description}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
