import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  const handleColorChange = (event) => setColor(event.target.value);

  return (
    <div className="color-picker-container">
      <h1 id="title">Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected Color: {color}</p>
      </div>
      <label>
        <input type="color" value={color} onChange={handleColorChange} />
      </label>
    </div>
  );
}

export default ColorPicker;
