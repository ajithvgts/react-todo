import React from "react";
import { createTodo, getTodos } from "../api";
import { useState } from "react";

const AddTodo = ({ setData }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const value = e.target[0]?.value;

    if (value) {
      setLoading(true);
      try {
        await createTodo({
          data: {
            todo: value,
          },
        });
        const res = await getTodos();
        e.target?.reset();
        setData(res?.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <form
              onSubmit={handleSubmit}
              className="d-flex py-3 w-100 gap-2 justify-content-center"
            >
              <input
                name="todo"
                className="form-control form-control-md w-100"
                type="text"
                placeholder="Enter Todo"
              />
              <button
                disabled={loading}
                type="submit"
                className="btn btn-primary btn-sm w-25"
              >
                Add Todo
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
