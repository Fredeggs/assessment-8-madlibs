const MadlibStory = ({ words, reset }) => {
  return (
    <div>
      <p>
        There once was a {words.color} {words.noun1} who loved a{" "}
        {words.adjective} {words.noun2}
      </p>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default MadlibStory;
