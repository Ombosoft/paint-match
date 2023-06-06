import { Box } from "@mui/material";
import PropTypes from "prop-types";
import PaletteChart from "./PaletteChart";

function RadiantButtons({ components, diameter, onClick, children }) {
    return (
        <Box width="100%" height={diameter} sx={{ position: "relative" }}>
            <PaletteChart
                width="100%"
                height="100%"
                margin={{ top: 0, bottom: 0, right: 0, left: 0 }}
                startAngle={0}
                background="transparent"
                innerRadius={0.7}
                components={components}
                onClick={onClick}
            />
            <Box
                position="absolute"
                top="50%"
                left="50%"
                sx={{ transform: "translate(-50%, -50%)" }}
            >
                {children}
            </Box>
        </Box>
    );
}

RadiantButtons.propTypes = {
    components: PropTypes.object.isRequired,
    diameter: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default RadiantButtons;
