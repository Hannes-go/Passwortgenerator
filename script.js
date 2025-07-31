function generatePassword() {
    const length = parseInt(document.getElementById("length").value);
    const useUpper = document.getElementById("uppercase").checked;
    const useLower = document.getElementById("lowercase").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSymbols = document.getElementById("symbols").checked;

    if (length < 4 || length > 15) {
        alert("Die Passwortlänge muss zwischen 4 und 15 Zeichen liegen!");
        return;
    }

    let chars = '';
    let mandatory = [];

    if (useUpper) {
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        mandatory.push(randomChar("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));
    }
    if (useLower) {
        chars += "abcdefghijklmnopqrstuvwxyz";
        mandatory.push(randomChar("abcdefghijklmnopqrstuvwxyz"));
    }
    if (useNumbers) {
        chars += "0123456789";
        mandatory.push(randomChar("0123456789"));
    }
    if (useSymbols) {
        chars += "!@#$%^&*()_-+=<>?";
        mandatory.push(randomChar("!@#$%^&*()_-+=<>?"));
    }

    if (chars.length === 0) {
        alert("Bitte mindestens eine Option auswählen!");
        return;
    }

    let password = mandatory;

    for (let i = mandatory.length; i < length; i++) {
        password.push(randomChar(chars));
    }

    password = shuffle(password).join('');

    document.getElementById("passwordOutput").value = password;
}

function randomChar(charSet) {
    return charSet[Math.floor(Math.random() * charSet.length)];
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function copyToClipboard() {
    const password = document.getElementById("passwordOutput");
    password.select();
    document.execCommand("copy");
    alert("Passwort in Zwischenablage kopiert!");
}
