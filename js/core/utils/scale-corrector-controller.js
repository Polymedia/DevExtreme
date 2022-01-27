const { ScaleCorrector } = require('./scale-corrector');

const SCALE_CONTAINER_SELECTOR = '.va-dashboard-container';

/** singleton */
let scaleCorrector = null;

function getScaleCorrector() {

    if (scaleCorrector === null) {
        const scaleContainerElement = window.document.querySelector(SCALE_CONTAINER_SELECTOR);

        if (scaleContainerElement === null)
            throw new Error(`Не найден HTML элемент: ${SCALE_CONTAINER_SELECTOR}`);

        scaleCorrector = new ScaleCorrector(scaleContainerElement);
    }

    return scaleCorrector;
}

module.exports = {
    getScaleCorrector
};