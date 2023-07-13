#!/bin/sh -e

rm -rf build build.zip
npm run build
npm run sentry:sourcemaps
zip -r build.zip build