import PersonPinIcon from "@mui/icons-material/PersonPin";
import { Stack } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { isSimplified, textForeground } from "../Constants";
import CaptionButton from "./CaptionButton";
import ItchSnackBar from "./ItchSnackBar";
import RateButton from "./RateButton";

function ExtraMenu({ onCredits }) {
    const [rateOpen, setRateOpen] = useState(false);
    return (
        <>
            <Stack
                direction="row"
                spacing={2}
                sx={{
                    zIndex: 1,
                    fontSize: "2em",
                    background: "rgba(0, 0, 0, 0.6)",
                    borderRadius: "21px",
                    justifyContent: "center",
                    paddingTop: "0.5em",
                    paddingBottom: "0.3em",
                }}
            >
                {!isSimplified && (<>
                    <RateButton
                        id="menu-rate"
                        onClick={() => {
                            setRateOpen(true);
                        }}
                    />
                </>)
                }
                <CaptionButton
                    id="credits"
                    caption="Credits"
                    captionColor={textForeground}
                    onClick={onCredits}
                >
                    <PersonPinIcon />
                </CaptionButton>
            </Stack>
            <ItchSnackBar
                open={rateOpen}
                onClose={() => {
                    setRateOpen(false);
                }}
            />
        </>
    );
}

ExtraMenu.propTypes = {
    onCredits: PropTypes.func.isRequired,
};
export default ExtraMenu;
