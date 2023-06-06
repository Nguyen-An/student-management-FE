import { useState } from 'react';
import PopupAttendance from '../PopupAttendance/PopupAttendance';

function InforClass() {
    // Trạng thái popup khi ấn điểm danh
    const [statusPopup, setStatusPopup] = useState(false);

    // Thay đổi trang thái khi bấm điểm danh hoặc tắt thông báo
    const changePopupMessage = () => {
        setStatusPopup(!statusPopup);
    };

    return (
        <>
            <div className="inforname">
                <div className="left">
                    <div className="item">IT2023: Tin học đại cương</div>
                    <div className="item">Mã lớp: 123456</div>
                    <div className="item">Mã học phần: MU12123</div>
                    <div className="item">Giáo viên: Lê Thị Hoa</div>
                    <div className="item">Sỹ số: 44 học sinh</div>
                    <div className="item">Thời gian: 6h45 - 11h10</div>
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
