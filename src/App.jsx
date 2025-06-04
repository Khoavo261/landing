import { useState } from 'react';
import dvnLogo from './assets/de.jpg';
import './App.css';

function App() {
  const [open, setOpen] = useState(false);
  const [openSuite, setOpenSuite] = useState(false);
  const [openRoadmap, setOpenRoadmap] = useState(false);

  return (
    <div className="app-container">
      {/* Tiêu đề chính */}
      <div className="title-wrapper">
        <h1 className="title">Người Việt,</h1>
        <h1 className="subtitle">tự hào sản phẩm Việt.</h1>
      </div>

      {/* Info Card */}
      <div className="info-card">
        {/* Header của Card */}
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

        {/* Nội dung ẩn/hiện */}
        {open && (
          <div className="card-content">
            {/* Project Suite */}
            <div className="content-item">
              <div className="item-header" onClick={() => setOpenSuite(prev => !prev)}>
                <div className="item-icon">
                  {/* Globe icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4a8 8 0 100 16 8 8 0 000-16zm0 0c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"
                    />
                  </svg>
                </div>
                <div className="item-title">Project suite</div>
                <div className="item-toggle">{openSuite ? '▲' : '▼'}</div>
              </div>
              {openSuite && (
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
                    <span className="link-desc">Nền tảng học tiếng Đức miễn phí</span>
                  </p>
                  {/* Các mục khác bạn có thể mở lại nếu cần */}
                </div>
              )}
            </div>

            {/* Project Roadmap */}
            <div className="content-item">
              <div className="item-header" onClick={() => setOpenRoadmap(prev => !prev)}>
                <div className="item-icon">
                  {/* Calendar icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="item-title">Project roadmap</div>
                <div className="item-toggle">{openRoadmap ? '▲' : '▼'}</div>
              </div>
              {openRoadmap && (
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
                    <span className="link-desc">Chiến lược và tiến độ phát triển nền tảng Deutsch.vn</span>
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
                    <span className="link-desc">Tài liệu định hướng Marketplace</span>
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
                    <span className="link-desc">Lộ trình phát triển công cụ đọc thông minh</span>
                  </p>
                </div>
              )}
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
