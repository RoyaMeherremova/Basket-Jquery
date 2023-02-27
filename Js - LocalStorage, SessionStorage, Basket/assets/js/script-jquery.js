//JQUERY -sonda js kodlarina cevrilir sonda

$(document).ready(function(){

let elem =$("h1")  //elemente catmaq ucun
// console.log(elem.text())  //elementi textine catmaq ucun

// console.log(elem.text("sagollar"))  //elementin textin deyismek

// console.log(elem.html("<span>salam</span>"))   //html deyismek

// $(".check").click(function(){               
//     $(this).css("background-color","red")   //css vermek
// })
// $(".add").click(function(){               
//     $(this).css("background-color","magenta")   //css vermek
//     $(this).next().css("background-color","magenta")  //nextElementSibling burda =next
// })


$(".hide").click(function(){     //hide butona basanda asagdaki divi gizlet -hide() methoduyla           
    $(".content").hide(2000),function(){     //2000 -saniyedir nece saniyeye bas versin
       console.log("salam")
    }     
    
})
// $(".show").click(function(){     //show butona basanda asagdaki divi gorset -show() methoduyla           
//     $(".content").show(2000 ,function(){
//         $(this).css("background-color","blue") 
//     })       
    
// })

// $(".toggle").click(function(){     //toggle butona basanda hemin div yox olsun yene basanda gorsensin           
//     $(".content").toggle(2000)          
    
// })


$(".show").click(function(){     //show butona basanda asagdaki divi gorset -show() methoduyla           
    $(".content").slideDown(500)   //div asagiya dogru acilsin navbar kimi
               
    
})

$(".toggle").click(function(){               
    $(".content").slideToggle(500)   //basan hem qalxir hem enir div
               
    
})



// $(".hide").click(function(){     
//     $(".content").slideUp(500),function(){     //divi yuxari qaldirir -slideUp()
      
//     }     
    
// })



})