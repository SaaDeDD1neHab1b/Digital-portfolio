import './App.css';
import Tasklist from './Compenents/TaskList';


let academicTasks = [
  { id: 0, title: 'Study for exams', desc: 'Review notes and practice problems', completed: false },
  { id: 1, title: 'Complete assignments', desc: 'Finish all pending homework', completed: false },
  { id: 2, title: 'Prepare for presentations', desc: 'Create slides and practice speaking', completed: false },
  { id: 3, title: 'Read textbooks', desc: 'Read assigned chapters for understanding', completed: false },
  { id: 4, title: 'Group study session', desc: 'Meet with classmates to discuss topics', completed: false }
];

let recommendedReadings = [
  { id: 0, title: 'Read "To Kill a Mockingbird"', desc: 'Analyze themes and characters', completed: false },
  { id: 1, title: 'Study "1984"', desc: 'Discuss its relevance today', completed: false },
  { id: 2, title: 'Explore "Pride and Prejudice"', desc: 'Focus on social commentary', completed: false },
  { id: 3, title: 'Review "The Great Gatsby"', desc: 'Examine symbolism and motifs', completed: false },
  { id: 4, title: 'Read "Moby Dick"', desc: 'Understand its historical context', completed: false }
];

let upcomingExams = [
  { id: 0, title: 'Math Exam', desc: 'Covers chapters 1-5', completed: false },
  { id: 1, title: 'History Test', desc: 'Focus on World War II', completed: false },
  { id: 2, title: 'Science Quiz', desc: 'Review the periodic table', completed: false },
  { id: 3, title: 'Literature Final', desc: 'Analyze major works studied', completed: false },
  { id: 4, title: 'Geography Exam', desc: 'Map skills and country locations', completed: false }
];

let classProjects = [
  { id: 0, title: 'Science Fair Project', desc: 'Conduct an experiment and present findings', completed: false },
  { id: 1, title: 'History Presentation', desc: 'Create a visual presentation on a historical event', completed: false },
  { id: 2, title: 'Art Portfolio', desc: 'Compile and showcase artwork', completed: false },
  { id: 3, title: 'Group Research Paper', desc: 'Collaborate on a topic and write a paper', completed: false },
  { id: 4, title: 'Book Report', desc: 'Summarize and analyze a chosen book', completed: false }
];

let gradeReview = [
  { id: 0, title: 'Review Math Grades', desc: 'Analyze strengths and weaknesses', completed: false },
  { id: 1, title: 'Discuss Feedback with Teacher', desc: 'Schedule a meeting to go over grades', completed: false },
  { id: 2, title: 'Plan for Improvement', desc: 'Set goals for the next grading period', completed: false },
  { id: 3, title: 'Reflect on Study Habits', desc: 'Evaluate what worked and what didn’t', completed: false },
  { id: 4, title: 'Seek Tutoring if Needed', desc: 'Find resources for additional help', completed: false }
];


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
