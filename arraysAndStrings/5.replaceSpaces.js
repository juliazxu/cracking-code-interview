// 1.5 Write a method to replace all spaces in a string with ‘%20’.

// 1. use regex global replace \ \g, '%20'

const replaceSpacesRegex = str => {
    return str.replace(/ /g, '%20');
};

// 2. turn string to array by splitting with space, join with '%20'

const replaceSpaces = str => {
    return str.split(" ").join("%20");
};