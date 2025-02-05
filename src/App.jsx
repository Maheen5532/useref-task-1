import { useRef } from "react";
import './App.css'

function App() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div class="main-dev">
      <div class="container" >
        <input
          ref={inputRef}
          type="text"
          placeholder="Type something..."
        ></input>
        <button
          onClick={handleFocus}
        >
          Focus Input
        </button>
      </div>
    </div>
  );
}

export default App;
