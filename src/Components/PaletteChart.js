import { Box } from "@mui/material";
import { linearGradientDef } from "@nivo/core";
import { ResponsivePie, ResponsivePieCanvas } from "@nivo/pie";
import { animated } from "@react-spring/web";
import PropTypes from "prop-types";
import { useCallback, useMemo, useRef, useState } from "react";
import { textColorFromName, themePalette } from "../Colors";
import { isAppleOrOldAndroid, useIsTouchScreen } from "../Util/DeviceTypeDetector";

const theme = {
    background: "transparent",
    border: "#000000",
    text: {
        fontSize: 36,
        fill: "#11c01c",
        outlineWidth: 6,
        outlineColor: "#da1010",
    },
    labels: {
        text: {
            fontSize: "16",
            fontWeight: "bold",
            fontFamily: "Nunito",
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

const gradientOptions = {
    gradientTransform: "rotate(135 0.5 0.5)",
};

function gradientId(color) {
    return `gradient_${color}`;
}

function gradientDef(color) {
    return linearGradientDef(
        gradientId(color),
        [
            { offset: 0, color: themePalette[color].main },
            { offset: 100, color: themePalette[color].light },
        ],
        gradientOptions
    );
}

function gradientMatch(color) {
    return {
        match: {
            id: color,
        },
        id: gradientId(color),
    };
}

// Gradients and SVG are broken on iOS and in Safari when data changes dynamically
const brokenSVG = isAppleOrOldAndroid()
const gradientFill = Object.keys(themePalette).map((color) =>
    gradientMatch(color)
);

const defs = {
    sortByValue: false,
    tooltip: () => <></>,
    cornerRadius: 10,
    defs: Object.keys(themePalette).map((color) => gradientDef(color)),
    enableArcLinkLabels: false,
    arcLinkLabelsSkipAngle: 10,
    arcLinkLabelsTextColor: "#333333",
    arcLinkLabelsThickness: 2,
    arcLinkLabelsColor: { from: "color" },
    legends: [],
};

const borderColor = {
    from: "color",
    modifiers: [
        ["darker", 0.5],
        ["opacity", 0.5],
    ],
};

function PaletteChart({
    width,
    height,
    margin,
    startAngle,
    noFit,
    borderWidth,
    innerRadius,
    activeInnerRadiusOffset,
    activeOuterRadiusOffset,
    components,
    onClick,
    valueToLabelMapper,
    tooltip,
    ArcLabel,
}) {
    const [focusedId, setFocusedId] = useState();
    const data = useMemo(
        () =>
            Object.entries(components)
                .filter(([_, num]) => num > 0)
                .map(([color, num]) => ({
                    id: color,
                    label: color,
                    color: themePalette[color].main,
                    value: num,
                    textColor: textColorFromName(color),
                })),
        [components]
    );
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
    const handleMouseEnter = useCallback(
        (datum, target) => {
            if (isTouchScreen) {
                autoMouseLeave(datum, target);
            }
            setFocusedId(datum.id);
        },
        [autoMouseLeave, isTouchScreen]
    );
    const handleMouseLeave = useCallback(() => {
        setFocusedId(null);
    }, []);
    const handleMouseClick = useCallback(
        (node, event) => {
            if (isTouchScreen) {
                autoMouseEnter(event);
            }
            if (onClick) {
                onClick(node.id);
            }
        },
        [autoMouseEnter, isTouchScreen, onClick]
    );
    const colorChooser = useCallback((x) => {
        return x.data.color;
    }, []);
    const arcLabelsTextColor = useCallback((x) => {
        return x.data.textColor;
    }, []);
    // Active animations are very slow on old iOS
    return (
        <Box sx={{ height: height, width: width }}>
            {brokenSVG ? (
                <ResponsivePieCanvas
                    data={data}
                    arcLabel={(v) =>
                        valueToLabelMapper
                            ? valueToLabelMapper(v.value)
                            : v.value
                    }
                    margin={margin}
                    theme={theme}
                    startAngle={startAngle}
                    endAngle={365}
                    fit={!noFit}
                    padAngle={0.9}
                    innerRadius={innerRadius}
                    colors={colorChooser}
                    borderWidth={borderWidth}
                    borderColor={borderColor}
                    arcLabelsTextColor={arcLabelsTextColor}
                    {...defs}
                    fill={gradientFill}
                    onClick={handleMouseClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            ) : (
                <ResponsivePie
                    data={data}
                    margin={margin}
                    theme={theme}
                    startAngle={startAngle}
                    endAngle={365}
                    fit={!noFit}
                    padAngle={0.9}
                    innerRadius={innerRadius}
                    activeOuterRadiusOffset={activeOuterRadiusOffset}
                    activeInnerRadiusOffset={activeInnerRadiusOffset}
                    colors={colorChooser}
                    borderWidth={borderWidth}
                    borderColor={borderColor}
                    arcLabelsTextColor={arcLabelsTextColor}
                    {...arcLabelsComponent(
                        ArcLabel,
                        valueToLabelMapper,
                        tooltip,
                        focusedId
                    )}
                    {...defs}
                    fill={gradientFill}
                    onClick={handleMouseClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            )}
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
    borderWidth: PropTypes.number.isRequired,
    innerRadius: PropTypes.number.isRequired,
    activeInnerRadiusOffset: PropTypes.number,
    activeOuterRadiusOffset: PropTypes.number,
    components: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    valueToLabelMapper: PropTypes.func,
    tooltip: PropTypes.string,
    ArcLabel: PropTypes.func,
};

export default PaletteChart;
