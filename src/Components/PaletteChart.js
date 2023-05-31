import { Box } from "@mui/material";
import { linearGradientDef } from "@nivo/core";
import { ResponsivePie } from "@nivo/pie";
import PropTypes from "prop-types";

const theme = {
    background: "#ffffff",
    border: "#000000",
    text: {
        fontSize: 36,
        fill: "#11c01c",
        outlineWidth: 6,
        outlineColor: "#da1010",
    },
    axis: {
        domain: {
            line: {
                stroke: "#777777",
                strokeWidth: 1,
            },
        },
        legend: {
            text: {
                fontSize: 12,
                fill: "#333333",
                outlineWidth: 0,
                outlineColor: "transparent",
            },
        },
        ticks: {
            line: {
                stroke: "#777777",
                strokeWidth: 1,
            },
            text: {
                fontSize: 11,
                fill: "#333333",
                outlineWidth: 0,
                outlineColor: "transparent",
            },
        },
    },
    grid: {
        line: {
            stroke: "#dddddd",
            strokeWidth: 1,
        },
    },
    legends: {
        title: {
            text: {
                fontSize: 11,
                fill: "#333333",
                outlineWidth: 0,
                outlineColor: "transparent",
            },
        },
        text: {
            fontSize: 111,
            fill: "#333333",
            outlineWidth: 0,
            outlineColor: "transparent",
        },
        ticks: {
            line: {},
            text: {
                fontSize: 10,
                fill: "#333333",
                outlineWidth: 0,
                outlineColor: "transparent",
            },
        },
    },
    labels: {
        text: {
            fontSize: "1em",
            fill: "#333333",
            outlineWidth: 20,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
        },
    },
    annotations: {
        text: {
            fontSize: 13,
            fill: "#333333",
        },
        link: {
            stroke: "#000000",
            strokeWidth: 1,
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
        },
        outline: {
            stroke: "#000000",
            strokeWidth: 2,
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
        },
        symbol: {
            fill: "#000000",
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
        },
    },
    tooltip: {
        container: {
            background: "#ffffff",
            fontSize: "1em",
        },
        basic: {},
        chip: {},
        table: {},
        tableCell: {},
        tableCellValue: {},
    },
};

function PaletteChart({ width, height, components }) {
    const data = Object.entries(components)
        .filter(([_, num]) => num > 0)
        .map(([color, num]) => ({
            id: color,
            label: color,
            color: color,
            value: num,
            textColor: color === "black" ? "white" : "black",
        }));
    const Pie = ({ data }) => (
        <ResponsivePie
            data={data}
            margin={{ top: 5, right: 60, bottom: -50, left: 50 }}
            theme={theme}
            startAngle={285}
            padAngle={0.5}
            sortByValue={false}
            tooltip={() => <></>}
            innerRadius={0.65}
            cornerRadius={10}
            activeOuterRadiusOffset={8}
            colors={(x) => {
                return x.data.color;
            }}
            borderWidth={1.5}
            borderColor={{
                from: "color",
                modifiers: [["darker", 0.3]],
            }}
            enableArcLinkLabels={false}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsTextColor={(x) => {
                return x.data.textColor;
            }}
            defs={[
                linearGradientDef(
                    "gradientAll",
                    [
                        { offset: 0, color: "inherit" },
                        { offset: 100, color: "inherit", opacity: 0.4 },
                    ],
                    {
                        gradientTransform: "rotate(135 0.5 0.5)",
                    }
                ),
                linearGradientDef(
                    "gradientWhite",
                    [
                        { offset: 0, color: "#d0d0d0" },
                        { offset: 50, color: "#f7f7f7" },
                        { offset: 100, color: "inherit" },
                    ],
                    {
                        gradientTransform: "rotate(135 0.5 0.5)",
                    }
                ),
                linearGradientDef(
                    "gradientYellow",
                    [
                        { offset: 0, color: "inherit", opacity: 1 },
                        { offset: 100, color: "inherit", opacity: 0.1 },
                    ],
                    {
                        gradientTransform: "rotate(135 0.5 0.5)",
                    }
                ),
            ]}
            fill={[
                {
                    match: {
                        id: "white",
                    },
                    id: "gradientWhite",
                },
                {
                    match: {
                        id: "yellow",
                    },
                    id: "gradientYellow",
                },
                {
                    match: {
                        // id: "green",
                    },
                    id: "gradientAll",
                },
            ]}
            legends={[]}
        />
    );
    return (
        <Box sx={{ height: height, width: width }}>
            <Pie data={data} />
        </Box>
    );
}

PaletteChart.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.string.isRequired,
    components: PropTypes.object.isRequired,
};

export default PaletteChart;
