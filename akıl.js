


/* sayılar */
 



/* başla button */
function alşab(){
  

   
    document.getElementById("bır").innerHTML=Math.floor(Math.random()*10*1);
    document.getElementById("ıkı").innerHTML=Math.floor(Math.random()*10*1);
    document.getElementById("uc").innerHTML=Math.floor(Math.random()*10*1);
    document.getElementById("dort").innerHTML=Math.floor(Math.random()*10*1);
    document.getElementById("bes").innerHTML=Math.floor(Math.random()*10*1);
    document.getElementById("altı").innerHTML=Math.floor(Math.random()*10*1);


    var bırr=document.getElementById("bırr").style.display="none"
    var ıkıı=document.getElementById("ıkıı").style.display="none"
    var ucc=document.getElementById("ucc").style.display="none"
    var dortt=document.getElementById("dortt").style.display="none"
    var bess=document.getElementById("bess").style.display="none"
    var altıı=document.getElementById("altıı").style.display="none"

var bır=document.getElementById("bır").value;
var ıkı=document.getElementById("ıkı").value;
var uc=document.getElementById("uc").value;
var dort=document.getElementById("dort").value;
var bes=document.getElementById("bes").value;
var altı=document.getElementById("altı").value;    
/*  
 /* saniye belirleme 
 var süree=document.getElementById("frst").value;
 */

setTimeout (function () {
   
    var bır=document.getElementById("bır").style.display="none"
    var ıkı=document.getElementById("ıkı").style.display="none"
    var uc=document.getElementById("uc").style.display="none"
    var dort=document.getElementById("dort").style.display="none"
    var bes=document.getElementById("bes").style.display="none"
    var altı=document.getElementById("altı").style.display="none"
    
    var bırr=document.getElementById("bırr").style.display="block"
    var ıkıı=document.getElementById("ıkıı").style.display="block"
    var ucc=document.getElementById("ucc").style.display="block"
    var dortt=document.getElementById("dortt").style.display="block"
    var bess=document.getElementById("bess").style.display="block"
    var altıı=document.getElementById("altıı").style.display="block"
},4000);
 
}



/* bittir button */


   
function ritib(){
/* sayıların gözükeceği yer  */

var bır=document.getElementById("bır").value;
var ıkı=document.getElementById("ıkı").value;
var uc=document.getElementById("uc").value;
var dort=document.getElementById("dort").value;
var bes=document.getElementById("bes").value;
var altı=document.getElementById("altı").value;    



/* cevaplar */
var bırr=document.getElementById("bırr").value;
var ıkıı=document.getElementById("ıkıı").value;
var ucc=document.getElementById("ucc").value;
var dortt=document.getElementById("dortt").value;
var bess=document.getElementById("bess").value;
var altıı=document.getElementById("altıı").value;    
if(bır===bırr && ıkı===ıkıı &&uc===ucc&& dort===dortt && bes===bess  && altı===altıı ){
    alert('tebrikler')
}{
    alert('tekrar deneyiniz')
}



        
}



var oo=document.getElementById("ğx").value;


var mm=document.getElementById("ğx").innerHTML=frst


/




/* harf */

function bşl(){

const alphabet = 'abcçdefghiıjklmnoçprstuüvyz';
var a=alphabet[(Math.floor(Math.random()*alphabet.length))]
var b=alphabet[(Math.floor(Math.random()*alphabet.length))]
var c=alphabet[(Math.floor(Math.random()*alphabet.length))]
var d=alphabet[(Math.floor(Math.random()*alphabet.length))]
var e=alphabet[(Math.floor(Math.random()*alphabet.length))]
var f=alphabet[(Math.floor(Math.random()*alphabet.length))]

    document.getElementById("a").innerHTML=a
    document.getElementById("b").innerHTML=b
    document.getElementById("c").innerHTML=c
    document.getElementById("d").innerHTML=d
    document.getElementById("e").innerHTML=e
    document.getElementById("f").innerHTML=f

    var  aa= document.getElementById("aa").style.display="none"
    var  bb= document.getElementById("bb").style.display="none"
    var  cc= document.getElementById("cc").style.display="none"
    var  dd= document.getElementById("dd").style.display="none"
    var  ee= document.getElementById("ee").style.display="none"
    var  ff= document.getElementById("ff").style.display="none"
 /* saniye belirleme */
 var süree=document.getElementById("frst").value;

    /* saniye belirleme 
 var süree=document.getElementById("frst").value;
 */
    setTimeout (function(){
        document.getElementById("a").style.display="none"
        document.getElementById("b").style.display="none"
        document.getElementById("c").style.display="none"
        document.getElementById("d").style.display="none"
        document.getElementById("e").style.display="none"
        document.getElementById("f").style.display="none"
    
        var  aa= document.getElementById("aa").style.display="block"
        var  bb= document.getElementById("bb").style.display="block"
        var  cc= document.getElementById("cc").style.display="block"
        var  dd= document.getElementById("dd").style.display="block"
        var  ee= document.getElementById("ee").style.display="block"
        var  ff= document.getElementById("ff").style.display="block"
               
            }, 4000);
        }      

    /* cevap */

   
   /* cevap kontrol */
 
   function cvpp(){

    var göör= document.getElementById("gör");
    var  a= document.getElementById("a").value;
    var  b= document.getElementById("b").value;
    var  c= document.getElementById("c").value;
    var  d= document.getElementById("d").value;
    var  e= document.getElementById("e").value;
    var  f= document.getElementById("f").value;
   
     var aa= document.getElementById("aa").value;
     var bb= document.getElementById("bb").value;
     var cc= document.getElementById("cc").value;
     var dd= document.getElementById("dd").value;
     var ee= document.getElementById("ee").value;
     var ff= document.getElementById("ff").value;
 
     if( a===aa && b===bb && c===cc && d===dd && e===ee && f===ff){
     alert('tebrikler')
     
     }else{
     alert('tekrar deneyin')
        
   
     }


   }

/* senbol */
/* başla */
function la(){
    const snbll="!^+%&/)(=?_|}][½$#£/*-+"
    var sa=snbll[Math.floor(Math.random()*snbll.length) ]
    var sb=snbll[Math.floor(Math.random()*snbll.length) ]
    var sc=snbll[Math.floor(Math.random()*snbll.length) ]
    var sd=snbll[Math.floor(Math.random()*snbll.length) ]
    var se=snbll[Math.floor(Math.random()*snbll.length) ]
    var sf=snbll[Math.floor(Math.random()*snbll.length) ]

/* cevaplar gizli */
var z=document.getElementById("z").style.display="none"
var x=document.getElementById("x").style.display="none" 
var v=document.getElementById("v").style.display="none" 
var n=document.getElementById("n").style.display="none" 
var m=document.getElementById("m").style.display="none" 
var ö=document.getElementById("ö").style.display="none" 

/* senboller */
    document.getElementById("sa").innerHTML=sa
    document.getElementById("sb").innerHTML=sb
    document.getElementById("sc").innerHTML=sc
    document.getElementById("sd").innerHTML=sd
    document.getElementById("se").innerHTML=se
    document.getElementById("sf").innerHTML=sf

    setTimeout (function () {

        /* cevaplar */

var z=document.getElementById("z").style.display="block"
var x=document.getElementById("x").style.display="block" 
var v=document.getElementById("v").style.display="block" 
var n=document.getElementById("n").style.display="block" 
var m=document.getElementById("m").style.display="block" 
var ö=document.getElementById("ö").style.display="block" 

/* senbol */
var z=document.getElementById("sa").style.display="none"
var x=document.getElementById("sb").style.display="none" 
var v=document.getElementById("sc").style.display="none" 
var n=document.getElementById("sd").style.display="none" 
var m=document.getElementById("se").style.display="none" 
var ö=document.getElementById("sf").style.display="none" 
        
    

    },4000)




}
/* bittir */
function ir(){
/* gelen senboller */
var as= document.getElementById("sa").value
var bs=  document.getElementById("sb").value
var  cs= document.getElementById("sc").value
var  ds= document.getElementById("sd").value
var  es= document.getElementById("se").value
var  fs= document.getElementById("sf").value


    /* cevaplar */
var z=document.getElementById("z").value 
var x=document.getElementById("x").value 
var v=document.getElementById("v").value 
var n=document.getElementById("n").value 
var m=document.getElementById("m").value 
var ö=document.getElementById("ö").value 

if( as===z && bs===x&& v===cs && n===ds&& es===m && fs===ö ){
alert("tebrikler")

}else{
    alert("tekrar deneyiniz")
}


}


