if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function() 
    {
        temp = String(this).replace("%", "");
        return temp.replace(/^\s+|\s+$/g, '');
    };
}

function answer(a){
    a = String(a).replace(".", ",")
    try{
        mathquill = $(".mathquill-rendered-math")
        mathquill.mathquill('write', a)
        document.querySelector("#exercise_container > div.question_container > div > div.exercise_right_panel > form > div.exercise_buttons > a.btn.btn-success.exercise_submit").click()
        setTimeout(function(){document.querySelector("#exercise_container > div.question_container > div > div.exercise_right_panel > form > div.exercise_buttons > a.btn.btn-success.exercise_next").click()},1000)
    } catch (err) {
        alert(a)
    }
}

function compare(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

exercice = document.querySelector("[shown_id]").getAttribute("shown_id");
try{
    eval("exercice_"+exercice+"();");
} catch (e) {
    alert("exercice non référencé");
    console.log(e);
}
function from1rowTab(){
    a = document.getElementsByTagName("td")
    b = [];
    for (var i = 0; i < a.length; i++) b.push(parseInt(a[i].innerHTML));
    b.sort(compare)
    return b;
}

function from2rowTab(){
    a = document.getElementsByTagName("tr")
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

function fromPieDataFreq(){
    a = JSON.parse(document.querySelector("[data-kwyk=pie_percentage-data]").innerText)
    b = [];
    for (var i = 0; i < a.data.length; i++) {
        for (var j = 0; j < a.data[i].y; j++) {
            b.push(parseInt(a.data[i].name))
        }
    }
    b.sort(compare)
    return b;
}

function isNumeric(str) {
  if (typeof str != "string") return false
  return !isNaN(str) && !isNaN(parseFloat(str))
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

function premier_quartile(a){
    return a[Math.ceil(a.length/4)-1]
}

function troisieme_quartile(a){
    return a[Math.ceil(a.length*3/4)-1]
}

function ecart_type(a){
    m = moyenne(a)
    total = 0
    for (i = 0; i < a.length; i++){
        total += (a[i]-m)**2
    }
    return Math.round(Math.sqrt(total/a.length)*100)/100
}

function gcd(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
}

function isInt(n) {
    return n % 1 === 0;
}

function exercice_1901(){
    a = from1rowTab();
    answer(moyenne(a))
}

function exercice_1902(){
    a = from1rowTab();
    answer(mediane(a))
}

function exercice_1903(){
    a = from1rowTab();
    answer(premier_quartile(a))
}

function exercice_1904(){
    a = from1rowTab();
    answer(troisieme_quartile(a))
}

function exercice_1906(){
    a = fromChartData();
    answer(moyenne(a))
}

function exercice_1907(){
    a = fromChartData();
    answer(mediane(a))
}

function exercice_1908(){
    a = fromChartData();
    answer(premier_quartile(a))
}

function exercice_1911(){
    a = fromPieData();
    answer(moyenne(a))
}

function exercice_1913(){
    a = fromPieData();
    answer(mediane(a))
}

function exercice_1917(){
    a = fromPieDataFreq();
    answer(moyenne(a))
}

function exercice_1920(){
    a = fromPieDataFreq();
    answer(troisieme_quartile(a))
}

function exercice_1922(){
    a = from2rowTab();
    answer(moyenne(a))
}

function exercice_1923(){
    a = from2rowTab();
    answer(mediane(a))
}

function exercice_1928(){
    a = from2rowTabFreq();
    answer(mediane(a))
}

function exercice_1948(){
    a = from1rowTab();
    answer(ecart_type(a))
}

function exercice_1951(){
    a = fromChartData();
    answer(ecart_type(a))
}

function exercice_1953(){
    a = fromPieData();
    answer(ecart_type(a))
}

function exercice_1957(){
    a = from2rowTab();
    answer(ecart_type(a))
}

function exercice_1959(){
    a = from2rowTabFreq();
    answer(ecart_type(a))
}

function exercice_5020(){
    p = document.querySelector("#exercise_container > div.question_container > div > div.exercise_question").textContent.split(' ');
    values = []
    for(i = 0; i < p.length; i++){
        if(isNumeric(p[i])){
            values.push(parseInt(p[i]))
        }
    }
    salaire_cadres = values[0]
    salaire_non_cadres = values[1]
    salaire_moyen = values[2]
    nbCadres = values[3]
    nbNonCadres = parseInt(nbCadres*(salaire_cadres-salaire_moyen)/(salaire_moyen-salaire_non_cadres))
    answer(nbNonCadres+nbCadres)
}

function exercice_4020(){
    a = document.querySelector("#exercise_container > div.question_container > div > div.exercise_question > span:nth-child(1) > span > span > span.katex-mathml > math > semantics > annotation").textContent;
    let values = ""
    for(let i = 0; i < a.length; i++){
        if (isNumeric(a[i])){
            values+=a[i];
        } else {
            values+=" ";
        }
    }
    values = values.split(" ").filter(i => i !== "");
    a = values[2] * values[5] + Math.sqrt(values[1] * values[4]) * values[0] * values[3]
    b = values[5] * values[0] + values[2] * values[3]
    c = values[1]
    answer(String(a)+"+"+String(b)+"\\sqrt{"+String(c)+"}")
}

function exercice_45041(){
    expr = document.querySelectorAll("math > semantics > annotation")[4].textContent;
    a = expr.split(",")[0]
    expr = expr.split(",")[1]
    b = expr.split(" ")[0]
    expr = expr.split(" ")[2]
    c = -parseInt(expr.split("{")[1].split("}")[0])
    answer(`${a}${b}/10^${parseInt(c)+b.length}`)
}

function exercice_1644(){
    expr = document.querySelector("#exercise_container > div.question_container > div > div.exercise_question > span:nth-child(3) > span > span.katex-mathml > math > semantics > annotation").textContent.replace("{","(").replace("}",")").replace("^", "**");
    tests = document.querySelector("#exercise_container > div.question_container > div > div.exercise_question > span:nth-child(4) > span > span > span.katex-mathml > math > semantics > mrow > mtable").children;
    res = ""
    for(let i = 0; i < 5; i++){
        test = tests[i].children[1].textContent.replace("(","").replace(")","").replace("−","-").split(";")
        newExpr = expr.replace("x", "*("+String(test[0])+")")
        if(newExpr[0] === "*"){newExpr = newExpr.substring(1)}
        if(eval(newExpr.replace("−","-")) == test[1].replace("−","-")){
            res += "Vrai\n"
        } else {
            res += "Faux\n"
        }
        console.log(newExpr + " = " + String(eval(newExpr.replace("−","-"))) + " => " + String(test[1].replace("−","-")))
    }
    answer(res)
}

function exercice_20014(){
    let a = document.querySelector("#exercise_container > div:nth-child(2) > div > div.exercise_question > p > span:nth-child(3) > span > span.katex-mathml > math > semantics > annotation").textContent.replace("−","-");
    let ax = parseInt(a.split(';')[0].split("(")[1].trim())
    let ay = parseInt(a.split(';')[1].split("\\")[0].trim())
    let b = document.querySelector("#exercise_container > div:nth-child(2) > div > div.exercise_question > p > span:nth-child(4) > span > span.katex-mathml > math > semantics > annotation").textContent.replace("−","-");
    let bx = parseInt(b.split(';')[0].split("(")[1].trim())
    let by = parseInt(b.split(';')[1].split("\\")[0].trim())
    console.log(a,"|", ax,"|", ay)
    console.log(b,"|", bx,"|", by)
    answer(moyenne([ax,bx]))
    answer(moyenne([ay,by]))
}

function exercice_20096(){
    let a = document.querySelector("#exercise_container > div:nth-child(2) > div > div.exercise_question > p > span:nth-child(3) > span > span.katex-mathml > math > semantics > annotation").textContent.replace("−","-");
    let ax = parseInt(a.split(';')[0].split("(")[1].trim())
    let ay = parseInt(a.split(';')[1].split("\\")[0].trim())
    let b = document.querySelector("#exercise_container > div:nth-child(2) > div > div.exercise_question > p > span:nth-child(4) > span > span.katex-mathml > math > semantics > annotation").textContent.replace("−","-");
    let bx = parseInt(b.split(';')[0].split("(")[1].trim())
    let by = parseInt(b.split(';')[1].split("\\")[0].trim())
    console.log(a,"|", ax,"|", ay)
    console.log(b,"|", bx,"|", by)
    answer(moyenne([ax,bx]))
    answer(moyenne([ay,by]))
}