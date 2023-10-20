import React, { useState } from 'react';

function Todolist(props) {
  const [editedText, setEditedText] = useState(props.item);
  const handleEditChange = (e) => {
    setEditedText(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      props.onEditSave(props.index, editedText);
    }
  };
  return (
    <li className="list-item">
      {props.isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={handleEditChange}
          onKeyPress={handleKeyPress}
        />
      ) : (
        <>
          {props.item}
          <span className='icons'>
            <i
              className="fa-solid fa-trash-can icon-delete"
              onClick={() => props.deleteItem(props.index)}
            ></i>
            <i
              className="fa-solid fa-pencil icon-edit"
              onClick={() => props.onEditClick(props.index)}
            ></i>
          </span>
        </>
      )}
    </li>
  );
}

export default Todolist;
