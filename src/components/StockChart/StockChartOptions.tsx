import { Dispatch, SetStateAction } from "react";

interface StockChartOptionsProps {
  option: DashboardTypes.OptionType;
  setOption: Dispatch<SetStateAction<DashboardTypes.OptionType>>;
  isStockGreen: boolean;
}

const StockChartOptions = ({
  option,
  setOption,
  isStockGreen,
}: StockChartOptionsProps): JSX.Element => {
  const options = [
    { label: "1W", value: "5dm" },
    { label: "1M", value: "1m" },
    { label: "3M", value: "3m" },
    { label: "6M", value: "6m" },
    { label: "YTD", value: "YTD" },
    { label: "1Y", value: "1y" },
    { label: "ALL", value: "max" },
  ];

  return (
    <div className="bb-1 flex mb-75">
      {options.map(({ label, value }) => (
        <h4
          onClick={() => setOption(value as DashboardTypes.OptionType)}
          key={value}
          className={`pb-1 mr-2 bb-3 font-bold ${
            value === option
              ? `bb-3-${isStockGreen ? "green text-green" : "red text-red"}`
              : ""
          }`}
        >
          {label}
        </h4>
      ))}
    </div>
  );
};

export default StockChartOptions;
