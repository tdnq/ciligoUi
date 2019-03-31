$(document).ready(function () {
    var mytab=function (){
        $(".my-tab-list").bind("click",function () {

            $(this).addClass("my-tab-list-active").siblings().removeClass("my-tab-list-active");
            $(".my-tab-content").eq($(this).index()).addClass("d-block").siblings().removeClass("d-block");
        });
        $(".my-nav-item").bind("click",function () {
            $(this).addClass("my-nav-active").siblings().removeClass("my-nav-active");
        })
    }
    mytab();
})
