import * as Sentry from "@sentry/react";
import { getDataConsent } from "./DataConsent";
const sentryDsn =
    "https://7ba852b4802048b191a9deda0dc08547@o4505380972265472.ingest.sentry.io/4505380974886912";

export function sentryInit() {
    try {
        if (getDataConsent() === false) {
            return;
        }
        Sentry.init({
            environment: process.env.NODE_ENV,
            release: "v9.1",
            dsn: sentryDsn,
            integrations: [
                new Sentry.Replay({
                    maskAllText: false,
                    blockAllMedia: false,
                }),
            ],
            // Performance Monitoring
            tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
            // Session Replay
            replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
            replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
        });
    } catch {}
}

export function sentryDisable() {
    try {
        Sentry.getCurrentHub().getClient().getOptions().enabled = false;
    } catch {}
}
