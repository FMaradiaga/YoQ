/**
 * Autor : Fernando Maradiaga
 * Funcion : Enviar formulario de Registro de Comercio
 * req: {
    *      vcomer_name : Nombre del establecimiento.
    *      vcomer_razon : Razon social del establecimiento.
    *      bcomer_prospec : Se verifica si es un establecimiento Prospecto.
 *      }
 *  post : hbs31
 */
$("#addComercio").submit(function(e) {
    alert("Entro al Submit del formulario");
    e.preventDefault(); // avoid to execute the actual submit of the form.
    var form = $(this);
    $.ajax({
        type: "POST",
        url: "/1003",
        dataType: "json",
        data: form.serialize(), // serializes the form's elements.
        beforeSend: function() {
            // setting a timeout
            console.log("Se esta procesando tu petición");
            $('body').append("<div class='stepper'> <div id='preload_addcomer' class='main-loader'><div class='preloader-wrapper big active'><div class='spinner-layer spinner-blue-only'><div class='circle-clipper left'><div class='circle'></div></div><div class='gap-patch'><div class='circle'></div></div><div class='circle-clipper right'><div class='circle'></div></div></div></div>Procesando...</div></div>");
        },
        success: function (data) {
            alert("Se cargo con exito");
            console.log(data.Variables);
            //$("#idgen").val(data.Variables.nombre);
            
        },
        complete: function (data) {
            $('body').append('<div class="as-container"><div class= "as-choice-card"><i class="material-icons">check</i><p><h4>Codigo del Establecimiento</h4><h2><u>' + data.responseJSON.Variables.KeyDoc + '</u></h2></p> <h4 class="as-card-title">REGISTRO GUARDADO</h4> <p class="as-card-info">Deceas completar el formulario de ingreso.</p><div class="card-action"><a href="/1002" class="as-card-cta"><li class="material-icons">add</li>Nuevo<i class="fas fa-arrow-right"></i></a><a href="/1003?id=' + data.responseJSON.Variables.id + '" class="as-card-cta">continuar<i class="fas fa-arrow-right"></i></a></div> </div></div >');
            //quitar el Preload
            $('#preload_addcomer').hide();
            // location.href = '/1003?idDoc=' + data.responseJSON.Variables.IdDoc + '';
        },
        error: function () {
            //do something
            //alert('Error de conexion');
            $('body').append('<div class="as-container"><div class="red-text as-choice-card"><i class="material-icons">check</i> <h4 class="as-card-title"><li class="white material-icons">error</li>Error</h4> <p class="as-card-info"><h3>Error de Conexion!</h3></p><div class="card-action"><a href="/1002" class="as-card-cta">Recargar<i class="fas fa-arrow-right"></i></a></div> </div></div>');

        }
    });
});
