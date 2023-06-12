import { useEffect, useState } from 'react';
import PopupAttendance from '../PopupAttendance/PopupAttendance';
import axios from 'axios';

function InforClass({ classSelect }) {
    // Trạng thái popup khi ấn điểm danh
    const [statusPopup, setStatusPopup] = useState(false);
    const [inforTeacher, setInForTeacher] = useState({});
    // Thay đổi trang thái khi bấm điểm danh hoặc tắt thông báo
    const changePopupMessage = () => {
        setStatusPopup(!statusPopup);
    };

    useEffect(() => {
        axios.get(`http://localhost:8080/user/${classSelect.teacherCode}`).then((response) => {
            setInForTeacher(response.data[0]);
        });
    }, [classSelect]);

    return (
        <>
            <div className="inforname">
                <div className="left">
                    <div className="item">IT2023: {classSelect.termName}</div>
                    <div className="item">Mã lớp: {classSelect.classCode}</div>
                    <div className="item">Mã học phần: {classSelect.termCode}</div>
                    <div className="item">Giáo viên: {inforTeacher.userName}</div>
                    <div className="item">Sỹ số: {classSelect.number} học sinh</div>
                    <div className="item">
                        Thời gian: {classSelect.startTime} - {classSelect.endTime}
                    </div>
                    <div className="item">Số lần vắng: 3</div>
                </div>
                <div className="right">
                    <div className="outline-btn">
                        <div className="btn active" onClick={changePopupMessage}>
                            {' '}
                            Điểm danh
                        </div>
                        <div className="btn "> Bài tập</div>
                    </div>
                </div>
            </div>
            {statusPopup && (
                <div className="popup-attendance">
                    <PopupAttendance changePopupMessage={changePopupMessage} />
                </div>
            )}
        </>
    );
}

export default InforClass;
