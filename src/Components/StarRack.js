import { Box, Stack, Tooltip } from "@mui/material";
import PropTypes from "prop-types";
import { range } from "../Util/Utils";

function StarRack({ stars, stackSx, fontSize, dropShadow}) {
    if (stars === 0) {
        return <></>;
    }
    const iconStype = dropShadow ? {filter: "drop-shadow(2px 4px 2px rgb(0 0 0 / 0.2))"} : {};
    return (
        <Tooltip title={explanationMessage(stars)}>
            <Stack
                direction="row"
                sx={{
                    ...stackSx,
                }}
                spacing={fontSize / 4}
            >
                {range(stars).map((id) => (
                    <Box sx={{ width: `${fontSize}em` }} key={id}>
                        <img
                            width="100%"
                            src={process.env.PUBLIC_URL + "/img/star.svg"}
                            alt="star"
                            style={iconStype}
                        />
                    </Box>
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
    dropShadow: PropTypes.bool,
};

export default StarRack;
