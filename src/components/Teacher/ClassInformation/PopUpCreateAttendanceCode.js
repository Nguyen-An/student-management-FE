import { AiOutlineClose } from 'react-icons/ai';
import { checkLession } from '../../../utils/functionCusom/functionCusom.js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { getLocation } from '../../../utils/functionCusom/functionCusom.js';

function PopUpCreateAttendanceCode({ handlePopUp, classObj }) {
    const [location, setLocation] = useState({
        latitude: '',
        longitude: '',
    });

    const lessionNumber = checkLession();

    useEffect(() => {
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
    }, []);

    const handleCreateAttendance = async () => {
        try {
            // Kiểm tra xem đã lấy được vị trí chưa
            if (!(location.latitude && location.longitude)) {
                alert('Đợi 1 chút rồi thử lại');
                return;
            }
            let locationInformation = JSON.stringify(location);

            // kiểm tra xem đã có mã của buổi học này chưa
            let data = await axios.get(
                `http://localhost:8080/teacher/class/attendance?classCode=${classObj.classCode}&lessionNumber=${lessionNumber}`,
            );

            if (data.data.length > 0) {
                await axios.put(`http://localhost:8080/teacher/class/attendance`, {
                    classCode: classObj.classCode,
                    lessionNumber: lessionNumber,
                    locationInformation: locationInformation,
                });
            } else {
                await axios.post(`http://localhost:8080/teacher/class/attendance`, {
                    classCode: classObj.classCode,
                    lessionNumber: lessionNumber,
                    locationInformation: locationInformation,
                });
            }
            handlePopUp(0);
        } catch (error) {
            console.log(error);
            alert('tạo mã thất bại');
        }
    };

    return (
        <>
            <div className="popup-create-attendance">
                <div className="container">
                    <AiOutlineClose className="icon-close" onClick={() => handlePopUp(0)} />
                    <div className="subject">Môn học: {classObj.termName}</div>
                    <div className="lession-number">Buổi học số: {lessionNumber}</div>
                    <div className="btn-create" onClick={() => handleCreateAttendance()}>
                        Tạo mã
                    </div>
                </div>
            </div>
        </>
    );
}

export default PopUpCreateAttendanceCode;
