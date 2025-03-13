import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom"; // Thêm Link để quay lại trang chủ
import './error.css'
export default function ErrorPage() {
      const error = useRouteError();
      console.log(error);

      return (
            <div className="error-page">
                  <div className="error-container">
                        <h1 className="error-title">Oops!</h1>
                        <p className="error-subtitle">Có vẻ như đã xảy ra lỗi...</p>
                        <div className="error-icon">⚠️</div>
                        <p className="error-message">
                              {error.statusText || error.message || "Đã xảy ra lỗi không xác định."}
                        </p>
                        <Link to="/" className="error-button">
                              Quay lại Trang chủ
                        </Link>
                  </div>
            </div>
      );
}