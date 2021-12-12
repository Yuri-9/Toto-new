import { useState } from 'react';
import { ITodo } from '../Menu/Menu';
import './style.css';

interface ITodoItem {
  todo: ITodo;
  onDelete: (id: string) => void;
  onComplete: (id: string, isCompleted: boolean) => void;
  onEdit: (id: string, title: string) => void;
}

export const TodoItem = ({ todo, onDelete, onComplete, onEdit }: ITodoItem): JSX.Element => {
  const [isChecked, setIsChecked] = useState<boolean>(todo.completed);
  const [title, setTitle] = useState<string>(todo.title);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const id = todo.id;

  const handleDelete = () => {
    onDelete(id);
  };
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onComplete(id, isChecked);
  };

  const handleEdit = () => {
    if (isEdit) {
      onEdit(id, title);
    }
    setIsEdit(!isEdit);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
  };
  return (
    <li className={`todo-item ${isChecked && 'completed'}`}>
      <input type="checkbox" onChange={handleChecked} checked={isChecked} />
      {!isEdit ? (
        <div className="todo-item__title">{title}</div>
      ) : (
        <input
          className="todo-item__input_title"
          type="text"
          value={title}
          autoFocus
          onChange={handleChange}
        />
      )}
      <button className="todo-item__button" onClick={handleEdit}>
        {!isEdit ? 'Edit' : 'Save'}
      </button>
      <button className="todo-item__button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};
