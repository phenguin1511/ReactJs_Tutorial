import './header.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'; //Thay Link vào thẻ a để không Reload lại trang mỗi khi chuyển 
const HeaderPage = () => {
      return (
            <header className="header">
                  <div className="logo">
                        <a href="/">
                              <img src={logo} alt="Website Logo" />
                        </a>
                  </div>
                  <nav className="navigation">
                        <ul>
                              <li><Link to="/">Home</Link></li>
                              <li><Link to="/products">Products</Link></li>
                              <li><Link to="/users">Users</Link></li>
                        </ul>
                  </nav>
                  <div className="header-right">
                        <form className="search-form">
                              <input
                                    type="search"
                                    placeholder="Search products..."
                                    aria-label="Search products"
                              />
                              <button type="submit">Search</button>
                        </form>
                        <a href="/cart" className="cart-link" aria-label="Shopping cart with 0 items">
                              <i className="fa fa-shopping-cart"></i> Cart (0)
                        </a>
                        <a href="/login" className="login-link">Login</a>
                  </div>
            </header>
      );
}

export default HeaderPage;