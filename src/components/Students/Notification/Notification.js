import { useEffect, useState } from 'react';
import CreateNotification from './CreateNotification';
import axios from 'axios';

function Notification({ allClass, teacher = false }) {
    const [listNotification, setListNotification] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        axios
            .get('http://localhost:8080/student/notification', {
                headers: { Authorization: 'Token ' + token },
            })
            .then((response) => {
                setListNotification(response.data);
            });
    }, []);

    // Format thời gian
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
    };

    // lấy tên lớp theo mã lớp
    const getClassNameByClassCode = (classCode) => {
        const className = allClass.find((classs) => classs.classCode === classCode).termName;
        return className;
    };

    return (
        <>
            <div className="notification">
                {teacher && <CreateNotification />}
                <div className="title">Thông báo</div>
                <div className="notification-items">
                    {listNotification.map((notification, index) => (
                        <div className="item" key={index}>
                            <div className="content">
                                <span>[{getClassNameByClassCode(notification.classCode)}]</span> {notification.content}
                            </div>
                            <div className="time">{formatDate(notification.updateAt)}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Notification;
