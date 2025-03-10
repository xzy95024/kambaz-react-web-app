import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import {Button, FormControl, ListGroup} from "react-bootstrap";
export default function TodoForm() {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <ListGroup.Item
            style={{
                display: "flex",
                alignItems: "center",
                // Optionally: justifyContent: "flex-start" (if you want them left-aligned)
            }}
        >
            <FormControl
                style={{ marginRight: "8px" }}
                value={todo.title}
                onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
            />
            <Button
                variant="warning"
                style={{ marginRight: "8px" }}
                onClick={() => dispatch(updateTodo(todo))}
                id="wd-update-todo-click"
            >
                Update
            </Button>
            <Button
                variant="success"
                onClick={() => dispatch(addTodo(todo))}
                id="wd-add-todo-click"
            >
                Add
            </Button>
        </ListGroup.Item>

    );}
