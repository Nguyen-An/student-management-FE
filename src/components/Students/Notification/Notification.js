function Notification() {
    return (
        <>
            <div className="notification">
                <div className="title">Thông báo</div>
                <div className="notification-items">
                    <div className="item">
                        <div className="content">
                            <span>[Tin học đại cương]</span> Tuần 36 thi giữa kỳ
                        </div>
                        <div className="time">31/5/2023</div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <span>[Công nghệ web]</span> Bảo vệ bài tập lớn vào tuần 33
                        </div>
                        <div className="time">31/5/2023</div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <span>[Tin học đại cương]</span> Hội thảo hướng nghiệp và tuyển dụng của Công ty FUSHAN dành
                            cho các bạn sinh viên năm cuối
                        </div>
                        <div className="time">31/5/2023</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Notification;
