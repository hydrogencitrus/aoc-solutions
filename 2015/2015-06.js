function checkInput1() {
    let input = document.getElementById("input").value;
    let lights = []
    for (i=0;i<999999;i++){
        lights.push(0);
    }
    let words = input.split(" ");
    let inst = [];
    let startTime = performance.now();
    let toPush = []
    for (i=0;i<words.length;i++) { // this whole part just converts the input into smth more workable
        if (words[i] == "turn") {
            if (words[i+1] == "off") {
                toPush.push(0);
            } else {
                toPush.push(1);
            }
        }
        if (words[i] == "toggle") {
            toPush.push(2);
        }
        if (words[i+1] == "through") {
            toPush.push(parseInt(words[i].split(",")[0]));
            toPush.push(parseInt(words[i].split(",")[1]));
        }
        if (words[i-1] == "through") {
            toPush.push(parseInt(words[i].split(",")[0]));
            toPush.push(parseInt(words[i].split(",")[1]));
        }
        if (toPush.length > 4) {
            inst.push(toPush);
            toPush = []; // instruction (0=off,1=on,2=toggle), start x, start y, end x, end y
        }
    }
    for (i=0;i<inst.length;i++) {
        console.log(`Applying instruction ${i+1} of 300...`)
        for (j=0;j<lights.length;j++) {
            if (j%1000 >= inst[i][1] && j%1000 <= inst[i][3] && Math.floor(j/1000) >= inst[i][2] && Math.floor(j/1000) <= inst[i][4]) {
                switch (inst[i][0]){
                    case 0:
                        lights[j] = 0;
                        break;
                    case 1:
                        lights[j] = 1;
                        break;
                    case 2:
                        lights[j] = !(lights[j]);
                        break;
                }
            } 
        }
    }
    result = lights.reduce((a,b) => a+b);
    document.getElementById("output").innerHTML = result;
    document.getElementById("time").innerHTML = `(done in ${performance.now() - startTime}ms)`;
}

function checkInput2() {
    let input = document.getElementById("input").value;
    let lights = []
    for (i=0;i<999999;i++){
        lights.push(0);
    }
    let words = input.split(" ");
    let inst = [];
    let startTime = performance.now();
    let toPush = []
    for (i=0;i<words.length;i++) { // this whole part just converts the input into smth more workable
        if (words[i] == "turn") {
            if (words[i+1] == "off") {
                toPush.push(0);
            } else {
                toPush.push(1);
            }
        }
        if (words[i] == "toggle") {
            toPush.push(2);
        }
        if (words[i+1] == "through") {
            toPush.push(parseInt(words[i].split(",")[0]));
            toPush.push(parseInt(words[i].split(",")[1]));
        }
        if (words[i-1] == "through") {
            toPush.push(parseInt(words[i].split(",")[0]));
            toPush.push(parseInt(words[i].split(",")[1]));
        }
        if (toPush.length > 4) {
            inst.push(toPush);
            toPush = []; // instruction (0=off,1=on,2=toggle), start x, start y, end x, end y
        }
    }
    for (i=0;i<inst.length;i++) {
        console.log(`Applying instruction ${i+1} of 300...`)
        for (j=0;j<lights.length;j++) {
            if (j%1000 >= inst[i][1] && j%1000 <= inst[i][3] && Math.floor(j/1000) >= inst[i][2] && Math.floor(j/1000) <= inst[i][4]) {
                switch (inst[i][0]){
                    case 0:
                        if (lights[j] > 0) {
                            lights[j] -= 1;
                        }
                        break;
                    case 1:
                        lights[j] += 1;
                        break;
                    case 2:
                        lights[j] += 2;
                        break;
                }
            } 
        }
    }
    result = lights.reduce((a,b) => a+b);
    document.getElementById("output").innerHTML = result;
    document.getElementById("time").innerHTML = `(done in ${performance.now() - startTime}ms)`;
}

function copy() {
    navigator.clipboard.writeText(document.getElementById("output").innerHTML);
    alert("copied! ^_^")
}
