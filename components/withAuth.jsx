import { useRouter } from "next/router";
import { useEffect } from "react";

export default function withAuth(Component) {
  return function ProtectedComponent(props) {
    const router = useRouter;
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/redirect");
    }
  }, []);

  return <Component {...props} />;
}
