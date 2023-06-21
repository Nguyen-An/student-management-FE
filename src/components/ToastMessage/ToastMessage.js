import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineExclamationCircle } from 'react-icons/ai';
import './ToastMessage.scss';
import { useState } from 'react';

function ToastMessage() {
    const [role, setRole] = useState({
        type: 'warning',
        title: 'Cảnh báo',
        text: 'Đang xuất hiện cảnh báo',
        icon: <AiOutlineExclamationCircle className="icon" />,
        backgroundColor: '#ed991d',
    });

    const roles = [
        {
            type: 'error',
            title: 'Thất bại',
            text: 'Thêm mới dữ liệu thất bại',
            icon: <AiOutlineCloseCircle className="icon" />,
            backgroundColor: '#e14d45',
        },
        {
            type: 'success',
            title: 'Thành công',
            text: 'Thêm mới dữ liệu thành công',
            icon: <AiOutlineCheckCircle className="icon" />,
            backgroundColor: '#2ecc71',
        },
        {
            type: 'warning',
            title: 'Cảnh báo',
            text: 'Đang xuất hiện cảnh báo',
            icon: <AiOutlineExclamationCircle className="icon" />,
            backgroundColor: '#ed991d',
        },
    ];

    return (
        <>
            <div className="toast-message" style={{ backgroundColor: role.backgroundColor }}>
                {role.icon}
                <div className="content">
                    <div className="title">{role.title}</div>
                    <div className="text">{role.text}</div>
                </div>
            </div>
        </>
    );
}

export default ToastMessage;
