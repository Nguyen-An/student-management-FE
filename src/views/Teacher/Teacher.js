import './Teacher.scss';
import ClassList from '../../components/Teacher/ClassList/ClassList';
import Detail from '../../components/Teacher/Detail/Detail';
import { useState } from 'react';

function Teacher() {
    // Tình trạng chọn list: danh sách lớp đang dạy trong kỳ, detail: chi tiết 1 lớp
    const [options, setOptions] = useState('detail');

    return (
        <>
            <div className="container">
                <div className="header">
                    <div className="title">
                        <div className="title-logo">
                            <img
                                src="https://storage.googleapis.com/hust-files/5807675312963584/images/hust-logo-official_.3m.jpeg"
                                alt="avatar"
                            />
                        </div>
                        <div className="title-info">
                            <div className="title-top">HỆ THỐNG QUẢN TRỊ ĐẠI HỌC TRỰC TUYẾN</div>
                            <div className="title-bot">
                                ĐẠI HỌC BÁCH KHOA HÀ NỘI - TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG
                            </div>
                        </div>
                    </div>
                    <div className="avatar">
                        <img
                            src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/313928031_1857605907938653_6284185701097598776_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Z2cGsgEdC7MAX8zGymO&_nc_ht=scontent.fhan5-11.fna&oh=00_AfDCRQPoMYJdH3rzClCswemoNuHr_yvLMD4O6GHhquToyg&oe=647F7B61"
                            alt="avatar"
                        />
                        <div className="current-time">Tuần 35 (Tuần học thứ 11): 29/05 - 03/06 </div>
                    </div>
                </div>
                {options === 'list' && <ClassList />}
                {options === 'detail' && <Detail />}
            </div>
        </>
    );
}

export default Teacher;
