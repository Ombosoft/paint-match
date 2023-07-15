import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
    Box,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Stack,
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

function CreditsDialog({ open, onClose }) {
    return (
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
                Paint Match
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
                <Stack direction="column" spacing={2} margin={2}>
                    <Stack alignItems="center" direction="row" paddingTop={2}>
                        <Box>Game design and coding:</Box>
                    </Stack>
                    <Stack
                        alignItems="center"
                        direction="row"
                        paddingLeft={2}
                        spacing={1}
                    >
                        <TipsAndUpdatesIcon fontSize="small" />
                        <strong>
                            Shurick (
                            <a
                                href="https://ombosoft.itch.io/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Ombosoft
                            </a>
                            )
                        </strong>
                        <LightLink href="https://www.instagram.com/ombosoft/">
                            <InstagramIcon
                                fontSize="large"
                                sx={{ color: "#E1306C" }}
                            />
                        </LightLink>
                        <LightLink href="https://twitter.com/ombosoft">
                            <TwitterIcon
                                fontSize="large"
                                sx={{ color: "#1DA1F2" }}
                            />
                        </LightLink>
                    </Stack>
                    <Box paddingTop={2}>Music:</Box>
                    <Stack
                        alignItems="center"
                        direction="row"
                        paddingLeft={2}
                        spacing={1}
                    >
                        <MusicNoteIcon fontSize="small" />
                        <a
                            href="https://kiwamialex.my.canva.site/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <strong>Kiwami Alex</strong>
                        </a>
                    </Stack>
                </Stack>
            </DialogContent>
        </Dialog>
    );
}

function LightLink({ href, children }) {
    return (
        <a
            href={href}
            style={{ display: "flex" }}
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </a>
    );
}

CreditsDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default CreditsDialog;
