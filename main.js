var inw= window.innerWidth;
var inh= window.innerHeight;

var outw= window.outerWidth;
var outh= window.outerHeight;

var typeString = ['I\'M UI/UX DESIGNER','LET\'S WORK TOGETHER', 'I CAN CREATE AWESOME STUFF'];
      var  i = 0;
      var count = 0
      var selectedText = '';
      var text = '';
      (function type() {
        if (count == typeString.length) {
          count = 0;
        }
        selectedText = typeString[count];
        text = selectedText.slice(0, ++i);
        document.getElementById('typing').innerHTML = text;
        if (text.length === selectedText.length) {
          count++;
          i = 0;
        }
        setTimeout(type, 180);
        
      }());

      var btn= document.getElementById('btn');
      var screens= document.querySelectorAll('.screen');
      

$(document).ready(function(){
  var scrollLink= $('.scroll');
  scrollLink.click(function(e){
    e.preventDefault();
    $('body,html').animate({
      scrollTop:$(this.hash).offset().top
    },1000)
  })


  $(window).scroll(function(){
    var scrollbarLoc=$(this).scrollTop();
  
    scrollLink.each(function(){
      var sectionOffset =$(this.hash).offset();
      if(sectionOffset<= scrollbarLoc){
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
  
          }
    })
  })
})

