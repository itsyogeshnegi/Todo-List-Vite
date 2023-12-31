import React, { useState } from "react";
import "./Todo.css";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItems = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  const deleteItem = i => {
    console.log(i);
    const updateItems = items.filter((elem, id) => {
      return id !== i;
    });
    setItems(updateItems);
  };

  const removeAll = () => {
    setItems([]);
  };
  return (
    <div className="main-div">
      <>
        <h2>Todo List</h2>
      </>
      <div className="addItems">
        <input
          type="text"
          placeholder="Your Item Name"
          value={inputData}
          onChange={e => setInputData(e.target.value)}
        />
        <button type="submit" title="Add Item" onClick={addItems}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>

      <div className="showItem">
        {items.map((elem, id) => {
          return (
            <div className="eachItem" key={id}>
              <h3>{elem}</h3>
              <i
                className="fa-solid fa-delete-left"
                id="deleteIcon"
                onClick={() => deleteItem(id)}
                title="Remove Item"></i>
            </div>
          );
        })}
      </div>

      {items.length > 1 && (
        <div className="showItem">
          <button type="submit" id="removeAll" onClick={removeAll}>
            <span>Remove All</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Todo;
