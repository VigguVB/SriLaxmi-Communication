var date= new Date()
var freshDate = date.toDateString()
function proceed(){
    let name = document.getElementById("name").value;
    let product = document.getElementById("product").value;
    let mobile = document.getElementById("mobNumber").value;
    let imei = document.getElementById("imei").value;
    let battery = document.getElementById("battery").value;
    let charger = document.getElementById("charger").value
    let amount = document.getElementById("priceamount").value;
    let inWords = document.getElementById("inWords").value;
    let invoiceNumber = localStorage.getItem('invoice')
    console.log(invoiceNumber)
    let newinvoice = Number(invoiceNumber)+1
    document.getElementById("invoice").innerHTML = newinvoice;
    localStorage.setItem('invoice', newinvoice);
    document.getElementById("cusname").innerHTML = name;
    document.getElementById("contact").innerHTML = mobile;
    document.getElementById("buydate").innerHTML = freshDate;
    document.getElementById("imeiDisplay").innerHTML = imei;
    document.getElementById("battery1").innerHTML = battery;
    document.getElementById("charger1").innerHTML = charger;
    document.getElementById("item").innerHTML = product;
   
    let cgst = amount*0.09;
    let sgst = amount*0.09;
    document.getElementById("cgstcalc").innerHTML = cgst;
    document.getElementById("sgstcalc").innerHTML = sgst;
    document.getElementById("gT").innerHTML = amount;
    document.getElementById("inwords1").innerHTML = inWords;
    freshamount = amount-cgst-sgst;
    document.getElementById("price").innerHTML = freshamount;
console.log("hi")
}

function submithandler(e){
e.preventDefault();
}

function printing(){
    document.getElementsByClassName('inputs')[0].style.display='none';
    document.getElementsByClassName('print')[0].style.display='none';
console.log("vig")
}

function getInitialValue(){
    
    let value=  localStorage.getItem('invoice');
    if(!value){
        localStorage.setItem('invoice', 1060)
    }
    document.getElementById("invoice").innerHTML= localStorage.getItem('invoice');
}