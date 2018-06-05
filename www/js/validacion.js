var RegExpNum = /^[0-9]$/;
var RegExpTelefono = /^\d{9}$/;
var RegExpEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var RegExpLetras = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
var RegExpNvSeguridad=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
//*
//*
//Inicio vista recuperar
function vltxtCorreo_recuperar() {
    var caja = $("#email_recuperar");
    if (caja.val() == "" || caja.val() == null || caja.val().length == 0) {
        $("#email_recuperar").parent().children("p").css({
            "color": "red"
        });
        $("#email_recuperar").parent().children("p").text("campo vacio").show();
        return false;
    } else if (!RegExpEmail.test(caja.val())) {
        $("#email_recuperar").parent().children("p").css({
            "color": "red"
        });
        $("#email_recuperar").parent().children("p").text("Solo Correo").show();
        return false;

    } else {

        $("#email_recuperar").parent().children("p").css({
            "color": "green"
        });
        $("#email_recuperar").parent().children("p").text("campo valido").show();
        return true;
    }
}

//final vista recuperar
//*
//*
//*
//*
//Inicio vista validarUser
function vltxtCorreo_validarUser() {
    var caja = $("#email_VlUSer");
    if (caja.val() == "" || caja.val() == null || caja.val().length == 0) {
        $("#email_VlUSer").parent().children("p").css({
            "color": "red"
        });
        $("#email_VlUSer").parent().children("p").text("campo vacio").show();
        return false;
    } else if (!RegExpEmail.test(caja.val())) {
        $("#email_VlUSer").parent().children("p").css({
            "color": "red"
        });
        $("#email_VlUSer").parent().children("p").text("Solo Correo").show();
        return false;

    } else {

        $("#email_VlUSer").parent().children("p").css({
            "color": "green"
        });
        $("#email_VlUSer").parent().children("p").text("campo valido").show();
        return true;
    }
}
function vltxtCodigo_validarUser() {
    var caja = $("#codigo_VlUSer");
    if (caja.val() == "" || caja.val() == null || caja.val().length == 0) {
        $("#codigo_VlUSer").parent().children("p").css({
            "color": "red"
        });
        $("#codigo_VlUSer").parent().children("p").text("Campo vacio").show();
        return false;
    // } else if (!RegExpNum.test(caja.val())) {
    //     $("#codigo_VlUSer").parent().children("p").css({
    //         "color": "red"
    //     });
        $("#codigo_VlUSer").parent().children("p").text("Solo Numeros").show();
        return false;

    } else {

        $("#codigo_VlUSer").parent().children("p").css({
            "color": "green"
        });
        $("#codigo_VlUSer").parent().children("p").text("Campo valido").show();
        return true;
    }
}
//final vista recuperar
//*
//*
function vltxtCorreo() {
    var caja = $("#emailR");
    if (caja.val() == "" || caja.val() == null || caja.val().length == 0) {
        $("#emailR").parent().children("p").css({
            "color": "red"
        });
        $("#emailR").parent().children("p").text("campo vacio").show();
        return false;
    } else if (!RegExpEmail.test(caja.val())) {
        $("#emailR").parent().children("p").css({
            "color": "red"
        });
        $("#emailR").parent().children("p").text("Solo Correo").show();
        return false;

    } else {

        $("#emailR").parent().children("p").css({
            "color": "green"
        });
        $("#emailR").parent().children("p").text("campo valido").show();
        return true;
    }
}

function vltxtCorreo_crear() {
    var caja = $("#emailI");
    if (caja.val() == "" || caja.val() == null || caja.val().length == 0) {
        $("#emailI").parent().children("p").css({
            "color": "red"
        });
        $("#emailI").parent().children("p").text("campo vacio").show();
        return false;
    } else if (!RegExpEmail.test(caja.val())) {
        $("#emailI").parent().children("p").css({
            "color": "red"
        });
        $("#emailI").parent().children("p").text("Solo Correo").show();
        return false;

    } else {

        $("#emailI").parent().children("p").css({
            "color": "green"
        });
        $("#emailI").parent().children("p").text("campo valido").show();
        return true;
    }
}

function vlNombre() {
    var caja = $("#nombreR");
    if (caja.val() == "" || caja.val() == null || caja.val().length == 0) {
        $("#nombreR").parent().children("p").css({
            "color": "red"
        });
        $("#nombreR").parent().children("p").text("campo vacio").show();
        return false;
    } else if (!RegExpLetras.test(caja.val())) {
        $("#nombreR").parent().children("p").css({
            "color": "red"
        });
        $("#nombreR").parent().children("p").text("Solo Letras").show();
        return false;

    } else {

        $("#nombreR").parent().children("p").css({
            "color": "green"
        });
        $("#nombreR").parent().children("p").text("campo valido").show();
        return true;
    }
}

function vlApellido() {
    var caja = $("#apellidoR");
    if (caja.val() == "" || caja.val() == null || caja.val().length == 0) {
        $("#apellidoR").parent().children("p").css({
            "color": "red"
        });
        $("#apellidoR").parent().children("p").text("campo vacio").show();
        return false;
    } else if (!RegExpLetras.test(caja.val())) {
        $("#apellidoR").parent().children("p").css({
            "color": "red"
        });
        $("#apellidoR").parent().children("p").text("Solo Letras").show();
        return false;

    } else {

        $("#apellidoR").parent().children("p").css({
            "color": "green"
        });
        $("#apellidoR").parent().children("p").text("campo valido").show();
        return true;
    }
}

function vlPass1() {
    var caja = $("#passwordR");
    if (caja.val() == "" || caja.val() == null || caja.val().length == 0) {
        $("#passwordR").parent().children("p").css({
            "color": "red"
        });
        $("#passwordR").parent().children("p").text("campo vacio").show();
        return false;
    } else {

        $("#passwordR").parent().children("p").css({
            "color": "green"
        });
        $("#passwordR").parent().children("p").text("campo valido").show();
        return true;
    }
}

function vlPass1_crear() {
    var caja = $("#passwordI");
    if (caja.val() == "" || caja.val() == null || caja.val().length == 0) {
        $("#passwordI").parent().children("p").css({
            "color": "red"
        });
        $("#passwordI").parent().children("p").text("campo vacio").show();
        return false;
    } else {

        $("#passwordI").parent().children("p").css({
            "color": "green"
        });
        $("#passwordI").parent().children("p").text("campo valido").show();
        return true;
    }
}

function vlPass2() {
    var caja = $("#passworda");
    var caja2 = $("#passwordR");
    if (caja.val() == "" || caja.val() == null || caja.val().length == 0) {
        $("#passworda").parent().children("p").css({
            "color": "red"
        });
        $("#passworda").parent().children("p").text("campo vacio").show();
        return false;
    } else if (!(caja.val() == caja2.val())) {
        $("#passworda").parent().children("p").css({
            "color": "red"
        });
        $("#passworda").parent().children("p").text("La contraseña no coiciden").show();
        return false;

    } else {

        $("#passworda").parent().children("p").css({
            "color": "green"
        });
        $("#passworda").parent().children("p").text("campo valido").show();
        return true;
    }
}
//Inicio de validaciones hijo
function vlNombre_hijo() {
    var caja = $("#nombrehijo1");
    if (caja.val() == "" || caja.val() == null || caja.val().length == 0) {
        $("#nombrehijo1").parent().children("p").css({
            "color": "red"
        });
        $("#nombrehijo1").parent().children("p").text("campo vacio").show();
        return false;
    } else if (!RegExpLetras.test(caja.val())) {
        $("#nombrehijo1").parent().children("p").css({
            "color": "red"
        });
        $("#nombrehijo1").parent().children("p").text("Solo Letras").show();
        return false;

    } else {

        $("#nombrehijo1").parent().children("p").css({
            "color": "green"
        });
        $("#nombrehijo1").parent().children("p").text("campo valido").show();
        return true;
    }
}

function vlApellido_hijo() {
    var caja = $("#apellidohijo2");
    if (caja.val() == "" || caja.val() == null || caja.val().length == 0) {
        $("#apellidohijo2").parent().children("p").css({
            "color": "red"
        });
        $("#apellidohijo2").parent().children("p").text("campo vacio").show();
        return false;
    } else if (!RegExpLetras.test(caja.val())) {
        $("#apellidohijo2").parent().children("p").css({
            "color": "red"
        });
        $("#apellidohijo2").parent().children("p").text("Solo Letras").show();
        return false;

    } else {

        $("#apellidohijo2").parent().children("p").css({
            "color": "green"
        });
        $("#apellidohijo2").parent().children("p").text("campo valido").show();
        return true;
    }
}

function vlFecha_hijo() {
    var caja = $("#fechahijo");

    var edad = calcularEdad(caja.val());

    if (caja.val() == "" || caja.val() == null || caja.val().length == 0) {
        $("#fechahijo").parent().children("p").css({
            "color": "red"
        });
        $("#fechahijo").parent().children("p").text("campo vacio").show();
        return false;
    } else if (edad > 18 && edad < 2) {
        $("#fechahijo").parent().children("p").css({
            "color": "red"
        });
        $("#fechahijo").parent().children("p").text("el rango de edad para registrar a tu hijo es de 2 a 18").show();
        return false;

    } else {

        $("#fechahijo").parent().children("p").css({
            "color": "green"
        });
        $("#fechahijo").parent().children("p").text("campo valido").show();
        return true;
    }
}

function vlCiudad_hijo() {
    var caja = $("#ciudadhijo2");
    if (caja.val() == "" || caja.val() == null || caja.val().length == 0) {
        $("#ciudadhijo2").parent().children("p").css({
            "color": "red"
        });
        $("#ciudadhijo2").parent().children("p").text("campo vacio").show();
        return false;
    } else if (!RegExpLetras.test(caja.val())) {
        $("#ciudadhijo2").parent().children("p").css({
            "color": "red"
        });
        $("#ciudadhijo2").parent().children("p").text("Solo Letras").show();
        return false;

    } else {

        $("#ciudadhijo2").parent().children("p").css({
            "color": "green"
        });
        $("#ciudadhijo2").parent().children("p").text("campo valido").show();
        return true;
    }
}

function vlSexo_hijo() {
    var caja = $("#sexohijo");
    if (caja.val() == "" || caja.val() == null || caja.val().length == 0) {
        $("#sexohijo").parent().children("p").css({
            "color": "red"
        });
        $("#sexohijo").parent().children("p").text("*").show();
        return false;
    } else {

        $("#sexohijo").parent().children("p").css({
            "color": "green"
        });
        $("#sexohijo").parent().children("p").text("*").show();
        return true;
    }
}

function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}
//Fin de validaciones hijo

//Inicio de validaciones account
function vlNombre_account() {
    var caja = $("#nombreperfilpadre");
    if (caja.val() == "" || caja.val() == null || caja.val().length == 0) {
        $("#nombreperfilpadre").parent().children("p").css({
            "color": "red"
        });
        $("#nombreperfilpadre").parent().children("p").text("campo vacio").show();
        return false;
    } else if (!RegExpLetras.test(caja.val())) {
        $("#nombreperfilpadre").parent().children("p").css({
            "color": "red"
        });
        $("#nombreperfilpadre").parent().children("p").text("Solo Letras").show();
        return false;

    } else {

        $("#nombreperfilpadre").parent().children("p").css({
            "color": "green"
        });
        $("#nombreperfilpadre").parent().children("p").text("campo valido").show();
        return true;
    }
}

function vlApellido_account() {
    var caja = $("#apellidoperfilpadre");
    if (caja.val() == "" || caja.val() == null || caja.val().length == 0) {
        $("#apellidoperfilpadre").parent().children("p").css({
            "color": "red"
        });
        $("#apellidoperfilpadre").parent().children("p").text("campo vacio").show();
        return false;
    } else if (!RegExpLetras.test(caja.val())) {
        $("#apellidoperfilpadre").parent().children("p").css({
            "color": "red"
        });
        $("#apellidoperfilpadre").parent().children("p").text("Solo Letras").show();
        return false;

    } else {

        $("#apellidoperfilpadre").parent().children("p").css({
            "color": "green"
        });
        $("#apellidoperfilpadre").parent().children("p").text("campo valido").show();
        return true;
    }
}


//Fin de validaciones hijo
//
//Inicio validaciones de la vista account
function vlNombre_account() {
    var caja = $("#nombreperfilpadre");
    console.log(caja.val());
    if (caja.val() == "" || caja.val() == null || caja.val().length == 0) {
        $("#nombreperfilpadre").parent().children("p").css({
            "color": "red"
        });
        $("#nombreperfilpadre").parent().children("p").text("campo vacio").show();
        return false;
    } else if (!RegExpLetras.test(caja.val())) {
        $("#nombreperfilpadre").parent().children("p").css({
            "color": "red"
        });
        $("#nombreperfilpadre").parent().children("p").text("Solo Letras").show();
        return false;

    } else {

        $("#nombreperfilpadre").parent().children("p").css({
            "color": "green"
        });
        $("#nombreperfilpadre").parent().children("p").text("campo valido").show();
        return true;
    }
}

function vlApellido_account() {
    var caja = $("#apellidoperfilpadre");
    if (caja.val() == "" || caja.val() == null || caja.val().length == 0) {
        $("#apellidoperfilpadre").parent().children("p").css({
            "color": "red"
        });
        $("#apellidoperfilpadre").parent().children("p").text("campo vacio").show();
        return false;
    } else if (!RegExpLetras.test(caja.val())) {
        $("#apellidoperfilpadre").parent().children("p").css({
            "color": "red"
        });
        $("#apellidoperfilpadre").parent().children("p").text("Solo Letras").show();
        return false;

    } else {

        $("#apellidoperfilpadre").parent().children("p").css({
            "color": "green"
        });
        $("#apellidoperfilpadre").parent().children("p").text("campo valido").show();
        return true;
    }
}
//Fin validaciones de la vista account
//
//
//Inicio validaciones de la vista perfilespecialista
function vlNombre_perfilespecialista() {
    var caja = $("#nombreperfilpadre");
    if (caja.val() == "" || caja.val() == nulvlApellido_accountl || caja.val().length == 0) {
        $("#nombreperfilpadre").parent().children("p").css({
            "color": "red"
        });
        $("#nombreperfilpadre").parent().children("p").text("campo vacio").show();
        return false;
    } else if (!RegExpLetras.test(caja.val())) {
        $("#nombreperfilpadre").parent().children("p").css({
            "color": "red"
        });
        $("#nombreperfilpadre").parent().children("p").text("Solo Letras").show();
        return false;

    } else {

        $("#nombreperfilpadre").parent().children("p").css({
            "color": "green"
        });
        $("#nombreperfilpadre").parent().children("p").text("campo valido").show();
        return true;
    }
}

function vlApellido_perfilespecialista() {
    var caja = $("#apellidoperfilpadre");
    if (caja.val() == "" || caja.val() == null || caja.val().length == 0) {
        $("#apellidoperfilpadre").parent().children("p").css({
            "color": "red"
        });
        $("#apellidoperfilpadre").parent().children("p").text("campo vacio").show();
        return false;
    } else if (!RegExpLetras.test(caja.val())) {
        $("#apellidoperfilpadre").parent().children("p").css({
            "color": "red"
        });
        $("#apellidoperfilpadre").parent().children("p").text("Solo Letras").show();
        return false;

    } else {

        $("#apellidoperfilpadre").parent().children("p").css({
            "color": "green"
        });
        $("#apellidoperfilpadre").parent().children("p").text("campo valido").show();
        return true;
    }
}

function vlProfesion_perfilespecialista() {
    var caja = $("#profesionespecialista");
    if (caja.val() == "" || caja.val() == null || caja.val().length == 0) {
        $("#profesionespecialista").parent().children("p").css({
            "color": "red"
        });
        $("#profesionespecialista").parent().children("p").text("campo vacio").show();
        return false;
    } else if (!RegExpLetras.test(caja.val())) {
        $("#profesionespecialista").parent().children("p").css({
            "color": "red"
        });
        $("#profesionespecialista").parent().children("p").text("Solo Letras").show();
        return false;

    } else {

        $("#profesionespecialista").parent().children("p").css({
            "color": "green"
        });
        $("#profesionespecialista").parent().children("p").text("campo valido").show();
        return true;
    }
}

function vlexperiencia_perfilespecialista() {
    var caja = $("#experienciaespecialista");
    if (caja.val() == "" || caja.val() == null || caja.val().length == 0) {
        $("#experienciaespecialista").parent().children("p").css({
            "color": "red"
        });
        $("#experienciaespecialista").parent().children("p").text("campo vacio").show();
        return false;
    } else if (!RegExpNum.test(caja.val())) {
        $("#experienciaespecialista").parent().children("p").css({
            "color": "red"
        });
        $("#experienciaespecialista").parent().children("p").text("Solo Numeros").show();
        return false;

    } else {

        $("#experienciaespecialista").parent().children("p").css({
            "color": "green"
        });
        $("#experienciaespecialista").parent().children("p").text("campo valido").show();
        return true;
    }
}

function vldescrip_perfilespecialistat() {
    var caja = $("#idat");
    if (caja.val() == "" || caja.val() == null || caja.val().length == 0) {
        $("#idat").parent().children("p").css({
            "color": "red"
        });
        $("#idat").parent().children("p").text("campo vacio").show();
        return false;
    } else if (!RegExpLetras.test(caja.val())) {
        $("#idat").parent().children("p").css({
            "color": "red"
        });
        $("#idat").parent().children("p").text("Solo Letras").show();
        return false;

    } else {

        $("#idat").parent().children("p").css({
            "color": "green"
        });
        $("#idat").parent().children("p").text("campo valido").show();
        return true;
    }
}

//Fin validaciones de la vista perfilespecialista
//inicio validaciones de la vista control
function vlestatura_control() {
    var caja = $("#estaturahijo");
    if (caja.val() == "" || caja.val() == null || caja.val().length == 0) {
        $("#estaturahijo").parent().children("p").css({
            "color": "red"
        });
        $("#estaturahijo").parent().children("p").text("campo vacio").show();
        return false;
    } else if (!RegExpNum.test(caja.val())) {
        $("#estaturahijo").parent().children("p").css({
            "color": "red"
        });
        $("#estaturahijo").parent().children("p").text("Solo Letras").show();
        return false;

    } else {

        $("#estaturahijo").parent().children("p").css({
            "color": "green"
        });
        $("#estaturahijo").parent().children("p").text("campo valido").show();
        return true;
    }
}
function vlestatura_control() {
    var caja = $("#pesokghijo");
    if (caja.val() == "" || caja.val() == null || caja.val().length == 0) {
        $("#pesokghijo").parent().children("p").css({
            "color": "red"
        });
        $("#pesokghijo").parent().children("p").text("campo vacio").show();
        return false;
    } else if (!RegExpNum.test(caja.val())) {
        $("#pesokghijo").parent().children("p").css({
            "color": "red"
        });
        $("#pesokghijo").parent().children("p").text("Solo Letras").show();
        return false;

    } else {

        $("#pesokghijo").parent().children("p").css({
            "color": "green"
        });
        $("#pesokghijo").parent().children("p").text("campo valido").show();
        return true;
    }
}
//Fin validaciones de la vista control
//inicio validaciones de la vista crearnoticia
function vlestatura_crearnoticia() {
    var caja = $("#descrip_crnoticia");
    if (caja.val() == "" || caja.val() == null || caja.val().length == 0) {
        $("#descrip_crnoticia").parent().children("p").css({
            "color": "red"
        });
        $("#descrip_crnoticia").parent().children("p").text("campo vacio").show();
        return false;
    } else if (!RegExpLetras.test(caja.val())) {
        $("#descrip_crnoticia").parent().children("p").css({
            "color": "red"
        });
        $("#descrip_crnoticia").parent().children("p").text("Solo Letras").show();
        return false;

    } else {

        $("#descrip_crnoticia").parent().children("p").css({
            "color": "green"
        });
        $("#descrip_crnoticia").parent().children("p").text("campo valido").show();
        return true;
    }
}

//Fin validaciones de la vista crearnoticia
// 