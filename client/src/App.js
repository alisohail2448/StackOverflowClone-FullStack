import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router } from 'react-router-dom'
import AllRoutes from './AllRoutes';
import { useDispatch } from 'react-redux';
import { fetchAllQuestions } from './actions/questionAction';
import { useEffect } from 'react';
import { fetchAllUsers } from './actions/userActrion';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(fetchAllQuestions()) 
   dispatch(fetchAllUsers())
  }, [dispatch])
  


  return (
    <div className="App">
    <Router>
    <NavBar/>
    <AllRoutes/>
    </Router>
    </div>
  );
}

export default App;
