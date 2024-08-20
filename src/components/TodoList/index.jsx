import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ data, setData, loading }) => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div
          style={{ minHeight: "80vh" }}
          className="row justify-content-center bg-light rounded-3 py-3"
        >
          <div className="col-8">
            <div className="w-100 flex-column d-flex">
              <div className="d-flex w-100 justify-content-between align-items-center">
                {!!data?.length ? (
                  <span>{data?.length} Todos</span>
                ) : (
                  <span>No Todos Found!</span>
                )}
                <div className="d-flex align-items-center">
                  {loading && (
                    <div className="d-flex me-2">
                      <div
                        className="spinner-border spinner-border-sm"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  )}
                  {/* <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="form-select form-select-md"
                  >
                    <option value={"all"}>All</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                  </select> */}
                </div>
              </div>
              <div className="d-flex flex-column w-100 mt-3 gap-2">
                {data?.map((el) => (
                  <TodoItem setData={setData} key={el?.id} data={el} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
