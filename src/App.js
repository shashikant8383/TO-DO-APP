import React, { useState } from 'react';
import "./App.css";
import TodoInput from './components/TodoInput';
import Todolist from './components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addList = (inputText) => {
    if (inputText !== '') {
      setListTodo([...listTodo, inputText]);
      setEditingIndex(null);
    }
  }

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1)
    setListTodo([...newListTodo])
  }

  const handleEditClick = (index) => {
    setEditingIndex(index);
  }

  const handleEditSave = (index, editedText) => {
    let newListTodo = [...listTodo];
    newListTodo[index] = editedText;
    setListTodo([...newListTodo]);
    setEditingIndex(null); 
  }

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">TODO List</h1>
        <hr />
        {listTodo.map((listItem, i) => (
          <Todolist
            key={i}
            index={i}
            item={listItem}
            deleteItem={deleteListItem}
            isEditing={editingIndex === i}
            onEditClick={handleEditClick}
            onEditSave={handleEditSave}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
