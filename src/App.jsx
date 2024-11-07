import React, { useState, useEffect } from 'react';
    import { Routes, Route, useNavigate } from 'react-router-dom';
    import { DndProvider } from 'react-dnd';
    import { HTML5Backend } from 'react-dnd-html5-backend';
    import Login from './components/Login';
    import Assessment from './components/Assessment';
    import Header from './components/Header';
    import Footer from './components/Footer';

    const App = () => {
      const [authenticated, setAuthenticated] = useState(false);
      const navigate = useNavigate();

      useEffect(() => {
        if (authenticated) {
          navigate('/assessment');
        } else {
          navigate('/');
        }
      }, [authenticated, navigate]);

      return (
        <DndProvider backend={HTML5Backend}>
          <Header setAuthenticated={setAuthenticated} />
          <Routes>
            <Route path="/" element={<Login setAuthenticated={setAuthenticated} />} />
            <Route path="/assessment" element={<Assessment />} />
          </Routes>
          <Footer />
        </DndProvider>
      );
    };

    export default App;
