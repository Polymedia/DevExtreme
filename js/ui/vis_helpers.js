/**
 * Корректирует значение с учетом текущего зума
 * @param {number} value
 */
function applyDashboardZoomCorrection(value) {
    var zoom = window.visApi().getSheetZoom();
    var invertedScale = 100 / zoom;
    return value * invertedScale;
}

module.exports = {
    applyDashboardZoomCorrection,
};
