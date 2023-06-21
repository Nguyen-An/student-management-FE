import { useEffect, useState } from 'react';
import PopupAttendance from '../PopupAttendance/PopupAttendance';
import useFetch from '../../../hooks/useFetch';
import {
    formatTime,
    checkLession,
    getLocation,
    checkTime,
    isWithin100m,
} from '../../../functionCusom/functionCusom.js';
import axios from 'axios';

function InforClass({ classSelect }) {
    // Trạng thái popup khi ấn điểm danh
    const [statusPopup, setStatusPopup] = useState(false);
    const [isActiveAttendance, setIsActiveAttendance] = useState(false);

    // Thông tin vị trí cần kiểm tra
    const [checkLocation, setCheckLocation] = useState({
        latitude: '',
        longitude: '',
    });

    // thông tin vị trí hiện tại
    const [location, setLocation] = useState({
        latitude: '',
        longitude: '',
    });

    const lessionNumber = checkLession();

    useEffect(() => {
        // Lấy thông tin vị trí
        const fetchLocation = async () => {
            try {
                const coords = await getLocation();
                setLocation({
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                });
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchLocation();

        // Kiểm tra có mã điểm danh không

        // kiểm tra xem đã có mã của buổi học này và đang trong thời gian được phép điểm danh không
        axios
            .get(
                `http://localhost:8080/teacher/class/attendance?classCode=${classSelect.classCode}&lessionNumber=${lessionNumber}`,
            )
            .then((data) => {
                try {
                    //Check thời gian
                    const check = checkTime(data.data[0].updateAt, 10);

                    if (data.data[0].lessionNumber === lessionNumber && check) {
                        // lấy thông tin vị trí cần check
                        let checkLc = JSON.parse(data.data[0].locationInformation);
                        setCheckLocation({
                            latitude: checkLc.latitude,
                            longitude: checkLc.longitude,
                        });

                        //Active button điểm danh
                        setIsActiveAttendance(true);
                    }
                } catch (error) {}
            });
    }, []);

    const { listData: classInfo, loading } = useFetch(
        `http://localhost:8080/student/subject-student/${classSelect.classCode}`,
    );

    // Thực hiện hành động điểm danh
    const handleAttendance = async () => {
        try {
            let token = localStorage.getItem('token');

            if (!(location.latitude && location.longitude)) {
                alert('Hãy bật định vị và đợi 1 chút rồi thử lại');
                return;
            }

            // Kiểm tra xem đã điểm danh chưa
            let takeAttendance = await axios.get(
                `http://localhost:8080/student/take-attendance?classCode=${classSelect.classCode}&lessonNumber=${lessionNumber}`,
                {
                    headers: { Authorization: 'Token ' + token },
                },
            );

            if (takeAttendance.data.length > 0) {
                if (takeAttendance.data[0].status === 1) {
                    alert('Bạn đã điểm danh rồi');
                    return;
                }
            }

            // Kiểm tra xem có thuộc phạm vi cho phép không
            if (!isWithin100m(location.latitude, location.longitude, checkLocation.latitude, checkLocation.longitude)) {
                alert('bạn không nằm trong phạm vi lớp học');
                return;
            }

            // Thực hiện điểm danh
            await axios.post(
                'http://localhost:8080/student/take-attendance',
                {
                    classCode: classSelect.classCode,
                    lessonNumber: lessionNumber,
                    status: 1,
                },
                {
                    headers: { Authorization: 'Token ' + token },
                },
            );
        } catch (error) {
            alert('Điểm danh thất bại');
        }
    };

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
                            <div
                                className={isActiveAttendance ? 'btn active' : 'btn'}
                                onClick={() => {
                                    if (isActiveAttendance) handleAttendance();
                                }}
                            >
                                Điểm danh
                            </div>
                            <div className="btn ">Bài tập</div>
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
