import React from 'react';

export const PageCover = React.forwardRef(({ data }, ref) => {
  if (data.type === 'back-cover') {
    return (
      <div className="page page-cover page-back-cover" ref={ref} data-density="hard">
        <div className="page-inner back-cover-inner">
          <div className="back-cover-glow"></div>
          <div className="back-cover-content">
            <div className="back-star">★</div>
            <p className="back-quote">{data.quote}</p>
            <p className="back-author">{data.author}</p>
            <div className="back-star">★</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-inner cover-inner">
        <div className="cover-glow"></div>
        <div className="cover-ornament top-ornament">❦</div>
        <div className="cover-content">
          <div className="cover-star">★</div>
          <h1 className="cover-title">{data.title}</h1>
          <div className="cover-divider">
            <span className="divider-line"></span>
            <span className="divider-star">✦</span>
            <span className="divider-line"></span>
          </div>
          <p className="cover-subtitle">{data.subtitle}</p>
        </div>
        <div className="cover-ornament bottom-ornament">❦</div>
        <div className="cover-year">2026</div>
      </div>
    </div>
  );
});

export const PageTOC = React.forwardRef(({ data }, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-inner page-content-inner">
        <div className="page-texture"></div>
        <h2 className="toc-title">{data.title}</h2>
        <div className="toc-divider"></div>
        <ul className="toc-list">
          {data.items.map((item, i) => (
            <li key={i} className="toc-item">
              <span className="toc-chapter">{item.chapter}</span>
              <span className="toc-name">{item.name}</span>
              <span className="toc-dots"></span>
              <span className="toc-page">{item.page}</span>
            </li>
          ))}
        </ul>
        <div className="page-footer">
          <span className="page-number">2</span>
        </div>
      </div>
    </div>
  );
});

export const PageChapterIntro = React.forwardRef(({ data }, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-inner chapter-intro-inner">
        <div className="page-texture"></div>
        <div className="chapter-img-container">
          <img src={data.image} alt={data.title} className="chapter-img" />
          <div className="chapter-img-overlay"></div>
        </div>
        <div className="chapter-text-area">
          <span className="chapter-label">{data.chapterNum}</span>
          <h2 className="chapter-title">{data.title}</h2>
          <div className="chapter-quote-divider"></div>
          <p className="chapter-quote">{data.quote}</p>
        </div>
      </div>
    </div>
  );
});

export const PageContent = React.forwardRef(({ data }, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-inner page-content-inner">
        <div className="page-texture"></div>
        <h3 className="content-section-title">{data.sectionTitle}</h3>
        <div className="content-title-underline"></div>
        <div className="content-body">
          {data.content.map((item, i) => (
            <div key={i} className="content-item">
              <div className="content-label-wrap">
                <span className="content-bullet">◆</span>
                <span className="content-label">{item.label}</span>
              </div>
              <p className="content-text">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="page-footer">
          <span className="page-number">{data.pageNum}</span>
        </div>
      </div>
    </div>
  );
});

export const PageSummary = React.forwardRef(({ data }, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-inner page-content-inner">
        <div className="page-texture"></div>
        <h3 className="summary-title">{data.title}</h3>
        <div className="content-title-underline"></div>
        <table className="summary-table">
          <thead>
            <tr>
              <th>Chủ đề</th>
              <th>Tư tưởng cốt lõi</th>
              <th>Nguyên tắc chính</th>
              <th>Ý nghĩa</th>
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, i) => (
              <tr key={i}>
                <td className="summary-topic">{row.topic}</td>
                <td>{row.core}</td>
                <td>{row.principle}</td>
                <td>{row.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="page-footer">
          <span className="page-number">{data.pageNum}</span>
        </div>
      </div>
    </div>
  );
});

PageCover.displayName = 'PageCover';
PageTOC.displayName = 'PageTOC';
PageChapterIntro.displayName = 'PageChapterIntro';
PageContent.displayName = 'PageContent';
PageSummary.displayName = 'PageSummary';
