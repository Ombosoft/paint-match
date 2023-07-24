import { Box, Stack } from "@mui/material";
import PropTypes from "prop-types";
import { imgPath } from "../Constants";
import { range } from "../Util/Utils";

function StarRack({ stars, stackSx, fontSize, dropShadow }) {
    if (stars === 0) {
        return <></>;
    }
    const iconStyle = dropShadow
        ? { filter: "drop-shadow(2px 4px 2px rgb(0 0 0 / 0.2))" }
        : {};
    return (
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
                        src={imgPath("star.svg")}
                        alt="star"
                        style={iconStyle}
                    />
                </Box>
            ))}
        </Stack>
    );
}

StarRack.propTypes = {
    stars: PropTypes.number.isRequired,
    stackSx: PropTypes.object,
    fontSize: PropTypes.number.isRequired,
    dropShadow: PropTypes.bool,
};

export default StarRack;
