import { useEffect, useState } from "react";
import { useStockContext } from "../../context";

const About = (): JSX.Element => {
  const { symbol, companyDescription, fetchCompanyInfo } = useStockContext();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetchCompanyInfo();
    setLoading(false);
    // eslint-disable-next-line
  }, [symbol]);

  return (
    <div
      className={`${
        loading || !companyDescription ? "loading" : ""
      } about mb-75`}
    >
      <h2 className="mb-1 pb-1 bb-1">About</h2>
      <h3>{companyDescription}</h3>
    </div>
  );
};

export default About;
