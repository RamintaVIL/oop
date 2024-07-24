import { IsValid } from "./isValid.js";

console.log(IsValid.username('asd'));
console.log(IsValid.username('   '));
console.log(IsValid.username('asd as da das'));
console.log(IsValid.username('asddjasjfsaljfsafjalkfjskfj'));
console.log(IsValid.username('@dsbnfjdnasd'));
console.log(IsValid.username('Česnakas'));

const emailValidationResult = IsValid.email('');
if (emailValidationResult === true) {
    return 'OK';
} else {
    // return string
}
