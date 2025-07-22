import './App.css';
import Tasklist from './Compenents/TaskList';
import {academicTasks, recommendedReadings, upcomingExams, classProjects, gradeReview} from './Compenents/data'


function App() {
  return (
    <div className='center'>
      <h1>Academic task management app</h1>
      <div className="App">
        <Tasklist name="Academic Tasks" templateTasks={academicTasks} />
        <Tasklist name="Recommended Readings" templateTasks={recommendedReadings} />
        <Tasklist name="Upcoming Exams" templateTasks={upcomingExams} />
        <Tasklist name="Class Projects" templateTasks={classProjects}/>
        <Tasklist name="Grade Review" templateTasks={gradeReview} />
      </div>
    </div>

  );
}

export default App;
