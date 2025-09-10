function checkInput1() {
    let input = document.getElementById("input").value;
    let num = 0;
    let emdee5 = "";
    let run = true;
    while (run) {
        num++;
        console.log(input+num);
        emdee5 = md5(input+num);
        console.log(emdee5);
        if (emdee5.charAt(0)+emdee5.charAt(1)+emdee5.charAt(2)+emdee5.charAt(3)+emdee5.charAt(4) == "00000") {
            run = false;
        }
    }
    result = num;
    document.getElementById("output").innerHTML = result;
}

function checkInput2() {
    let input = document.getElementById("input").value;
    let num = 0;
    let emdee5 = "";
    let run = true;
    while (run) {
        num++;
        console.log(input+num);
        emdee5 = md5(input+num);
        console.log(emdee5);
        if (emdee5.charAt(0)+emdee5.charAt(1)+emdee5.charAt(2)+emdee5.charAt(3)+emdee5.charAt(4)+emdee5.charAt(5) == "000000") {
            run = false;
        }
    }
    result = num;
    document.getElementById("output").innerHTML = result;
}

function copy() {
    navigator.clipboard.writeText(document.getElementById("output").innerHTML);
    alert("copied! ^_^")
}
