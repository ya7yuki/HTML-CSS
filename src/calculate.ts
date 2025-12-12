export default class Calculate{
    /**
     * コンストラクタ
     * @param {number} val1 計算する数値1
     * @param {number} val2 計算する数値2
     */
    private val1 :number;
    private val2 :number;
    constructor(val1 :number, val2 :number) {
        this.val1 = val1;
        this.val2 = val2;
    }

    /**
     * 加算
     */
    get add() :number {
        return this.val1 + this.val2;
    }

    /**
     * 減算
     */
    get sub() :number {
        return this.val1 - this.val2;
    }

    /**
     * 乗算
     */
    get mul() :number {
        return this.val1 * this.val2;
    }

    /**
     * 除算
     */
    get div() :number {
        return this.val1 / this.val2;
    }

}

