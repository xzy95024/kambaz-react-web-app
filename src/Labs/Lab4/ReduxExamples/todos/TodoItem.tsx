
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import {Button,ListGroup} from "react-bootstrap";
export default function TodoItem({ todo }: {    todo: { id: string; title: string };})  {
    const dispatch = useDispatch();
    return (
        <ListGroup.Item
            key={todo.id}
            className="d-flex justify-content-between align-items-center"
        >
            {/* Left side: title */}
            <span className="me-2">{todo.title}</span>

            {/* Right side: buttons */}

            <div>
                <Button
                    variant="danger"
                    className="ms-2"
                    onClick={() => dispatch(setTodo(todo))}
                    id="wd-set-todo-click"
                >
                    Edit
                </Button>
                <Button
                    variant="primary"
                    className="ms-2"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                    id="wd-delete-todo-click"
                >
                    Delete
                </Button>

            </div>
        </ListGroup.Item>
    );}
