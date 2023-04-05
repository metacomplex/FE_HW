// Exercise 1

const getOddValues = numbers => {
    return numbers.filter(number => number % 2 !== 0);
};
  
const nums = [5, 4, 13, 24, 17, -5];
const oddNums = getOddValues(nums);
console.log(oddNums);

// Exercise 2

const getSmallestValue = numbers => {
    let smallest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < smallest) {
        smallest = numbers[i];
      }
    }
    return smallest;
};

const numbers = [21, 25, 15, 7, 548];
const smallestValue = getSmallestValue(numbers);
console.log(smallestValue);

// Exercise 3

const getBiggestValue = numbers => {
    let biggestValue = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > biggestValue) {
        biggestValue = numbers[i];
      }
    }
    return biggestValue;
};
  
const numbers = [51, 212, 77, 4, 21, 525];
const biggestValue = getBiggestValue(numbers);
console.log(biggestValue);

// Exercise 4

const getShorterStrings = (strings) => {
    return strings.filter(str => str.length < 20);
}
  
const strings = ['I am a short string', 'I seem to be short too', 'And I am a long string'];

const shorter = getShorterStrings(strings);
console.log(shorter);

// Exercise 5

const getComputedStrings = (fish) => {
    return fish.map(f => `${f.name} likes ${f.likes}`);
}
  
const fish = [
    { name: 'shark', likes: 'ocean' },
    { name: 'turtle', likes: 'pond' },
    { name: 'otter', likes: 'fish biscuits' }
];

const computedStrings = getComputedStrings(fish);
console.log(computedStrings);

// Exercise 6

const mergeObjects = (objects) => {
    return Object.assign({}, ...objects);
}

const obj1 = { name: 'Alice' };
const obj2 = { age: 11 };
const mergedObjs = mergeObjects([obj1, obj2]);
console.log(mergedObjs);

// Exercise 7

const getSmallestValue = numbers => {
    return Math.min(...numbers);
};

const numbers = [42, 23, -10, 27];
const smallestValue = getSmallestValue(numbers);
console.log(smallestValue);

// Exercise 8

const getOddValues2 = numbers => {
    return numbers.reduce((accumulator, currentValue) => {
      if (currentValue % 2 !== 0) {
        accumulator.push(currentValue);
      }
      return accumulator;
    }, []);
}
  
console.log(getOddValues2([77,2,30,51]));

// Exercise 9

const calculateTotal = products => {
    return products.reduce((total, product) => total + product.price * product.count, 0);
};

console.log(calculateTotal([{price: 10, count: 2}, {price: 100, count: 1}, {price: 2, count: 5}, {price: 15, count: 6}]));

// Exercise 11

const getErrorMessage = code => {
    switch (code) {
      case 500:
        return 'Server Error';
      case 401:
        return 'Authorization failed';
      case 402:
        return 'Server Error';
      case 403:
        return 'Access denied';
      case 404:
        return 'Not found';
    }
};

console.log(getErrorMessage(404));

// Exercise 12

const get2SmallestValues = numbers => {
    let sortedNumbers = [...numbers].sort((a, b) => a - b);
    return [sortedNumbers[0], sortedNumbers[1]];
}

console.log(get2SmallestValues([14, 21, 7, 18]));

// Exercise 13

const getFullName = user => {
    return `Name: ${user.firstName} ${user.patronymic} ${user.secondName}`;
};

const user = {
    firstName: "Bam",
    patronymic: "OG",
    secondName: "Adebayo"
};

console.log(getFullName(user));

// Exercise 14

const multiplyTo = (numbers, multiplier) => {
    return numbers.map(number => number * multiplier);
}

console.log(multiplyTo([15, 5, 21, 23, 13], 8));

// Exercise 15

const getCharacterNames = (characters, franchise) => {
    return characters
      .filter(character => character.franchise === franchise)
      .map(character => character.name)
      .join(', ');
};

let characters = [
    {name: "Batman", franchise: "DC"},
    {name: "Ironman", franchise: "Marvel"},
    {name: "Thor", franchise: "Marvel"},
    {name: "Superman", franchise: "DC"}
];

let franchise = "DC";

console.log(getCharacterNames(characters, franchise));

// Exercise 18

const get2BiggestValues = numbers => {
    const sorted = numbers.sort((a, b) => b - a);

    return [sorted[0], sorted[1]];
};

const arr = [4, 3, 2, 1];
const biggestValues = get2BiggestValues(arr);
console.log(biggestValues);

// Exercise 19

const getNumberOfVowels = string => {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of string.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
};

console.log(getNumberOfVowels("Know Nothing"));

// Exercise 20

const getCapitalizedStrings = string => {
    let even = '';
    let odd = '';
    for (let i = 0; i < string.length; i++) {
      if (i % 2 === 0) {
        even += string[i].toUpperCase();
        odd += string[i];
      } else {
        even += string[i];
        odd += string[i].toUpperCase();
      }
    }
    return [even, odd];
}

console.log(getCapitalizedStrings("pewpew"));

// Exercise 22

const getFlattenedArray = numbers => {
    let flattenedArray = [];
    for (let i = 0; i < numbers.length; i++) {
      if (Array.isArray(numbers[i])) {
        flattenedArray = flattenedArray.concat(getFlattenedArray(numbers[i]));
      } else {
        flattenedArray.push(numbers[i]);
      }
    }
    return flattenedArray;
}

console.log(getFlattenedArray([5, 15, 21, [15, 11, 3], -5, 0, [1, 5], 33]));

