// random password generator

function generatePassword(length,includeLowercase,includeUppercase,includeNumber,includeSymbol){

        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numberChars = "0123456789";
        const symbolChars = "!@#$%^&*()_+-="

        let allowChars = "";
        let password = "";

        allowChars+=includeLowercase ? lowercaseChars : "";
        allowChars+=includeUppercase ? uppercaseChars : "";
        allowChars+=includeNumber ? numberChars : "";
        allowChars+=includeSymbol ? symbolChars : "";

        if(length <= 0){
                return `(Password length must be at least 1)`;
        }
        if(allowChars.length === 0){
                return `(At least one of the character needs to be selected)`
        }
        for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random()*allowChars.length);
                password+=allowChars[randomIndex];
        }

        return password;
}

const passwordLength = 8;
const includeLowercase = true;
const includeUppercase = true;
const includeNumber = true;
const includeSymbol = true;

const password=generatePassword(passwordLength,
                                includeLowercase,
                                includeUppercase,
                                includeNumber,
                                includeSymbol);

console.log(`Generated Passwprd: ${password}`);