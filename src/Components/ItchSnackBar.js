import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Snackbar, Stack } from "@mui/material";
import { imgPath } from "../Constants";
import { isNative } from "../Util/DeviceTypeDetector";

function ItchSnackBar({ open, onClose }) {
    const native = isNative();

    return native ? (
        <></>
    ) : (
        <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={onClose}
            message={
                <Stack direction="row" alignItems="center" spacing={1}>
                    <Box fontSize="1.5em">Please rate us on itch.io</Box>
                    <ArrowForwardIcon />
                    <img src={imgPath("rate-itch.png")} alt="" />
                </Stack>
            }
        ></Snackbar>
    );
}

export default ItchSnackBar;
