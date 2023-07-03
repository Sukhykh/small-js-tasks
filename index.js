/* Task 01 (знайти різницю між найбільшим і найменшим значенням) */
const sumOfMinAndMax2 = (arr) => {
    if (!Array.isArray(arr)) return "Not an array"
    if (arr.length < 2) return 0
    let min = arr[0];
    let max = arr[0]
    for (let i = 1 ; i < arr.length; i++) {
        if (isNaN(arr[i])) return "Array includes not only numbers"
        arr[i] > max ? max = arr[i] : max;
        arr[i] < min ? min = arr[i] : min;
    }
    return max - min
}

/* Task 02 (повернути масив слів, довжина яких відповідає умові) */
const wordLength2 = (str, numb) => {
    if (typeof str !== 'string' || isNaN(numb)) return 'Incorrect data';
    const strArr = str.replace(/[,]/g, '').split(' ');
    const result = [];
    for (let i = 0 ; i < strArr.length ; i++) {
        if (strArr[i].length > numb) result.push(strArr[i])
    }
    return result
}

/* Task 03 (повернути boolean чи закінчується один рядок іншим) */
const endOfString2 = (strFull, strPart) => {
    if (typeof strFull !== 'string' || typeof strPart !== 'string') return 'Incorrect data';
    return strFull.search(new RegExp(strPart + "$")) !== -1
}

/* Task 04 (повернути масив середніх значень) */
const averageValues2 = arr => {
    if (arr.some(item => isNaN(item))) return "Array includes not only numbers"
    return arr.reduce((average, item, index, arr) => arr[index+1] ? [...average, (item + arr[index+1])/2] : average, [])
}

/* Task 05 (повернути кількісь голосних у рядку) */
const countVowels2 = str => {
    if (typeof str !== 'string') return 'Incorrect data';
    return str.match(/[aeiou]/g) ? str.match(/[aeiou]/g).length : 0
}

/* Task 05.2 (повернути рябок без зазначених символів) */
const removeABC2 = str => {
    if (typeof str !== 'string') return 'Incorrect data';
    const newString = str.replace(/[abc]/g, '')
    return newString.length === str.length ? null : newString
}

/* Task 06 (пошук унікальних елементів з двох масивів) */
const difference2 = (arr1, arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return 'Incorrect data'
    return arr1
        .concat(arr2)
        .sort((a, b) => a-b)
        .filter((item, index, arr) => {
            return item !== arr[index+1]
    })
}

/* Task 07 (отримання копії об'єкту де ключі стали значеннями, а значення ключами) */
const objectReverse3 = obj => {
    if (typeof obj !== 'object' || Array.isArray(obj)) return 'Incorrect data'
    const objToArr =  Object.entries(obj).reduce((acum, [key, value]) => [...acum, [value, key]], [])
    return Object.fromEntries(objToArr)
}

/* Task 08 (повернення вартості вкрадених речей) */
const calculateDifference2 = (obj, number) => {
    if (typeof obj !== 'object' || Array.isArray(obj) || isNaN(number)) return 'Incorrect data'
    for (let key in obj) {
        number -= obj[key]
    }
    return number <= 0 ? Math.abs(number) : 'Beyond the scope of the task'
}

/* Task 09 (перевірити чи влазить цегла в отвір) */
function doesBrickFit1 (brickHeight, brickWidth, brickDepth, holeWidth, holeHeight) {
    if ([...arguments].some(item => isNaN(item))) return 'Incorrect data'
    return [
        brickHeight * brickWidth, 
        brickWidth * brickDepth, 
        brickHeight * brickDepth
    ].some(item => item <= holeWidth * holeHeight )
}

/* Task 10 (виділення імені файлу з рядку абсолютного шляху) */
const getFileName3 = (str) => {
    if (typeof str !== 'string') return 'Incorrect data';
    const lastIndex = str.lastIndexOf("\\");
    return str.slice(lastIndex + 1).split(".")[0]
}

/* Task 11 (отримання одного рядка з іншого циклічним зрушенням) */
const isCyclicShiftPossible2 = (str1, str2) => {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') return 'Incorrect data';
    if (str1.length !== str2.length) return false
    for (let i = 0 ; i < str1.length ; i++) {
        if (str1 === str2) return true
        str1 = str1.slice(1) + str1.slice(0, 1)
    }
    return false
}