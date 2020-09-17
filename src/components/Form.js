import React from "react";
import AsyncSelect from "react-select/async";
function Form(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit} className="education-form">
        <div className="education-form_heading">
          <p>Add new school</p>
          <hr />
        </div>

        <div className="education-form_input_school">
          <label>Name of school</label>
          <AsyncSelect
            cacheOptions
            defaultOptions
            value={props.school}
            getOptionLabel={props.getOptionLabel}
            getOptionValue={props.getOptionLabel}
            loadOptions={props.loadOptions}
            onInputChange={props.handleInputChange}
            onChange={props.handleSchoolInputChange}
          />
        </div>
        <div className="education-form_input_description">
          <label>Description</label>
          <br />
          <input
            className="school-form description"
            required
            type="text"
            onChange={props.setDescription}
          />
        </div>
        <div className="education-form_input_GPA">
          <label>CGPA</label>
          <br />
          <input
            type="number"
            className="school-form"
            onChange={props.setCGPA}
            step=".1"
            name="quantity"
            min="1.0"
            max="5.0"
          />
        </div>

        <div className="education-form_input_degree">
          <label>Degree</label>
          <br />
          <input
            className="school-form"
            required
            type="text"
            onChange={props.setDegree}
          />
        </div>

        <div className="education-form_input">
          <label>Field of study</label>
          <br />
          <input
            className="school-form"
            required
            type="text"
            onChange={props.setField}
          />
        </div>

        <div className="education-form_input_year">
          <label>Start Year</label>
          <br />
          <input
            className="school-form"
            required
            type="date"
            id="start"
            name="trip-start"
            min="2018-01-01"
            max="2018-12-31"
            onChange={props.setStartDate}
          />
        </div>

        <div className="education-form_input_year">
          <label>End Year</label>
          <br />
          <input
            className="school-form"
            required
            type="date"
            id="start"
            name="trip-start"
            min="2018-01-01"
            max="2018-12-31"
            onChange={props.setEndDate}
          />
        </div>

        <div className="education-form_input_button">
          <input type="submit" value="Send" className="school-form btn-send" />
        </div>
      </form>
    </div>
  );
}

export default Form;
