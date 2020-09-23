/**
 * Ответственность класса: предоставить функции коррекции значений (размеров, смещений) находящихся в разных координатных пространствах
 * разные координатные пространства образуются при работе с виджетами на зумированном листе (zoom отличный от 100%)
 */
class ScaleCorrector {
    constructor(scaleContainer) {

        this.scaleContainer = scaleContainer;

        /**
         * элемент va-dashboard-container обладает смещением, которое находиться вне влияния зума листа
         * это смещение необходимо учитывать отдельно
         */
        this.cached = {
            outOfScalingHorizontalShift: 0,
            outOfScalingVerticalShift: 0,
            scale: 1
        };

        this.horizontalShift = this.horizontalShift.bind(this);
        this.verticalShift = this.verticalShift.bind(this);
        this.dimension = this.dimension.bind(this);
        this.scale = this.scale.bind(this);

        this._initMutationObserver(this.scaleContainer);
        this._updateCache();
    }

    _initMutationObserver(scaleContainer) {
        var mutationObserver = new MutationObserver((mutationList, observer) => { this._updateCache(); });
        mutationObserver.observe(scaleContainer, { attributes: true, attributeFilter: ['style'] });
    }

    /**
    * функция корректирует горизонтальное смещение, например смещение точки полученное из getBoudingClientRect().x
    * @param {number} value
    * @returns {number}
    */
    horizontalShift(value) {
        const { outOfScalingHorizontalShift, scale } = this.cached;
        return (value - outOfScalingHorizontalShift) / scale + outOfScalingHorizontalShift;
    }

    /**
    * функция корректирует вертикальное смещение, например смещение точки полученное из getBoudingClientRect().y
    * @param {number} value
    * @returns {number}
    */
    verticalShift(value) {
        const { outOfScalingVerticalShift, scale } = this.cached;
        return (value - outOfScalingVerticalShift) / scale + outOfScalingVerticalShift;
    }

    /**
     * функция корректирует размеры, например ширину полученную из getBoudingClientRect().width
     * @param {number} value
     * @returns {number}
     */
    dimension(value) { return value / this.cached.scale; }

    /**
     * @returns {number} число в диапазоне: [0..1] - текущее значение scale
     */
    scale() { return this.cached.scale; }

    _updateCache() {
        const clientRect = this.scaleContainer.getBoundingClientRect();

        const scaleString = this.scaleContainer.style.transform.split('scale')[1].slice(1, -1);
        const scaleValue = Number.parseFloat(scaleString);

        this.cached = {
            outOfScalingHorizontalShift: clientRect.x,
            outOfScalingVerticalShift: clientRect.y,
            scale: scaleValue,
        };
    }
}

module.exports = {
    ScaleCorrector
};