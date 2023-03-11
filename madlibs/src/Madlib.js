import { useState } from "react";
import MadlibForm from "./MadlibForm";
import MadlibStory from "./MadlibStory";
const Madlib = () => {
  const [words, setWords] = useState({});
  const createStory = (formData) => {
    setWords(formData);
  };
  const resetStory = () => {
    setWords({});
  };
  return (
    <div>
      <h1>Madlibs!</h1>
      {Object.keys(words).length === 0 && (
        <MadlibForm createStory={createStory} />
      )}
      {Object.keys(words).length != 0 && (
        <MadlibStory words={words} reset={resetStory} />
      )}
    </div>
  );
};

export default Madlib;
