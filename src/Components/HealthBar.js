import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { animationDurationMs, extraCommitDelay } from "../Constants";

function HealthBar({ percent }) {
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                border: "solid",
                borderWidth: "2px",
                borderColor: "#e7e7e7e0",
                backgroundColor: "#80808090",
                borderRadius: "1em",
                boxShadow: "5px 5px 10px black"
            }}
        >
            <Box
                sx={{
                    width: `${percent}%`,
                    height: "0.8em",
                    backgroundColor: "green",
                    backgroundImage: "linear-gradient(180deg, #17ae17f0, #045304f0)",
                    borderRadius: "1em",
                    transitionProperty: "width",
                    transitionDuration: `${animationDurationMs + extraCommitDelay}ms`,
                    transitionTimingFunction: "ease-in-out",
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    color: "black",
                    fontSize: "0.6em",
                    textAlign: "center",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                {percent}
                {" / 100"}
            </Box>
        </Box>
    );
}

HealthBar.propTypes = {
    percent: PropTypes.any.isRequired,
};

export default HealthBar;
