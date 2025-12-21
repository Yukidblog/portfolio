document.addEventListener('DOMContentLoaded', () => {

  const NEWS_URL = 'news/index.html';
  const list = document.querySelector('.top_news__list');
  const categoryButtons = document.querySelectorAll('.category');

  const CATEGORY_GROUPS = {
    all: [],
    news: ['お知らせ'],
    press_media: ['プレス', 'メディア'],
    column_group: ['コラム', 'レポート', '資料'],
    event_group: ['イベント', 'セミナー']
  };

  let allArticles = [];

  // -------------------------
  // ニュース取得
  // -------------------------
  fetch(NEWS_URL)
    .then(res => res.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      const items = doc.querySelectorAll('.news__item');

      allArticles = Array.from(items).map(item => {
        const link = item.querySelector('a');
        const time = item.querySelector('time')?.textContent.trim();
        const categoryEl = item.querySelector('.news__category');
        const title = item.querySelector('.news__title')?.textContent.trim();
        const txt = item.querySelector('.news__txt')?.textContent.trim();

        return {
          url: link?.getAttribute('href'),
          time,
          category: categoryEl?.textContent.trim(),
          categoryClass: categoryEl?.classList[1] || '',
          dateValue: new Date(time.replace(/年|月/g, '/').replace('日', '')),
          title,
          txt
        };
      });

      render('all');
    })
    .catch(() => {
      list.innerHTML = '<li class="top_news__empty">ニュースを取得できませんでした</li>';
    });

  // -------------------------
  // 描画処理
  // -------------------------
  function render(type) {
    list.innerHTML = '';

    let filtered = allArticles;

    if (type !== 'all') {
      filtered = allArticles.filter(item =>
        CATEGORY_GROUPS[type].includes(item.category)
      );
    }

    filtered = filtered
      .sort((a, b) => b.dateValue - a.dateValue)
      .slice(0, 5);

    if (filtered.length === 0) {
      list.innerHTML = '<li class="top_news__empty">該当記事は現在ありません</li>';
      return;
    }

    filtered.forEach(item => {
      const li = document.createElement('li');
      li.className = 'top_news__item';

      li.innerHTML = `
        <a href="${item.url}">
          <div class="top_news-flex-item">
            <time>${item.time}</time>
            <p class="top_news__category ${item.categoryClass}">${item.category}</p>
          </div>
          <p class="top_news__title">${item.title}</p>
          ${item.txt ? `<p class="top_news__txt">${item.txt}</p>` : ''}
        </a>
      `;

      list.appendChild(li);
    });
  }

  // -------------------------
  // カテゴリボタン
  // -------------------------
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('c-all')) render('all');
      if (btn.classList.contains('c-news')) render('news');
      if (btn.classList.contains('c-press')) render('press_media');
      if (btn.classList.contains('c-column')) render('column_group');
      if (btn.classList.contains('c-event')) render('event_group');
    });
  });

});