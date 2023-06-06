import ListStudent from '../ListStudent/ListStudent';
import './ClassInformation.scss';

function ClassInformation() {
    return (
        <>
            <div className="inforname-teacher">
                <div className="left">
                    <div className="item">IT2023: Tin học đại cương</div>
                    <div className="item">Mã lớp: 123456</div>
                    <div className="item">Mã học phần: MU12123</div>
                    <div className="item">Sỹ số: 44 học sinh</div>
                    <div className="item">Thời gian: 6h45 - 11h10</div>
                </div>
                <div className="right">
                    <div className="outline-btn">
                        <div className="btn active">Tạo mã điểm danh</div>
                        <div className="btn "> Tạo bài tập</div>
                    </div>
                </div>
            </div>
            <ListStudent />
        </>
    );
}

export default ClassInformation;
