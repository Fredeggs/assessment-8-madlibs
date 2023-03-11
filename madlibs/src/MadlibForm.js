import { useState } from "react";
const MadlibForm = ({ createStory }) => {
  const INITIAL_FORM_DATA = {
    noun1: "",
    noun2: "",
    adjective: "",
    color: "",
  };
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createStory({ ...formData });
    console.log("submitted!");
    setFormData(INITIAL_FORM_DATA);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="noun1">
        <input
          type="text"
          name="noun1"
          id="noun1"
          placeholder="noun1"
          value={formData.noun1}
          onChange={handleChange}
        ></input>
      </label>
      <label htmlFor="noun2">
        <input
          type="text"
          name="noun2"
          id="noun2"
          placeholder="noun2"
          value={formData.noun2}
          onChange={handleChange}
        ></input>
      </label>
      <label htmlFor="adjective">
        <input
          type="text"
          name="adjective"
          id="adjective"
          placeholder="adjective"
          value={formData.adjective}
          onChange={handleChange}
        ></input>
      </label>
      <label htmlFor="color">
        <input
          type="text"
          name="color"
          id="color"
          placeholder="color"
          value={formData.color}
          onChange={handleChange}
        ></input>
      </label>
      {Object.values(formData).every((x) => x !== null && x !== "") && (
        <button onClick={handleSubmit}>Get Story!</button>
      )}
    </form>
  );
};

export default MadlibForm;
