$(function(){
var ww= (window.innerWidth || document.documentElement.clientWidth || 0);
if(ww>640){
  /* gnavマウスホーバーで背景色変更 */
    $(".ul_nav01 li.li_gnav01").hover(function(){
      $(this).addClass("current");
      $(".small_nav_area01",this).fadeIn(200);

      /* small_nav_areaの中の高さ調整 */
      var hList=new Array();
      $(".small_nav_g",this).each(function(idx){
        hList[idx]=$(this).height();
      })
      var maxH=Math.max.apply(null,hList);
      console.log(maxH);
      $(".ul_nav01 .small_nav_area01 .small_nav_g02").css({"height":maxH+"px"});
      //$(".ul_nav01 .small_nav_area01 .small_nav_g03").css({"height":maxH+"px"});
    },function(){
      $(this).removeClass("current");
      $(".small_nav_area01",this).fadeOut(200);
      $(".ul_nav01 .small_nav_area01 .small_nav_g02").hide();

      /* small_nav_areaの中の高さ調整 */
      $(".ul_nav01 .small_nav_area01 .small_nav_g02").css({"height":"auto"});
      //$(".ul_nav01 .small_nav_area01 .small_nav_g03").css({"height":"auto"});

    });
}else{
}

$(".ul_nav01 .li_gnav01 .small_nav_area01 .small_nav_g01 li").hover(function(){
    var index=$(".ul_nav01 .small_nav_area01 .small_nav_g01 li").index(this);
var find_child=$(".ul_nav01 .small_nav_area01 .small_nav_g02").eq(index).find("ul").length;
if(find_child){
}else{
$(".ul_nav01 .small_nav_area01 .small_nav_g02").eq(index).css("opacity","0");
}
    $(".ul_nav01 .small_nav_area01 .small_nav_g02").hide();
    $(".ul_nav01 .small_nav_area01 .small_nav_g01 li").removeClass("current");
    $(this).addClass("current");
    $(".ul_nav01 .small_nav_area01 .small_nav_g02").eq(index).show();
  },function(){
    //$(this).removeClass("current");
    var index=$(".ul_nav01 .small_nav_area01 .small_nav_g01 li").index(this);
    //$(".ul_nav01 .small_nav_area01 .small_nav_g02").eq(index).hide();
  });




  $(".ul_nav01 .small_nav_area01 .small_nav_g02 li").hover(function(){
    $(this).addClass("current");
    // var index=$(".ul_nav01 .small_nav_area01 .small_nav_g02 li").index(this);
    // $(".ul_nav01 .small_nav_area01 .small_nav_g03").eq(index).show();
  },function(){
    $(this).removeClass("current");
    // var index=$(".ul_nav01 .small_nav_area01 .small_nav_g02 li").index(this);
    // $(".ul_nav01 .small_nav_area01 .small_nav_g03").eq(index).hide();
  });

  // $(".ul_nav01 .small_nav_area01 .small_nav_g03").hover(function(){
  //   var sn_g03_index=$(".ul_nav01 .small_nav_area01 .small_nav_g03").index(this);
  //   $(".ul_nav01 .small_nav_area01 .small_nav_g02 li").eq(sn_g03_index).addClass("current");
  //   $(this).show();
  // },function(){
  //   var sn_g03_index=$(".ul_nav01 .small_nav_area01 .small_nav_g03").index(this);
  //   $(".ul_nav01 .small_nav_area01 .small_nav_g02 li").eq(sn_g03_index).removeClass("current");
  //   $(this).hide();
  // });
  //
  // $(".ul_nav01 .small_nav_area01 .small_nav_g03 li").hover(function(){
  //   $(this).addClass("current");
  // },function(){
  //   $(this).removeClass("current");
  // });

/* gnavスマホ表示 */
  $(".nav_btn").click(function(){
    if($("header").hasClass("active")){
      $("nav").fadeOut();
      //$("header").removeClass("active");
      $('header').delay(500).queue(function() {
        $(this).removeClass("active_before").dequeue();
        $(this).removeClass("active_after").dequeue();
      });
      $('header').delay(1000).queue(function() {
        $(this).removeClass("active").dequeue();
      });
    }else{
      $("nav").delay(200).fadeIn();
      $("header").addClass("active_before");
      $('header').delay(200).queue(function() {
        $(this).addClass("active").dequeue();
        $(this).addClass("active_after").dequeue();
      });
    }

  });








});
