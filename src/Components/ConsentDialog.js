import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useState } from "react";
import { useDataConsent } from "../DataConsent";
import { gaInit } from "../GA";
import { sentryDisable } from "../Sentry";

const ConsentDialog = () => {
    const [optIn, setOptIn] = useDataConsent();
    const [open, setOpen] = useState(optIn === null);

    const handleClose = (consent) => {
        setOpen(false);
        setOptIn(consent);
        if (consent) {
            gaInit();
        } else {
            sentryDisable();
        }
    };

    return (
        <Dialog open={open} onClose={() => handleClose(false)} style={{ zIndex: 2000 }}>
            <DialogTitle>Welcome, Gamer!</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    We'd love your consent to collect anonymized usage data.
                    This helps us improve gameplay and zap bugs. We'll always
                    respect our{" "}
                    <a href="https://ombosoft.github.io/paint-match/PrivacyPolicy">
                        Privacy Policy
                    </a>{" "}
                    when handling your info. No obligation - you can still play
                    either way.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={() => handleClose(true)}
                    color="primary"
                    autoFocus
                >
                    Sure, I'm in!
                </Button>
                <Button onClick={() => handleClose(false)} color="secondary">
                    No thanks
                </Button>
            </DialogActions>{" "}
        </Dialog>
    );
};

export default ConsentDialog;
