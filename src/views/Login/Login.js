import './Login.scss';

function Login() {
    return (
        <>
            <div className="background"></div>
            <div className="form-login">
                <div className="title">Đăng nhập</div>
                <div className="text-popup-login">Đăng nhập bằng tài khoản mssv/msgv</div>
                <div className="input">
                    <input placeholder="Tài khoản đăng nhập" />
                    <input placeholder="Mật khẩu đăng nhập" />
                </div>
                <div className="role">
                    <div className="input-checkbox">
                        <input type="checkbox" />
                        <span>Tôi là học sinh</span>
                    </div>
                    <div className="input-checkbox">
                        <input type="checkbox" />
                        <span>Tôi là giáo viên</span>
                    </div>
                </div>
                <button>Đăng nhập</button>
                <div className="suport">
                    Chưa có tài khoản, đăng ký <span>tại đây</span>.
                </div>
            </div>
        </>
    );
}

export default Login;
