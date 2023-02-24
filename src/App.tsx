// import { createClient } from '@supabase/supabase-js';
// import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// const supabaseUrl = 'https://ckqaryhwxuzrsjkikguz.supabase.co';
// const supabaseKey =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrcWFyeWh3eHV6cnNqa2lrZ3V6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcyMjY2MzIsImV4cCI6MTk5MjgwMjYzMn0.slqkk8fX4JG08z8l9KZqruJTr27B4GJxurf6spe-FH0';
// const supabase = createClient(supabaseUrl, supabaseKey);

export default function App() {
  // const [tasks, setTasks] = useState<any>([]);
  // const getTasks = async () => {
  //   const { data: tasks, error } = await supabase.from('tasks').select('*');
  //   setTasks(tasks);
  //   console.log(tasks, error);
  // };

  // const addTask = async () => {
  //   const { data, error } = await supabase
  //     .from('tasks')
  //     .insert([{ task_name: 'someValue', created_at: new Date() }]);
  //   console.log(data, error);
  // };

  // const deleteTask = async (id: number) => {
  //   const { data, error } = await supabase.from('tasks').delete().eq('id', id);
  //   console.log(data, error);
  // };

  // useEffect(() => {
  //   getTasks();
  // }, []);

  return (
    <div className="relative h-screen w-screen bg-neutral-200">
      <div className="flex h-16 items-center bg-neutral-300 px-4">
        <h1 className="text-2xl font-bold">PwApp</h1>
      </div>
      {/* {tasks.map((task: any) => {
        return <li key={task.id}>{task.task_name}</li>;
      })}
      <div className="p-4">
        <button
          className="rounded-lg bg-red-400 px-4 py-2 text-white hover:bg-red-600"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
      <div>
        <button onClick={() => deleteTask(2)}>Delete Task</button>
      </div> */}
      <motion.div
        className="h-20 w-20 rounded-md bg-red-500"
        drag="x"
        whileHover={{ scale: 1.2 }}
        dragConstraints={{ left: -100, right: 100 }}
        whileTap={{ scale: 1.1 }}
      />
      <div className="absolute bottom-0 h-14 w-full bg-neutral-400"></div>
    </div>
  );
}
