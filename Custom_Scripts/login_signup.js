$(document).ready(function () {

    $('#signup-request').on('click', function () {
        var name = $("#sn-name").val();
        var email = $("#sn-email").val();
        var pwd = $("#sn-password").val();
        var i = 0;
        
        if (email.toString() == "" || pwd.toString() == "") {
            $('form').attr('action', '');
            if (email.toString() == "" )
                $("#email_para").text("Email is missing, please try again");
            if (pwd.toString() == "")
                $("#pwd_para").text("Password missing, please try again");            
        }
    });

   
    $("#order").on('click', function () {
        
        var mobile = $("#mobile").val();
        var card = $("#visa").val();
        var address = $("#address").val();

        if (mobile.length != 11 || card.length != 14 || address.length == 0) {
            if (document.URL.lastIndexOf("wrongdetails") == -1)
                var a = document.URL.replace("details", "wrongdetails");
            else
                a = document.URL;
            $('form').attr('action', a);
        }
    });

    $("#check-request").on('click', function () {
        
        var name = $("#sn-name").val();
        $.getJSON('/Login/checkUserName?Name=' + name, function (data) {            
            $("#signup_para").text(data);
        });
    });

    $("#src-request").on('click', function () {
        var type = $("#src-type").val();
        var cat = $("#src-cat").val();        
        $.getJSON('/Search/SearchByCatagoryAndName?Type=' + type + '&' + 'catagory=' + cat, function (data) {
            
            if (data.length == 0) {
                $("#list").append(
                    "<li>" +
                        "<h2>" + "No serach results found" + "</h2>" +
                     "</li>"
                );
            }
            else {
                $.each(data, function (id, item) {
                    $("#list").append(
                        "<li>" +
                            data[id].name
                        + "</li>"
                    );
                });
            }
        });
    });

    $("#src-request-price").on('click', function () {
        var min = $("#src-min").val();
        var max = $("#src-max").val();
        
        $.getJSON('/Search/SearchByPrice?min=' + min + '&' + 'max=' + max, function (data) {           
            if ( data.length == 0 ) {
                $("#list").append(
                    "<li>" +
                       "<h2>" + "No serach results found" + "</h2>" +
                     "</li>"
                );
            }
            else {
                $.each(data, function (id, item) {
                    $("#list").append(
                        "<li>" +
                            data[id].name
                        + "</li>"
                    );
                });
            }
           
        });
        
    });

});