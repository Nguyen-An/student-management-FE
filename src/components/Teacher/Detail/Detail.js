import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import ClassInformation from '../ClassInformation/ClassInformation';
import AttendanceInformation from '../AttendanceInformation/AttendanceInformation';
import Notification from '../../Students/Notification/Notification';
import Nav from '../../Nav/Nav';

function Detail() {
    const listTo = [
        {
            to: '/',
            text: 'Thông tin lớp học',
        },
        {
            to: '/attendance-information',
            text: 'Thông tin điểm danh',
        },
        {
            to: '/notification',
            text: 'Thông báo',
        },
    ];
    return (
        <>
            <Router>
                <Nav listTo={listTo} />
                <div className="body">
                    <Routes>
                        <Route path="/" element={<ClassInformation />} />
                        <Route path="/attendance-information" element={<AttendanceInformation />} />
                        <Route path="/notification" element={<Notification teacher={true} />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default Detail;
