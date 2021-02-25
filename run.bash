#!/bin/bash
sed <toggle.js.org \
    -e '/input ports/d' \
    -e '/output ports/d' \
    -e '/states/d' \
    -e '/top level/d' \
    -e '/kernel library/d' \
    -e '/foreign functions/d' \
    | sed -e 's/^[*]* //' > temp.js

node temp


