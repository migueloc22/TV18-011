//var socket=io.connect('http://190.67.248.85:8080', { 'forceNew': true });
var ipServe = "http://10.73.52.183/GitHub/TV18-011/";
var ruta = "www/programar/controlador/Clogin.php";
var urlServe = ipServe + ruta;
noticias();
var nrws = "";

function noticias() {
  var id_User = vlIdUser();
  $.ajax({
      url: urlServe,
      type: 'POST',
      data: {
        action: 'noticias',
        id_User:id_User

      }
    })
    .done(function (data) {
      console.log(data);
      var datos = JSON.parse(data);
      $.each(datos, function (fila, valor) {


        nrws += "<div class='item item-avatar'>" +
          "<img src=" + valor.foto + ">" +
          "<h2>" + valor.nombre + " " + valor.profesion + "</h2>" +
          "<p>" + valor.fecha_blog + "</p>" +
          "</div>" +
          "<div class='item item-body'>" +
          "<img class='full-image' src=" + valor.imagen_blog + ">" +
          "<p>" + valor.descripcion_blog + "</p>" +
          "<p>" +
          "<a href='#'' class='subdued'>1 Like</a>" +
          "</p>" +
          "</div>";


      });
      $("#news").html(nrws);
    });


}


$("#updateregistro").on('click', function () {
  var nombreperfilpadre = $("#nombreperfilpadre").val();
  var apellidoperfilpadre = $("#apellidoperfilpadre").val();
  var id_User = vlIdUser();
  vlApellido_account();
  vlNombre_account();
  if (vlApellido_account() && vlNombre_account()) {
    $.ajax({
      url: urlServe,
      data: {
        action: 'updateregistro',
        nombre: "'" + nombreperfilpadre + "'",
        apellido: "'" + apellidoperfilpadre + "'",
        id_User: id_User
      },
      type: 'POST',
    }).done(function (data) {
      console.log(data);
      alert("perfil actualizado");
      datousuario();
    });
  }

});
chatuser();
var chatuser = "";

function chatuser() {
  var id_User = vlIdUser();
  $.ajax({
      url: urlServe,
      type: 'POST',
      data: {
        action: 'chatusuarios',
        id_User:id_User
      }
    })
    .done(function (data) {
      console.log(data);
      var datos = JSON.parse(data);
      $.each(datos, function (fila, valor) {


        switch (valor.idrol) {
          case '2':
            chatuser += "<a class='item item-avatar' href='templates/tab-chatear.html'  onclick=iduserchat(" + valor.Id_usuario + ")>" +
              "<img src='../../img/adam.jpg'>" +
              "<h2>" + valor.nombre + "</h2></a>";
            break;
          case '3':
            chatuser += "<a class='item item-avatar' href='templates/tab-chatear.html'  onclick=iduserchat(" + valor.Id_usuario + ")>" +
              "<img src='../../img/adam.jpg'>" +
              "<h2>" + valor.nombre + " " + valor.apellido + " </h2>" +
              "<p>profesion: " + valor.profesion + "</p>" +
              "<p>experiencia: " + valor.experiencia + " años</p></a>";

            break;
        }
      });
      $("#users_list").html(chatuser);
    });


}

var edad = "";
var sexo = "";
var numhijo = 0;
var idhijos = 0;

function iduserchat(a) {
  var id_User = vlIdUser();
  $.ajax({
    url: urlServe,
    data: {
      action: 'sessionchat',
      iduser: "'" + a + "'",
      id_User:id_User
    },
    type: 'POST',
  }).done(function (data) {
    console.log(data);

  });

}
consultas();
var present = "";
var avataresnuevos = "";

function consultas() {
  
  var nombre=vlNombreUser();
  var id_User = vlIdUser();
  $.ajax({
      url: urlServe,
      type: 'POST',
      data: {
        action: 'sessionavatar',
        nombre:nombre,
        id_User:id_User
      }
    })
    .done(function (data) {
      console.log(data);
      var datos = JSON.parse(data);
      $.each(datos.presentavatar, function (fila, valor) {
        present += "<a  href='#'  class='item item-thumbnail-left'>" +
          "<img src=" + valor.avatares + ">" +
          "<p>empieza</p>" +
          " <p>el control de tu hijo</p>" +
          " <p>con especialistas en nutricion en linea</p></a>";
      });
      $("#presentacion").html(present);
    });


}
datousuario();

function datousuario() {
  var id_User = vlIdUser();
  var imguser = document.getElementById('smallImage');

  $.ajax({
      url: urlServe,
      type: 'POST',
      data: {
        action: 'sessionUsuario',
        id_User:id_User
      }
    })
    .done(function (data) {
      console.log(data);
      var datos = JSON.parse(data);

      $.each(datos, function (fila, valor) {
        imguser.src = valor.foto;
        $("#nombreperfilpadre").val(valor.nombre);
        $("#apellidoperfilpadre").val(valor.apellido);
      });
    });
}
var id_avatar = 0;
var presentacion2 = "";

function myfunction(e) {

  var nombre=vlNombreUser();
  var id_User = vlIdUser();
  var valornum = 0;
  if (e == "primr7") {
    idhijos = 0;
    valornum = e.substr(5, 6);
    $("#botonera").hide();
  }
  // $("#presentacion2").hide(100);

  $.ajax({
      url: urlServe,
      type: 'POST',
      data: {
        action: 'sessionavatar',
              nombre:nombre,
              id_User:id_User
      }
    })
    .done(function (data) {
      console.log(data);
      var datos = JSON.parse(data);
      $.each(datos.avatarnueno, function (fila, valor) {
        if (e == valor.idavatar || valornum == valor.idavatar) {
          id_avatar = valor.idavatar;
          presentacion2 = "<img class='img-circle-niños22' src=" + valor.avatares + " />";
          ///  $("#presentacion2").show(500);
        }


      });
      $("#presentacion2").html(presentacion2);
      $("#presentacion3").html(presentacion2);
      $("#presentacion4").html(presentacion2);


    });
}

hijouser();

function hijoinsert(nombre, apellido, sexo, fecha, ciudad) {
  var id_User = vlIdUser();
  $.ajax({
    url: urlServe,
    data: {
      action: 'CrearsessionHijo',
      nombre: "'" + nombre + "'",
      apellido: "'" + apellido + "'",
      sexo: "'" + sexo + "'",
      fecha: "'" + fecha + "'",
      id_avatar: "'" + id_avatar + "'",
      ciudad: "'" + ciudad + "'",
      idhijos: "'" + idhijos + "'",
      id_User:id_User
    },
    type: 'POST',
  }).done(function (data) {
    console.log(data);
    alert("datos actualizados");
    perfilhijo();
    hijouser();
    //sapo
  });
}



function hijouser() {
  var imghijos = "";
  var nombrehijo = "";
  var datoshijo = "";
  var id_User = vlIdUser();
  $.ajax({
      url: urlServe,
      type: 'POST',
      data: {
        action: 'sessionHijo',
        id_User:id_User
      }
    })
    .done(function (data) {
      console.log(data);
      var datos = JSON.parse(data);

      //$("#presentacion").html(present);
      $.each(datos, function (fila, valor) {
        if (datos.length == 3) {
          $("#ocultar").hide();
        }
        numhijo = valor.id_hijo;
        datoshijo += "<a href='#/tab/chats/' onclick=idcontroles(" + valor.id_hijo + ") class='item item-thumbnail-left'>" +
          "<img src=" + valor.avatares + ">" +
          "<p>" + valor.nombrehijo + "</p>" +
          "</a>";
        imghijos += "<a  href='#/tab/chat-detail'  class='item item-thumbnail-left' onclick=idhijo(" + valor.id_hijo + ")>" +
          "<img src=" + valor.avatares + ">" +
          "<h2>" + valor.nombrehijo + " " + valor.apellidohijo + "</h2>" +
          "<p>Controles Realizados:En desarrollo</p>" +
          "<p>mensajes y sugerencias:En desarrollo</p></a>";



      });


      $("#imghijos").html(imghijos);
      $("#nombrehijo").html(nombrehijo);
      //  $("#listHijo").html(datoshijo);  
      // $("#texto").text(datoshijo);  
    });


}


//rat
var ht = "";

function idcontroles(id) {


  $.ajax({
    url: urlServe,
    data: {
      action: 'ConsultaAvatart',
      id: "'" + id + "'"
    },
    type: 'POST',
  }).done(function (data) {

    var datos = JSON.parse(data);
    $.each(datos, function (fila, valor) {
      ht = "<img src=" + valor.avatares + "  style='width:60px'>";
      $("#logo").html(ht);

    });

  });


  var datosimc = "";
  $.ajax({
    url: urlServe,
    data: {
      action: 'Consultaimctmb',
      id: "'" + id + "'"
    },
    type: 'POST',
  }).done(function (data) {
    var datos = JSON.parse(data);
    $.each(datos, function (fila, valor) {
      datosimc += "<a  href='#'  class='item item-thumbnail-left'>" +
        "<img src=" + valor.avatares + ">" +
        "<h2>salud: " + valor.estado + "</h2>" +
        "<h2>calorias diarias: " + valor.tmb + "</h2>" +
        "<h2>ultimo control: " + valor.fecha_control + "</h2>" +
        "<h2>imc: " + valor.imc + "</h2></a>";

      $("#logo").html(datosimc);
    });

  });


}


function mescontrol() {
  var id = localStorage.getItem("idhijos");
  var fecha = new Date();
  var meshoy = parseInt(fecha.getMonth() + 1);
  var aniohoy = parseInt(fecha.getFullYear());
  var diahoy = parseInt(fecha.getDate());

  var hoyes = aniohoy + "-" + meshoy + "-" + diahoy;

  $.ajax({
    url: urlServe,
    data: {
      action: 'Consultaimctmb',
      id: "'" + id + "'"
    },
    type: 'POST',
  }).done(function (data) {
    console.log(data);
    if (data == 'false') {
      window.location.href = "#/tab/control";

    }
    var datos = JSON.parse(data);
    $.each(datos, function (fila, valor) {

      var array_fechasol = valor.mes_control.split("-");
      var dia = parseInt(array_fechasol[2]);
      var mes = parseInt(array_fechasol[1]);
      var anio = parseInt(array_fechasol[0]);
      var fechacontrol = anio + "-" + mes + "-" + dia;
      if (hoyes == fechacontrol) {
        window.location.href = "#/tab/control";
      } else {
        alert("El proximo control es: " + fechacontrol);
      }




    });

  });
}





//perfilhijo();
function perfilhijo() {
  var id_User = vlIdUser();
  var id = localStorage.getItem("idhijos");
  idcontroles(id);
  var presentacion2 = "";
  //$("#presentacion2").hide(1000);
  $.ajax({
    url: urlServe,
    type: 'POST',
    data: {
      action: 'sessionHijo',
      id_User:id_User
    }
  }).done(function (data) {
    console.log(data);
    var datos = JSON.parse(data);
    $.each(datos, function (fila, valor) {
      if (valor.id_hijo == id) {
        $("#botonera").show();


        $("#nombrehijo1").val(valor.nombrehijo);
        $("#apellidohijo2").val(valor.apellidohijo);
        $("#colegiohijo").val(valor.colegio);
        $("#sexohijo").val(valor.sexo);
        $("#fechahijo").val(valor.fecha_nacimiento);
        idhijos = valor.id_hijo;
        edad = valor.fecha_nacimiento;
        sexo = valor.sexo;
        $("#ciudadhijo2").val(valor.ciudad);
        $("#nameda").text(valor.nombrehijo);
        myfunction(valor.idavatar);

      }

    });
  });
}


function idhijo(id) {
  localStorage.setItem("idhijos", id);
  perfilhijo();


}


/*$("#controles").on('click',function(){

alert("hola");
});

*/
//zscore = ((imc/M)^L-1)/(L*S)



///camara 

var pictureSource; // picture source
var destinationType; // sets the format of returned value

// Wait for device API libraries to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
function onDeviceReady() {
  pictureSource = navigator.camera.PictureSourceType;
  destinationType = navigator.camera.DestinationType;
}

// Called when a photo is successfully retrieved
//
function onPhotoDataSuccess(imageData) {
  // Uncomment to view the base64-encoded image data
  // console.log(imageData);

  // Get image handle
  //
  var smallImage = document.getElementById('smallImage');

  smallImage.src = "data:image/jpeg;base64," + imageData;

  //tomar foto y guardadar

  var imagen = "data:image/jpeg;base64," + imageData;
  var id_User = vlIdUser();
  $.ajax({
    url: urlServe,
    data: {
      action: 'fotoperfil',
      foto: "'" + imagen + "'",
      id_User:id_User
    },
    type: 'POST',
  }).done(function (data) {
    console.log(data);
    if (data != "") {
      alert(data);
    }
  });



}

// Called when a photo is successfully retrieved
//
function onPhotoURISuccess(imageURI) {
  // Uncomment to view the image file URI
  // console.log(imageURI);

  // Get image handle
  //

  var largeImage = document.getElementById('smallImage');

  // Unhide image elements
  //

  // Show the captured photo
  // The inline CSS rules are used to resize the image
  //

  // Convert image
  getFileContentAsBase64(imageURI, function (base64Image) {
    //window.open(base64Image);
    largeImage.src = base64Image;
    var id_User = vlIdUser();
    $.ajax({
      url: urlServe,
      data: {
        action: 'fotoperfil',
        foto: "'" + base64Image + "'",
        id_User:id_User

      },
      type: 'POST',
    }).done(function (data) {
      console.log(data);
      if (data != "") {
        alert(data);
      }
    });


    // Then you'll be able to handle the myimage.png file as base64
  });
}

function getFileContentAsBase64(path, callback) {
  window.resolveLocalFileSystemURL(path, gotFile, fail);

  function fail(e) {
    alert('Cannot found requested file');
  }

  function gotFile(fileEntry) {
    fileEntry.file(function (file) {
      var reader = new FileReader();
      reader.onloadend = function (e) {
        var content = this.result;
        callback(content);
      };
      // The most important point, use the readAsDatURL Method from the file plugin
      reader.readAsDataURL(file);
    });
  }
}

// A button will call this function
//
function capturePhotoEdit() {
  // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
    quality: 75,
    allowEdit: true,
    destinationType: destinationType.DATA_URL,
    targetWidth: 347,
    targetHeight: 347,
    saveToPhotoAlbum: true
  });
}

// A button will call this function
//
function getPhoto(source) {
  // Retrieve image file location from specified source
  navigator.camera.getPicture(onPhotoURISuccess, onFail, {
    quality: 50,
    destinationType: destinationType.FILE_URI,
    targetWidth: 347,
    targetHeight: 347,
    allowEdit: true,
    saveToPhotoAlbum: true,
    sourceType: source
  });
}

// Called if something bad happens.
//
function onFail(message) {
  alert('Failed because: ' + message);
}