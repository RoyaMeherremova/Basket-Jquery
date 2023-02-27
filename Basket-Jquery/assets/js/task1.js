$(document).ready(function () {

    let headers =$(".tab-menu .header .item");
    let contents=$(".tab-menu .content .item");



       headers.each(head => {
        head.click(function () {

           $(".active").removeClass("active")  
            $(this).addClass("active")
            contents.each(content => {
                if (content.attr("data-id") == this.attr("data-id")) {    
                    content.removeClass("d-none")
    
                }
                else {
                    content.addClass("d-none")
                }
            })
        })
       })
    




})
