import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <footer className="text-center bg-dark text-white p-3">
       <p>Copyright@2024 | All rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
