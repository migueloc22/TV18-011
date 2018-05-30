noticias();

function noticias() {
  var nrws = "";
  $.ajax({
      url: urlServe,
      type: 'POST',
      data: {
        action: 'noticias'
      }
    })
    .done(function (data) {
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


listhijos();

function listhijos() {

  var imghijos = "";
  var nombrehijo = "";
  var datoshijo = "";
  $.ajax({
      url: urlServe,
      type: 'POST',
      data: {
        action: 'listahijos'
      }
    })
    .done(function (data) {
      var datos = JSON.parse(data);

      //$("#presentacion").html(present);
      $.each(datos, function (fila, valor) {

        imghijos += "<a  href='#/tab/detailpadrehijo'  class='item item-thumbnail-left' onclick=idhijopadre(" + valor.id_hijo + ")>" +
          "<img src=" + valor.avatares + ">" +
          "<h2>" + valor.nombrehijo + " " + valor.apellidohijo + "</h2>" +
          "<p class=" + valor.estado + ">peso: " + valor.estado + "</p>" +
          "<p>ultimo control: " + valor.fecha_control + "</p></a>";



      });


      $("#listahijos").html(imghijos);
      // $("#nombrehijo").html(nombrehijo);  
      //  $("#listHijo").html(datoshijo);  
      // $("#texto").text(datoshijo);  
    });


}

function idhijopadre(id) {
  alert(id);
}


datousuario();

function datousuario() {

  var imageda = document.getElementById('smallImage');
  var fotoespecialista = document.getElementById('fotoespecialista');
  $.ajax({
      url: urlServe,
      type: 'POST',
      data: {
        action: 'sessionUsuario'
      }
    })
    .done(function (data) {

      var datos = JSON.parse(data);

      $.each(datos, function (fila, valor) {
        $(".nombre").text(valor.nombre);
        $("#nombreperfilpadre").val(valor.nombre);
        $("#apellidoperfilpadre").val(valor.apellido);
        imageda.src = valor.foto;
        fotoespecialista.src = valor.foto;

      });
    });

}



function datosnuevos() {

  var hoy = new Date();
  var fotoespecialista = document.getElementById('fotoespecialista');
  $.ajax({
      url: urlServe,
      type: 'POST',
      data: {
        action: 'sessionUsuario'
      }
    })
    .done(function (data) {

      var datos = JSON.parse(data);

      $.each(datos, function (fila, valor) {
        fotoespecialista.src = valor.foto;
        $("#nombreespecialista").text(valor.nombre);
        $("#fechahoy").text(hoy);

      });
    });

}


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

  $.ajax({
    url: urlServe,
    data: {
      action: 'fotoperfil',
      foto: "'" + imagen + "'"
    },
    type: 'POST',
  }).done(function (data) {
    if (data != "") {
      alert(data);
    }
  });



}



function onPhotoDataSuccessnoticia(imageData) {
  // Uncomment to view the base64-encoded image data
  // console.log(imageData);

  // Get image handle
  //
  var noticianueva = document.getElementById('imgnoticia');

  noticianueva.src = "data:image/jpeg;base64," + imageData;

  //tomar foto y guardadar

  //var imagennoticia="data:image/jpeg;base64," + imageData;




}

function onPhotoURISuccessnoticia(imageURI) {
  // Uncomment to view the image file URI
  // console.log(imageURI);

  // Get image handle
  //

  var noticianueva = document.getElementById('imgnoticia');

  // Unhide image elements
  //

  // Show the captured photo
  // The inline CSS rules are used to resize the image
  //

  // Convert image
  getFileContentAsBase64(imageURI, function (base64Image) {
    //window.open(base64Image);
    noticianueva.src = base64Image;


    // Then you'll be able to handle the myimage.png file as base64
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
    $.ajax({
      url: urlServe,
      data: {
        action: 'fotoperfil',
        foto: "'" + base64Image + "'"
      },
      type: 'POST',
    }).done(function (data) {
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


function capturePhotoEditnoticia() {
  // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
  navigator.camera.getPicture(onPhotoDataSuccessnoticia, onFail, {
    quality: 20,
    allowEdit: true,
    destinationType: destinationType.DATA_URL,
    targetWidth: 347,
    targetHeight: 347,
    saveToPhotoAlbum: true
  });
}


function getPhotonoticia(source) {
  // Retrieve image file location from specified source
  navigator.camera.getPicture(onPhotoURISuccessnoticia, onFail, {
    quality: 20,
    destinationType: destinationType.FILE_URI,
    targetWidth: 347,
    targetHeight: 347,
    allowEdit: true,
    saveToPhotoAlbum: true,
    sourceType: source
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
    saveToPhotoAlbum: false,
    sourceType: source
  });
}

// Called if something bad happens.
//
function onFail(message) {
  alert('Failed because: ' + message);
}