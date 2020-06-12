$(function(){
    var img;
    $("#cldimg").hide();
    $(".ic_img").hide();
    $("#makecldbut").click(function(){
        var textarea = document.getElementById('textcloud').value;
        txt2base64(textarea);    
    });


    function txt2base64(n){
        eel.str2base64(n)(setImage);
    }

    function setImage(base64) {
        document.getElementById("cldimg").src = base64;
        img = base64;
        $("#cldimg").show();
        $(".ic_img").show();
    }

    $("#downloadbut").click(function(){
        var a = document.createElement("a"); //Create <a>
        a.href = "data:image/png;base64," + img; //Image Base64 Goes here
        console.log(img);
        a.download = "Image.png"; //File name Here
        a.click(); //Downloaded file
    });
});