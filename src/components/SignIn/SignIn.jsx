import React from 'react';

const SignIn = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-secondary bg-opacity-25">
      <div className="p-4 rounded bg-light" style={{ width: 320 }}>
        <h3 className="text-center mb-3">LOLIPOLY</h3>
        <h5 className="text-center mb-3">Sign in</h5>
        <input type="text" placeholder="Account" className="form-control mb-2" />
        <input type="password" placeholder="Password" className="form-control mb-3" />
        <button className="btn btn-primary w-100 mb-3">Sign In</button>
        <p className="text-center">Sign In With</p>
        <button className="btn btn-light w-100">
          <img src="/google-logo.png" alt="Google" style={{ height: 20, marginRight: 8 }} />
          Google
        </button>
        <a href="#" className="d-block mt-3 text-primary text-decoration-underline">Back</a>
      </div>
    </div>
  );
};

export default SignIn;
