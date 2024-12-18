import { Browser } from "@capacitor/browser";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import PropTypes from "prop-types";
import { textForeground } from "../Constants";
import { isAndroidNative, isNative } from "../Util/DeviceTypeDetector";
import CaptionButton from "./CaptionButton";

function RateButton({ id, onClick, captionColor }) {
    const native = isNative();
    async function onRate() {
        if (native) {
            if (isAndroidNative()) {
                await Browser.open({
                    url: "https://play.google.com/store/apps/details?id=com.ombosoft.paintmatch",
                });
            }
        }
        onClick();
    }

    return (
        <CaptionButton
            id={id}
            caption="Rate Us"
            captionColor={captionColor ?? textForeground}
            onClick={onRate}
        >
            <ThumbUpIcon />
        </CaptionButton>
    );
}

RateButton.propTypes = {
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    captionColor: PropTypes.string,
};

export default RateButton;
