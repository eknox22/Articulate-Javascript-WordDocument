// Get the Storyline player
var player = GetPlayer();

// Get the value entered in the text entry field (change 'TextEntry' if needed)
var password = player.GetVar("TextEntry");

// Function to validate password strength
function isStrongPassword(pw) {
    const minLength = 12;
    const hasUppercase = /[A-Z]/.test(pw);
    const hasLowercase = /[a-z]/.test(pw);
    const hasNumber = /[0-9]/.test(pw);
    const hasSymbol = /[^A-Za-z0-9]/.test(pw);
    const isLongEnough = pw.length >= minLength;
    const isNotWeak = !/^(12345|password|qwerty|letmein|abc123)$/i.test(pw);

    return isLongEnough && hasUppercase && hasLowercase && hasNumber && hasSymbol && isNotWeak;
}

// Validate the password and set a variable in Storyline
if (isStrongPassword(password)) {
    player.SetVar("PasswordIsValid", true);
} else {
    player.SetVar("PasswordIsValid", false);
}
