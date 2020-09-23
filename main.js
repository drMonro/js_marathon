let taskNumber = prompt('Какой номер задания? 1 или 2?', '2');

// Задание #1

let firstRow = 'мама мыла раму';
let secondRow = 'собака друг человека';
let letter = 'а';

function getRow(firstRow, secondRow) {
    let firstCounter = 0;
    let secondCounter = 0;

    for (let i = 0; i <= firstRow.length - 1; i++) {
        if (firstRow.charAt(i) === letter) {
            ++firstCounter;
        }
    }

    for (let i = 0; i <= secondRow.length - 1; i++) {
        if (secondRow.charAt(i) === letter) {
            ++secondCounter;
        }
    }

    if (firstCounter > secondCounter) {
        return firstRow
    } else if (firstCounter === secondCounter) {
        return 'Колличество букв "' + letter + '" в строках равно'
    } else {
        return secondRow
    }
}

function askRowsAndLetter() {
    firstRow = prompt('Введите строку #1', firstRow);
    secondRow = prompt('Введите строку #2', secondRow);
    letter = prompt('Введите букву для поиска', letter);
}

function runFirstTask() {
    alert('Это программа для сравнения количества одинаковых букв в строках');
    askRowsAndLetter();
    console.log(getRow(firstRow, secondRow));
}

// Задание #2

let phone = '+71234567890';
// let phone = '89211234567';
// let phone = '9211234567';

function formatPhone(phone) {
    let result = '';
    console.log(phone.length)
    if (phone.length === 12) {
        for (let i = 0; i <= phone.length - 1; i++) {

            if (i === 2) {
                result += ' (' + phone.charAt(i);
            } else if (i === 4) {
                result += phone.charAt(i) + ') ';
            } else if (i === 7 || i === 9) {
                result += phone.charAt(i) + '-';
            } else {
                result += phone.charAt(i);
            }
        }
        return result
    } else if (phone.length === 11) {
        for (let i = 0; i <= phone.length - 1; i++) {
            if (i === 0) {
                result += '+7 (';
            } else if (i === 3) {
                result += phone.charAt(i) + ') ';
            } else if (i === 6 || i === 8) {
                result += phone.charAt(i) + '-';
            } else {
                result += phone.charAt(i);
            }
        }
        return result

    } else if (phone.length === 10) {
        for (let i = 0; i <= phone.length - 1; i++) {
            if (i === 0) {
                result += '+7 (' + phone.charAt(i);
            } else if (i === 2) {
                result += phone.charAt(i) + ') ';
            } else if (i === 5 || i === 7) {
                result += phone.charAt(i) + '-';
            } else {
                result += phone.charAt(i);
            }
        }
        return result

    } else {
        alert('Похоже вы ввели не сотовый номер телефона');
        runSecondTask()
        return result
    }

}

function askPhone() {
    phone = prompt('Введите телефон', phone);
}

function runSecondTask() {
    alert('Введите сотовый номер телефона');
    askPhone();
    console.log(formatPhone(phone)); // +7 (123) 456-78-90
}



if (taskNumber === "1") {
    runFirstTask()
} else if (taskNumber === "2") {
    runSecondTask()
}

