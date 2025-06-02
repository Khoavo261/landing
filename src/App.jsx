// src/App.jsx
import { useState } from 'react';
import dvnLogo from './assets/de.jpg'; // Đường dẫn tới de.jpg
import './App.css';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Tiêu đề chính */}
      <h1 className="title">Người Việt,</h1>
      <h1 className="subtitle">tự hào sản phẩm Việt.</h1>

      {/* Info Card */}
      <div className="info-card">
        {/* Header của Card */}
        <div className={`card-header ${open ? 'open' : ''}`}>
          <div className="header-left">
            <div className="logo-circle">
              {/* Sử dụng đúng biến dvnLogo */}
              <img
                src={dvnLogo}
                alt="Logo Deutsch.vn"
                className="logo-img"
              />
            </div>
            <div className="header-text">
              <p className="card-title">Deutsch.vn</p>
              <p className="card-subtitle">Your gateway to learning German.</p>
            </div>
          </div>

          <button
            className="more-info-btn"
            onClick={() => setOpen(prev => !prev)}
            aria-expanded={open}
          >
            <span className="more-text">More Info</span>
            <span className="more-arrow">{open ? '▲' : '▼'}</span>
          </button>
        </div>

        {/* Nội dung ẩn/hiện */}
        {open && (
          <div className="card-content">
            {/* Mục 1 */}
            <div className="content-item">
              <div className="item-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2l4 -4m1 8H6a2 2 0 0 1 -2 -2V6a2 2 0 0 1 2 -2h8l6 6v6a2 2 0 0 1 -2 2z"
                  />
                </svg>
              </div>
              <div className="item-text">
                <a
                  href="https://example.com/ke-hoach-du-an"
                  className="item-title"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kế hoạch dự án
                </a>
                <p className="item-desc">
                  Định hướng chiến lược và các cột mốc phát triển cho Deutsch.vn.
                </p>
              </div>
            </div>

            {/* Mục 2 */}
            <div className="content-item">
              <div className="item-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9 -11h-7z"
                  />
                </svg>
              </div>
              <div className="item-text">
                <p className="item-title">Dự án đang chạy</p>
                <p className="item-desc">
                  Các tính năng và cải tiến hiện đang được tích cực triển khai.
                </p>
              </div>
            </div>

            {/* Mục 3 */}
            <div className="content-item">
              <div className="item-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7l9 -4l9 4v6a9 9 0 0 1 -9 9a9 9 0 0 1 -9 -9z"
                  />
                </svg>
              </div>
              <div className="item-text">
                <p className="item-title">Các sản phẩm hỗ trợ</p>
                <div className="item-links">
                  <p>
                    <a
                      href="https://deutschhub.vn"
                      className="item-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deutschhub.vn ↗
                    </a>
                    <br />
                    <span className="link-desc">
                      Marketplace tiếng Đức (A marketplace for German learners)
                    </span>
                  </p>
                  <p className="mt-2">
                    <a
                      href="https://readflo.vn"
                      className="item-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Readflo ↗
                    </a>
                    <br />
                    <span className="link-desc">
                      Công cụ đọc cho các bạn học ngoại ngữ (A reading assistant for
                      language learners)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="footer">© 2025 Khoa Vo</footer>
    </div>
  );
}

export default App;
