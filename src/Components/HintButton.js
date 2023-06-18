import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import PropTypes from "prop-types";
import { useHintTutorial } from "../Tutorial";
import useDisappearingState from "../Util/DisappearingState";
import NiceButton from "./NiceButton";

// TODO extract common code
function HintButton({ enabled, onClick }) {
    const [allowTutorial, onUsed] = useHintTutorial();
    const showTutorial = useDisappearingState(allowTutorial && enabled);

    function handleClick() {
        onUsed();
        onClick();
    }

    return (
        <NiceButton
            id="hint"
            title={allowTutorial ? <h1>Get advice</h1> : "Hint"}
            enabled={enabled}
            onClick={handleClick}
            forceTooltip={showTutorial}
            xOffset={allowTutorial ? 50 : 0}
        >
            <TipsAndUpdatesIcon fontSize="medium" />
        </NiceButton>
    );
}

HintButton.propTypes = {
    enabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default HintButton;
