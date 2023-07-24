import { DialogContent } from "@mui/material";
import { useEffect, useRef } from "react";


// Always scrolls to the end on open
export default function ScrollableDialogContent({ open, children, ...rest }) {
    const contentRef = useRef(null);

    useEffect(() => {
        if (open) {
            const { current } = contentRef;
            if (current) {
                current.scrollTop = current.scrollHeight;
            }
        }
    }, [open]);

    return (
        <DialogContent {...rest} ref={contentRef}>
            {children}
        </DialogContent>
    );
}
