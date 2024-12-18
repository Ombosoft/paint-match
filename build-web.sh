#!/bin/sh -e

rm -rf build build.zip
npm run build
zip -r build.zip build
cd build
zip -r ../build-kongregate.zip *