/**
 * autor: Cristobal Fernando Maradiaga
 * Area: Front End
 * Funcion : Capturar la información del establecimiento
 *
    Datos:
 *********************Datos Generales******************

    vcomer_name : Nombre del Establecimiento
    icomer_employe : Numero de Empleados
    icomer_cat : Categoría del Establecimiento
    icomer_phone : Telefono del establecimiento
    icomer_celphone : Celular del Establecimiento
    vcomer_email : Correo del Establecimiento
    vcomer_encargado : Nombre de Encargado del Establecimiento
    icomer_ecelphone : Celular del Encargado

    ******************Redes sociales******************
    vcomer_web : Direccion de la pagina Web
    bcomer_facebook : Check (Tiene Facebook)
    bcomer_instagram : Check (Tiene Instagram)
    bcomer_product : Check (Vende Productos)
    bcomer_services : Check (Vende Servicios)

    ******************Horario de atencion*************
   
    vcomer_laper : Lunes Hora de Apertura
    vcomer_lcier : Lunes Hora de cierre
    vcomer_maper : Martes Hora de Apertura
    vcomer_mcier : Martes Hora de Cierre
    vcomer_miaper : Miercoles Hora de apertura
    vcomer_micier : Miercoles Hora de Cierre
    vcomer_japer : Jueves Hora de apertura
    vcomer_jcier : Jueves Hora de cierre
    vcomer_vaper : Viernes Hora de Apertura
    vcomer_vcier : Viernes Hora de Cierre
    vcomer_saper : Sabado Hora de Apertura
    vcomer_scier : Sabado Hora de Cierre
    vcomer_daper : Domingo Hora de Apertura
    vcomer_dcier : Domingo Hra de Cierre

    **********************Ubicacion*************************

    vcom_depto : type Select: que retorna el id del departamento
    vcomer_ciudad : Slect que retorna el id de la cirudad
    vcomer_barrio :  Select que retorna el id del del barrio
    vcomer_urbrur :  Selec que retorna si es urbano o RRural
    vcomer_coord : Coorenadas del Establecimiento
    vcomer_dir : Direccion Fisica del establecimiento

    ***********************Finalizacion************************
   
   vcomer_observ : Text  de Observacion (Ejem: Ninguna, El cliente no quizo dar informacion)
    vcomer_tagsdg : Div que contiene los Tag
    vcomer_notify : Check de recibir notificacion
    vcomer_photo : type File que captura la Foto


    frm_staddComercioDgp1dg : Id del Formulario de Datos Generales del Establecimiento


 */

$(document).ready(function () {
    



    var URLactual = window.location;

    var sPaginaURL = window.location.search.substring(1);
    var sURLVariables = sPaginaURL.split('?');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParametro = sURLVariables[i].split('=');
        if (sParametro[0] == URLactual) {
        }
    }
    //alert(sParametro[1].replace('%20',' '));

    $("input#vcomer_id").val(sParametro[1]);
    


    let dropdown = $('#icomer_cat');
    dropdown.empty();

    dropdown.append('<option selected="true" disabled>Seleccione la Categoría</option>');
    dropdown.prop('selectedIndex', 0);
    //URL del JSON
    const url = '/1000-1';

    // populamos el Select
    $.getJSON(url, function (data) {
        $.each(data, function (key, entry) {
            dropdown.append($('<option></option>').attr('value', entry.id).text(entry.nombre));
        })
    });

});


$("#addComercioDg").submit(function (e) {
    alert("Entro al Submit del formulario Addcomercio DG");
    e.preventDefault(); // avoid to execute the actual submit of the form.
    var form = $(this);
    $.ajax({
        type: "POST",
        url: "/1004",
        dataType: "json",
        data: form.serialize(), // serializes the form's elements.
        beforeSend: function () {
            // setting a timeout
            console.log("Se esta procesando tu petición registerdcomer");
            $('body').append("<div class='stepper'> <div id='preload_addcomer' class='main-loader'><div class='preloader-wrapper big active'><div class='spinner-layer spinner-blue-only'><div class='circle-clipper left'><div class='circle'></div></div><div class='gap-patch'><div class='circle'></div></div><div class='circle-clipper right'><div class=circle'></div></div></div></div>Procesando...</div></div>");
        },
        success: function (data) {
            alert("Se cargo con exito");
            console.log(data.Variables);
            //$("#idgen").val(data.Variables.nombre);

        },
        complete: function (data) {
            // $('body').append('<div class="as-container"><div class= "as-choice-card"><i class="material-icons">check</i><h4 class="as-card-title">REGISTRO GUARDADO</h4> <p class="as-card-info">Los datso del Formulario se guardaron con exito.</p><div class="card-action"><a href="/1002" class="as-card-cta"><li class="material-icons">Agregar uno Nuevo</li>Nuevo<i class="fas fa-arrow-right"></i></a></div> </div></div >');
            //quitar el Preload
            $('#preload_addcomer').hide();
            console.log(data);
            // location.href = '/1003?idDoc=' + data.responseJSON.Variables.IdDoc + '';
        },
        error: function () {
            //do something
            //alert('Error de conexion');
            $('body').append('<div class="as-container"><div class="red-text as-choice-card"><i class="material-icons">check</i> <h4 class="as-card-title"><li class="white material-icons">error</li>Error</h4> <p class="as-card-info"><h3>Error de Conexion!</h3></p><div class="card-action"><a href="/1002" class="as-card-cta">Recargar<i class="fas fa-arrow-right"></i></a></div> </div></div>');

        }
    });
});
