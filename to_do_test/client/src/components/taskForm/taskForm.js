import "./taskForm.css";

const TaskForm = (props) => {
  return (
    <>
      {props.tasks.map((task) => (
        <div className="task" key={task.id}>
          {/* уникальный ключ задачи - ее айди*/}
          <div className="buttonsTask">
            <div className="btn-group" role="group" aria-label="taskState">
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                autoComplete="off"
              />
              <label
                className="btn btn-outline-light btnCustom btn-sm"
                id="awaits"
                htmlFor="btnradio1"
              >
                Awaits
              </label>
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
                autoComplete="off"
              />
              <label
                className="btn btn-outline-light btnCustom btn-sm"
                id="inProgress"
                htmlFor="btnradio2"
              >
                In progress
              </label>
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio3"
                autoComplete="off"
              />
              <label
                className="btn btn-outline-light btnCustom btn-sm"
                id="Done"
                htmlFor="btnradio3"
              >
                Done
              </label>
            </div>
            <div className="btn-group" role="group" aria-label="taskEdit">
              <button
                className="btn btn-outline-light btnCustom btn-sm"
                id="editTask"
              >
                Edit
              </button>
              <button
                className="btn btn-outline-light btnCustom btn-sm"
                id="deleteTask"
              >
                Delete
              </button>
            </div>
          </div>

          <div className="card card-body cardCustom">
            <h6 className="card-title cardTitleCustom">
              {task.taskName}
              {/*из пропсов имя задачи*/}
            </h6>
            <p className="card card-text cardBodyCustom cardCustom">
              {task.taskDesc}
              {/*из пропсов описание задачи*/}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TaskForm;
