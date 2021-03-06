/**
  * Adios.js by computerpark
  * https://github.com/computerpark/Adios2019
  * Distributed under Apache 2.0 LICENSE.
  */

function pad(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}
setTimeout(function() {
    var newyear_debug = 0;
    function changeDisplay(divname) {
        var foo = document.getElementById(divname);
        if (foo.style.display == 'none') {
            foo.style.display = 'block';
        } else {
            foo.style.display = 'none';
            //console.log("Fuck!");
        }
    }

    function DisplayNone(divname) {
        var foo = document.getElementById(divname);
        foo.style.display = 'none';
    }

    function DisplayBlock(divname) {
        var foo = document.getElementById(divname);
        foo.style.display = 'block';
    }

    console.log("Loaded!");
    changeDisplay("loading")
    changeDisplay("clockdiv");


    console.log("Reload ASYNC Set!");
    setInterval(function(){
        //TODO: Reload
        //console.log('reloading...');
    },19000);


    // 날짜 설정
    var countDownDate = new Date("Jan 01, 2020 00:00:00").getTime();
    // 0.01 초마다 업데이트
    var x = setInterval(function() {
        // Get today's date and time
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        if(newyear_debug){
          var distance = -1;
        }else{
          var distance = countDownDate - now;
        }
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var centisec = Math.floor(((distance % (1000 * 60)) / 10) % 100);
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = pad(hours, 2);
        document.getElementById("minutes").innerHTML = pad(minutes, 2);
        document.getElementById("seconds").innerHTML = pad(seconds, 2);
        document.getElementById("centiseconds").innerHTML = pad(centisec, 2);
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("days").innerHTML = '00';
            document.getElementById("hours").innerHTML = '00';
            document.getElementById("minutes").innerHTML = '00';
            document.getElementById("seconds").innerHTML = '00';
            document.getElementById("centiseconds").innerHTML = '00';
            console.log("Happy New Year!");
            DisplayBlock("clockdiv")
            startfireworks();
            setTimeout(function(){
              stopfireworks();
            }, 60000);
        }
    }, 10);
}, 1000);