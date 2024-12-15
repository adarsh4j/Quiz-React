import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Landing from './Landing/landing'
import Loading from '../src/loading'
import QuizPage from '../src/quiz'
function App() {
  const[loading,setLoading]= useState(true);
  useEffect(()=>{
    const timer =  setTimeout(() => {
      setLoading(false);
    }, 2000);

    return ()=> clearTimeout(timer);

  }, []);

  if(loading)
  {
    return <Loading/>
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </Router>
  )
}

export default App
