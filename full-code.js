/* Task 01 (знайти різницю між найбільшим і найменшим значенням) */
const sumOfMinAndMax1 = arr => {
    if (!Array.isArray(arr)) return "Not an array"
    if (arr.length < 2) return 0
    if (arr.some(item => isNaN(item))) return "Array includes not only numbers"
    return Math.max(...arr) - Math.min(...arr)
}
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
const sumOfMinAndMax3 = (arr) => {
    if (!Array.isArray(arr)) return "Not an array"
    if (arr.length < 2) return 0
    if (arr.some(item => isNaN(item))) return "Array includes not only numbers"
    let sortedArr = arr.sort((a, b) => a-b)
    return sortedArr[sortedArr.length - 1] - sortedArr[0]
}
// const sumOfMinAndMax = (args) => {
//     console.time('sumOfMinAndMax1');
//     console.log(sumOfMinAndMax1(args))
//     console.timeEnd('sumOfMinAndMax1');
//     console.time('sumOfMinAndMax2');
//     console.log(sumOfMinAndMax2(args))
//     console.timeEnd('sumOfMinAndMax2');
//     console.time('sumOfMinAndMax3');
//     console.log(sumOfMinAndMax3(args))
//     console.timeEnd('sumOfMinAndMax3');
//     console.log('=====================');
// }
// sumOfMinAndMax([1, 2, 3, -4])

/* Task 02 (повернути масив слів, довжина яких відповідає умові) */
const wordLength1 = (str, numb) => {
    if (typeof str !== 'string' || isNaN(numb)) return 'Incorrect data';
    return str
            .replace(/[,]/g, '')        
            .split(' ')
            .reduce((acum, item) => item.length > numb ? [...acum, item] : acum, [])}
const wordLength2 = (str, numb) => {
    if (typeof str !== 'string' || isNaN(numb)) return 'Incorrect data';
    const strArr = str.replace(/[,]/g, '').split(' ');
    const result = [];
    for (let i = 0 ; i < strArr.length ; i++) {
        if (strArr[i].length > numb) result.push(strArr[i])
    }
    return result
}
// const wordLength = (args1, args2) => {
//     console.time('wordLength1');
//     console.log(wordLength1(args1, args2))
//     console.timeEnd('wordLength1');
//     console.time('wordLength2');
//     console.log(wordLength2(args1, args2))
//     console.timeEnd('wordLength2');
//     console.log('=====================');
// }
// wordLength('повернути масив слів, довжина яких відповідає умові', 5)

/* Task 03 (повернути boolean чи закінчується один рядок іншим) */
const endOfString1 = (strFull, strPart) => {
    if (typeof strFull !== 'string' || typeof strPart !== 'string') return 'Incorrect data';
    return strFull.toString().endsWith(strPart)
}
const endOfString2 = (strFull, strPart) => {
    if (typeof strFull !== 'string' || typeof strPart !== 'string') return 'Incorrect data';
    return strFull.search(new RegExp(strPart + "$")) !== -1
}
// const endOfString = (args1, args2) => {
//     console.time('endOfString1');
//     console.log(endOfString1(args1, args2))
//     console.timeEnd('endOfString1');
//     console.time('endOfString2');
//     console.log(endOfString2(args1, args2))
//     console.timeEnd('endOfString2');
//     console.log('=====================');
// }
// endOfString('повернути масив слів, довжина яких відповідає умові', 'умові')

/* Task 04 (повернути масив середніх значень) */
const averageValues1 = (arr) => {
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
// const averageValues = (args) => {
//     console.time('averageValues1');
//     console.log(averageValues1(args))
//     console.timeEnd('averageValues1');
//     console.time('averageValues2');
//     console.log(averageValues2(args))
//     console.timeEnd('averageValues2');
//     console.log('=====================');
// }
// averageValues([1, 3, 5, -10])

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
// const countVowels = (args) => {
//     console.time('countVowels2');
//     console.log(countVowels2(args))
//     console.timeEnd('countVowels2');
//     console.time('countVowels2');
//     console.log(countVowels2(args))
//     console.timeEnd('countVowels2');
//     console.log('=====================');
// }
// countVowels("Celebration")

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
// const removeABC = (args) => {
//     console.time('removeABC1');
//     console.log(removeABC1(args))
//     console.timeEnd('removeABC1');
//     console.time('removeABC2');
//     console.log(removeABC2(args))
//     console.timeEnd('removeABC2');
//     console.log('=====================');
// }
// removeABC("This might be a bit hard")

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
        })}
// const difference = (args1, args2) => {
//     console.time('difference1');
//     console.log(difference1(args1, args2))
//     console.timeEnd('difference1');
//     console.time('difference2');
//     console.log(difference2(args1, args2))
//     console.timeEnd('difference2');
//     console.log('=====================');
// }
// difference([1, 2, 3], [100, 2, 1, 10])

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
// const objectReverse = (args) => {
//     console.time('objectReverse1');
//     console.log(objectReverse1(args))
//     console.timeEnd('objectReverse1');
//     console.time('objectReverse2');
//     console.log(objectReverse2(args))
//     console.timeEnd('objectReverse2');
//     console.time('objectReverse3');
//     console.log(objectReverse3(args))
//     console.timeEnd('objectReverse3');
//     console.log('=====================');
// }
// objectReverse({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"})

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
// const calculateDifference = (args1, args2) => {
//     console.time('calculateDifference1');
//     console.log(calculateDifference1(args1, args2))
//     console.timeEnd('calculateDifference1');
//     console.time('calculateDifference2');
//     console.log(calculateDifference2(args1, args2))
//     console.timeEnd('calculateDifference2');
//     console.log('=====================');
// }
// calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)

/* Task 09 (перевірити чи влазить цегла в отвір) */
function doesBrickFit1 (brickHeight, brickWidth, brickDepth, holeWidth, holeHeight) {
    if ([...arguments].some(item => isNaN(item))) return 'Incorrect data'
    return [
        brickHeight * brickWidth, 
        brickWidth * brickDepth, 
        brickHeight * brickDepth
    ].some(item => item <= holeWidth * holeHeight )
}
// const doesBrickFit = (args1, args2, args3, args4, args5) => {
//     console.time('doesBrickFit1');
//     console.log(doesBrickFit1(args1, args2, args3, args4, args5))
//     console.timeEnd('doesBrickFit1');
//     console.log('=====================');
// }
// doesBrickFit(1, 2, 1, 1, 1)

/* Task 10 (виділення імені файлу з рядку абсолютного шляху) */
const getFileName1 = (str) => {
    if (typeof str !== 'string') return 'Incorrect data';
    return str.split("\\").pop().split(".")[0]
}
const getFileName2 = (str) => {
    if (typeof str !== 'string') return 'Incorrect data';
    return str.match(/[^\\]*$/)[0].split(".")[0]
}
const getFileName3 = (str) => {
    if (typeof str !== 'string') return 'Incorrect data';
    const lastIndex = str.lastIndexOf("\\");
    return str.slice(lastIndex + 1).split(".")[0]
}
// const getFileName = (args) => {
//     console.time('getFileName1');
//     console.log(getFileName1(args))
//     console.timeEnd('getFileName1');
//     console.time('getFileName2');
//     console.log(getFileName2(args))
//     console.timeEnd('getFileName2');
//     console.time('getFileName3');
//     console.log(getFileName3(args))
//     console.timeEnd('getFileName3');
//     console.log('=====================');
// }
// getFileName(`c:\\WebServers\\home\\testsite\\www\\myfile.txt`)

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