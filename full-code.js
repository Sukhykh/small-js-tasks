'use strict';

/* Task 01 (знайти різницю між найбільшим і найменшим значенням) */
const sumOfMinAndMax1 = arr => {
    if (!Array.isArray(arr)) return "Not an array"
    if (arr.length < 2) return 0
    if (arr.some(item => isNaN(item))) return "Array includes not only numbers"
    return Math.max(...arr) - Math.min(...arr)
}
const sumOfMinAndMax2 = arr => {
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
const sumOfMinAndMax3 = arr => {
    if (!Array.isArray(arr)) return "Not an array"
    if (arr.length < 2) return 0
    if (arr.some(item => isNaN(item))) return "Array includes not only numbers"
    let sortedArr = ((arr) => {
        let len = arr.length;
        let gap = Math.floor(len / 2);
        while (gap > 0) {
            for (let i = gap; i < len; i++) {
                let temp = arr[i];
                let j = i;
                    while (j >= gap && arr[j - gap] > temp) {
                        arr[j] = arr[j - gap];
                        j -= gap;
                    }
                arr[j] = temp;
            }
            gap = Math.floor(gap / 2);
        }
    return arr;
    })(arr)
    return sortedArr[sortedArr.length - 1] - sortedArr[0]
}
const sumOfMinAndMax = args => {
    console.time('sumOfMinAndMax1');
    console.log(sumOfMinAndMax1(args))
    console.timeEnd('sumOfMinAndMax1');
    console.time('sumOfMinAndMax2');
    console.log(sumOfMinAndMax2(args))
    console.timeEnd('sumOfMinAndMax2');
    console.time('sumOfMinAndMax3');
    console.log(sumOfMinAndMax3(args))
    console.timeEnd('sumOfMinAndMax3');
    console.log('=====================');
}
sumOfMinAndMax([1, 2, 3, -4])

/* Task 02 (повернути масив слів, довжина яких відповідає умові) */
const wordLength1 = (str, numb) => {
    if (typeof str !== 'string' || isNaN(numb)) return 'Incorrect data';
    return str
            .replace(/[,]/g, '')        
            .split(' ')
            .reduce((acum, item) => item.length > numb ? [...acum, item] : acum, [])
}
const wordLength2 = (str, numb) => {
    if (typeof str !== 'string' || isNaN(numb)) return 'Incorrect data';
    const strArr = str.replace(/[,]/g, '').split(' ');
    const result = [];
    for (let i = 0 ; i < strArr.length ; i++) {
        if (strArr[i].length > numb) result.push(strArr[i])
    }
    return result
}
const wordLength = (args1, args2) => {
    console.time('wordLength1');
    console.log(wordLength1(args1, args2))
    console.timeEnd('wordLength1');
    console.time('wordLength2');
    console.log(wordLength2(args1, args2))
    console.timeEnd('wordLength2');
    console.log('=====================');
}
wordLength('повернути масив слів, довжина яких відповідає умові', 5)

/* Task 03 (повернути boolean чи закінчується один рядок іншим) */
const endOfString1 = (strFull, strPart) => {
    if (typeof strFull !== 'string' || typeof strPart !== 'string') return 'Incorrect data';
    return strFull.toString().endsWith(strPart)
}
const endOfString2 = (strFull, strPart) => {
    if (typeof strFull !== 'string' || typeof strPart !== 'string') return 'Incorrect data';
    return strFull.search(new RegExp(strPart + "$")) !== -1
}
const endOfString = (args1, args2) => {
    console.time('endOfString1');
    console.log(endOfString1(args1, args2))
    console.timeEnd('endOfString1');
    console.time('endOfString2');
    console.log(endOfString2(args1, args2))
    console.timeEnd('endOfString2');
    console.log('=====================');
}
endOfString('повернути масив слів, довжина яких відповідає умові', 'умові')

/* Task 04 (повернути масив середніх значень) */
const averageValues1 = arr => {
    if (!Array.isArray(arr)) return 'Incorrect data';
    const average = []
    for (let i = 0 ; i < arr.length ; i++) {
        if (!arr[i+1]) continue
        if (isNaN(arr[i]) || isNaN(arr[i+1])) return "Array includes not only numbers"
        average.push((arr[i] + arr[i+1])/2)
    }
    return average
}
const averageValues2 = arr => {
    if (arr.some(item => isNaN(item))) return "Array includes not only numbers"
    return arr.reduce((average, item, index, arr) => arr[index+1] ? [...average, (item + arr[index+1])/2] : average, [])
}
const averageValues = args => {
    console.time('averageValues1');
    console.log(averageValues1(args))
    console.timeEnd('averageValues1');
    console.time('averageValues2');
    console.log(averageValues2(args))
    console.timeEnd('averageValues2');
    console.log('=====================');
}
averageValues([1, 3, 5, -10])

/* Task 05 (повернути кількісь голосних у рядку) */
const countVowels1 = str => {
    if (typeof str !== 'string') return 'Incorrect data'
    return str
        .split('')
        .reduce((counter, item) => {
                const vowels = ['a', 'e', 'i', 'o', 'u']
                for (let i = 0 ; i < vowels.length ; i++) {
                    item === vowels[i] ? counter++ : counter
                }
                return counter
            }, 0)
}
const countVowels2 = str => {
    if (typeof str !== 'string') return 'Incorrect data';
    return str.match(/[aeiou]/g) ? str.match(/[aeiou]/g).length : 0
}
const countVowels = (args) => {
    console.time('countVowels2');
    console.log(countVowels2(args))
    console.timeEnd('countVowels2');
    console.time('countVowels2');
    console.log(countVowels2(args))
    console.timeEnd('countVowels2');
    console.log('=====================');
}
countVowels("Celebration")

/* Task 05.2 (повернути рябок без зазначених символів) */
const removeABC1 = str => {
    if (typeof str !== 'string') return 'Incorrect data';
    const newString = str
                        .split('')
                        .reduce((counter, item) => {
                                const letters = ['a', 'b', 'c']
                                for (let i = 0 ; i < letters.length ; i++) {
                                    if (item === letters[i]) return counter
                                    // return counter += item
                                }
                                return counter += item
                            }, '')
    return newString.length === str.length ? null : newString         
}
const removeABC2 = str => {
    if (typeof str !== 'string') return 'Incorrect data';
    const newString = str.replace(/[abc]/g, '')
    return newString.length === str.length ? null : newString
}
const removeABC = (args) => {
    console.time('removeABC1');
    console.log(removeABC1(args))
    console.timeEnd('removeABC1');
    console.time('removeABC2');
    console.log(removeABC2(args))
    console.timeEnd('removeABC2');
    console.log('=====================');
}
removeABC("This might be a bit hard")

/* Task 06 (пошук унікальних елементів з двох масивів) */
const difference1 = (arr1, arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return 'Incorrect data'
    return [...arr1, ...arr2]
        .sort((a, b) => a-b)
        .reduce((acum, item, index, arr) => {
            if (item !== arr[index + 1]) {
                return [...acum, item]
            } else {
                return acum
            }
        }, [])
}
const difference2 = (arr1, arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return 'Incorrect data'
    return arr1
        .concat(arr2)
        .sort((a, b) => a-b)
        .filter((item, index, arr) => {
            return item !== arr[index+1]
    })
}
const difference = (args1, args2) => {
    console.time('difference1');
    console.log(difference1(args1, args2))
    console.timeEnd('difference1');
    console.time('difference2');
    console.log(difference2(args1, args2))
    console.timeEnd('difference2');
    console.log('=====================');
}
difference([1, 2, 3], [100, 2, 1, 10])

/* Task 07 (отримання копії об'єкту де ключі стали значеннями, а значення ключами) */
const objectReverse1 = obj => {
    if (typeof obj !== 'object' || Array.isArray(obj)) return 'Incorrect data'
    const keys = Object.keys(obj)
    const values = Object.values(obj)
    const result = {}
    for (let i = 0 ; i < keys.length ; i++) {
        result[values[i]] = keys[i]
    }
    return result
}
const objectReverse2 = obj => {
    if (typeof obj !== 'object' || Array.isArray(obj)) return 'Incorrect data'
    const objToArr =  Object.entries(obj).map(element => { 
        let temp = element[0]
        element[0] = element[1]
        element[1] = temp
        return element
        }
    )
    return Object.fromEntries(objToArr)
}
const objectReverse3 = obj => {
    if (typeof obj !== 'object' || Array.isArray(obj)) return 'Incorrect data'
    const objToArr =  Object.entries(obj).reduce((acum, [key, value]) => [...acum, [value, key]], [])
    return Object.fromEntries(objToArr)
}
const objectReverse = (args) => {
    console.time('objectReverse1');
    console.log(objectReverse1(args))
    console.timeEnd('objectReverse1');
    console.time('objectReverse2');
    console.log(objectReverse2(args))
    console.timeEnd('objectReverse2');
    console.time('objectReverse3');
    console.log(objectReverse3(args))
    console.timeEnd('objectReverse3');
    console.log('=====================');
}
objectReverse({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"})

/* Task 08 (повернення вартості вкрадених речей) */
const calculateDifference1 = (obj, number) => {
    if (typeof obj !== 'object' || Array.isArray(obj) || isNaN(number)) return 'Incorrect data'
    if (!Object.values(obj).length) return 'Beyond the scope of the task'
    const sum = Object.values(obj).reduce((acum, item) => acum += item, 0) - number
    return sum > 0 ? sum : 'Beyond the scope of the task'
}
const calculateDifference2 = (obj, number) => {
    if (typeof obj !== 'object' || Array.isArray(obj) || isNaN(number)) return 'Incorrect data'
    for (let key in obj) {
        number -= obj[key]
    }
    return number <= 0 ? Math.abs(number) : 'Beyond the scope of the task'
}
const calculateDifference = (args1, args2) => {
    console.time('calculateDifference1');
    console.log(calculateDifference1(args1, args2))
    console.timeEnd('calculateDifference1');
    console.time('calculateDifference2');
    console.log(calculateDifference2(args1, args2))
    console.timeEnd('calculateDifference2');
    console.log('=====================');
}
calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)

/* Task 09 (перевірити чи влазить цегла в отвір) */
function doesBrickFit1 (brickHeight, brickWidth, brickDepth, holeWidth, holeHeight) {
    if ([...arguments].some(item => isNaN(item))) return 'Incorrect data'
    return [
        brickHeight * brickWidth, 
        brickWidth * brickDepth, 
        brickHeight * brickDepth
    ].some(item => item <= holeWidth * holeHeight )
}
const doesBrickFit = (args1, args2, args3, args4, args5) => {
    console.time('doesBrickFit1');
    console.log(doesBrickFit1(args1, args2, args3, args4, args5))
    console.timeEnd('doesBrickFit1');
    console.log('=====================');
}
doesBrickFit(1, 2, 1, 1, 1)

/* Task 10 (виділення імені файлу з рядку абсолютного шляху) */
const getFileName1 = str => {
    if (typeof str !== 'string') return 'Incorrect data';
    return str.split("\\").pop().split(".")[0]
}
const getFileName2 = str => {
    if (typeof str !== 'string') return 'Incorrect data';
    return str.match(/[^\\]*$/)[0].split(".")[0]
}
const getFileName3 = str => {
    if (typeof str !== 'string') return 'Incorrect data';
    const lastIndex = str.lastIndexOf("\\");
    return str.slice(lastIndex + 1).split(".")[0]
}
const getFileName4 = () => {
    const str = String.raw`c:\WebServers\home\testsite\www\myfile.txt`
    const lastIndex = str.lastIndexOf("\\");
    return str.slice(lastIndex + 1).split(".")[0]
}
const getFileName = (args) => {
    console.time('getFileName1');
    console.log(getFileName1(args))
    console.timeEnd('getFileName1');
    console.time('getFileName2');
    console.log(getFileName2(args))
    console.timeEnd('getFileName2');
    console.time('getFileName3');
    console.log(getFileName3(args))
    console.timeEnd('getFileName3');
    console.time('getFileName4');
    console.log(getFileName4(args))
    console.timeEnd('getFileName4');
    console.log('=====================');
}
getFileName("c:\\WebServers\\home\\testsite\\www\\myfile.txt")

/* Task 11 (отримання одного рядка з іншого циклічним зрушенням) */
const isCyclicShiftPossible1 = (str1, str2) => {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') return 'Incorrect data';
    return str1.length === str2.length ? (str1 + str1).includes(str2) : false
}
const isCyclicShiftPossible2 = (str1, str2) => {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') return 'Incorrect data';
    if (str1.length !== str2.length) return false
    for (let i = 0 ; i < str1.length ; i++) {
        if (str1 === str2) return true
        str1 = str1.slice(1) + str1.slice(0, 1)
    }
    return false
}
const isCyclicShiftPossible = (args1, args2) => {
    console.time('isCyclicShiftPossible1');
    console.log(isCyclicShiftPossible1(args1, args2))
    console.timeEnd('isCyclicShiftPossible1');
    console.time('isCyclicShiftPossible2');
    console.log(isCyclicShiftPossible2(args1, args2))
    console.timeEnd('isCyclicShiftPossible2');
    console.log('=====================');
}
isCyclicShiftPossible(`1234567890`, `5678901234`)

/* Task 12 (сортування масиву) */
const getTwoSortedArrays1 = arr => {
    if (!Array.isArray(arr)) return 'Incorrect data'
    const sortedArr = [...arr].sort((a, b) => a - b)
    const minArr = [];
    const maxArr = [];
    const arrSpreader = main => {
        let diff = Infinity;
        const closest = { min: null, max: null }
        for (let i = 0 ; i < main.length - 1 ; i++) {
            let temp = Math.abs(main [i+1] - main[i])
            if (diff > temp) {
                diff = temp
                closest.min = main[i];
                closest.max = main[i + 1];
            }
        }
        return closest
    }
    while (sortedArr.length) {
        const closest = arrSpreader(sortedArr);
        minArr.push(closest.min)
        maxArr.push(closest.max)
        sortedArr.splice(sortedArr.indexOf(closest.max), 1);
        sortedArr.splice(sortedArr.indexOf(closest.min), 1);
    }
    return {minArr, maxArr}
}
const getTwoSortedArrays2 = arr => {
    if (!Array.isArray(arr)) return 'Incorrect data'
    const arrSpreader = main => main.reduce((closest, item, index) => {
        const nextItem = main[index + 1];
        if (nextItem) {
            const diff = Math.abs(nextItem - item);
            if (diff < closest.diff) {
                closest.diff = diff;
                closest.min = item;
                closest.max = nextItem;
            }
        }
        return closest
    }, { min: null, max: null, diff: Infinity})
    const sortedArr = [...arr].sort((a, b) => a - b)
    const { minArr, maxArr } = sortedArr.reduce((result, item, index) => {
        if (index % 2 === 0) {
            const closest = arrSpreader(result.mainArr)
            result.minArr.push(closest.min)
            result.maxArr.push(closest.max)
            result.mainArr.splice(result.mainArr.indexOf(closest.max), 1);
            result.mainArr.splice(result.mainArr.indexOf(closest.min), 1);
        }
        return result
    }, { minArr: [], maxArr: [], mainArr: [...sortedArr]})
    return { minArr, maxArr }
}
const getTwoSortedArrays = (args) => {
    console.time('getTwoSortedArrays1');
    console.log(getTwoSortedArrays1(args))
    console.timeEnd('getTwoSortedArrays1');
    console.time('getTwoSortedArrays2');
    console.log(getTwoSortedArrays2(args))
    console.timeEnd('getTwoSortedArrays2');
    console.log('=====================');
}
getTwoSortedArrays([1, 3, 73, 7, -12, 0, 8, 12, 36, 15, 37, 45, -3, 7, 11, -1])

/* Task 13 (форматування рядка) */
const stringFormatting1 = str => {
    if (typeof str !== 'string') return 'Incorrect data';
    let formattedString = str.toLowerCase().split(' ').reduce((acum, item) => {
        if (item.includes('http://') || item.includes('https://')) return [...acum, "[посилання заборонено]"];
        if (item.includes('@')) return [...acum, "[контакти заборонені]"];
        if (!isNaN(item) && item.length > 3) return [...acum, ""];
        return [...acum, item];
    }, []).join(' ')
    if (formattedString.length > str.length) setInterval(() => alert("Вам потрібна допомога?"), 5000)
    return formattedString.slice(0, 1).toUpperCase() + formattedString.slice(1)
}
const stringFormatting2 = str => {
    if (typeof str !== 'string') return 'Incorrect data';
    let formattedString = str.toLowerCase().split(' ').map(item => {
        if (item.includes('http://') || item.includes('https://')) return "[посилання заборонено]";
        if (item.includes('@')) return "[контакти заборонені]";
        if (!isNaN(item) && item.length > 3) return "";
        return item;
    }).join(' ')
    if (formattedString.length > str.length) setInterval(() => alert("Вам потрібна допомога?"), 5000)
    return formattedString.slice(0, 1).toUpperCase() + formattedString.slice(1)
}
const stringFormatting = (args) => {
    console.time('stringFormatting1');
    console.log(stringFormatting1(args))
    console.timeEnd('stringFormatting1');
    console.time('stringFormatting2');
    console.log(stringFormatting2(args))
    console.timeEnd('stringFormatting2');
    console.log('=====================');
}
stringFormatting(`Hello! My name is John Doe. I'm 99 and I become a developer in 1900. 
                    You can contact me by email: john.doe@young-developers.com 
                    And shurely you can find my portfolio by the link 
                    https://www.young-developers.com/john-doe Contact me someone please!`);

/* Task 14 (перевірка наявності всіх круглих дужок) */
const checkingParentheses1 = str => {
    if (typeof str !== 'string') return 'Incorrect data';
    const stack = []
    for (let i = 0 ; i < str.length ; i++) {
        const symbol = str.charAt(i)
        if (symbol === '(') stack.push(symbol)
        if (symbol === ')') {
            if (stack.length === 0) return 'Відповідність відкриваючих та закриваючих дужок не витримано.'
            stack.pop()
        }
    }
    if (stack.length !== 0) return 'Відповідність відкриваючих та закриваючих дужок не витримано.'
    // document.getElementById('task14').innerText = str;
    // document.getElementById('task14').style.userSelect = 'none';
    // document.addEventListener('copy', (event) => event.preventDefault());
    // document.addEventListener('contextmenu', (event) => event.preventDefault());
    // document.addEventListener('keydown', (event) => event.preventDefault());
}
const checkingParentheses = (args) => {
    console.time('checkingParentheses1');
    console.log(checkingParentheses1(args))
    console.timeEnd('checkingParentheses1');
    console.log('=====================');
}
checkingParentheses(`Напишіть JavaScript для пошуку унікальних елементів з двох масивів.
                    (Set не використовувати:) Приклад:
                    console.log(difference([1, 2, 3], [100, 2, 1, 10]))`);

/* Task 15 (генератор паролів) */
const passwordGenerator1 = () => {
    const gererator = number => Math.floor(Math.random() * number)
    const availableValues = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    const length = Math.floor(Math.random() * 14 + 6)
    const password = new Array(length)
    const underscoreIndex = gererator(length);
    let firstUppercaseLetterIndex = gererator(length);
    while ( firstUppercaseLetterIndex === underscoreIndex ) {
        firstUppercaseLetterIndex = gererator(length);
    }
    let secondUppercaseLetterIndex = gererator(length);
    while ( secondUppercaseLetterIndex === firstUppercaseLetterIndex || secondUppercaseLetterIndex === underscoreIndex) {
        secondUppercaseLetterIndex = gererator(length);
    }
    password[underscoreIndex] = '_';
    let counter = 0;
    for (let i = 0 ; i < length ; i++) {
        if (password[i] === '_') continue
        if (i === firstUppercaseLetterIndex || i === secondUppercaseLetterIndex) {
            password[i] = availableValues[gererator(26)]
            continue
        }
        if (counter === 5) {
            password[i] = availableValues[gererator(52)]
            continue
        }
        password[i] = availableValues[gererator(availableValues.length)]
        if (!isNaN(password[i])) {
            counter++
            if (!isNaN(password[i+1]) || !isNaN(password[i-1])) password[i] = availableValues[gererator(52)]
        }
    }
    return password.join('')
}
const passwordGenerator = () => {
    console.time('passwordGenerator1');
    console.log(passwordGenerator1())
    console.timeEnd('passwordGenerator1');
    console.log('=====================');
}
passwordGenerator();

/* Task 16 (перестановка елементів масиву) */
const arrayShuffle1 = arr => {
    if (!Array.isArray(arr)) return 'Incorrect data'
    const { arrFirst, arrSecond } =  arr
        .sort((a, b) => a - b)
        .reduce((acum, item, index) => {
            index % 2 === 0 ? acum.arrFirst.push(item) : acum.arrSecond.push(item);
            return acum;
    }, { arrFirst: [], arrSecond: []})
    arrSecond.reverse()
    return [...arrFirst, ...arrSecond]
}
const arrayShuffle2 = arr => {
    if (!Array.isArray(arr)) return 'Incorrect data'
    const sortedArr = arr.sort((a, b) => a - b);
    const arrFirst = sortedArr.filter((item, index) => index % 2 === 0);
    const arrSecond = sortedArr.filter((item, index) => index % 2 !== 0).reverse();
    return [...arrFirst, ...arrSecond]
}
const arrayShuffle3 = arr => {
    if (!Array.isArray(arr)) return 'Incorrect data'
    const sortedArr = arr.sort((a, b) => a - b);
    const result = new Array(sortedArr.length)
    let counter = 0;
    for (let i = 0 ; i < sortedArr.length ; i++) {
        if ( i % 2 === 0 ) {
            result[i/2] = sortedArr[i]
        } else {
            result[result.length - i + counter] = sortedArr[i]
            counter ++
        }
    }
    return result
}
const arrayShuffle = (args) => {
    console.time('arrayShuffle1');
    console.log(arrayShuffle1(args))
    console.timeEnd('arrayShuffle1');
    console.time('arrayShuffle2');
    console.log(arrayShuffle2(args))
    console.timeEnd('arrayShuffle2');
    console.time('arrayShuffle3');
    console.log(arrayShuffle3(args))
    console.timeEnd('arrayShuffle3');
    console.log('=====================');
}
arrayShuffle([1, 4, 7, 9, 5, 3, 2]);

/* Task 17 (відсортувати рядок за частотою появи символів) */
const sortSymbolsInString1 = str => {
    if (typeof str !== 'string') return 'Incorrect data'
    const stringToObject = str.toLowerCase().split('').reduce((acum, item) => {
        acum[item.charCodeAt(0)] ? acum[item.charCodeAt(0)]++ : acum[item.charCodeAt(0)] = 1
        return acum
    }, {})
    const result = []
    for (const key in stringToObject) {
        result.push(new Array(stringToObject[key]).fill(String.fromCharCode(key)))
    }
    return result.sort((a, b) => b.length - a.length).reduce((acum, item) => {
        acum += item.join('')
        return acum
    }, '')
}
const sortSymbolsInString2 = str => {
    if (typeof str !== 'string') return 'Incorrect data'
    const stringToObject = str.toLowerCase().split('').reduce((acum, item) => {
        acum[item] = (acum[item] || 0) + 1;
        return acum;
    }, {})
    return Object
    .entries(stringToObject)
    .map(([key, value]) => new Array(value).fill(key))
    .sort((a, b) => b.length - a.length)
    .flat()
    .join('');
}
const sortSymbolsInString = (args) => {
    console.time('sortSymbolsInString1');
    console.log(sortSymbolsInString1(args))
    console.timeEnd('sortSymbolsInString1');
    console.time('sortSymbolsInString2');
    console.log(sortSymbolsInString2(args))
    console.timeEnd('sortSymbolsInString2');
    console.log('=====================');
}
sortSymbolsInString(`Напишіть функцію, яка приймає рядок та повертає новий рядок, відсортований за частотою появи символів. Символи з більшою частотою повинні йти раніше за символи з меншою частотою. Використовуйте методи роботи з рядками, об'єктами та сортуванням для вирішення задачі.`);

/* Task 18 (пошук найдовшого загального рядка) */
const longestCommonString1 = (str1, str2) => {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') return 'Incorrect data'
    const arrayOfWords = str2.split(' ');
    let result = ''
    arrayOfWords.forEach(element => {
        for (let i = 0 ; i <= element.length ; i++) {
            for (let j = i + 1 ; j <= element.length ; j++) {
                const commonString = element.slice(i, j)
                if (str1.includes(commonString) && commonString.length > result.length) {
                    result = commonString;
                }
            } 
        }
    })
    return result
}
const longestCommonString2 = (str1, str2) => {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') return 'Incorrect data'
    const column = str1.length + 1;
    const row = str2.length + 1;
    const matrix = new Array(row).fill(0).map(() => new Array(column).fill(0));
    let maxLength = 0;
    let lastIndex = 0;
    for (let i = 1 ; i < row ; i++) {
        if (str2[i-1] === " ") continue
        for (let j = 1 ; j < column ; j++) {
            if (str1[j-1] === " ") continue
            if (str2[i-1] === str1[j-1]) matrix[i][j] = matrix[i-1][j-1] + 1;
            if (matrix[i][j] > maxLength) {
                maxLength = matrix[i][j]
                lastIndex = i
            }
        }
    }
    return str2.slice(lastIndex - maxLength , maxLength)
}
const longestCommonString = (args1, args2) => {
    console.time('longestCommonString1');
    console.log(longestCommonString1(args1, args2))
    console.timeEnd('longestCommonString1');
    console.time('longestCommonString2');
    console.log(longestCommonString2(args1, args2))
    console.timeEnd('longestCommonString2');
    console.log('=====================');
}
longestCommonString("My name is John Doe! Hello!", "Hello world!")

/* Task 19 (шифр Цезаря) */
const caesarsCipher1 = (str, number) => {
    if (typeof str !== 'string' || isNaN(number)) return 'Incorrect data';
    const generalString = 'abcdefghijklmnopqrstuvwxyz';
    const templateString = generalString + generalString
    if (number > generalString.length) number = number - generalString.length;
    return str
        .split('')
        .map((element, index) => {
            if (!generalString.includes(element.toLowerCase())) return element
            const mainIndex = templateString.indexOf(element.toLowerCase())
            if (str[index] === str[index].toUpperCase()) {
                return templateString.charAt(mainIndex + number).toUpperCase()
            } else {
                return templateString.charAt(mainIndex + number)
            }
        })
        .join('')
}
const caesarsCipher2 = (str, number) => {
    if (typeof str !== 'string' || isNaN(number)) return 'Incorrect data';
    const generalString = 'abcdefghijklmnopqrstuvwxyz';
    const templateString = generalString + generalString
    if (number > generalString.length) number = number - generalString.length;
    let result = '';
    for (let i = 0 ; i < str.length ; i++) {
        let char = str[i].toLowerCase();
        if (!generalString.includes(char)) {
            result += char
            continue
        }
        let index = templateString.indexOf(char);
        let newChar = templateString[index + number];
        if (str[i] === str[i].toUpperCase()) {
            result += newChar.toUpperCase()
        } else {
            result += newChar
        }
    }
    return result
}
const caesarsCipher3 = (str, number) => {
    if (typeof str !== 'string' || isNaN(number)) return 'Incorrect data';
    const generalString = 'abcdefghijklmnopqrstuvwxyz';
    return str
        .split('')
        .reduce((acum, item, index) => {
            if (!generalString.includes(item.toLowerCase())) return acum += item
                const indexValue = generalString.indexOf(item.toLowerCase())
                const char = generalString[(indexValue + number) % generalString.length]
                return str[index] === str[index].toUpperCase() ? acum += char.toUpperCase() : acum += char
        }, '')
}
const caesarsCipher4 = (str, number) => {
    if (typeof str !== 'string' || isNaN(number)) return 'Incorrect data';
    const generalString = 'abcdefghijklmnopqrstuvwxyz';
    const tableofChars = generalString.split('').reduce((acum, item, index) => {
        const itemIndex = (index + number) % generalString.length
        acum[item] = generalString[itemIndex]
        acum[item.toUpperCase()] = generalString[itemIndex].toUpperCase()
        return acum
    }, {})
    let result = ''
    for (let i = 0 ; i < str.length ; i ++) {
        result += tableofChars[str[i]] || str[i]
    }
    return result
}
const caesarsCipher = (args1, args2) => {
    console.time('caesarsCipher1');
    console.log(caesarsCipher1(args1, args2))
    console.timeEnd('caesarsCipher1');
    console.time('caesarsCipher2');
    console.log(caesarsCipher2(args1, args2))
    console.timeEnd('caesarsCipher2');
    console.time('caesarsCipher3');
    console.log(caesarsCipher3(args1, args2))
    console.timeEnd('caesarsCipher3');
    console.time('caesarsCipher4');
    console.log(caesarsCipher4(args1, args2))
    console.timeEnd('caesarsCipher4');
    console.log('=====================');
}
caesarsCipher("My name is John Doe! Hello!", 5)

/* Task 20 (перевірка чи є рядки анаграмами) */
const isAnagram1 = (str1, str2) => {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') return 'Incorrect data'
    if (str1.length !== str2.length) return false
    while (str1.length) {
        if (str2.includes(str1[0])) {
            str2 = str2.replace(str1[0], '')
            str1 = str1.slice(1)
        } else {
            return false
        }
    }
    return true
}
const isAnagram2 = (str1, str2) => {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') return 'Incorrect data'
    if (str1.length !== str2.length) return false
    const acumChar = {}
    for (let i = 0 ; i < str1.length ; i++) {
        acumChar[str1[i]] = acumChar[str1[i]] ? acumChar[str1[i]] + 1 : 1
    }
    for (let j = 0 ; j < str2.length ; j++) {
        if(!acumChar[str2[j]]) return false
        acumChar[str2[j]]--
    }
    return true
}
const isAnagram3 = (str1, str2) => {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') return 'Incorrect data'
    if (str1.length !== str2.length) return false
    return str1.split('').sort().join('') === str2.split('').sort().join('')
}
const isAnagram = (args1, args2) => {
    console.time('isAnagram1');
    console.log(isAnagram1(args1, args2))
    console.timeEnd('isAnagram1');
    console.time('isAnagram2');
    console.log(isAnagram2(args1, args2))
    console.timeEnd('isAnagram2');
    console.time('isAnagram3');
    console.log(isAnagram3(args1, args2))
    console.timeEnd('isAnagram3');
    console.log('=====================');
}
isAnagram("Hello world!", "Hello world!")

/* Task 21 (створити об'єкт УНІВЕРСИТЕТ) */
const university = {
    students: [],
    idGenerator: function() {
        return "_id" + Math.random().toString(16).slice(2)
    },
    findByID: function(id) {
        for(let i = 0 ; i < this.students.length ; i++) {
            if (this.students[i].id === id) 
                return { index: i, student: this.students[i]}
        }
    },
    createStudent: function(name, cource, faculty) {
        const id = this.idGenerator()
        const student = {
            id: id,
            name: name,
            cource: cource,
            faculty: faculty
        }
        this.students.push(student)
        console.log(`CREATE: student: ${name}, id: ${id}`)
        return this
    },
    deleteStudent: function(id) {
        const student = this.findByID(id)
        this.students.splice(student.index, 1)
        console.log(`DELETE: student: ${student.student.name}, id: ${id}`)
        return this
    },
    getStudentsByCource: function(cource) {
        return this.students.reduce((acum, item) => {
            if (item.cource === cource) acum.push(item)
            return acum
        }, [])
    },
    getStudentsByFaculty: function(faculty) {
        return this.students.reduce((acum, item) => {
            if (item.faculty === faculty) acum.push(item)
            return acum
        }, [])
    },
    getSingleStudent: function(id) {
        return this.findByID(id).student
    },
    getAllStudents: function() {
        return [...this.students]
    }  
}
class University {
    constructor () {
        this.students = []
    }
    idGenerator = () => {
        return "_id" + Math.random().toString(16).slice(2)
    }
    findByID = (id) => {
        for (let i = 0; i < this.students.length; i++) {
        if (this.students[i].id === id)
            return { index: i, student: this.students[i] };
        }
    };
    createStudent = (name, cource, faculty) => {
        const id = this.idGenerator()
        const student = {
            id: id,
            name: name,
            cource: cource,
            faculty: faculty
        }
        this.students.push(student)
        console.log(`CREATE: student: ${name}, id: ${id}`)
        return this
    }
    deleteStudent = (id) => {
        const student = this.findByID(id)
        this.students.splice(student.index, 1)
        console.log(`DELETE: student: ${student.student.name}, id: ${id}`)
        return this
    }
    getStudentsByCource = cource => {
        return this.students.filter(item => item.cource === cource)
    }
    getStudentsByFaculty = faculty => {
        return this.students.filter(item => item.faculty === faculty)
    }
    getSingleStudent = id => {
        return this.findByID(id).student
    }
    getAllStudents = () => {
        return [...this._students]
    }  
}

/* Task 22 (аналыз тексту) */
const textAnalysis1 = str => {
    if (typeof str !== 'string') return 'Incorrect data'
    const basicStr = str.trim().toLowerCase()
    const statistics = {
        symbolCounter: 0,
        wordCounter: 0,
        sentenceCounter: 0,
        words: {
            value: [],
            length: 0
        },
        unique: {}
    }
    const charsArray = [",", ".", "!", "?", " "]
    let curentWord = ''
    for (let i = 0 ; i < basicStr.length ; i++) {
        let char = basicStr[i]
        if (basicStr[i + 1]) {
            if (!charsArray.includes(char)) {
                curentWord += char
                statistics.symbolCounter ++
            } else {
                if (curentWord) {
                    let length = curentWord.length
                    if (length === statistics.words.length) {
                        statistics.words.value.push(curentWord);
                    }
                    if (length > statistics.words.length) {
                        statistics.words.length = length;
                        statistics.words.value = [];
                        statistics.words.value.push(curentWord);
                        
                    } 
                    statistics.unique[curentWord] = (statistics.unique[curentWord] || 0) + 1;
                    statistics.wordCounter++
                    curentWord = ''
                }
                if (char === '.' || char === '?' || char === '!') statistics.sentenceCounter++
            }
        } else {
            if (!charsArray.includes(char)) {
                curentWord += char
                statistics.symbolCounter ++
            } 
            let length = curentWord.length
            if (length === statistics.words.length) {
                statistics.words.value.push(curentWord);
            }
            if (length > statistics.words.length) {
                statistics.words.length = length;
                statistics.words.value = [];
                statistics.words.value.push(curentWord);
                
            } 
            statistics.unique[curentWord] = (statistics.unique[curentWord] || 0) + 1;
            statistics.wordCounter++
            statistics.sentenceCounter++
        }    
    }
    let mostPopularWords = []
    let  mostPopularAmount = 0
    for (const key in statistics.unique) {
        if (statistics.unique[key] === mostPopularAmount) {
            mostPopularWords.push(key)
        }
        if (statistics.unique[key] > mostPopularAmount) {
            mostPopularWords = []
            mostPopularWords.push(key)
            mostPopularAmount = statistics.unique[key]
        }
    }
    return {
        "String": str,
        "Amount of symbols": statistics.symbolCounter,
        "Amount of words": statistics.wordCounter,
        "Amount of sentences": statistics.sentenceCounter,
        "Most popular words": mostPopularWords,
        "Amount of popular words (each)": mostPopularAmount,
        "Longest words": statistics.words.value,
        "Amoun of symbols in the longest words (each)": statistics.words.length
    }
}
const textAnalysis = args => {
    console.time('textAnalysis1');
    console.log(textAnalysis1(args));
    console.timeEnd('textAnalysis1');
    console.log('=====================');
}
textAnalysis(`Hello my dear friends. Hello world. Hello to you too my dear John Doe!`)
textAnalysis(`Привіт мої дорогі друзі. Привіт Світ. Привіт і тобі, мій дорогий Джоне Доу`)