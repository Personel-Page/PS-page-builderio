import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto flex max-w-7xl flex-1 items-center justify-center px-4 py-32">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold"><span className="gradient-text">404</span></h1>
          <p className="mt-4 text-lg text-muted-foreground">Oops! Page not found</p>
          <a href="/" className="mt-6 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline">
            Return to Home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
