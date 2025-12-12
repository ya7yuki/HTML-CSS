import Calculate from "/dist/calculate.js";

/**
 * @summary 指定した範囲の乱数を生成。
 */
function UpdateRandomNumbers(){
    const randomRange = 100;
    const random1 = Math.floor(Math.random() * randomRange);
    const random2 = Math.floor(Math.random() * randomRange);
    document.getElementById("sumVal1").textContent = random1;
    document.getElementById("sumVal2").textContent = random2
}

/**
 * @summary 生成した乱数を足して入力した値と比較して解答を出力
 * @returns 回答結果
 */
function ResultNumber(){
    const input = document.getElementById("resultVal").value;

    // 未入力時の処理
    if (input == ""){
        document.getElementById("result").textContent="数値を入力してください";
        return;
    }

    const value1 = Number(document.getElementById("sumVal1").textContent);
    const value2 = Number(document.getElementById("sumVal2").textContent);
    const calculate = new Calculate(value1, value2);
    const total = calculate.add;
    const result = Number(input);

    if(result == total){
        document.getElementById("result").textContent = "正解!";
    }else{
        document.getElementById("result").textContent = "不正解...";
    }
    document.getElementById("total").textContent = total;
}

document.getElementById("updateButton").addEventListener("click",UpdateRandomNumbers);
document.getElementById("resultButton").addEventListener("click",ResultNumber)

UpdateRandomNumbers();