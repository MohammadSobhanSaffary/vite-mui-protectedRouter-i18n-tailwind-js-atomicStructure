import { useLayoutEffect } from "react";
import { useNavigate } from "react-router";

function Home() {
  const loggedIn = false;
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (loggedIn) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  return <> </>;
}

export default Home;
