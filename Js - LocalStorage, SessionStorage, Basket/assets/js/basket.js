"use strict";

let tableBody = document.querySelector("tbody");
let products = JSON.parse(localStorage.getItem("basket"));   //localStoragden datalari goturuk

getBasketDatas();

function getBasketDatas(){        //butun basketde olan datalari bize veren function 
    if (products != null) {       //eyer storagede data varsa ele yoxdusa yox
        for (const product of products) {                //hemin datalari saliriq arraye ve onlarin sayi geder table tagine -td elave edirik
            tableBody.innerHTML += `<tr data-id="${product.id}">
            <td><img src="${product.img}" alt=""></td>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>${product.price} AU$</td>
            <td><span class="minus">-</span><span>${product.count}</span><span class="plus">+</span></td>
            <td><i class="fa-solid fa-xmark"></i></td>
            </tr>`
        }
    
        getBasketCount(products)   
    
    } else {
        showAlert();
    }
}
function showAlert(e){
    document.querySelector("table").classList.add("d-none")
    document.querySelector(".alert-warning").classList.remove("d-none"); 
    document.querySelector("#basket .total-title").classList.add("d-none") 
    document.querySelector("#basket .total-title").nextElementSibling.classList.add("d-none")   //eyer data yoxdusa bos Total sozunu sil
    document.querySelector("#basket .clear .clear-button").classList.add("d-none")  
       e.preventDefault();
}
function getBasketCount(arr) {       //sebet iconun ustundeki sup tagin deyeri storagden gelen data sayi ile eyni olsun
    let sum = 0;
    for (const item of arr) {       //eyer eyni datadan coxdursa onun countunuda hesablasin
        sum += item.count;
    }
    document.querySelector("sup").innerText = sum;
    // document.querySelector("sup").innerText=arr.length;
}


//DELETE DATA FROM BASKET

function deleteProduct(id) {
    products = products.filter(m => m.id != id); //filter edirem silmek istediyim data olmasin icinde ve  silmek istediyim elementde delete-iconla siblinqle catiram
    localStorage.setItem("basket", JSON.stringify(products))   //ve gonderirem tekrara storage                                                                                       //sonra storagedeki arrayi essayn edirem yeni arraye hansindaki o data yoxdur
}

let deleteIcons = document.querySelectorAll("tbody tr td i");

for (const icon of deleteIcons) {

    icon.addEventListener("click", function () {
        let id = parseInt(this.parentNode.parentNode.getAttribute("data-id"));
        deleteProduct(id);                     //sildiyim productu storagden sil
        this.parentNode.parentNode.remove(); //sildiyim productu UI-danda sil
            
        if (products.length == 0) {          //eger storagede data yoxdursa, yeni localimizda productumuzun(basketimizin) length sifirdirsa localdan productumuzun keyini oradan sil
            localStorage.removeItem("basket");
            showAlert();
        }
        showTotalPrice();
        getBasketCount(products)    //productu silenden sonra sebetin sup tagin sayini deyisdir
        
         
    })

}






function showTotalPrice() {     //function-komeyi ile butun mehsullarin toplam giymetin tapiriq
    if(products!=null){
   let title =document.querySelector(".total-title");
    title.classList.remove("d-none");
    title.nextElementSibling.classList.remove("d-none");

    let sum = 0;
    for (const item of products) {
        sum += parseInt(item.price)  //parse edib localdaki butun datalarnin qiymetini toplayiriq
    }
    title.nextElementSibling.innerHTML=sum + "AU$";     //ve yazdir h-tagine toplami
    }
   
}
showTotalPrice()


let minusIcons = document.querySelectorAll("tbody tr td .minus");


for (const icon of minusIcons) {           //minus icona basanda gedib mehsulun hem UI-daki sayini hemde local storagdaki sayini azaldiriq hemin mehsulun
    let res=0;
    icon.addEventListener("click", function () {    //minus icona basanda
        for (const product of products) {          //localstoragedaki datalari fora salaq

            if (product.id == icon.parentNode.parentNode.getAttribute("data-id")) {   //hemin minus icona uyqun productu idisine gore tapaq
                if (icon.nextElementSibling.innerText == 0) {          //eyer count 0-disa functionu dayandiraq
                    return;

                }
       
                icon.nextElementSibling.innerText--;                   //UI-daki sayi azaldaq
                
               
                product.count--;                                       //hemin productun localstoragede sayini azalt
                        
       
                                             
            }

        }
              
        localStorage.setItem("basket", JSON.stringify(products))   //localstorage yenilenmis array yerlesdirek
        
    })

}



let plusIcons = document.querySelectorAll("tbody tr td .plus"); //plus icon basanda gedib mehsulun hem UI-daki sayini hemde local storagdaki sayini coxaldiriq 


for (const icon of plusIcons) {

    icon.addEventListener("click", function () {
      let res=0;
        for (const product of products) {

            if (product.id == icon.parentNode.parentNode.getAttribute("data-id")) {    //hemin plus icona uyqun productu idisine gore tapaq
                icon.previousElementSibling.innerText++;
                let nativePrice=product.price/product.count;   //bir price elde etmek ucun  butun pricelari bolursen saylarina
                product.count++;                                 //artirsan
                product.price=nativePrice*product.count;          
       
                res=nativePrice*product.count;
                icon.parentNode.previousElementSibling.innerText=product.price;

               
                
            }

        }

        localStorage.setItem("basket", JSON.stringify(products))   //localstorage yenilenmis array yerlesdirek
        showTotalPrice()          //ve cem qiymeti hesablayan function

    })
    
}

let btnClearAll = document.querySelector("#basket .clear .clear-button")

btnClearAll.addEventListener("click", function () {
    localStorage.clear();
    window.location.reload();
})



//sweetalert2.github.io -hazir alertler olan sayt

































