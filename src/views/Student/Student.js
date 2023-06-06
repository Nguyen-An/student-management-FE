import './Student.scss';
import Schedule from '../../components/Students/Schedule/Schedule';
import LearnOutComes from '../../components/Students/LearnOutComes/LearnOutComes';
import Notification from '../../components/Students/Notification/Notification';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

function Student() {
    return (
        <>
            <Router>
                <div className="container">
                    <div className="header">
                        <div className="title">
                            <div className="title-logo">
                                <img
                                    src="https://storage.googleapis.com/hust-files/5807675312963584/images/hust-logo-official_.3m.jpeg"
                                    alt="avatar"
                                />
                            </div>
                            <div className="title-info">
                                <div className="title-top">HỆ THỐNG QUẢN TRỊ ĐẠI HỌC TRỰC TUYẾN</div>
                                <div className="title-bot">
                                    ĐẠI HỌC BÁCH KHOA HÀ NỘI - TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG
                                </div>
                            </div>
                        </div>
                        <div className="avatar">
                            <img
                                src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/313928031_1857605907938653_6284185701097598776_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Z2cGsgEdC7MAX8zGymO&_nc_ht=scontent.fhan5-11.fna&oh=00_AfDCRQPoMYJdH3rzClCswemoNuHr_yvLMD4O6GHhquToyg&oe=647F7B61"
                                alt="avatar"
                            />
                            <div className="current-time">Tuần 35 (Tuần học thứ 11): 29/05 - 03/06 </div>
                        </div>
                    </div>
                    <div className="nav">
                        <NavLink
                            to="/"
                            className={(navData) => (navData.isActive ? 'nav-item-active nav-item' : 'none nav-item')}
                        >
                            Thời khóa biểu
                        </NavLink>
                        <NavLink
                            to="/learn-out-comes"
                            className={(navData) => (navData.isActive ? 'nav-item-active nav-item' : 'none nav-item')}
                        >
                            Kết quả học tập
                        </NavLink>
                        <NavLink
                            to="/notification"
                            className={(navData) => (navData.isActive ? 'nav-item-active nav-item' : 'none nav-item')}
                        >
                            Thông báo
                        </NavLink>
                    </div>
                    <div className="body">
                        <Routes>
                            <Route path="/" element={<Schedule />} />
                            <Route path="/learn-out-comes" element={<LearnOutComes />} />
                            <Route path="/notification" element={<Notification />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </>
    );
}

export default Student;
