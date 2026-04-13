import "./styles.css";
import Link from "./Link";
import { Router, RouterContext } from "./context";
import Route from "./Route";
import Main from "./Main";
import { useContext, useEffect } from "react";
import Main2 from "./Main2";

export default function App() {
  const { showLink, setShowLink } = useContext(RouterContext);
  useEffect(() => {
    if (window.location.pathname == "/") {
      setShowLink(true);
    }
  });
  return (
    <div className="App">
      {showLink && (
        <>
          <Link to="/url">Url</Link>
          <br />
          <Link to="/url/url">Url2</Link>
        </>
      )}
      {!showLink && (
        <>
          <Route to="/url" component={<Main />} />
          <Route to="/url/url" component={<Main2 />} />
        </>
      )}
    </div>
  );
}
