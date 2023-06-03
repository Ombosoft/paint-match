import StarIcon from "@mui/icons-material/Star";
import { Stack, Tooltip } from "@mui/material";
import PropTypes from "prop-types";
import { range } from "../Util/Utils";

function StarRack({ stars, stackSx, fontSize, decoration }) {
    if (stars === 0) {
        return <></>;
    }
    const starBorderColor = "#f7931e";
    const starBorderWidth = "0.1px";
    const starBorderBlur = "0.5px";
    const shadow = "drop-shadow(2px 4px 2px rgb(0 0 0 / 0.2))";
    const filter = decoration
        ? `drop-shadow(${starBorderWidth} 0px ${starBorderBlur} ${starBorderColor}) drop-shadow(-${starBorderWidth} 0px  ${starBorderBlur} ${starBorderColor}) drop-shadow(0px ${starBorderWidth}  ${starBorderBlur} ${starBorderColor}) drop-shadow(0px -${starBorderWidth}  ${starBorderBlur} ${starBorderColor}) ${shadow}`
        : shadow;
    return (
        <Tooltip title={explanationMessage(stars)}>
            <Stack
                direction="row"
                sx={{
                    ...stackSx,
                    backgroundImage: "linear-gradient(to right, red , yellow)",
                    backgroundClip: "text",
                    display: "inline",
                }}
                spacing={fontSize/4}
            >
                <svg width={0} height={0}>
                    <linearGradient
                        id="linearColors"
                        x1={0}
                        y1={0}
                        x2={1}
                        y2={1}
                    >
                        <stop offset={0} stopColor="#e1b605" />
                        <stop offset={1} stopColor="#f0de43" />
                    </linearGradient>
                </svg>
                {range(stars).map((id) => (
                    <span style={{ position: "relative", display: "inline-flex" }}>
                        {/* External stroke */}
                        <StarIcon
                            key={id}
                            sx={{
                                stroke: "#f7931e",
                                strokeWidth: "1.5px",
                                fontSize: `${fontSize}em`,
                                filter: filter,
                            }}
                        />
                        {/* Internal stroke and fill */}
                        <StarIcon
                            key={id}
                            sx={{
                                position: 'absolute',
                                fill: "url(#linearColors)",
                                stroke: "#f9cd0d",
                                strokeWidth: "0.5px",
                                fontSize: `${fontSize}em`,
                            }}
                        />
                    </span>
                ))}
            </Stack>
        </Tooltip>
    );
}

function explanationMessage(stars) {
    switch (stars) {
        case 3:
            return "Perfect victory!";
        case 2:
            return "Victory!";
        case 1:
            return "Really close!";
        default:
            return "";
    }
}

StarRack.propTypes = {
    stars: PropTypes.number.isRequired,
    stackSx: PropTypes.object,
    fontSize: PropTypes.number.isRequired,
    decoration: PropTypes.bool,
};

export default StarRack;
