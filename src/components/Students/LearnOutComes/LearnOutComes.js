import axios from 'axios';
import { useEffect, useLayoutEffect, useState } from 'react';

function LearnOutComes({ formatTime, allClass, allClassRegistration }) {
    // danh sách giáo viên
    const [listTeacher, setListTeacher] = useState([]);
    // const [numberOfAbsences, setNumberOfAbsences] = useState([]);

    useEffect(() => {
        // let token = localStorage.getItem('token');

        axios
            .get('http://localhost:8080/user/teachers')
            .then((response) => {
                setListTeacher(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        // let numberOfAbsencesNew = [];

        // allClassRegistration.forEach((classRegistration) => {
        //     axios
        //         .get(
        //             `http://localhost:8080/attendance-status-false?attendancestatuscode=${classRegistration.attendanceStatusCode}`,
        //             {
        //                 headers: {
        //                     Authorization: 'Token ' + token,
        //                 },
        //             },
        //         )
        //         .then((response) => {
        //             numberOfAbsencesNew.push(response.data);
        //         });
        // });

        // setNumberOfAbsences(numberOfAbsencesNew);
    }, []);

    // Lấy tên giáo viên dựa trên userCode
    const getTeacherNameByTeacherCode = (teacherCode) => {
        if (listTeacher.length > 0) {
            return listTeacher.find((teacher) => teacher.userCode === teacherCode).userName;
        } else {
            return 'Không tìm thấy giáo viên trong danh sách';
        }
    };

    return (
        <>
            <div className="learn-outcomes">
                <div className="title">Thời khóa biểu của bạn</div>
                <div className="days">
                    <div className="thead">
                        <div className="tr">
                            <div className="th">STT</div>
                            <div className="th">Học phần</div>
                            <div className="th">Mã học phần</div>
                            <div className="th">Lớp học</div>
                            <div className="th">Lịch học</div>
                            <div className="th">Vắng</div>
                            <div className="th">Giáo viên</div>
                        </div>
                    </div>
                    <div className="tbody">
                        {allClass.map((classObj, index) => (
                            <div className="tr" key={index}>
                                <div className="td">{index + 1}</div>
                                <div className="td">{classObj.termCode}</div>
                                <div className="td">{classObj.termName}</div>
                                <div className="td">TC-101</div>
                                <div className="td">
                                    thứ {classObj.day} - {formatTime(classObj.startTime)} -{' '}
                                    {formatTime(classObj.endTime)}
                                </div>
                                {/* <div className="td">{numberOfAbsences[index]}</div> */}
                                <div className="td">{getTeacherNameByTeacherCode(classObj.teacherCode)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default LearnOutComes;
