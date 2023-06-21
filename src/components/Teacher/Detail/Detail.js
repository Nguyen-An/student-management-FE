import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClassInformation from '../ClassInformation/ClassInformation';
import AttendanceInformation from '../AttendanceInformation/AttendanceInformation';
import Notification from '../../Students/Notification/Notification';
import Nav from '../../Nav/Nav';

function Detail({ classObj }) {
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
                        <Route path="/" element={<ClassInformation classObj={classObj} />} />
                        <Route path="/attendance-information" element={<AttendanceInformation classObj={classObj} />} />
                        <Route path="/notification" element={<Notification teacher={true} />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default Detail;
