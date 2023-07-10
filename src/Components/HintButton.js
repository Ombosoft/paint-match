import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import PropTypes from "prop-types";
import { useHintTutorial, useHintTutorial2 } from "../Tutorial";
import useDisappearingState from "../Util/DisappearingState";
import NiceButton from "./NiceButton";

function HintButton({ enabled, onClick, secondTutorial }) {
    const [allowTutorial, onUsed] = useHintTutorial();
    const [allowTutorial2, onUsed2] = useHintTutorial2();
    const showTutorial = useDisappearingState((allowTutorial || (allowTutorial2 && secondTutorial)) && enabled);
    const tutorialAllowed = allowTutorial || allowTutorial2;

    function handleClick() {
        onUsed();
        if (secondTutorial) {
            onUsed2();
        }
        onClick();
    }

    return (
        <NiceButton
            id="hint"
            title={tutorialAllowed ? <h1>Get advice</h1> : "Hint"}
            enabled={enabled}
            onClick={handleClick}
            forceTooltip={showTutorial}
            xOffset={tutorialAllowed ? 50 : 0}
        >
            <TipsAndUpdatesIcon fontSize="medium" />
        </NiceButton>
    );
}

HintButton.propTypes = {
    enabled: PropTypes.bool.isRequired,
    secondTutorial: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};

export default HintButton;
