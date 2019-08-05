const eC = ['a','e','h','l','n','p','r','y']; // email characters
const eD = '@protonmail.com'; // email domain
const pD = ['1','2','3','4','6','8']; //phone digits

var e = eC[6]+eC[0]+eC[5]+eC[2]+eC[0]+eC[1]+eC[3];
e = e+eC[6]+eC[1]+eC[7]+eC[4]+eC[0];
e = e+eD;

var p = '('+pD[4]+pD[1]+pD[4]+')'+' ';
p = p+pD[2]+pD[5]+pD[3]+'-';
p = p+pD[0]+pD[2]+pD[3]+pD[1];

const emailSpan = document.getElementById("contactEmail");
const phoneSpan = document.getElementById("contactPhone");


function loadContactInfo() {
    emailSpan.innerHTML = e;
    //phoneSpan.innerHTML = p;
}

document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.modal');
    const instances = M.Modal.init(elems, {onOpenStart: loadContactInfo});
});
