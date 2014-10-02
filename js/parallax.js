

var myScroll;
//this function loads when parallax page is ready
function loaded () {
//Creating myscroll object
  myScroll = new IScroll('#wrapper', {probeType: 3,
    mouseWheel: true,
    indicators: [{
      el: document.getElementById('slide1'),
      resize: false,
      ignoreBoundaries: true,
      speedRatioY: 0.5
    }, {
      el: document.getElementById('slide2'),
      resize: false,
      ignoreBoundaries: true,
      speedRatioY:1,


    },
    {
      el: document.getElementById('slide3'),
      resize: false,
      ignoreBoundaries: true,
      speedRatioY:1,


    }]
  });
  //function that executes when scroll start
  myScroll.on('scroll', function () {
//Here this.y is the amount we scroll
  
    var opacity = -(Math.ceil(this.y)-640)/100;
     var opacity2=opacity-6.39;
     $('.nav1 .col-xs-12').css('background-color','rgba(42,42,49,'+opacity2/10+')');
    $('.nav2 .col-xs-12').css('background-color','rgba(42,42,49,'+opacity/10+')');

   
    if(Math.ceil(this.y)>-82){
       
      
      $('#slide2').css('z-index','0');

    }
 


    if(Math.ceil(this.y)<-361){
     $('#slide2>.row').addClass('change-y');
     $('#slide1>.row').addClass('change-y');
     $('#slide1>.row>#profile-pic').addClass('addTopStrip');
     $('.nav1').addClass('addP');
     $('#slide2').css('z-index','99');


   }
   if(Math.ceil(this.y)>-361){
     $('#slide2>.row').removeClass('change-y');
     $('#slide1>.row').removeClass('change-y');
     $('#slide1>.row>#profile-pic').removeClass('addTopStrip');

     $('.nav1').removeClass('addP');



   }

 });
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

