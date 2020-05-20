window.numero = 0;
function Abrir(evt, Seccion) {
  var i, contenido, links;
  contenido = document.getElementsByClassName("contenido");
  for (i = 0; i < contenido.length; i++) {
    contenido[i].style.display = "none";
  }
  links = document.getElementsByClassName("links");
  for (i = 0; i < links.length; i++) {
    links[i].className = links[i].className.replace(" active", "");
  }
  document.getElementById(Seccion).style.display = "block";
  evt.currentTarget.className += " active";
}


document.getElementById("defaultOpen").click();

/*Slide Imagenes*/
var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


/*Borrar p */
function borrar1() {
    document.getElementById("nocompleto1").innerHTML = '';
}

function borrar2() {
  document.getElementById("nocompleto2").innerHTML = '';
}

function borrar3() {
  document.getElementById("nocompleto3").innerHTML = '';
}

function borrar4() {
  document.getElementById("nocompleto4").innerHTML = '';
}



/*Slide Imagenes*/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


/*APARTADO PROFESOR*/
function profesor() {


    var codprofe = document.getElementById("codigoprofe").value;
    var nombreprofe = document.getElementById("nombreprofe").value;
    var apellidosprofe = document.getElementById("apellidosprofe").value;
    
    var profesor = {
    
        Cod_Profesor: codprofe,
    
        Nombreprofe: nombreprofe,
    
        Apellidosprofe: apellidosprofe,
    
    
        getInfo: function () {   
            var mensaje = confirm("¿Deseas introducir estos datos?");
            //Detectamos si el usuario acepto el mensaje
            if (mensaje) {
                if (codprofe.length>0 && nombreprofe.length>0 && apellidosprofe.length>0) {
                document.getElementById("nocompleto1").innerHTML = '';
                var fila="<tr><td>"+this.Cod_Profesor+"</td><td>"+this.Nombreprofe+"</td><td>"+this.Apellidosprofe+"</td></tr>";

                var btn = document.createElement("TR");
                btn.innerHTML=fila;


                document.getElementById("tablaprofe").appendChild(btn);  

                document.getElementById("nocompleto1").innerHTML = "Cambios Guardados con éxito";
            }
            else{
            document.getElementById("nocompleto1").innerHTML = "No has rellenado todos los campos";
        }
            }
            //Detectamos si el usuario denegó el mensaje
            else {
                document.getElementById("nocompleto1").innerHTML = "Cambios no guardados";
            }
    
    }
} 
   profesor.getInfo();
    var profesordatos = Object.values(profesor)
    console.log(profesordatos[1])

}

/*APARTADO ALUMNO*/
function alumno(numero) {
  var nombrealumno = document.getElementById("nombrealumno").value;
  var apellidosalumno = document.getElementById("apellidosalumno").value;
  var cursoalumno = document.getElementById("cursoalumno").value;
  var cicloalumno = document.getElementById("cicloalumno").value;


  
  var alumno = {
  
      Nombrealum: nombrealumno,
  
      Apellidosalum: apellidosalumno,

      Cursoalum: cursoalumno,

      Cicloalum: cicloalumno,

  
  
      getInfo2: function () {   
          var mensaje = confirm("¿Deseas introducir estos datos?");
          //Detectamos si el usuario acepto el mensaje
          if (mensaje) {


              if (nombrealumno.length>0 && apellidosalumno.length>0 && cursoalumno.length>0 && cicloalumno.length>0) {
              document.getElementById("nocompleto3").innerHTML = '';
              var fila="<tr><td>"+this.Nombrealum+"</td><td>"+this.Apellidosalum+"</td><td>"+this.Cursoalum+"</td><td>"+this.Cicloalum+"</td></tr>";

              console.log(numero)

              var fila2=`<option>${this.Nombrealum}  ${this.Apellidosalum}</option>`;


              var btn = document.createElement("TR");
              btn.innerHTML=fila;

              var btn2 = document.createElement("option");
              btn2.innerHTML=fila2;

              document.getElementById("tablaalum").appendChild(btn); 
              document.getElementById("usuarios").appendChild(btn2); 
              
              document.getElementById('cicloactividad').value=this.Cicloalum;
              
              document.getElementById("nocompleto3").innerHTML = "Cambios Guardados con éxito";
          }
          else{
          document.getElementById("nocompleto3").innerHTML = "No has rellenado todos los campos";
      }
          }
          //Detectamos si el usuario denegó el mensaje
          else {
              document.getElementById("nocompleto3").innerHTML = "Cambios no guardados";
          }
  
  }
  
} 
  alumno.getInfo2(); 
  console.log(alumno[1]); 
  
}

/* APARTADO EMPRESA*/
function empresa() {
  var NEmpresa = document.getElementById("nombreempresa").value;
  var DEmpresa = document.getElementById("direccionempresa").value;
  var WEmpresa = document.getElementById("webempresa").value;
  var PCEmpresa = document.getElementById("pcontactoempresa").value;
  var TCEmpresa = document.getElementById("tlfcontactoempresa").value;
  var ECEmpresa = document.getElementById("emailcontactoempresa").value;
  var TLEmpresa = document.getElementById("tutorempresa").value;
  var TEmpresa = document.getElementById("tutortlfempresa").value;
  var ELEmpresa = document.getElementById("tutoremailempresa").value;
  
  var empresa = {
  
    NEmpresa: NEmpresa,
  
    DEmpresa: DEmpresa,

    WEmpresa: WEmpresa,

    PCEmpresa: PCEmpresa,

    TCEmpresa: TCEmpresa,
  
    ECEmpresa: ECEmpresa,

    TLEmpresa: TLEmpresa,

    TEmpresa: TEmpresa,

    ELEmpresa: ELEmpresa,
  
  
      getInfo3: function () {   
          var mensaje = confirm("¿Deseas introducir estos datos?");
          //Detectamos si el usuario acepto el mensaje
          if (mensaje) {
              if (NEmpresa.length>0 && DEmpresa.length>0 && WEmpresa.length>0 && PCEmpresa.length>0 && TCEmpresa.length>0 && ECEmpresa.length>0 && TLEmpresa.length>0 && TEmpresa.length>0 && ELEmpresa.length>0) {
              document.getElementById("nocompleto2").innerHTML = '';
              var fila="<tr><td>"+this.NEmpresa+"</td><td>"+this.DEmpresa+"</td><td class=url>"+this.NEmpresa.link(this.WEmpresa)+"</td><td>"+this.PCEmpresa+"</td><td>"+this.TCEmpresa+"</td><td>"+this.ECEmpresa+"</td><td>"+this.TLEmpresa+"</td><td>"+this.TEmpresa+"</td><td>"+this.ELEmpresa+"</td></tr>";

              var btn = document.createElement("TR");
              btn.innerHTML=fila;
              document.getElementById("tablaempr").appendChild(btn);  
              document.getElementById("nocompleto2").innerHTML = "Cambios Guardados con éxito";
          }
          else{
          document.getElementById("nocompleto2").innerHTML = "No has rellenado todos los campos";
      }
          }
          //Detectamos si el usuario denegó el mensaje
          else {
              document.getElementById("nocompleto2").innerHTML = "Cambios no guardados";
          }
  
  }
  
} 
  empresa.getInfo3(); 
}


function asignacion() {


  var nombreasignacion = document.getElementById("nombrealumno2").value;
  var empresaalumno = document.getElementById("empresaalumno").value;
  var TDAsignacion = document.getElementById("TDAsignacion").value;
  var fechain = document.getElementById("fechain").value;
  var fechafin = document.getElementById("fechafin").value;
  
  var asignacion = {
  
    nombreasignacion: nombreasignacion,
  
    empresaalumno: empresaalumno,
  
    TDAsignacion: TDAsignacion,

    fechain: fechain,
  
    fechafin: fechafin,
  
  
      getInfo4: function () {   
          var mensaje = confirm("¿Deseas introducir estos datos?");
          //Detectamos si el usuario acepto el mensaje
          if (mensaje) {
              if (nombreasignacion.length>0 && empresaalumno.length>0 && TDAsignacion.length>0 && fechain.length>0 && fechafin.length>0) {
              document.getElementById("nocompleto4").innerHTML = '';
              var fila="<tr><td>"+this.nombreasignacion+"</td><td>"+this.empresaalumno+"</td><td>"+this.TDAsignacion+"</td><td>"+this.fechain+"</td><td>"+this.fechafin+"</td></tr>";

              var btn = document.createElement("TR");
              btn.innerHTML=fila;


              document.getElementById("tablaasig").appendChild(btn);  

              document.getElementById("nocompleto4").innerHTML = "Cambios Guardados con éxito";
          }
          else{
          document.getElementById("nocompleto4").innerHTML = "No has rellenado todos los campos";
      }
          }
          //Detectamos si el usuario denegó el mensaje
          else {
              document.getElementById("nocompleto4").innerHTML = "Cambios no guardados";
          }
  
  }
} 
  asignacion.getInfo4();

}

