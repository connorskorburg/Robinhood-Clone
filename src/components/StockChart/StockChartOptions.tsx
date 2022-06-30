import { useState } from "react";

const StockChartOptions = (): JSX.Element => {
  type OptionType = "1D" | "1W" | "1M" | "3M" | "1Y" | "ALL";

  const [option, setOption] = useState<OptionType>("1D");
  const options = ["1D", "1W", "1M", "3M", "1Y", "ALL"];

  return (
    <div className="bb-1 flex mb-75">
      {options.map((item) => (
        <h4
          onClick={() => setOption(item as OptionType)}
          key={item}
          className={`pb-1 mr-2 bb-3 font-bold ${
            item === option ? "text-green bb-3-green" : ""
          }`}
        >
          {item}
        </h4>
      ))}
    </div>
  );
};

export default StockChartOptions;
