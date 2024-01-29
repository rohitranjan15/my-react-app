import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";
import ProposalPage from './components/ProposalPage/ProposalPage';
import ConfirmationPage from './components/ConfirmationPage/ConfirmationPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact component={ProposalPage} />
                <Route path="/confirmation" component={ConfirmationPage} />
            </Routes>
        </Router>
    );
}

export default App;
