console.log("Script loaded successfully!");

function resetBorders() {
    $("#personLastName, #personFirstName, #personEmail, #personBirthday, #termsCheckbox").css('border', '1px solid #ccc');
}

$(document).ready(function () {
    $("#validate").click(function () {
        resetBorders();

        var personLastName = $("#personLastName").val();
        var personFirstName = $("#personFirstName").val();
        var personEmail = $("#personEmail").val();
        var personBirthday = $("#personBirthday").val();
        var introduction = $("#introduction").val();
        var selectedKlub = $("input[name='klubApply']:checked").val();

        if (personLastName === "") {
            alert("Üres vezetéknév mező!");
            $("#personLastName").css('border', '2px solid #ff0000');
            return;
        }

        // Similar adjustments for other fields

        if (personBirthday === "") {
            alert("Üres születési idő!");
            $("#personBirthday").css('border', '2px solid #ff0000');
            return;
        }

        // Now, perform other checks related to age
        var birthDate = new Date(personBirthday);
        var currentDate = new Date();
        var age = currentDate.getFullYear() - birthDate.getFullYear();

        if (age < 18) {
            alert("Csak 18 éven felüliek jelentkezhetnek!");
            $("#personBirthday").css('border', '2px solid #ff0000');
            return;
        }

        if (!selectedKlub) {
            alert("Válassza ki a klubbot, amibe jelentkezni szeretne!");
            return;
        }

        if (!$("#termsCheckbox").prop("checked")) {
            alert("Az adatkezelő elfogadása kötelező!");
            return;
        }

        console.log("Form is valid!");
    });
});
