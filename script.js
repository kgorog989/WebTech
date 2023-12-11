console.log("Script loaded successfully!");

function resetBorders() {
    $("#personLastName, #personFirstName, #personEmail, #personBirthday").css('border', '1px solid #ccc');
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

        if (personFirstName === "") {
            alert("Üres keresztnév mező!");
            $("#personFirstName").css('border', '2px solid #ff0000');
            return;
        }

        // ha üres az email, figyelmeztet, ha nem, akkor megnézi, helyes-e
        if (personEmail === "") {
            alert("Üres email mező!");
            $("#personEmail").css('border', '2px solid #ff0000');
            return;
        }
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(personEmail)) {
            alert("Érvénytelen emailcím!");
            $("#personEmail").css('border', '2px solid #ff0000');
            return;
        }


        // ha üres a születésnap, figyelmeztet, ha nem, akkor ellenőrzi, betöltötte-e a 18-at a jelentkező
        if (personBirthday === "") {
            alert("Üres születési idő!");
            $("#personBirthday").css('border', '2px solid #ff0000');
            return;
        }
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
        // sikeres validálás esetén üzenet, új html elem létrehozása
        var successMessage = $(".wrapper").append('<p class="success-message">Sikeres validálás!</p>').find(".success-message").css("color", "green");
        console.log("Form is valid!");
    });
});
