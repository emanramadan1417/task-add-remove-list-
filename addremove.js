import React, { useState } from "react"
function addremove() {
  const [item, setItem] = useState(1);

  return (
    <div>
      <button onClick={() => setItem(item + 1)}> Add </button>
      {item}
      <button onClick={() => setItem(item - 1)}> Remove </button>
    </div>
  );
}

export default addremove;