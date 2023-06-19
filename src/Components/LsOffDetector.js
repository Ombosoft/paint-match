import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";
import { useIsLocalStorageEnabled } from "../Util/LocalStorageHook";

export function LsOffDetector() {
    const lsEnabled = useIsLocalStorageEnabled();
    const [open, setOpen] = useState(!lsEnabled);
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={15000}
            onClose={handleClose}
            message="Note archived"
        >
            <Alert
                onClose={handleClose}
                severity="warning"
                sx={{ width: "100%" }}
            >
                This game uses local storage to save progress. It's disabled in
                your browser, so the progress will be lost. You can enable it in
                Privacy settings (Allow cookies).
            </Alert>
        </Snackbar>
    );
}
