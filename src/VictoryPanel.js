import {Alert, AlertTitle, Collapse, IconButton} from "@mui/material";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PropTypes from "prop-types";
import React from "react";

function VictoryPanel({isVictory, onNextLevel}) {
    return <Collapse in={isVictory}>
        <Alert
            action={
                <IconButton
                    onClick={onNextLevel}
                    color="secondary"
                    size="large">
                    <SkipNextIcon fontSize="large"/>
                </IconButton>
            }
            sx={{mb: 2}}
        >
            <AlertTitle sx={{fontSize: 22, marginTop: 0, marginBottom: 0}}>Well done!</AlertTitle>
        </Alert>
    </Collapse>;
}

VictoryPanel.propTypes = {
    isVictory: PropTypes.bool,
    onNextLevel: PropTypes.func
};

export default VictoryPanel;