import "../styles/Dashboard.css"
import TaskList from '../components/TaskList';

function Dashboard() {
    return (
    <div className="App">
    <TaskList />
    {/* other components */}
    </div>
    );
}

export default Dashboard;