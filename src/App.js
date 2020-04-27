import React, { useState } from "react";
import "./styles.css";

const App = ({text, maxLength}) => {
  // Create a piece of state, and initialize it to `true`
  // `hidden` will hold the current value of the state,
  // and `setHidden` will let us change it
  const [hidden, setHidden] = useState(true);

  // If the text is short enough, don't bother with the
  // buttons
  if (text <= maxLength) {
    return <span>{text}</span>;
  }

  return (
    <span>
      {hidden
        ? `${text.substr(0, maxLength).trim()} ...`
        : text}
      {hidden ? (
        <a style={{'color': 'red', 'cursor': 'pointer'}} onClick={() => setHidden(false)}> read more</a>
      ) : (
        <a style={{'color': 'blue', 'cursor': 'pointer'}} onClick={() => setHidden(true)}> read less</a>
      )}
    </span>
  );
}

export default App;