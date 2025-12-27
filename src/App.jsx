export default function App() {
  return (
    <div className="page">
      <div className="bgGlow" aria-hidden="true" />
      <main className="wrap">
        <div className="card">
          <div className="logo">IB Craft</div>

          <h1 className="title">Сайт находится в разработке</h1>
          <p className="subtitle">
            Разработчики делают всё возможное и даже невозможное что в их силах . <i>Иногда даже спят...</i>
          </p>

          <div className="meta">
            <span className="dot" />
            <span>Работаем в поте лица</span>
            <span className="sep">•</span>
            <span><i>Сделано на ReactJS</i></span>
          </div>
        </div>

        <footer className="footer">
          <span>IB-Craft© {new Date().getFullYear()}. Все права защищены. </span>
        </footer>
      </main>
    </div>
  );
}
