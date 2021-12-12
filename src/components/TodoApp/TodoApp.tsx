import './style.css';
import { ITodo, Menu } from '../Menu/Menu';
import { useState } from 'react';
import { TodoBoard } from '../TodoBoard/TodoBoard';

export const TodoApp = (): JSX.Element => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleCreate = (todo: ITodo) => {
    setTodos((todos) => [...todos, todo]);
  };

  const handleDelete = (id: string) => {
    setTodos((todos) => todos.filter((it) => it.id !== id));
  };

  const handleComplete = (id: string, isCompleted: boolean) => {
    setTodos((todos) =>
      todos.map((it) => {
        if (it.id !== id) return it;
        else {
          return { ...it, completed: !isCompleted };
        }
      })
    );
  };

  const handleEdit = (id: string, title: string) => {
    setTodos((todos) =>
      todos.map((it) => {
        if (it.id !== id) return it;
        else {
          return { ...it, title: title };
        }
      })
    );
  };

  return (
    <div>
      <Menu onCreate={handleCreate} />
      <TodoBoard
        title="TODO"
        todos={todos.filter((it) => !it.completed)}
        onDelete={handleDelete}
        onComplete={handleComplete}
        onEdit={handleEdit}
      />
      <TodoBoard
        title="Completed"
        todos={todos.filter((it) => it.completed)}
        onDelete={handleDelete}
        onComplete={handleComplete}
        onEdit={handleEdit}
      />
    </div>
  );
};
