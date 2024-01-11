import { useState } from "react";
import "./NewTaskForm.css";
import { Container } from "react-bootstrap";

const NewTaskForm = function (props) {
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDesc, setNewTaskDesc] = useState("");

  return (
    <Container>
      <div class="input-group mb-2">
        <input
          type="text"
          class="form-control inputCustom"
          id="inputTaskName"
          placeholder="Task name..."
          aria-label="newTaskForm"
          aria-describedby="button-addon1"
          newtaskname={newTaskName}
          onChange={(e) => {
            e.preventDefault();
            setNewTaskName(e.target.newTaskName);
            console.log(newTaskName);
          }}
        />
        <button
          class="btn btn-outline-light btnCustom addBtnCustom"
          type="button"
          id="button-addon1"
          onClick={
            () => {
              props.addTask(newTaskName, newTaskDesc);
              console.log(newTaskName, newTaskDesc);
            }
            //   props.addTask((tasks) => {
            //     const newTask = {
            //       id: "2",
            //       status: "awaits",
            //       taskName: "task name",
            //       taskDesc: "description",
            //     };
            //     const newTasks = [...tasks, newTask]; // ...разворачиваю массив, добавляю объект newTask, сворачиваю обратно в массив
            //     return newTasks;
            //   });
            // }
          }
        >
          Add a new task
        </button>
      </div>
      <input
        type="text"
        class="form-control inputCustom"
        id="inputTaskDesc"
        placeholder="Task description..."
        aria-label="newTaskForm"
        aria-describedby="addon-wrapping"
        newtaskdesc={newTaskDesc}
        onChange={(e) => {
          setNewTaskDesc(e.target.newTaskDesc);
          console.log(newTaskDesc);
        }}
      />
    </Container>
  );
};

export default NewTaskForm;
