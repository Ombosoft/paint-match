import ReactGA from "react-ga4";

export function gaInit() {
    ReactGA.initialize("G-EWFT0WDY4J");
}

export function gaButton(buttonId) {
    gaAction("button", buttonId);
}

export function gaAction(actionType, actionId) {
    ReactGA.event("select_content", {
        content_type: actionType,
        content_id: actionId,
    });
}

export function gaLevelStart(level) {
    ReactGA.event("level_start", { level_name: JSON.stringify(level) });
}
