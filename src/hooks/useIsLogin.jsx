import { useEffect, useState } from "react";

function useIsLogin(path) {
  const [isLogin, setIsLogin] = useState(false);
  const [title, setTitle] = useState("Wait...");

  useEffect(() => {
    if (path === "/login") {
      setIsLogin(true);
      setTitle("Login");
    } else if (path === "/registration") {
      setIsLogin(false);
      setTitle("Registration");
    }

    document.title = "Simple Notes | " + title;
    return () => {
      document.title = "Simple Notes";
    };
  }, [title, isLogin]);

  return { isLogin, title };
}

export default useIsLogin;
