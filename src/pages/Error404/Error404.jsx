import "./Error404.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <section className="main-error">
        <div className="corpo-error">
          <h1 className="error">Error 404</h1>
          <div className="button-link-home error-voltar">
          <Link to="../">
            Voltar para Home
          </Link>
        </div>
        </div>
      </section>
    </>
  );
}

export default Error;
