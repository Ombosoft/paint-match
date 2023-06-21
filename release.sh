#!/bin/bash -e

SENTRY_AUTH_TOKEN=`cat src/conf/sentry.token`
SENTRY_ORG=ombosoft
SENTRY_PROJECT=paint-match
VERSION=$1
SR="sentry-cli releases --org $SENTRY_ORG -p $SENTRY_PROJECT --auth-token $SENTRY_AUTH_TOKEN"

$SR new "$VERSION"
$SR set-commits "$VERSION" --auto
$SR finalize "$VERSION"