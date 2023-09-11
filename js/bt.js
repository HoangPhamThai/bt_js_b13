const basicDailySalary = 100000
const baseUsdToVnd = 23500

function isNotNull(num){

}

function calSalary(){
    let numWorkDays = parseFloat(document.getElementById("workDays").value)
    if (isNaN(numWorkDays)){
        document.getElementById("resultSalary").innerHTML = `
        <p class="text-danger">Vui lòng nhập số ngày làm</p>
        `
        return
    }
    if (numWorkDays < 0){
        document.getElementById("resultSalary").innerHTML = `
        <p class="text-danger">Số ngày làm không được âm</p>
        `
        return
    }
    let salary = numWorkDays * basicDailySalary
    document.getElementById("resultSalary").innerHTML = `
    <p class="text-primary">Lương: ${salary}</p>
    `
    
}

function calAverage(){
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let num3 = parseFloat(document.getElementById("num3").value)
    let num4 = parseFloat(document.getElementById("num4").value)
    let num5 = parseFloat(document.getElementById("num5").value)
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)){
        document.getElementById("resultAverage").innerHTML = `
        <p class="text-danger">Vui lòng nhập đầy đủ các số</p>
        `
        return
    }
    let avg = (num1 + num2 + num3 + num4 + num5)/5
    document.getElementById("resultAverage").innerHTML = `
    <p class="text-primary">Giá trị trung bình: ${avg}</p>
    `    
}

function convertUsdToVnd(){
    let money = parseFloat(document.getElementById("money").value)
    if (isNaN(money)){
        document.getElementById("resultConvertMoney").innerHTML = `
        <p class="text-danger">Vui lòng nhập số tiền</p>
        `
        return
    }
    let moneyVnd = money * baseUsdToVnd
    document.getElementById("resultConvertMoney").innerHTML = `
    <p class="text-primary">Giá trị tiền quy đổi sang VND: ${moneyVnd}</p>
    `
}

function calAreaPerimeter(){
    let length = parseFloat(document.getElementById("length").value)
    let width = parseFloat(document.getElementById("width").value)
    if (isNaN(length) || isNaN(width)){
        document.getElementById("resultAreaPerimeter").innerHTML = `
        <p class="text-danger">Vui lòng nhập đầy đủ chiều rộng và chiều dài</p>
        `
        return
    }
    if ((length <= 0) || (width <= 0)){
        document.getElementById("resultAreaPerimeter").innerHTML = `
        <p class="text-danger">Chiều rộng và chiều dài phải là số dương</p>
        `
        return 
    }
    let area = length * width
    let perimeter = 2 * (length + width)
    document.getElementById("resultAreaPerimeter").innerHTML = `
    <p class="text-primary">Diện tích: ${area}, chu vi ${perimeter}</p>
    `
}

function calSumDigits(){
    let digits = document.getElementById("digits").value
    if (digits.length != 2){
        document.getElementById("resultSumDigits").innerHTML = `
        <p class="text-danger">Vui lòng nhập số có hai ký số</p>
        `
        return
    }
    let digitsNumber = Number(digits)
    if (!Number.isInteger(digitsNumber)){
        document.getElementById("resultSumDigits").innerHTML = `
            <p class="text-danger">Vui lòng nhập số nguyên</p>
        `
        return
    }
    let firstDigit = digitsNumber % 10
    let secondDigit = Math.floor(digitsNumber / 10)
    let sumDigits = firstDigit + secondDigit
    document.getElementById("resultSumDigits").innerHTML = `
            <p class="text-primary">Tổng các ký số: ${sumDigits}</p>
        `
}