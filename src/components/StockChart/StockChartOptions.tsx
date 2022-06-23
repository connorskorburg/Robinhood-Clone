const StockChartOptions = (): JSX.Element => {
  const options = ["1D", "1W", "1M", "3M", "1Y", "ALL"];
  return (
    <div className="bb-1 flex mb-75">
      {options.map((option) => (
        <h4 key={option} className="pb-1 mr-2 bb-3-green font-bold">
          {option}
        </h4>
      ))}
    </div>
  );
};

export default StockChartOptions;
