import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from "@mui/material";
import PropTypes from "prop-types";
import NiceButton from "./NiceButton";

function OptionsMenuButton({ onClick }) {
    function handleClick() {
        if (onClick) {
            onClick();
        }
    }
    return (
        <NiceButton
            id="options"
            title={"Options"}
            enabled={true}
            onClick={handleClick}
            forceTooltip={false}
        >
            <Stack direction="column" alignItems="center">
                <MenuIcon fontSize="large" />
            </Stack>
        </NiceButton>
    );
}

OptionsMenuButton.propTypes = {
    onClick: PropTypes.func,
};

export default OptionsMenuButton;
