import { Browser } from "@capacitor/browser";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import PropTypes from "prop-types";
import { textForeground } from "../Constants";
import { isNative } from "../Util/DeviceTypeDetector";
import { rateMeta } from "../Util/Meta";
import CaptionButton from "./CaptionButton";

function RateButton({ id, onClick, captionColor }) {
    const native = isNative();
    async function onRate() {
        if (native) {
            await Browser.open({
                url: "https://play.google.com/store/apps/details?id=com.ombosoft.paintmatch",
            });
            await rateMeta();
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
