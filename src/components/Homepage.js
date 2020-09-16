import React from "react";
import Modal from "react-modal";
import AsyncSelect from "react-select/async";
import Box from "./Box";
import Button from "./Button";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function Homepage() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [inputValue, setValue] = React.useState('');
  const [degree, setDegree] = React.useState('')
  const [field, setField] = React.useState('')
  const [startDate, setStartDate] = React.useState('')
  const [endDate, setEndDate] = React.useState('')
  const [school, setSchool] = React.useState([]);
  
  

  const handleSubmit = async(event) => {
      event.preventDefault();
      const newSchoolData = {
          'school':school.name,
          degree,
          field,
          startDate,
          endDate

    }
      var saveddata = await JSON.parse(localStorage.getItem('data')) || []
      await saveddata.push(newSchoolData)
      localStorage.setItem('data', JSON.stringify(saveddata))
      setIsOpen(false);
      
  }

  const handleSchoolInputChange = value => {
    setSchool(value);
  }


  const handleInputChange = value => {
    setValue(value);
  };

  const loadOptions = (inputValue) => {
    return fetch(`http://universities.hipolabs.com/search?name=${inputValue}`).then(res => res.json());
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const name = sessionStorage.getItem("name");
  const getData = JSON.parse(localStorage.getItem('data'))
  
  return (
  
    <div>
      <div className="add-education">
        <p>Welcome to joseph's education page</p>
        <Button className="btn-add" id="btn-add" onClick={openModal}>
          Add new school
        </Button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <p>Add new school</p>
          <hr />
          <label>Name of school</label>
          <br />
          <AsyncSelect
            cacheOptions
            defaultOptions
            value={school}
            getOptionLabel={(e) => e.name}
            getOptionValue={(e) => e.name}
            loadOptions={loadOptions}
            onInputChange={handleInputChange}
            onChange={handleSchoolInputChange}
          />
          
          <br />
          <label>Degree</label>
          <br />
          <input className="school-form" required type='text' onChange={e=>setDegree(e.target.value)}/>
          <br />
          <label>Field of study</label>
          <br />
          <input className="school-form" required type='text'onChange={e=>setField(e.target.value)}/>
          <br />
          <label>Start Year</label>
          <br />
          <input className="school-form" required type='text' onChange={e=>setStartDate(e.target.value)}/>
          <br />
          <label>End Year</label>
          <br />
          <input className="school-form" required type='text' onChange={e=>setEndDate(e.target.value)}/>
          <br />
          <button type='submit'>submit</button>
        </form>
        <button onClick={closeModal}>close</button>
      </Modal>
      <div className="main">
        <div className="main-side-nav">
          <p>Showcase University</p>
          <p>Forward Bootcamp</p>
        </div>
        <div className="main-layout">
            {getData===null ? <p>No Education</p> 
            : 
            getData.map(education=>{
                return <Box field={education.field} school={education.school} startDate={education.startDate} endDate={education.endDate}/>
            })}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
