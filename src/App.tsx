import { createClient } from '@supabase/supabase-js';
import { useEffect } from 'react';

const supabaseUrl = 'https://ckqaryhwxuzrsjkikguz.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrcWFyeWh3eHV6cnNqa2lrZ3V6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcyMjY2MzIsImV4cCI6MTk5MjgwMjYzMn0.slqkk8fX4JG08z8l9KZqruJTr27B4GJxurf6spe-FH0';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function App() {
  const getTasks = async () => {
    const { data: tasks, error } = await supabase.from('tasks').select('*');
    console.log(tasks, error);
  };

  const addTask = async () => {
    const { data, error } = await supabase
      .from('tasks')
      .insert([{ some_column: 'someValue', other_column: 'otherValue' }]);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}
