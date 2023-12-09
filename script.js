console.log("Script loaded successfully!");

$(document).ready(function () {
    
    $("#validate").click(function () {
        var personLastName=$("#personLastName").val();
        var personFirstName=$("#personFirstName").val();
        var personEmail=$("#personEmail").val();
        var personBirthday=$("#personBirthday").val();
        var personColor=$("#personColor").val();
        var introduction=$("#introduction").val();
        $("#personLastName").css('border','1px solid #ccc');
        $("#personFirstName").css('border','1px solid #ccc');
        $("#personAge").css('border','1px solid #ccc');
        if(personLastName==""){
            alert("Üres vezetéknév mező!");
            $("#personLastName").css('border','2px solid #ff0000');
            return;
        }
        if(personFirstName==""){
            alert("Üres keresztnév mező!");
            $("#personFirstName").css('border','2px solid #ff0000');
            return;
        }
       
    });
   
});