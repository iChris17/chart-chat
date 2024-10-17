import { useContext, useEffect, useRef } from "react";
import * as echarts from "echarts";
import { ChartContext } from "../context/ChartContext";

const months = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Ago",
  "09": "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dic",
};

export const Chart = () => {
  const chartRef = useRef(null);
  const { chartData } = useContext(ChartContext);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);
    if (chartData) {
      const options = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c}K",
        },
        legend: {
          top: "bottom",
          data: ["E-commerce", "Wholesale"],
        },
        xAxis: {
          type: "category",
          data: chartData.xAxis[0].data.map(
            (item) => months[item.substring(item.length - 2, item.length)]
          ),
        },
        yAxis: {
          type: "value",
          name: "",
          axisLabel: {
            show: false,
          },
        },
        series: [
          {
            name: "E-commerce",
            type: "bar",
            data: chartData.series[0].data.map((item) => item.value),
            itemStyle: {
              color: "#0000FF",
            },
          },
          {
            name: "Wholesale",
            type: "bar",
            data: chartData.series[1].data.map((item) => item.value),
            itemStyle: {
              color: "#6946bd",
            },
          },
        ],
      };

      chartInstance.on("mouseover", (params) => {
        if (params.componentType === "series") {
          const idx = params.dataIndex;
          const highlightedSeries = options.series.map((series) => ({
            ...series,
            data: series.data.map((value, index) => ({
              value: value,
              itemStyle: {
                ...value.itemStyle,
                opacity: index === idx ? 1 : 0.8,
              },
            })),
          }));

          chartInstance.setOption({
            series: highlightedSeries,
          });
        }
      });

      chartInstance.on("mouseout", () => {
        chartInstance.setOption({
          series: options.series.map((series) => ({
            ...series,
            data: series.data.map((value) => ({
              value: value,
              itemStyle: {
                ...value.itemStyle,
                opacity: 1,
              },
            })),
          })),
        });
      });

      chartInstance.setOption(options);
    }

    const resizeObserver = new ResizeObserver(() => {
      chartInstance.resize();
    });

    resizeObserver.observe(chartRef.current);

    return () => {
      resizeObserver.disconnect();
      chartInstance.dispose();
    };
  }, [chartData]);

  return <div ref={chartRef} style={{ width: "100%", height: "300px" }} />;
};
