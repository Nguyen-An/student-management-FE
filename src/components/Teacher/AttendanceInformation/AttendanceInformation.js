import './AttendanceInformation.scss';

function AttendanceInformation() {
    return (
        <>
            <div className="attendance-information">
                <div className="options">
                    <div className="title-option">Buổi học: </div>
                    <input type="number" min="1" max="100" placeholder="1" />
                    <div className="btn-submit">Xác nhận</div>
                </div>
                <div className="list-student">
                    <div className="list-tilte">Danh sách sinh viên:</div>
                    <div className="list-items">
                        <div className="item fw6">
                            <div className="colum">STT</div>
                            <div className="colum">Mã số sinh viên</div>
                            <div className="colum">Họ và tên</div>
                            <div className="colum">Trạng thái</div>
                            <div className="colum">Hành động</div>
                        </div>
                        <div className="item">
                            <div className="colum">1</div>
                            <div className="colum">20193987</div>
                            <div className="colum">Nguyễn Văn An</div>
                            <div className="colum">
                                <input type="checkbox" />
                            </div>
                            <div className="colum">
                                <div className="btn">Lưu</div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="colum">1</div>
                            <div className="colum">20193987</div>
                            <div className="colum">Nguyễn Văn An</div>
                            <div className="colum">
                                <input type="checkbox" />
                            </div>
                            <div className="colum">
                                <div className="btn">Lưu</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AttendanceInformation;
