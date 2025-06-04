// src/App.jsx
import { useState } from 'react';
import dvnLogo from './assets/de.jpg';
import './App.css';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="app-container">
      <h1 className="title">Người Việt,</h1>
      <h1 className="subtitle">tự hào sản phẩm Việt.</h1>

      <div className="info-card">
        <div className={`card-header ${open ? 'open' : ''}`}>
          <div className="header-left">
            <div className="logo-circle">
              <img src={dvnLogo} alt="Logo Deutsch.vn" className="logo-img" />
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

        {open && (
          <div className="card-content">
            {/* Project suite */}
            <div className="content-item">
              <div className="item-icon">
                {/* Icon: website */}
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
                    d="M12 4a8 8 0 100 16a8 8 0 000-16zm0 0v16m8-8H4"
                  />
                </svg>
              </div>
              <div className="item-text">
                <p className="item-title">Project suite</p>
                <div className="item-links">
                  <p>
                    <a
                      href="https://deutsch.vn/"
                      className="item-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deutsch.vn ↗
                    </a>
                    <br />
                    <span className="link-desc">
                      Nền tảng học tiếng Đức miễn phí
                    </span>
                  </p>
                  <p className="mt-2">
                    <a
                      href="https://deutschhub.net/"
                      className="item-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deutschhub.net ↗
                    </a>
                    <br />
                    <span className="link-desc">
                      Marketplace dành cho cộng đồng học tiếng Đức
                    </span>
                  </p>
                  <p className="mt-2">
                    <a
                      href="https://readflo.com/"
                      className="item-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Readflo ↗
                    </a>
                    <br />
                    <span className="link-desc">
                      Trợ lý đọc thông minh cho người học ngôn ngữ
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Project roadmap */}
            <div className="content-item">
              <div className="item-icon">
                {/* Icon: kế hoạch/lịch trình */}
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="item-text">
                <p className="item-title">Project roadmap</p>
                <div className="item-links">
                  <p>
                    <a
                      href="https://docs.khoavo.vn/Deutsch.vn/"
                      className="item-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deutsch.vn Docs ↗
                    </a>
                    <br />
                    <span className="link-desc">
                      Chiến lược và tiến độ phát triển nền tảng Deutsch.vn
                    </span>
                  </p>
                  <p className="mt-2">
                    <a
                      href="https://docs.khoavo.vn/Deutschhub.vn/"
                      className="item-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deutschhub.vn Docs ↗
                    </a>
                    <br />
                    <span className="link-desc">
                      Tài liệu định hướng Marketplace
                    </span>
                  </p>
                  <p className="mt-2">
                    <a
                      href="https://docs.khoavo.vn/Readflo/"
                      className="item-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Readflo Docs ↗
                    </a>
                    <br />
                    <span className="link-desc">
                      Lộ trình phát triển công cụ đọc thông minh
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="footer">© 2025 Khoa Vo</footer>
    </div>
  );
}

export default App;
