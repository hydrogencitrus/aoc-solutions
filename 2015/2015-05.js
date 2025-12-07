function checkInput1() {
    let input = document.getElementById("input").value;
    let lines = input.split(" ");
    let checkStage = 0;
    let letters = [];
    let nice = 0;
    let vowels = 0
    for (i=0;i<lines.length;i++) {
        checkStage = 0;
        letters = lines[i].split("");
        vowels = 0
        for (c=0;c<letters.length;c++){
            if (["a","e","i","o","u"].includes(letters[c])) {
                vowels++;
                console.log("Vowels: " + vowels)
            }
        }
        if (vowels >= 3) {
            checkStage = 1;
        }
        if (checkStage == 1) {
            for (cc=1;cc<letters.length;cc++){
                if (letters[cc] == letters[cc-1]) {
                    checkStage = 2;
                    break;
                }
            }
        }
        if (checkStage == 2) {
            let failed = false;
            for (ccc=1;ccc<letters.length;ccc++){
                if (["ab","cd","pq","xy"].includes(letters[ccc-1]+letters[ccc])){
                    failed = true;
                }
            }
            if (!failed) {
                checkStage = 3;
                nice++;
            }
        }
        console.log("Line: "+i+" | checkStage: "+checkStage);
    }
    result = nice;
    document.getElementById("output").innerHTML = result;
}

function checkInput2() {
    let input = document.getElementById("input").value;
    let lines = input.split(" ");
    let checkStage = 0;
    let letters = [];
    let nice = 0;
    for (i=0;i<lines.length;i++) {
        checkStage = 0;
        letters = lines[i].split("");
        let pairs = [];
        for (c=1;c<letters.length;c++){
            if (pairs.includes(letters[c-1]+letters[c]) && pairs.indexOf(letters[c-1]+letters[c]) < pairs.length-1) {
                checkStage = 1;
                break;
            } else {
                pairs.push(letters[c-1]+letters[c]);
                console.log(pairs);
            }
        }

        if (checkStage == 1) {
            for (cc=2;cc<letters.length;cc++){
                if (letters[cc-2] == letters[cc]){
                    checkStage = 2;
                    nice++;
                    break;
                }
            }
        }

        console.log("Line: "+i+" | checkStage: "+checkStage);
    }
    result = nice;
    document.getElementById("output").innerHTML = result;
}

function copy() {
    navigator.clipboard.writeText(document.getElementById("output").innerHTML);
    alert("copied! ^_^")
}
