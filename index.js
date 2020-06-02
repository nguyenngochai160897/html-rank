$(document).ready(function () {
  let rankLength = 0;  
  $(".tag-child button").click(function () {
    let value = $(this).html().trim();
    $(".tag-child button").removeClass("active");

    console.log(window.location.pathname);
    
    //index.html
    if(window.location.pathname.includes("index.html")){
      if(value == "Weekly" ){
        
        $(this).addClass("active")
        rankLength = 7;
      }
      else if(value == "This month"){
        $(this).addClass("active")
        rankLength = 5;
      }
      else {
        $(this).addClass("active")
        rankLength = 3;
      }
    }

    //earnings.html
    if(window.location.pathname.includes("earnings.html")){
      if(value == "Hourly" ){
        $(this).addClass("active")
        rankLength = 7;
      }
      else if(value == "Daily"){
        $(this).addClass("active")
        rankLength = 5;
      }
      else {
        $(this).addClass("active")
        rankLength = 3;
      }
    }

    //donator.html
    if(window.location.pathname.includes("donator.html")){
      if(value == "Daily" ){
        $(this).addClass("active")
        rankLength = 7;
      }
      else {
        $(this).addClass("active")
        rankLength = 5;
      }
    }
    
    renderRankList(rankLength);
  });
});

function renderRankList(size){
  let render = "";
  for(let i = 0; i < size; i++){
    let noClass = "";
    let no = i + 2;
    if(no >= 4) noClass = "none";
    else noClass = String(no);
    render += '<li>' +
                '<div class="grid-container">' +
                  '<div class="grid-item-left">' + 
                    '<span class="rank bg-top-' + noClass + '">'+ no +'</span>' + 
                    '<img src="imgs/Avatar.png" alt="" class="avatar">' +
                    '<span class="streamer-name">VLP Chanh</span>' +
                    '<span class="badge">' + 
                    ' <span class="lv">30</span>' +
                      '<img src="./imgs/badge.png" alt="">' +
                      '<img src="./imgs/badge.png" alt="">' +
                    '</span>' +
                  '</div>' +
                  '<div class="grid-item-right">' +
                    '<span>200</span>' +
                  '</div>' +
                '</div>' +
              '</li>';
  }
  $(".rank-list").html(render);
}