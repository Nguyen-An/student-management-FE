import './App.scss';

import Login from './views/Login/Login.js';
import Student from './views/Student/Student.js';
import Teacher from './views/Teacher/Teacher.js';
import { useState } from 'react';

function App() {
    const [status, setStatus] = useState('student');

    return (
        <div className="App">
            {status === 'login' && <Login />}
            {status === 'student' && <Student />}
            {status === 'teacher' && <Teacher />}
        </div>
    );
}

export default App;
