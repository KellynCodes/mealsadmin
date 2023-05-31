import { React, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import Topbar from "@/components/topbars/Topbar";

function index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const dispatch = useDispatch();
  // const { isFetching, error } = useSelector((state) => state.user);

  const LoginUser = () => {
    // login(dispatch, { email, password });
  };

  return (
    <>
      <Topbar />
      <div className="container">
        <div className="row">
          <div className="col-md-5 mt-5 mb-5 card p-5 offset-3">
            <h2 className="text-center mb-5">Meals Login Page</h2>
            <form action="" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="password_container">
                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="password_container">
                {/* isFetching */}
                {false && <h5 className="errorOutput">Fetching User</h5>}
                {/* error */}
                {false && (
                  <h5 className="errorOutput">
                    Error Occurred Please Try again
                  </h5>
                )}
              </div>

              <div className="button_container">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={LoginUser}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
