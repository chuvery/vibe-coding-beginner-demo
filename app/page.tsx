const services = [
  {
    number: "01",
    title: "브랜드 소개",
    description: "처음 방문한 사람이 무엇을 하는 브랜드인지 짧고 분명하게 이해하도록 핵심 메시지를 정리합니다.",
  },
  {
    number: "02",
    title: "콘텐츠 제작",
    description: "소개글, 서비스 설명, 사례처럼 고객이 판단할 때 필요한 내용을 읽기 쉬운 구조로 만듭니다.",
  },
  {
    number: "03",
    title: "온라인 상담",
    description: "복잡한 회원가입 없이 이메일 한 번으로 문의할 수 있는 가장 단순한 행동 경로를 둡니다.",
  },
];

const works = [
  ["브랜드 홈페이지", "작은 브랜드의 첫 소개 페이지"],
  ["서비스 안내", "고객이 선택하기 쉬운 정보 구조"],
  ["문의 흐름", "한 번의 클릭으로 이어지는 연락 경로"],
];

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <strong>FIRST PAGE</strong>
        <nav>
          <a href="#about">소개</a>
          <a href="#services">서비스</a>
          <a href="#work">작업</a>
          <a href="#contact">문의</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">SMALL BRAND · SIMPLE START</p>
            <h1>작은 브랜드의 온라인 시작을 돕습니다.</h1>
            <p>
              복잡한 기능보다 먼저, 처음 방문한 사람이 누구인지 이해하고
              자연스럽게 문의할 수 있는 한 페이지를 만듭니다.
            </p>
            <a className="button" href="mailto:hello@example.com">
              이메일로 문의하기
            </a>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <small>01 / DEFINE</small>
            <strong>무엇을 만들지<br />먼저 정합니다.</strong>
          </div>
        </section>

        <section id="about" className="section about">
          <p className="eyebrow">ABOUT</p>
          <h2>보여주기보다 이해시키는 페이지.</h2>
          <p>
            퍼스트페이지는 이 책을 위해 만든 가상의 1인 브랜드입니다.
            실제 첫 프로젝트처럼 보이지만 회원가입, 결제, 데이터베이스는 일부러 넣지 않았습니다.
          </p>
          <p>
            목표는 하나입니다. 방문자가 브랜드를 이해하고, 서비스 내용을 확인한 뒤,
            문의 버튼을 누를 수 있게 하는 것.
          </p>
        </section>

        <section id="services" className="section section-alt">
          <p className="eyebrow">SERVICES</p>
          <h2>필요한 것만 단순하게.</h2>
          <p>첫 프로젝트에서는 기능을 늘리지 않고 핵심 흐름에 집중합니다.</p>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <small>{service.number}</small>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section">
          <p className="eyebrow">WORK</p>
          <div className="work-list">
            {works.map(([title, description], index) => (
              <div className="work-row" key={title}>
                <span>0{index + 1}</span>
                <strong>{title}</strong>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <p className="eyebrow">CONTACT</p>
          <h2>이제, 한 번 눌러보세요.</h2>
          <p>이 버튼이 실제로 작동하는지 확인하는 것까지가 첫 프로젝트의 완료조건입니다.</p>
          <a className="button light" href="mailto:hello@example.com">
            hello@example.com
          </a>
        </section>
      </main>

      <footer className="site-footer">
        © FIRST PAGE · SAMPLE PROJECT
      </footer>
    </>
  );
}
