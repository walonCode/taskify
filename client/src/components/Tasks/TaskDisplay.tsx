import { useContext } from "react";
import TaskContext from "@/contexts/TaskContext";

interface Task {
  title: string;
  description: string;
  dueDate: Date;
  createdBy: string;
  status: string;
  assignedTo: string;
  team: string;
}

export default function TaskDisplay() {
  // this is the real data
  const { task } = useContext(TaskContext) || {};

  //demo data so i can fix the ui
  const demoTasks: Task[] = [
    {
      title: "Design the homepage layout",
      description: "Create a responsive design for the homepage",
      dueDate: new Date("2025-01-30"),
      createdBy: "admin",
      status: "To Do",
      assignedTo: "1",
      team: "1",
    },
    {
      title: "Implement authentication system",
      description: "Set up JWT-based authentication for the API",
      dueDate: new Date("2025-02-10"),
      createdBy: "admin",
      status: "In Progress",
      assignedTo: "2",
      team: "2",
    },
    {
      title: "Test and deploy the application",
      description: "Conduct thorough testing and deploy the app to the server",
      dueDate: new Date("2025-02-20"),
      createdBy: "admin",
      status: "To Do",
      assignedTo: "3",
      team: "3",
    },
  ];

  //   if(task!.length <= 0){
  //     return(
  //         <div>
  //             <p>No tasks avaliable at the moment</p>
  //         </div>
  //     )
  //   }
  return (
    <div>
      <section>
        <p>Avaliable task</p>
      </section>
      <main>
        {demoTasks.map((task) => (
          <div key={task.assignedTo}>
            <p>Title: {task.title}</p>
            <p>Description : {task.description}</p>
            <div>
                <p>status: {task.status}</p>
            </div>
            <div>
              <p>createdBy: {task.createdBy}</p>
              <p>due date: {task.dueDate.toString()}</p>
            </div>
            <div>
              <p>assigned to: {task.assignedTo}</p>
              <p>team: {task.team}</p>
            </div>
            <div>
                <button>completed</button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
