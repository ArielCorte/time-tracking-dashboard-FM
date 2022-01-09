import './App.css';
import TaskCard from './TaskCard';
import ProfilePreview from './ProfilePreview';

function App() {
  return (
    <div className='dashboard-grid'>
      <ProfilePreview/>
      <TaskCard task='Work'/>
      <TaskCard task='Play'/>
      <TaskCard task='Study'/>
      <TaskCard task='Exercise'/>
      <TaskCard task='Social'/>
      <TaskCard task='Self-care'/>
    </div>
  );
}

export default App;
