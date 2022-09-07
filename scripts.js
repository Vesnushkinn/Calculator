let items = document.querySelectorAll(".calculator__item");

let result = document.querySelector(".calculator__result");
result.innerHTML = 0;

let sum = [];

calculate();

function calculate() {
    items.forEach((item, itemIndex) =>
        item.addEventListener("click", (e) => {
            const value = e.target.innerText;
            const isNumber = Number(value);
            let lastValue = sum[sum.length - 1];
            // если 0 в инпуте,
            if (!sum.length) {
                // если не цифра, значит оператор и складываются с 0
                if (!isNumber) {
                    if (value === 'AC') {
                        sum.length = 0
                    } else if (value === 'DEL') {
                        ;
                    } else {
                        sum.push("0", value)
                    };
                } else {
                    sum.push(value);
                }
                // если цифра, то заменяет ноль
            }
            //если цифра:
            else if (Number(lastValue)) {
                if (isNumber || value === '.') {
                    sum[sum.length - 1] += value;
                } else if (value === 'AC') {
                    sum.length = 0;
                }
                else if (value === 'DEL') {
                    if (sum[sum.length - 1].length === 1 && sum.length === 1) {
                        sum.length = 0
                    } else if (sum[sum.length - 1].length === 1 && sum.length > 1) {
                        sum = sum.slice(0, -1)
                    }
                    else {
                        sum[sum.length - 1] = sum[sum.length - 1].slice(0, -1)
                    }
                }
                else { sum.push(value); }
                //цифра и оператор добавляется
            }
            // если оператор
            else if (!Number(lastValue)) {
                if (isNumber) {
                    sum.push(value);
                }
                else {
                    if (value === 'AC') {
                        sum.length = 0
                    }
                    else if (value === 'DEL') {
                        // sum[sum.length - 1] = sum[sum.length - 1].slice(0, -1)
                        if (sum[0] === "0") {
                            sum.length = 0
                        } else {
                        sum = sum.slice(0, -1)
                        }
                    }
                    else {
                        sum[sum.length - 1] = value
                    };
                }
            };

            if (sum.length === 0) {
                result.innerHTML = 0;
            } else {
                result.innerHTML = sum.join('');
            };

            calculateMath(sum)
        }))
    console.log(sum);
};


//если 0 в инпуте,
//цифра заменяет ноль
//операторы складываются с 0
//

//если цифра:
//цифра добавляется
//опаретор добавляется
//

//если оператор:
//цифра добалвятеся
//оператор заменяется
//точка не ставится


// нужно перебрать массив sum. 
//нулевой индекс и все четные это числа.
// их нужно превратить из строки в число
//нечетные это операторы
//написать правило проверки строки и добавление соответствующего знака

//DEL

//если ноль, то ниичего не делать

// если уже есть цифра:
//если длина строки 1, то менять на ноль
// если длина строки больше 1, то убирать последний знак

// есил оператор:
//оператор удаляется


function calculateMath(arr) {
    let i;
    let s = [];
    console.log(sum, 'sum')

    for (i = 0; i < arr.length; i++) {
        //проверка на нечетность.
        if (i % 2 !== 0) {
            if (arr[i] === "-" || arr[i] === "+") {
                s.push(arr[i])
            }
        } else if (i % 2 === 0) {
            const currentValue = Number(arr[i]);

            if (arr[i - 1] === "*") {
                s[s.length - 1] = (s[s.length - 1] * currentValue)
            } else if (arr[i - 1] === "÷") {
                s[s.length - 1] = (s[s.length - 1] / currentValue)

            } else {
                s.push(currentValue)
            }
        }

    }
    console.log(s)
    console.log(i)
}
