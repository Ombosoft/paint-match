import TuneIcon from "@mui/icons-material/Tune";
import PropTypes from "prop-types";
import { useSlidersTutorial } from "../Tutorial";
import useDisappearingState from "../Util/DisappearingState";
import NiceButton from "./NiceButton";

function SlidersButton({ enabled, onClick }) {
    const [allowTutorial, onUsed] = useSlidersTutorial();
    const showTutorial = useDisappearingState(allowTutorial && enabled);

    function handleClick() {
        onUsed();
        onClick();
    }

    return (
        <NiceButton
            title={allowTutorial ? <h1>Try slider mode</h1> : "Sliders"}
            enabled={enabled}
            onClick={handleClick}
            forceTooltip={showTutorial}
            xOffset={allowTutorial ? 50 : 0}
        >
            <TuneIcon fontSize="large" />
        </NiceButton>
    );
}

SlidersButton.propTypes = {
    enabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default SlidersButton;
