import axios from 'axios';
import './App.scss';

import Login from './views/Login/Login.js';
import Student from './views/Student/Student.js';
import Teacher from './views/Teacher/Teacher.js';
import { useEffect, useState } from 'react';

function App() {
    const [status, setStatus] = useState('login');

    const handleLogin = (newStatus) => {
        setStatus(newStatus);
    };
    useEffect(() => {
        try {
            const token = localStorage.getItem('token');

            axios
                .get('http://localhost:8080', {
                    headers: {
                        Authorization: 'Token ' + token,
                    },
                })
                .then((data) => {
                    if (data.data === 1) {
                        setStatus('student');
                    } else if (data.data === 2) {
                        setStatus('teacher');
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }
    }, []);
    return (
        <div className="App">
            {status === 'login' && <Login handleLogin={handleLogin} />}
            {status === 'student' && <Student />}
            {status === 'teacher' && <Teacher />}
        </div>
    );
}

export default App;
