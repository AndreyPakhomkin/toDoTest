import "./main.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import TaskForm from "../taskForm/taskForm";
import NewTaskForm from "../NewTaskForm/NewTaskForm";

function Main() {
  const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   const task = {
  //     id: "1",
  //     status: "awaits",
  //     taskName: "create app",
  //     taskDesc: "Create SPA todolist",
  //   };

  //   const looadedtTasks = [task]; // таски, пришедшие с бека
  //   setTasks(looadedtTasks);
  // }, []);

  const addTask = (newTaskName, newTaskDesc) => {
    setTasks((tasks) => [
      ...tasks,
      {
        id: Date.now(),
        status: "awaits",
        taskName: newTaskName,
        taskDesc: newTaskDesc,
      },
    ]);
    alert(tasks.toString());
    return (
      <ul>
        {tasks.map((elem) => {
          return (
            <li className="taskItem" key={elem.id}>
              {elem}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <Container>
      <div className="content">
        <div className="addTask">
          <NewTaskForm addTask={addTask} />
        </div>
        <div className="container">
          <TaskForm tasks={tasks} />
        </div>
      </div>
    </Container>
  );
}

export default Main;
