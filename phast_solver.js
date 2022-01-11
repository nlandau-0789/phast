if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function() 
    {
        temp = String(this).replace("%", "");
        return temp.replace(/^\s+|\s+$/g, '');
    };
}

function compare(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

exercice = document.querySelector("[shown_id]").getAttribute("shown_id");

eval("exercice_"+exercice+"();");

function from1rowTab(){
    a = document.getElementsByTagName("td")
    b = [];
    for (var i = 0; i < a.length; i++) b.push(parseInt(a[i].innerHTML));
    b.sort(compare)
    return b;
}

function from2rowTab(){
    a = document.getElementsByTagName("tr")
    console.log(a)
    console.log(a[0])
    b = [];
    for (var i = 1; i < a[0].children.length; i++) {
        for (var j = 0; j < parseInt(a[1].children[i].innerHTML); j++){
            b.push(parseInt(a[0].children[i].innerHTML))
        }
    };
    b.sort(compare)
    return b;
}

function from2rowTabFreq(){
    a = document.getElementsByTagName("tr")
    console.log(a)
    console.log(a[0])
    b = [];
    for (var i = 1; i < a[0].children.length; i++) {
        for (var j = 0; j < parseInt(a[1].children[i].innerHTML.trim()); j++){
            b.push(parseInt(a[0].children[i].innerHTML))
        }
    };
    b.sort(compare)
    return b;
}

function fromChartData(){
    a = JSON.parse(document.querySelector("#exercise_container > div.question_container > div > div.exercise_question > div.chart-data.rendered").innerText)
    b = [];
    for (var i = 0; i < a.data.length; i++) {
        for (var j = 0; j < a.data[i]; j++) {
            b.push(a.categories[i])
        }
    }
    b.sort(compare)
    return b;
}

function fromPieData(){
    a = JSON.parse(document.querySelector("#exercise_container > div.question_container > div > div.exercise_question > div.pie-data.rendered").innerText)
    b = [];
    for (var i = 0; i < a.data.length; i++) {
        for (var j = 0; j < a.data[i].y; j++) {
            b.push(parseInt(a.data[i].name))
        }
    }
    b.sort(compare)
    return b;
}

function moyenne(a){
    total = 0
    a.forEach(element => total+=element);
    return total/a.length;
}

function mediane(a){
    if (a.length % 2 == 0) return moyenne(a.slice(a.length/2-1, a.length/2))
    return a[Math.floor(a.length/2)]
}

function exercice_1901(){
    a = from1rowTab();
    alert(moyenne(a))
}

function exercice_1902(){
    a = from1rowTab();
    console.log(a)
    alert(mediane(a))
}

function exercice_1906(){
    a = fromChartData();
    alert(moyenne(a))
}

function exercice_1907(){
    a = fromChartData();
    alert(mediane(a))
}

function exercice_1911(){
    a = fromPieData();
    alert(moyenne(a))
}

function exercice_1913(){
    a = fromPieData();
    alert(mediane(a))
}

function exercice_1922(){
    a = from2rowTab();
    alert(moyenne(a))
}

function exercice_1923(){
    a = from2rowTab();
    alert(mediane(a))
}

function exercice_1928(){
    a = from2rowTabFreq();
    alert(mediane(a))
}
// Appeler achèvement pour terminer
completion("qqch");
