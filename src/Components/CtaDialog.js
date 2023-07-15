import CloseIcon from "@mui/icons-material/Close";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { gaButton } from "../GA";
import CaptionButton from "./CaptionButton";
import FeedbackDialog from "./FeedbackDialog";
import ItchSnackBar from "./ItchSnackBar";
import RateButton from "./RateButton";

function CtaDialog({ open, onClose }) {
    const [rateOpen, setRateOpen] = useState(false);
    const [feedbackOpen, setFeedbackOpen] = useState(false);
    const [like, setLike] = useState(null);

    function handleLike() {
        gaButton("cta-like");
        setLike(true);
    }

    function handleDislike() {
        gaButton("cta-dislike");
        setLike(false);
        setFeedbackOpen(true);
        onClose();
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={onClose}
                PaperProps={{
                    sx: {
                        borderRadius: "21px",
                        margin: "8px",
                        fontSize: "1.3em",
                    },
                }}
            >
                <DialogTitle
                    sx={{
                        margin: 0,
                        padding: 2,
                        marginBottom: 0,
                        background: "#f0f0f0",
                    }}
                >
                    We hope you're enjoying the game!
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: "absolute",
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent
                    sx={{
                        padding: "14px 14px",
                    }}
                >
                    <DialogContent>
                        <DialogContentText>
                            {like === null &&
                                "Do you like it so far? Your feedback helps us improve."}
                            {like &&
                                `Did you notice there's no ads? You can contribute by giving the game a rating.`}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions
                        sx={{ justifyContent: "center", gap: "2em" }}
                    >
                        {like === null && (
                            <>
                                <Button onClick={handleLike} color="primary">
                                    Yes, it's great!
                                </Button>
                                <Button onClick={handleDislike}>
                                    Could be better
                                </Button>
                            </>
                        )}
                        {like && (
                            <>
                                <RateButton
                                    id="cta-rate"
                                    onClick={() => {
                                        setRateOpen(true);
                                        onClose();
                                    }}
                                    captionColor="black"
                                />
                                <CaptionButton
                                    id="cta-later"
                                    caption="Later"
                                    captionColor="black"
                                    onClick={onClose}
                                >
                                    <WatchLaterIcon />
                                </CaptionButton>
                            </>
                        )}
                    </DialogActions>
                </DialogContent>
            </Dialog>
            <ItchSnackBar
                open={rateOpen}
                onClose={() => {
                    setRateOpen(false);
                }}
            />
            <FeedbackDialog
                open={feedbackOpen}
                onClose={() => setFeedbackOpen(false)}
            />
        </>
    );
}

CtaDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default CtaDialog;
