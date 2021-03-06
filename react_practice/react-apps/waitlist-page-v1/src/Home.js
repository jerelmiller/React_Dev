import "./Home.css";
import Header from "./Header";
import CTAForm from "./CTAForm";

function Home() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">
          <span>Pro</span>Code
        </h1>
      </div>
      <div className="main-content">
        <Header />
        <CTAForm />
      </div>
    </div>
  );
}

export default Home;
