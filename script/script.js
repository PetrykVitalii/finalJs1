function elem(a) {
    return document.querySelector(a);
}

elem(".button1").onclick = function () {
    elem(".block1").style.display = "block";
    elem(".block2").style.display = "none";
    elem(".area").value = elem(".box1").innerHTML;
};
elem(".button2").onclick = function () {
    elem(".block2").style.display = "flex";
    elem(".block1").style.display = "none";
};

function fontSize() {
    elem(".box1").style.fontSize = event.target.value;
}
elem("select").onchange = function () {
    for (let i = 0; i < elem("select").length; i++) {
        if (elem("select")[i].selected) {
            let font = elem("select")[i].value;
            elem(".box1").style.fontFamily = `${font}`;
        }
    }
};
let arr = [
    "blue",
    "green",
    "yellow",
    "black",
    "white",
    "red",
    "orange",
    "gray",
    "pink"
];

let blockC = document.getElementsByClassName("blockC");
for (let i = 0; i < blockC.length; i++) {
    blockC[i].style.background = arr[i];
}
let f2 = document.forms["f2"].children;
f2[0].onclick = function () {
    elem(".block9").style.display = "flex";
    for (let i = 0; i < blockC.length; i++) {
        blockC[i].onclick = function () {
            elem(".box1").style.color = arr[i];
            elem(".block9").style.display = "none";
        };
    }
};
f2[1].onclick = function () {
    elem(".block9").style.display = "flex";
    for (let i = 0; i < blockC.length; i++) {
        blockC[i].onclick = function () {
            elem(".box1").style.background = arr[i];
            elem(".block9").style.display = "none";
        };
    }
};
let f3 = document.forms["f3"].children;

f3[0].onclick = function () {
    if (f3[0].checked) {
        elem(".box1").style.fontWeight = "bold";
    } else {
        elem(".box1").style.fontWeight = "normal";
    }
};

f3[2].onclick = function () {
    if (f3[2].checked) {
        elem(".box1").style.fontStyle = "italic";
    } else {
        elem(".box1").style.fontStyle = "normal";
    }
};
elem(".button3").onclick = function () {
    elem(".container1").style.display = "none";
    elem(".box2").style.display = "block";
};
elem(".button4").onclick = function () {
    elem(".box1").innerHTML = elem(".area").value;
    elem(".block1").style.display = "none";
};
let f4 = document.forms["f4"].elements;
f4[0].onclick = function () {
    elem(".table").style.display = "block";
    elem(".list").style.display = "none";
};
f4[1].onclick = function () {
    elem(".list").style.display = "block";
    elem(".table").style.display = "none";
};
let f5 = document.forms["f5"].elements;
for (let i = 0; i < 4; i++) {
    f5[i].style.width = "450px";
}
f5[4].style.width = "60px";
for (let i = 0; i < f5[6].length; i++) {
    f5[6][i].value = arr[i];
    f5[6][i].textContent = arr[i];
}
f5[7].onclick = function () {
    let table = document.createElement("table");
    table.classList.add("remove");
    elem(".none").appendChild(table);
    for (let i = 0; i < f5[0].value; i++) {
        let tr = document.createElement("tr");
        table.appendChild(tr);
        for (let i = 0; i < f5[1].value; i++) {
            let td = document.createElement("td");
            td.textContent = "TD";
            td.style.width = f5[2].value + "px";
            td.style.height = f5[3].value + "px";
            tr.appendChild(td);
            for (let i = 0; i < f5[5].length; i++) {
                if (f5[5][i].selected) {
                    td.style.border = f5[4].value + "px " + f5[5][i].value;
                }
            }
            for (let i = 0; i < f5[6].length; i++) {
                if (f5[6][i].selected) {
                    td.style.borderColor = f5[6][i].value;
                }
            }
        }
    }
    elem(".area").value += elem(".none").innerHTML;
    elem(".container1").style.display = "block";
    elem(".box2").style.display = "none";
    elem("table").remove();
    document.forms["f5"].reset()
};
let f6 = document.forms["f6"].elements;
console.log(f6);
f6[2].onclick = function () {
    let ul = document.createElement("ul");
    elem(".none").appendChild(ul);
    for (let i = 0; i < f6[0].value; i++) {
        let li = document.createElement("li");
        ul.appendChild(li);
        li.textContent = `item ${i + 1}`;
    }
    for (let i = 0; i < f6[1].length; i++) {
        if (f6[i].selected) {
            ul.style.listStyle = f6[i].value;
        }
    }
    elem(".area").value += elem(".none").innerHTML;
    elem(".container1").style.display = "block";
    elem(".box2").style.display = "none";
    elem("ul").remove();
    document.forms["f6"].reset()
};