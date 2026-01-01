let target = "coursecareers";
let delimiter = "|";
let spacing = 1;

function formatString(target, delimiter, spacing) {
    let formattedString = "";
    for (let i = 0; i < target.length; i++) {
        formattedString += target[i];
        if ((i + 1) % spacing === 0 && (i + 1) !== target.length) {
            formattedString += delimiter;
        }
    }
    return formattedString;
}
console.log(formatString(target, delimiter, spacing));
