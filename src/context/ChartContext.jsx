/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

export const ChartContext = createContext();

export const ChartProvider = ({ children }) => {
  const [chartData, setChartData] = useState(null);
  const [totalRevenue, setTotalRevenue] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://gist.githubusercontent.com/RamPonce7/1a59be1fe758223e5430b4e36c17ccb0/raw/8ae9067a039e456fa4f386bda33b8174c4b57458/chart.json"
      );
      setChartData(response.data);
    } catch (error) {
      console.error("Error fetching chart data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (chartData) {
      const totalEcommSales = chartData.series[0].data.reduce(
        (acc, item) => acc + item.value,
        0
      );
      const totalWholesaleSales = chartData.series[1].data.reduce(
        (acc, item) => acc + item.value,
        0
      );
      setTotalRevenue(totalEcommSales + totalWholesaleSales);
    }
  }, [chartData]);

  return (
    <ChartContext.Provider value={{ chartData, totalRevenue }}>
      {children}
    </ChartContext.Provider>
  );
};
