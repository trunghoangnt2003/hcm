import React, { useRef, useState, useCallback, useMemo, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { bookPages } from './data/bookContent';
import { PageCover, PageTOC, PageChapterIntro, PageContent, PageSummary } from './components/Page';

const BASE_PAGE_RATIO = 700 / 520;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function App() {
  const bookRef = useRef(null);
  const lastWheelFlipRef = useRef(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [bookSize, setBookSize] = useState({ width: 520, height: 700 });

  // Memoize particles so they don't re-render on page flip
  const particles = useMemo(() => 
    [...Array(20)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 8}s`,
      animationDuration: `${6 + Math.random() * 8}s`,
    })), []
  );

  const onFlip = useCallback((e) => {
    setCurrentPage(e.data);
  }, []);

  const onInit = useCallback(() => {
    setTotalPages(bookRef.current?.pageFlip()?.getPageCount() || 0);
  }, []);

  useEffect(() => {
    const updateBookSize = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const targetPageWidthByViewport = viewportWidth * 0.4; // 2 trang = ~80vw
      const targetPageWidthByHeight = (viewportHeight * 0.72) / BASE_PAGE_RATIO;
      const nextWidth = Math.round(clamp(Math.min(targetPageWidthByViewport, targetPageWidthByHeight), 240, 640));

      setBookSize({
        width: nextWidth,
        height: Math.round(nextWidth * BASE_PAGE_RATIO),
      });
    };

    updateBookSize();
    window.addEventListener('resize', updateBookSize);

    return () => {
      window.removeEventListener('resize', updateBookSize);
    };
  }, []);

  const goNext = () => {
    bookRef.current?.pageFlip()?.flipNext();
  };

  const goPrev = () => {
    bookRef.current?.pageFlip()?.flipPrev();
  };

  const onBookWheel = useCallback((e) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastWheelFlipRef.current < 450) return;
    if (Math.abs(e.deltaY) < 12) return;

    if (e.deltaY > 0) {
      bookRef.current?.pageFlip()?.flipNext();
    } else {
      bookRef.current?.pageFlip()?.flipPrev();
    }

    lastWheelFlipRef.current = now;
  }, []);

  const renderPage = (pageData, index) => {
    switch (pageData.type) {
      case 'cover':
      case 'back-cover':
        return <PageCover key={index} data={pageData} />;
      case 'toc':
        return <PageTOC key={index} data={pageData} />;
      case 'chapter-intro':
        return <PageChapterIntro key={index} data={pageData} />;
      case 'content':
        return <PageContent key={index} data={pageData} />;
      case 'summary':
        return <PageSummary key={index} data={pageData} />;
      default:
        return null;
    }
  };

  return (
    <div className="app">
      {/* Animated background particles */}
      <div className="bg-particles">
        {particles.map((style, i) => (
          <div key={i} className="particle" style={style} />
        ))}
      </div>

      <header className="app-header">
        <h1 className="app-title">
          <span className="title-icon">📖</span>
          Tư Tưởng Hồ Chí Minh
        </h1>
      </header>

      <main className="book-container" onWheel={onBookWheel}>
        <div className="book-wrapper">
          <HTMLFlipBook
            ref={bookRef}
            width={bookSize.width}
            height={bookSize.height}
            size="fixed"
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={false}
            onFlip={onFlip}
            onInit={onInit}
            className="flipbook"
            flippingTime={1000}
            usePortrait={false}
            startZIndex={0}
            autoSize={false}
            drawShadow={true}
            useMouseEvents={true}
            startPage={0}
            clickEventForward={false}
          >
            {bookPages.map((page, index) => renderPage(page, index))}
          </HTMLFlipBook>
        </div>
      </main>

      <nav className="book-controls">
        <button className="nav-btn prev-btn" onClick={goPrev} aria-label="Trang trước">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <span>Trang trước</span>
        </button>
        <div className="page-indicator">
          <span className="current-page">{currentPage + 1}</span>
          <span className="page-sep">/</span>
          <span className="total-pages">{totalPages || bookPages.length}</span>
        </div>
        <button className="nav-btn next-btn" onClick={goNext} aria-label="Trang sau">
          <span>Trang sau</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </nav>

      <footer className="app-footer">
        <p>Sử dụng chuột để kéo lật trang hoặc nhấn nút điều hướng</p>
      </footer>
    </div>
  );
}

export default App;
