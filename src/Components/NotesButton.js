import DescriptionIcon from "@mui/icons-material/Description";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Box, Card, IconButton, Tooltip } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNotesTutorial } from "../Tutorial";
import useDisappearingState from "../Util/DisappearingState";

function NotesButton({ notes, enabled }) {
    const [allowTutorial, onUsed] = useNotesTutorial();
    const showTutorial = useDisappearingState(allowTutorial);
    const [openTooltip, setOpenTooltip] = useState(false);

    useEffect(() => {
        if (openTooltip) {
            const timerId = setTimeout(() => {
                setOpenTooltip(false);
            }, 5000);

            return () => {
                clearTimeout(timerId);
            };
        }
    }, [openTooltip]);

    function handleClose() {
        setOpenTooltip(false);
    }

    function handleOpen() {
        setOpenTooltip(true);
    }

    function handleClick() {
        onUsed();
        setOpenTooltip(true);
    }
    if (!enabled) {
        return (
            <IconButton color="secondary" size="medium" disabled>
                <FormatQuoteIcon />
            </IconButton>
        );
    }

    return (
        <Tooltip
            title={
                allowTutorial ? (
                    <h1>See the hint again</h1>
                ) : (
                    <Card
                        sx={{ margin: "4px 0px" }}
                        onClick={() => setOpenTooltip(false)}
                    >
                        <FormatQuoteIcon />
                        <Box margin="2em">
                            <h2>{notes}</h2>
                        </Box>
                        <FormatQuoteIcon />
                    </Card>
                )
            }
            open={openTooltip || showTutorial}
            onClose={handleClose}
            onOpen={handleOpen}
            placement="top-end"
            arrow
            PopperProps={{
                modifiers: [
                    {
                        name: "offset",
                        options: {
                            offset: [0, -18],
                        },
                    },
                ],
            }}
        >
            <IconButton onClick={handleClick} color="secondary" size="medium">
                <DescriptionIcon />
            </IconButton>
        </Tooltip>
    );
}

NotesButton.propTypes = {
    notes: PropTypes.string.isRequired,
    enabled: PropTypes.bool.isRequired,
};

export default NotesButton;
