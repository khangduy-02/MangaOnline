import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import MangaDetail from './components/MangaDetail';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault(); // Ngăn tải lại trang
    setIsLoggedIn(true); // Chuyển trạng thái sang đã đăng nhập
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div className="login-container">
          <div className="login-box">
            <h2 className="login-title">Welcome Back</h2>
            <form onSubmit={handleLogin}>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="login-button">Login</button>
            </form>
            <p className="signup-link">
              Don't have an account? <a href="/signup">Sign up</a>
            </p>
          </div>
        </div>
      ) : (
        <>
          <Header />
           {/*<Main />*/}  
          {<MangaDetail />}
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
