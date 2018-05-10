class NODE {
    constructor(...param) {
        console.log('NODE constructor');
        console.log(param);
    }

    show(...param) {
        console.log('NODE show');
    }
}

module.exports = NODE;