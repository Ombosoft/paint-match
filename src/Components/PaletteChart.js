import { Box } from "@mui/material";
import { linearGradientDef } from "@nivo/core";
import { ResponsivePie } from "@nivo/pie";
import { animated } from "@react-spring/web";
import PropTypes from "prop-types";
import { useCallback, useRef, useState } from "react";
import { themePalette } from "../Colors";
import useIsTouchScreen from "../Util/DeviceTypeDetector";

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

const defs = {
    sortByValue: false,
    tooltip: () => <></>,
    cornerRadius: 10,
    borderWidth: 1.5,
    defs: [
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
    ],
    fill: [
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
    ],
    enableArcLinkLabels: false,
    arcLinkLabelsSkipAngle: 10,
    arcLinkLabelsTextColor: "#333333",
    arcLinkLabelsThickness: 2,
    arcLinkLabelsColor: { from: "color" },
    legends: [],
};

function PaletteChart({
    width,
    height,
    margin,
    startAngle,
    noFit,
    background,
    innerRadius,
    activeInnerRadiusOffset,
    components,
    onClick,
    valueToLabelMapper,
    tooltip,
    ArcLabel,
}) {
    const [focusedId, setFocusedId] = useState();
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
    const leaveTimerRef = useRef();
    // Simulates hover on touch screens: auto release with delay after tap
    const autoMouseLeave = useCallback(
        (_, event) => {
            if (leaveTimerRef.current) {
                clearTimeout(leaveTimerRef.current);
            }
            leaveTimerRef.current = setTimeout(() => {
                let leaveEvent = new MouseEvent("mouseout", {
                    view: window,
                    bubbles: true,
                    cancelable: true,
                });
                event.target.dispatchEvent(leaveEvent);
                leaveTimerRef.current = null;
            }, 1000);
        },
        [leaveTimerRef]
    );
    // Simulater hover on touch screens: auto enter after second tap
    const autoMouseEnter = useCallback(
        (event) => {
            if (leaveTimerRef.current) {
                // already entered
                return;
            }
            let enterEvent = new MouseEvent("mouseover", {
                view: window,
                bubbles: true,
                cancelable: true,
            });
            event.target.dispatchEvent(enterEvent);
        },
        [leaveTimerRef]
    );
    const isTouchScreen = useIsTouchScreen();
    const handleMouseEnter = (datum, target) => {
        if (isTouchScreen) {
            autoMouseLeave(datum, target);
        }
        setFocusedId(datum.id);
    };
    const handleMouseLeave = () => {
        setFocusedId(null);
    };
    const handleMouseClick = isTouchScreen ? autoMouseEnter : () => {};
    return (
        <Box sx={{ height: height, width: width }}>
            <ResponsivePie
                data={data}
                margin={margin}
                theme={thisTheme}
                startAngle={startAngle}
                fit={!noFit}
                padAngle={0.9}
                innerRadius={innerRadius}
                activeOuterRadiusOffset={8}
                activeInnerRadiusOffset={activeInnerRadiusOffset}
                colors={(x) => {
                    return x.data.color;
                }}
                borderColor={{
                    from: "color",
                    modifiers: [["darker", 0.3]],
                }}
                arcLabelsTextColor={(x) => {
                    return x.data.textColor;
                }}
                {...arcLabelsComponent(ArcLabel, valueToLabelMapper, tooltip, focusedId)}
                {...defs}
                onClick={(node, event) => {
                    handleMouseClick(event);
                    onClick && onClick(node.id);
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
        </Box>
    );
}

function arcLabelsComponent(ArcLabel, valueToLabelMapper, tooltip, focusedId) {
    if (!ArcLabel) {
        return {};
    }
    return {
        arcLabelsComponent: ({ datum, label, style }) => {
            const maxBoxSize = 200;
            return (
                <animated.g
                    transform={style.transform}
                    style={{ pointerEvents: "none" }}
                >
                    <g
                        transform={`translate(-${maxBoxSize / 2}, -${
                            maxBoxSize / 2
                        })`}
                    >
                        <foreignObject width={maxBoxSize} height={maxBoxSize}>
                            <ArcLabel
                                datum={datum}
                                valueToLabelMapper={
                                    valueToLabelMapper ?? ((x) => x)
                                }
                                tooltip={tooltip}
                                inFocus={datum.id === focusedId}
                            />
                        </foreignObject>
                    </g>
                </animated.g>
            );
        },
    };
}

PaletteChart.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    margin: PropTypes.object,
    startAngle: PropTypes.number.isRequired,
    noFit: PropTypes.bool,
    background: PropTypes.string.isRequired,
    innerRadius: PropTypes.number.isRequired,
    activeInnerRadiusOffset: PropTypes.number,
    components: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    valueToLabelMapper: PropTypes.func,
    tooltip: PropTypes.string,
    ArcLabel: PropTypes.func,
};

export default PaletteChart;
