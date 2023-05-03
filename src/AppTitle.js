import React, {useState} from "react";
import {Button} from "@mui/material";
import PropTypes from 'prop-types';

function AppTitle({onDebug, level}) {
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
        Level {level}
        </p>
        {debug && (
            <Button onClick={clearLocalStorage}>Clear Local Storage</Button>
        )}
    </>;
}

AppTitle.propTypes = {
    onDebug: PropTypes.func.isRequired,
    level: PropTypes.number.isRequired,
};

export default AppTitle;