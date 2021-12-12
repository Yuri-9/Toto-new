import { ITodo } from '../Menu/Menu';
import { TodoItem } from '../TodoItem/TodoItem';
import './style.css';
interface ITodoBoard {
  title: string;
  todos: ITodo[];
  onDelete: (id: string) => void;
  onComplete: (id: string, isCompleted: boolean) => void;
  onEdit: (id: string, title: string) => void;
}

export const TodoBoard = ({
  title,
  todos,
  onDelete,
  onComplete,
  onEdit,
}: ITodoBoard): JSX.Element => {
  return (
    <div className="toto-board">
      {title}
      <ul>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onDelete={onDelete}
            onComplete={onComplete}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </div>
  );
};
