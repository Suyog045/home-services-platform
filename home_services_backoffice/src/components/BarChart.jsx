import { ResponsiveBar } from "@nivo/bar";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import {mockBarData as data} from "../data/mockData";


const MyBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveBar
      data={data}
      keys={[
        "electrical",
        "repair",
        "plumbing",
        "cleaning",
        "home_security",
        "renovation",
        "pesticide",
        "painting",
        "appliance",
        "carpentry",
      ]}
      indexBy="area"
      margin={{ top: 50, right: 130, bottom: 60, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "City name",
        legendPosition: "middle",
        legendOffset: 40,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Number of Home Services",
        legendPosition: "middle",
        legendOffset: -50,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          translateX: 120,
          itemWidth: 120,
          itemHeight: 20,
          itemsSpacing: 2,
          itemTextColor: colors.grey[100],
          symbolShape: "circle",
        },
      ]}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            background: theme.palette.mode === "dark" ? "#1f2a40" : "#fff",
            color: theme.palette.mode === "dark" ? "#fff" : "#333",
            fontSize: 12,
          },
        },
      }}
      role="application"
      ariaLabel="Bar chart showing number of home services by area"
    />
  );
};

export default MyBar;
