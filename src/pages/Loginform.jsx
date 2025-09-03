
// import './Login.css';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';


function Login() {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add real login logic
    navigate('/dashboard');
  };
  return (
    // <form onSubmit={handleSubmit}>
    // <div className="login-container">
    //   <div className="login-card">
    //     {/* Left side - Login Form */}
    //     <div className="login-form-section">
    //       <h2>Login</h2>
    //       <form>
    //         <label>Email</label>
    //         <input type="email" placeholder="Enter your email" />
    //         <label>Password</label>
    //         <input type="password" placeholder="Enter your password" />
    //         <div>
    //           <input type="checkbox" id="remember" />
    //           <label htmlFor="remember"> Remember Me</label>
    //         </div>
    //         <button type="submit">Login</button>
    //       </form>
    //       <p style={{ marginTop: "10px" }}>
    //         Don’t have an account? <a href="#">Sign Up</a>
    //       </p>
    //     </div>

    //     {/* Right side - Background with image */}
    //     <div className="login-image-section">
    //       <img
    //         src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
    //         alt="Login visual"
    //       />
    //     </div>
    //   </div>
    // </div>
    // </form>
    <div className="login-container">
  <div className="login-card">
    {/* Left side - Login Form */}
    <div className="login-form-section">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <div>
          <input type="checkbox" id="remember" />
          <label htmlFor="remember"> Remember Me</label>
        </div>
        <button type="submit">Login</button>
      </form>
      <p style={{ marginTop: "10px" }}>
        Don’t have an account? <a href="#">Sign Up</a>
      </p>
    </div>

    {/* Right side - Background with image */}
    <div className="login-image-section">
      <img
        src="https://png.pngtree.com/png-vector/20191003/ourlarge/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg"
        alt="Login visual"
      />
    </div>
  </div>
</div>

  );
}

export default Login;