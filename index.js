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

/* Task 12 (сортування масиву) */
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

/* Task 13 (форматування рядка) */
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
    document.getElementById('task14').innerText = str;
    document.getElementById('task14').style.userSelect = 'none';
    document.addEventListener('copy', (event) => event.preventDefault());
    document.addEventListener('contextmenu', (event) => event.preventDefault());
    document.addEventListener('keydown', (event) => event.preventDefault());
}

/* Task 15 (генератор паролів) */
const passwordGenerator1 = () => {
    const gererator = number => Math.floor(Math.random() * number)
    const availableValues = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    const length = Math.floor(Math.random() * 14 + 6)
    const password = new Array(length).fill('*')
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

/* Task 16 (перестановка елементів масиву) */
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

/* Task 17 (відсортувати рядок за частотою появи символів) */
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

/* Task 18 (пошук найдовшого загального рядка) */
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

/* Task 19 (шифр Цезаря) */
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