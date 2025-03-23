
function my() {

    typed= ["NAME : thirupathi.k","<br>","DEGREE : bov.software developtment","<br>","COLLEGE :arumugam pillai sethaiammal college "];
     s = typed.join(" ");
document.getElementById("myinfo").innerHTML=s;

}
function mail() {
    alert("thirupathiff007@gmail.com")
}

function usron() {
    var usr =document.getElementById("usernamejs").value;
   var input1="HI ";
    if (usr) {

    document.getElementById("usr").innerHTML=`${input1} ! ${usr} : welcome Thank for visiting for my portfolio `;
    }
    else{
        alert("don't submit without name")
    }
} 