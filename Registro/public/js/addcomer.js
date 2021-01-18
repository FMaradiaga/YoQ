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

$("#addComercio").submit(function (e) {
    alert("Entro al Submit del formulario");
    e.preventDefault(); // avoid to execute the actual submit of the form.
    var form = $(this);
    $.ajax({
        type: "POST",
        url: "/1002",
        dataType: "json",
        data: JSON.stringify(form.serialize()), // serializes the form's elements.
        beforeSend: function () {
            // setting a timeout
            // console.log(JSON.stringify(data));
            console.log("Se esta procesando tu petición");
            // $('body').append("<div class='stepper'> <div id='preload_addcomer' class='main-loader'><div class='preloader-wrapper big active'><div class='spinner-layer spinner-blue-only'><div class='circle-clipper left'><div class='circle'></div></div><div class='gap-patch'><div class='circle'></div></div><div class='circle-clipper right'><div class=circle'></div></div></div></div>Procesando...</div></div>");
            $('body').innerHTML = ` <div class="as-container">
                                        <div div class= "as-choice-card" >
                                        <form>
                                        <input value='${{Variables}}'>
                                        <input class="material-icons">check</input>
                                            <h3 class="as-card-title">Registros guardados</h3>
                                            <p class="as-card-info">Deceas completar el formulario de ingreso.</p>
                                            <a href="/1003" class="as-card-cta"><i class="fas fa-arrow-right"></i></a>
                                            <a href="/1003" class="as-card-cta">continuar<i class="fas fa-arrow-right"></i></a>
                                       
                                        </form>
                                             </div>
                                    </div> `;


        },
        success: function (data) {
            alert("Se cargo con exito");
            alert(data);

        },
        complete: function (data) {
            //quitar el Preload
            $('body').hidde("<div class='stepper'> <div id='preload_addcomer' class='main-loader'><div class='preloader-wrapper big active'><div class='spinner-layer spinner-blue-only'><div class='circle-clipper left'><div class='circle'></div></div><div class='gap-patch'><div class='circle'></div></div><div class='circle-clipper right'><div class=circle'></div></div></div></div>Procesando...</div></div>");

        }
    });
});
