import { Box } from "@mui/material";
import { linearGradientDef } from "@nivo/core";
import { ResponsivePie } from "@nivo/pie";
import PropTypes from "prop-types";
import { themePalette } from "../Colors";

const theme = {
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

const Pie = ({ data, thisTheme, margin, startAngle, innerRadius, onClick }) => (
    <ResponsivePie
        data={data}
        margin={margin}
        theme={thisTheme}
        background="#ff0000"
        startAngle={startAngle}
        padAngle={0.7}
        sortByValue={false}
        tooltip={() => <></>}
        innerRadius={innerRadius}
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
                "gradientStrong",
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
                    id: "yellow",
                },
                id: "gradientStrong",
            },
            {
                match: {
                    id: "white",
                },
                id: "gradientStrong",
            },
            {
                match: {
                    // id: "green",
                },
                id: "gradientAll",
            },
        ]}
        legends={[]}
        onClick={(node) => {
            onClick(node.id);
        }}
    />
);

function PaletteChart({
    width,
    height,
    margin,
    startAngle,
    background,
    innerRadius,
    components,
    onClick,
}) {
    const thisTheme = { ...theme, background: background };
    const data = Object.entries(components)
        .filter(([_, num]) => num > 0)
        .map(([color, num]) => ({
            id: color,
            label: color,
            color: themePalette[color].main,
            value: num,
            textColor: color === "black" ? "white" : "black",
        }));
    return (
        <Box sx={{ height: height, width: width }}>
            <Pie
                data={data}
                thisTheme={thisTheme}
                margin={margin}
                startAngle={startAngle}
                innerRadius={innerRadius}
                onClick={onClick}
            />
        </Box>
    );
}

PaletteChart.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    margin: PropTypes.object,
    startAngle: PropTypes.number.isRequired,
    background: PropTypes.string.isRequired,
    innerRadius: PropTypes.number.isRequired,
    components: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default PaletteChart;
