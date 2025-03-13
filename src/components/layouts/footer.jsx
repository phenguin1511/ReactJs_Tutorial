import logo from '../../assets/logo.png'
import './footer.css'
const FooterPage = () => {
      return (
            <footer className="footer">
                  <div className="footer-container">
                        {/* Cột 1: Logo và thông tin công ty */}
                        <div className="footer-column footer-brand">
                              <a href="/">
                                    <img src={logo} alt="Website Logo" />
                              </a>
                              <p>Chất lượng hàng đầu, dịch vụ tuyệt vời.</p>
                              <p>Email: support@shop.com</p>
                              <p>Hotline: 0123-456-789</p>
                        </div>

                        {/* Cột 2: Liên kết nhanh */}
                        <div className="footer-column footer-links">
                              <h3>Liên kết nhanh</h3>
                              <ul>
                                    <li><a href="/">Trang chủ</a></li>
                                    <li><a href="/products">Cửa hàng</a></li>
                                    <li><a href="/users">Về chúng tôi</a></li>
                                    <li><a href="/contact">Liên hệ</a></li>
                              </ul>
                        </div>

                        {/* Cột 3: Đăng ký nhận tin */}
                        <div className="footer-column footer-newsletter">
                              <h3>Đăng ký nhận tin</h3>
                              <p>Nhận thông tin ưu đãi mới nhất!</p>
                              <form className="newsletter-form">
                                    <input
                                          type="email"
                                          placeholder="Nhập email của bạn"
                                          aria-label="Email để đăng ký nhận tin"
                                    />
                                    <button type="submit">Đăng ký</button>
                              </form>
                        </div>
                  </div>

                  {/* Bản quyền */}
                  <div className="footer-bottom">
                        <p>&copy; 2025 Shop Name. All rights reserved.</p>
                  </div>
            </footer>
      );
};

export default FooterPage;