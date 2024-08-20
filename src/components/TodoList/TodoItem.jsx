import React from "react";
import Tick from "../../Icons/Tick";
import Trash from "../../Icons/Trash";
import "./style.css";
import { useState } from "react";
import { deleteTodo, getTodos, updateTodo } from "../../api";

const TodoItem = ({ data, setData }) => {
  const [loading, setLoading] = useState(false);
  const { id, todo, completed, updatedAt } = data;

  const handleComplete = async () => {
    try {
      setLoading(true);
      await updateTodo({ id, data: { completed: true } });
      const res = await getTodos();
      setData(res?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setLoading(true);
      await deleteTodo({ id });
      const res = await getTodos();
      setData(res?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      data-completed={completed}
      className={
        "d-flex todo_item p-3 bg-white rounded-3 justify-content-between align-items-center"
      }
    >
      <div style={{ width: "90%" }} className="d-flex flex-column">
        <span className="todo_item_title text-truncate">{todo}</span>
        {completed && (
          <span className="small text-black opacity-50">
            {new Date(updatedAt).toLocaleString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </span>
        )}
      </div>
      <div className="d-none todo_item_action">
        <button
          disabled={loading}
          onClick={handleComplete}
          className="btn btn-success btn-sm todo_item_complete_btn"
        >
          <Tick width={16} height={16} />
        </button>
        <button
          disabled={loading}
          onClick={handleDelete}
          className="btn btn-danger btn-sm ms-2"
        >
          <Trash width={18} height={18} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
