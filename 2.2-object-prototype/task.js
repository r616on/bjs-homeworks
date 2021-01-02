String.prototype.isPalindrome = function () {
    let palindrome, reversPalindrome = "", newPalindrome = "";
    palindrome = this.toUpperCase();

    for (let i = 0; i < palindrome.length; i++) {
        if (palindrome[i] === " ") {
        } else {
            newPalindrome = newPalindrome + palindrome[i];
        };

    };
    for (let i = (newPalindrome.length - 1); i >= 0; i--) {
        reversPalindrome = reversPalindrome + newPalindrome[i];
    };
    if (newPalindrome === reversPalindrome) {
        return true;
    } else {
        return false;
    };

}


function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    }
    let average = 0, roundedAverage = 0;
    for (let i = 0; i < marks.length; i++) {
        average = average + (+marks[i]);
    };
    average = average / marks.length;
    roundedAverage = Math.round(average);
    return roundedAverage;

}

function checkBirthday(birthday) {
    let now = new Date().valueOf();
    birthday = new Date(birthday).valueOf();
    let diff = now - birthday;
    let age = diff / 1000 / 60 / 60 / 24 / 365.25;
    if (age > 18) {
        return true
    } else {
        return false
    }


}