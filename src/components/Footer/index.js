import { Link } from 'react-router-dom';
import './index.css';
function Footer() {
  return (
    <div className="Content">
     <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; 2024 Truyện Tranh. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <ul>
            <li><Link to="/about">Giới thiệu</Link></li>
            <li><Link to="/contact">Liên hệ</Link></li>
            <li><Link to="/privacy">Chính sách bảo mật</Link></li>
            <li><Link to="/terms">Điều khoản sử dụng</Link></li>
          </ul>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
