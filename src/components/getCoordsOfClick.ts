const getCoordsOfClick = (e, src) => {
    let row = 0;
        let col = 0;

        if (src) {
            row = e.target.parentNode.getAttribute('data-value')[0];
            col = e.target.parentNode.getAttribute('data-value')[2];
        } else {
            row = e.target.getAttribute('data-value')[0];
            col = e.target.getAttribute('data-value')[2];
        }

        return [row, col];
}

export default getCoordsOfClick;