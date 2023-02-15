import logo from './logo.svg';
import './App.css';
import UserList from './component/UserList';
function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Users</h1>
      </header>
      <UserList />
    </div>
  );
}

export default App;

