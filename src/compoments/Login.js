import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import "./Login.css";
const Login = () => {
  return (
    <>
      <div class=" col-10 col-sm-7 col-md-6  login rounded-4 shadow-lg bg-body ">
        <form class="form-example " action="" method="post">
          <h1 className="mb-4 text-center">Đăng nhập</h1>

          <div class="form-group mb-4">
            <input
              type="text"
              class="form-control username"
              id="username"
              placeholder="Tên tài khoản..."
              name="username"
            />
          </div>
          <div class="form-group mb-4">
            <input
              type="password"
              class="form-control password"
              id="password"
              placeholder="Mật khẩu..."
              name="password"
            />
          </div>

          <button type="submit" class=" form-control btn btn-primary btn-lg">
            Đăng nhập
          </button>
        </form>
      </div>
    </>
  );
};
export default Login;
