#!/bin/sh
exec babel app.js --out-file app.compiled.js --plugins=transform-react-jsx "$@"
