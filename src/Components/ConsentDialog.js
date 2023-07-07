import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useState } from "react";

const ConsentDialog = () => {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
        // TODO Save user's consent decision to localStorage
        // TODO Act on opt out
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Disclaimer</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    In order to improve this game and fix bugs, we collect
                    anonymized usage data. Are you ok with that? (See{" "}
                    <a href="https://ombosoft.github.io/paint-match/PrivacyPolicy">
                        Privacy Policy
                    </a>{" "}
                    for more details)
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    I'm fine with that
                </Button>
                <Button onClick={handleClose} color="secondary">
                    No
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConsentDialog;
