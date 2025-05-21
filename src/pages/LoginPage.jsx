import React from "react";
import "./LoginPage.css";

const LoginPage = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-blur"></div>

            <div className="login-modal">
                <div className="modal-header d-flex justify-content-between align-items-center mb-3">
                    <h4 className="fw-bold">Sign In</h4>
                    <button className="btn-close" onClick={onClose}></button>
                </div>

                <form>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="User Name" />
                    </div>
                    <div className="mb-3 position-relative">
                        <input type="password" className="form-control" placeholder="Password" />
                        <small className="position-absolute end-0 top-50 translate-middle-y pe-3 text-primary" style={{ cursor: "pointer" }}>
                            SHOW
                        </small>
                    </div>
                    <div className="mb-3 d-flex justify-content-between align-items-center">
                        <div>
                            <input type="checkbox" id="remember" className="me-2" />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <a href="#" className="text-decoration-none">Forgot Password?</a>
                    </div>


                    <button type="button" className="btn btn-outline-dark w-100 mb-3">
                        Sign in
                    </button>
                    <div className="text-center">
                        Don't have an account? <a href="#" className="text-primary">Sign Up</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
