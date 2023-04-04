import React, {useState} from "react";
import {Button} from "@mui/material";
import PropTypes from 'prop-types';

function AppTitle({onDebug}) {
    const [clickCount, setClickCount] = useState(0);
    const [debug, setDebug] = useState(false);

    function maybeTriggerDebug() {
        setClickCount((prev) => prev + 1);
        if (clickCount < 2) return;
        const newDebug = !debug;
        setDebug(newDebug);
        onDebug(newDebug);
    }

    function clearLocalStorage() {
        localStorage.clear();
    }

    return <>
        <p onClick={maybeTriggerDebug}>
            Paint Match
        </p>
        {debug && (
            <Button onClick={clearLocalStorage}>Clear Local Storage</Button>
        )}
    </>;
}

AppTitle.propTypes = {
    onDebug: PropTypes.func.isRequired,
};

export default AppTitle;