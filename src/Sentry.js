import * as Sentry from "@sentry/react";

export default function sentryInit() {
    try {
        const dsn = require("./conf/sentrydsn.conf.js");
        if (!dsn) {
            return;
        }
        Sentry.init({
            environment: process.env.NODE_ENV,
            release: "v9.1",
            dsn: dsn.sentryDsn,
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
