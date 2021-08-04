$('document').ready(function(){ // metoda zabezpieczająca pełne załadowanie pliku

    $('form input[type="submit"').on('click', function(e) { // zapięcię się na klik submita
        var isValid = true;
        var $password = $('#password');
        var $password2 = $('#password2');
        var $username = null; // TODO: add validation
        var $email = null; // TODO: add validation
        var $age = null; // TODO: add validation

         var $passwordError = $('#password_error');

        if ($password.val() != $password2.val()) { // sprawdzenie poprawności haseł
            isValid = false;
            $passwordError.html("Błąd hasła - powinny być identyczne");
        } else if ($password.val() == "" || $password2.val() == "") {
            isValid = false;
            $passwordError.html("Błąd hasła - powinny być wypełnione");
        } else {
            $passwordError.html("");
        }

        if (!isValid) {
            e.preventDefault();
        }
    });

    $('#username').change(function() { // walidacja real-time - na zmianę wartości pola z usernamem (dodanie/usunięcie czerwonej ramki)
        var $this = $(this);
        var value = $this.val();
        if (value == "") {
            $this.addClass('error_input');
        } else {
            $this.removeClass('error_input');
        }
    });
});