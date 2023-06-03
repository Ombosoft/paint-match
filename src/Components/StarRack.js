import StarIcon from "@mui/icons-material/Star";
import { Stack, Tooltip } from "@mui/material";
import PropTypes from "prop-types";
import { range } from "../Util/Utils";

function StarRack({ stars, stackSx, fontSize, decoration }) {
    if (stars === 0) {
        return <></>;
    }
    const starBorderColor = "rgb(255 255 0 / 0.5)";
    const starBorderBlur = "0px";
    const shadow = "drop-shadow(2px 4px 2px rgb(0 0 0 / 0.2))";
    const filter = decoration
        ? `drop-shadow(1px 0px ${starBorderBlur} ${starBorderColor}) drop-shadow(-1px 0px  ${starBorderBlur} ${starBorderColor}) drop-shadow(0px 1px  ${starBorderBlur} ${starBorderColor}) drop-shadow(0px -1px  ${starBorderBlur} ${starBorderColor}) ${shadow}`
        : shadow;
    return (
        <Tooltip title={explanationMessage(stars)}>
            <Stack
                direction="row"
                sx={{
                    ...stackSx,
                }}
            >
                {range(stars).map((id) => (
                    <StarIcon
                        key={id}
                        sx={{
                            color: "gold",
                            fontSize: `${fontSize}em`,
                            filter: filter,
                        }}
                    />
                ))}
            </Stack>
        </Tooltip>
    );
}

function explanationMessage(stars) {
    switch(stars) {
        case 3: return "Perfect victory!";
        case 2: return "Victory!";
        case 1: return "Really close!";
        default: return "";
    }
}

StarRack.propTypes = {
    stars: PropTypes.number.isRequired,
    stackSx: PropTypes.object.isRequired,
    fontSize: PropTypes.number.isRequired,
    decoration: PropTypes.bool.isRequired,
};

export default StarRack;
