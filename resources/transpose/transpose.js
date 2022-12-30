transpose_convert_positive = ["C", "Db", "D", "Eb", "E", "F", "FS"];
transpose_convert_negative = ["C", "-B", "-Bb", "-A", "-Ab", "-G"];

function calc() {
    fromkey = parseInt(document.querySelector('input[name="from-key"]:checked').value);
    tokey = parseInt(document.querySelector('input[name="to-key"]:checked').value);

    transpose = tokey - fromkey;
    if (transpose < -5)
        transpose += 12;
    else if (transpose > 6)
        transpose -= 12;
    document.getElementById("transpose-numeric").innerText = transpose;

    if (transpose >= 0)
        transpose_keyboard = transpose_convert_positive[transpose];
    else
        transpose_keyboard = transpose_convert_negative[-transpose];
    document.getElementById("transpose-keyboard").innerText = transpose_keyboard;
}
