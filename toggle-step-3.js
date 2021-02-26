this.enter = function (next_state) {
    switch (next_state) {
    case _off:
        fire (_no, true);
        this.state = _off;
        break;
    case _on:
        fire (_yes, true);
        this.state = _on;
        break;
    }
}
