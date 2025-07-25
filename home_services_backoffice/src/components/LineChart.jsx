import { ResponsiveLine } from "@nivo/line";
import { mockLineData as data } from "../data/mockData";
import { useTheme, Box } from "@mui/material";
import { tokens } from "../theme";

const MyLine = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box height="500px" width="100%">
      <ResponsiveLine
        data={data}
        colors={{ scheme: "nivo" }} 
        margin={{ top: 50, right: 150, bottom: 60, left: 80 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Month",
          legendOffset: 40,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Revenue (₹)",
          legendOffset: -50,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        enableTouchCrosshair={true}
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
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 130,
            translateY: 0,
            itemsSpacing: 4,
            itemDirection: "left-to-right",
            itemWidth: 120,
            itemHeight: 20,
            itemOpacity: 0.85,
            symbolSize: 12,
            symbolShape: "circle",
            itemTextColor: colors.grey[100],
          },
        ]}
      />
    </Box>
  );
};

export default MyLine;
