import { useState } from 'react';
import PopupAttendance from '../PopupAttendance/PopupAttendance';
import useFetch from '../../../hooks/useFetch';
import { formatTime } from '../../../functionCusom/functionCusom.js';

function InforClass({ classSelect }) {
    // Trạng thái popup khi ấn điểm danh
    const [statusPopup, setStatusPopup] = useState(false);

    const { listData: classInfo, loading } = useFetch(
        `http://localhost:8080/student/subject-student/${classSelect.classCode}`,
    );

    // Thay đổi trang thái khi bấm điểm danh hoặc tắt thông báo
    const changePopupMessage = () => {
        setStatusPopup(!statusPopup);
    };

    return (
        <>
            {loading === 2 && (
                <div className="inforname">
                    <div className="left">
                        <div className="item">IT2023: {classInfo.termName}</div>
                        <div className="item">Mã lớp: {classInfo.classCode}</div>
                        <div className="item">Mã học phần: {classInfo.termCode}</div>
                        <div className="item">Giáo viên: {classInfo.teacherName}</div>
                        <div className="item">
                            Thời gian: {formatTime(classInfo.startTime)} - {formatTime(classInfo.endTime)}
                        </div>
                        <div className="item">Số lần vắng: {classInfo.countAttendanceFalse}</div>
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
            )}

            {statusPopup && (
                <div className="popup-attendance">
                    <PopupAttendance changePopupMessage={changePopupMessage} />
                </div>
            )}
        </>
    );
}

export default InforClass;
