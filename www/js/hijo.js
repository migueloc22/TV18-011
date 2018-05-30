datoshijo();

function datoshijo() {
  var fecha = new Date();
  var resul = 0;
  var cantidadmeses = 0;
  var genero = "";
  var meshoy = parseInt(fecha.getMonth() + 1);
  var aniohoy = parseInt(fecha.getFullYear());
  var diahoy = parseInt(fecha.getDate());
  var id = localStorage.getItem("idhijos");
  $.ajax({
      url: 'http://192.168.1.20/www/programar/controlador/Clogin.php',
      type: 'POST',
      data: {
        action: 'ConsultaAvatart',
        id: "'" + id + "'"
      },
    })
    .done(function (data) {
      var datos = JSON.parse(data);
      $.each(datos, function (fila, valor) {

        genero = valor.sexo;

        var array_fechasol = valor.fecha_nacimiento.split("-");
        var dia = parseInt(array_fechasol[2]);
        var mes = parseInt(array_fechasol[1]);
        var anio = parseInt(array_fechasol[0]);
        var edad = (parseInt(anio) - aniohoy) + 1;
        var edadpositivo = Math.abs(edad);
        var fechahoy = dia + "-" + meshoy;
        var fechanacimiento = dia + "-" + mes;

        if (fechahoy == fechanacimiento || meshoy == mes) {
          resul = edadpositivo + 1;
        } else {
          resul = edadpositivo;

        }
      });

      cantidadmeses = (resul * 12) + meshoy;
      meses(cantidadmeses, genero);

    });
}


actividad();

function actividad() {
  var acty = "";
  $.ajax({
      url: 'http://192.168.1.20/www/programar/controlador/Clogin.php',
      type: 'POST',
      data: {
        action: 'actividad'
      }
    })
    .done(function (data) {
      var datos = JSON.parse(data);
      acty += "<select id='ejerciciohijooption'>";
      acty += "<option></option>";
      $.each(datos, function (fila, valor) {
        acty += "<option>" + valor.n_actividad + "</option>";



      });
      acty += "</select>";
      $("#ejerciciohijo").html(acty);

    });

}






var mesesvida = 0;
var sexo = "";

function meses(meses, genero) {
  mesesvida = meses;
  sexo = genero;
}


/*
var cm = $("#estaturahijo").val();
var peso = $("#pesokghijo").val();
*/
$("#calculoimc").on('click', function () {

  var peso = $("#pesokghijo").val();
  var talla = $("#estaturahijo").val();



  if (mesesvida == 0) {
    meses = 0;
  }
  if (mesesvida >= 24 && mesesvida <= 216) {
    d3.csv("http://192.168.1.20/pesoedad/validaciontabla.csv", function (tabla) {
      for (var i = 0; i < tabla.length; i++) {
        if (mesesvida >= tabla[i].mayor && mesesvida <= tabla[i].menor && tabla[i].genero == sexo) {
          grafica = tabla[i].categoria;
        }

      }
      calcularzscore(peso, mesesvida, talla, sexo, grafica);
    });



  } else {
    $("#mensaje").text("debe ser mayor de 2 años y menor de 18");

  }

});




function calcularzscore(peso, edad, estatura,
  genero, grafica) {


  var paraimc = 0;
  var paraedad = 0;
  var carita = "";
  var feliz = "https://icon-icons.com/icons2/860/PNG/512/happy_icon-icons.com_67810.png";
  var Triste = "https://i.pinimg.com/736x/c3/88/11/c38811fd35dd552cbf457b54b5fb85f4.jpg";

  var estados = "";
  ///calculo imc
  var cuadrado = Math.pow(estatura, 2);
  var imc = (peso / cuadrado);
  var calculo = (imc * 10000);
  var caculado_imc = calculo.toFixed(1);
  //fin del calculo


  edadmes = edad;

  paraedad = edadmes;
  d3.csv(grafica, function (data) {

    var Delgadezsevera = 0;
    var Delgadezmoderada = 0;
    var Delgadezleve = 0;
    var normal = 0;
    var Obesidadleve = 0;
    var Obesidadmedia = 0;
    var Obesidadmorbida = 0;
    var arrelo = [];



    for (var i = 0; i < data.length; i++) {

      //data[i].imc >= parseInt(caculado_imc)
      if (data[i].year == edadmes) {
        arrelo[0] = data[i].imc;
        switch (data[i].Estado) {
          case "Delgadez severa":
            Delgadezsevera = data[i].imc;
            break;
          case "Delgadez moderada":
            Delgadezmoderada = data[i].imc;
            break;
          case "Delgadez leve":
            Delgadezleve = data[i].imc;
            break;
          case "normal":
            normal = data[i].imc;
            break;
          case "Obesidad leve":
            Obesidadleve = data[i].imc;
            break;
          case "Obesidad media":
            Obesidadmedia = data[i].imc;
            break;
          case "Obesidad mórbida":
            Obesidadmorbida = data[i].imc;
            break;
        }
      }
    }

    if (parseFloat(caculado_imc) <= parseFloat(normal) && parseFloat(caculado_imc) > parseFloat(Delgadezleve)) {
      paraimc = caculado_imc;
      estados = "peso normal";

    }


    if (parseFloat(caculado_imc) <= parseFloat(Delgadezleve) && parseFloat(caculado_imc) >= parseFloat(Delgadezmoderada)) {
      paraimc = caculado_imc;

      estados = "delgadez leve";
    }

    if (parseFloat(caculado_imc) <= parseFloat(Delgadezmoderada) && parseFloat(caculado_imc) >= parseFloat(Delgadezsevera)) {
      paraimc = caculado_imc;
      estados = "Delgadez moderada";
    }

    if (parseFloat(caculado_imc) <= parseFloat(Obesidadleve) && parseFloat(caculado_imc) >= parseFloat(normal)) {
      paraimc = caculado_imc;

      estados = "Obesidad leve";
    }

    if (parseFloat(caculado_imc) <= parseFloat(Obesidadmedia) && parseFloat(caculado_imc) > parseFloat(Obesidadleve)) {
      paraimc = caculado_imc;

      estados = "Obesidad media";

    }

    if (parseFloat(caculado_imc) >= parseFloat(Obesidadmedia)) {
      paraimc = caculado_imc;

      estados = "Obesidad morbida";
    }
    if (parseFloat(caculado_imc) <= parseFloat(Delgadezmoderada)) {
      paraimc = caculado_imc;
      estados = "Delgadez severa";
    }
    var numerestado = 0;
    var numeroactividad = 0;
    var actividadboys = $("#ejerciciohijooption").val();
    var calorias = 0;


    d3.csv("http://192.168.1.20/pesoedad/actividadmetodo.csv", function (actividad) {
      for (var i = 0; i < actividad.length; i++) {
        if (genero == actividad[i].genero && actividad[i].actividad == actividadboys) {
          var numero = actividad[i].dato;
          calculotmb(numero);
        }
      }
    });


    function calculotmb(acty) {

      d3.csv("http://192.168.1.20/pesoedad/tmb.csv", function (datosecuacion) {
        var ecuacion = 0;
        var resultado = 0; ///
        for (var i = 0; i < datosecuacion.length; i++) {

          if (genero == datosecuacion[i].genero && datosecuacion[i].meses >= edadmes && datosecuacion[i].categoria == "cerotres") {
            ecuacion = (parseFloat(datosecuacion[i].tmb) * parseFloat(peso)) - parseFloat(datosecuacion[i].ecu);
            resultado = ecuacion * acty;
          }
          if (genero == datosecuacion[i].genero && datosecuacion[i].meses >= edadmes && edadmes > 47 && datosecuacion[i].categoria == "tresdiez") {
            ecuacion = (parseFloat(datosecuacion[i].tmb) * parseFloat(peso)) + parseFloat(datosecuacion[i].ecu);
            resultado = ecuacion * acty;
          }
          if (genero == datosecuacion[i].genero && datosecuacion[i].meses >= edadmes && edadmes > 131 && datosecuacion[i].categoria == "diezdieciocho") {
            ecuacion = (parseFloat(datosecuacion[i].tmb) * parseFloat(peso)) + parseFloat(datosecuacion[i].ecu);
            resultado = ecuacion * acty;
          }

        }
        var datcalorias = resultado.toFixed(1);
        datoscalorias(datcalorias);

      });

    }



    switch (actividadboys) {
      case "sedentario":
        numeroactividad = 1;
        break;
      case "liviana":
        numeroactividad = 2;
        break;
      case "moderada":
        numeroactividad = 3;
        break;
      case "intensa":
        numeroactividad = 4;
        break;
    }


    switch (estados) {
      case "Delgadez severa":
        numerestado = 7;
        break;

      case "Obesidad morbida":
        numerestado = 8;
        break;

      case "Obesidad media":
        numerestado = 9;
        break;
      case "delgadez leve":
        numerestado = 3;
        break;
      case "Delgadez moderada":
        numerestado = 5;
        break;
      case "Obesidad leve":
        numerestado = 6;
        break;
      case "peso normal":
        numerestado = 4;
        break;
    }


    var txt;
    var id = localStorage.getItem("idhijos");

    function datoscalorias(k) {

      if (confirm("El estado de salud es: " + estados + " si esta seguro de peso " + peso + "kg y la" + " talla " + estatura + " cm son correctos clic en aceptar")) {
        $.ajax({
          url: 'http://192.168.1.20/www/programar/controlador/Clogin.php',
          data: {
            action: 'CrearDtosResult',
            imc: "'" + caculado_imc + "'",
            numhijo: "'" + id + "'",
            estatura: "'" + estatura + "'",
            peso: "'" + peso + "'",
            estado: "'" + numerestado + "'",
            actividad: "'" + numeroactividad + "'",
            tmb: "'" + k + "'"
          },
          type: 'POST',
        }).done(function (data) {
          //alert(data);
          graficarimc();

        });
        perfilhijo();

        window.location.href = "#/tab/chat-detail";
      } else {
        return false;
      }


    }


  });



}