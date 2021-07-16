// libraries
import React from 'react';
// static
import SignUp from './SignUp/SignUp';
// styles
import './App.scss';

const App = () => {
  return (
    <header className="form-container">
      <div>
        <h1>Formik Form</h1>
        <SignUp />
      </div>
    </header>
  );
};

export default App;
