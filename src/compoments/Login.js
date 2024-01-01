import "./Login.css";
import { useState } from "react";
const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  let passWord = null;
  if (!isLogin) {
    passWord = (
      <div class="form-group mb-4">
        <input
          type="password"
          class="form-control password"
          id="password"
          placeholder="Xác nhận mật khẩu..."
          name="password"
        />
      </div>
    );
  }

  const onchangeLogin = () => {
    setIsLogin(!isLogin);
  };
  return (
    <>
      <div className=" col-10 col-sm-7 col-md-6  login rounded-4 shadow-lg bg-body ">
        <form className="form-example " action="" method="post">
          <h1 className="mb-4 text-center">
            {isLogin ? "Đăng nhập" : "Đăng ký"}
          </h1>

          <div class="form-group mb-3">
            <input
              type="text"
              className="form-control username"
              id="username"
              placeholder="Tên tài khoản..."
              name="username"
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              class="form-control password"
              id="password"
              placeholder="Mật khẩu..."
              name="password"
            />
          </div>
          {passWord}

          <button
            type="submit"
            className=" form-control btn btn-primary btn-sm mb-1"
          >
            {isLogin ? "Đăng nhập" : "Đăng ký"}
          </button>
        </form>
        <p>
          {isLogin ? "Bạn chưa có tài khoản. " : "Bạn đã có tài khoản. "}
          <span
            style={{ textAlign: "center", color: "#0000ff" }}
            onClick={onchangeLogin}
          >
            Vào đây
          </span>
        </p>
      </div>
    </>
  );
};
export default Login;
