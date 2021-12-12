import { useState } from 'react';
import './style.css';
import { v4 as uuidv4 } from 'uuid';

export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

interface IMenu {
  onCreate: (todo: ITodo) => void;
}

export const Menu = ({ onCreate }: IMenu): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    value ? setIsValid(true) : setIsValid(false);
    setValue(value);
  };

  const handleCreate = () => {
    if (!isValid) return;
    const todo: ITodo = {
      id: uuidv4(),
      title: value,
      completed: false,
    };
    onCreate(todo);
    setValue('');
    setIsValid(false);
  };

  return (
    <div className="menu">
      <label className="menu__label" htmlFor="input-menu">
        Name
        <input
          className="menu__input"
          type="text"
          id="input-menu"
          value={value}
          onChange={handleChange}
        />
      </label>
      <button className="menu__button" onClick={handleCreate}>
        Create
      </button>
    </div>
  );
};
