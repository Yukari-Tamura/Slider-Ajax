

    $('#next').click(function() {
        $("#section1").removeClass("activeTitle");
        $("#section1").addClass("title");
        $("#circle1").css({"background-color":"rgb(236, 98, 126)"});
        $("#circle2").css({"background-color":"red"});
        $("#section2").removeClass("title");
        $("#section2").addClass("activeTitle");
        $('#content').stop(true);
        $.ajax({
            url: "seccionB.html",
            success : function(data1){
                $("#content").html(data1);
            }
        })
    })


    $("#prev").click(function() {
        $("#content").stop(true);
        $("#section2").removeClass("activeTitle");
        $("#section2").addClass("title");
        $("#circle2").css({"background-color":"rgb(236, 98, 126)"});
        $("#circle1").css({"background-color":"red"});
        $("#section1").removeClass("title");
        $("#section1").addClass("activeTitle");
        $.ajax({
            url: "seccionA.html",
            success: function(data){
                $("#content").html(data);
            }
        })
    })


    $('#next1').click(function() {
        $("#section2").removeClass("activeTitle");
        $("#section2").addClass("title");
        $("#circle2").css({"background-color":"rgb(236, 98, 126)"});
        $("#circle3").css({"background-color":"red"});
        $("#section3").removeClass("title");
        $("#section3").addClass("activeTitle");
        console.log("click");
        $('#content').stop(true);
        $.ajax({
            url: "seccionC.html",
            success : function(data1){
                $("#content").html(data1);
                
            }
        })
    })


    $("#prev1").click(function() {
        $("#content").stop(true);
        $("#section3").removeClass("activeTitle");
        $("#section3").addClass("title");
        $("#circle3").css({"background-color":"rgb(236, 98, 126)"});
        $("#circle2").css({"background-color":"red"});
        $("#section2").removeClass("title");
        $("#section2").addClass("activeTitle");
        $.ajax({
            url: "seccionB.html",
            success: function(data){
                $("#content").html(data);
            }
        })
    })
   