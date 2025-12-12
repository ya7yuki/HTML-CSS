export default class Calculate {
    /**
     * コンストラクタ
     * @param {number} val1 計算する数値1
     * @param {number} val2 計算する数値2
     */
    val1;
    val2;
    constructor(val1, val2) {
        this.val1 = val1;
        this.val2 = val2;
    }
    /**
     * 加算
     */
    get add() {
        return this.val1 + this.val2;
    }
    /**
     * 減算
     */
    get sub() {
        return this.val1 - this.val2;
    }
    /**
     * 乗算
     */
    get mul() {
        return this.val1 * this.val2;
    }
    /**
     * 除算
     */
    get div() {
        return this.val1 / this.val2;
    }
}
//# sourceMappingURL=calculate.js.map