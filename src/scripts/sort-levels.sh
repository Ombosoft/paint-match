#!/bin/sh -e
git checkout -- src/Levels.js
npx babel-node src/Scripts/SortLevels.js