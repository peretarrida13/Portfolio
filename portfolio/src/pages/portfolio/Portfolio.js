import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import ProjectList from "../../components/ProjectList";

const Portfolio = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {/* Main Portfolio Page */}
      <main className="portfolio container">
        {/* Display the page header */}
        <PageHeader title="Portfolio" description="View my work" />

        <div className="row" style={{marginLeft:50}}>
          {/* Display the list of projects */}
          <ProjectList />
        </div>
      </main>
    </>
  );
};

export default Portfolio;