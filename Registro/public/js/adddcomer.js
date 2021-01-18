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

    *******************Ubicacion*****************************
   
   vcom_depto : Lista deplegable de Departamento(Retorna el Id del departamento)
    vcomer_ciudad : Lista deplegable de ciudad(Retorna el Id de la ciudad)
    vcomer_barrio : Lista deplegable de barrio(Retorna el Id del Barrio)
    vcomer_urbrur : Lista deplegable de Ubano / rural(Retorna el Id del Urbano /Rural)
    vcomer_coord : Retorna las coordenadas
    vcomer_dir : Retorna la direccion fisica del establecimiento

    *******************Finalizaicon de Escuesta*******************
   
    vcomer_observ : retorna una observacion(Ejemplo: El Cliente no quizo dar informacion del establecimiento.)
    vcomer_tagsdg : div que contiene los Tags de l establecimiento
    vcomer_notify : Check para validar si quiere recibir notificaciones de la plataforma
    vcomer_photo : Tipe File que poste a la Foto;

    frm_staddComercioDgp1dg : Id del Formulario de Datos Generales del Establecimiento
 */


    $("#addComercioDg").submit(function (e) {
        alert("Entro al Submit del formulario addcomer DG");
        e.preventDefault(); // avoid to execute the actual submit of the form.
        var form = $(this);
        $.ajax({
            type: "POST",
            url: "/1003",
            dataType: "json",
            data: form.serialize(), // serializes the form's elements.
            beforeSend: function(response) {
                // setting a timeout
                console.log(response.vcomer_name;
                console.log("Se esta procesando tu petición");
                //$('body').append("<div class='stepper'> <div id='preload_addcomer' class='main-loader'><div class='preloader-wrapper big active'><div class='spinner-layer spinner-blue-only'><div class='circle-clipper left'><div class='circle'></div></div><div class='gap-patch'><div class='circle'></div></div><div class='circle-clipper right'><div class=circle'></div></div></div></div>Procesando...</div></div>");
                $('body').append('<div class="as-container"><div class= "as-choice-card"><i class="as-card-icon fas fa-shopping-bag"></i> <h3 class="as-card-title">Registros guardados</h3> <p class="as-card-info">Deceas completar el formulario de eingreso.</p><button class="as-card-cta">continuar<i class="fas fa-arrow-right"></i></button></div></div >');
            
            },
            success: function (data) {
                alert("Se cargo con exito");
                alert(data);
            },
            complete: function (data) {
                //quitar el Preload
             $('body').hide("<div class='stepper'> <div id='preload_addcomer' class='main-loader'><div class='preloader-wrapper big active'><div class='spinner-layer spinner-blue-only'><div class='circle-clipper left'><div class='circle'></div></div><div class='gap-patch'><div class='circle'></div></div><div class='circle-clipper right'><div class=circle'></div></div></div></div>Procesando...</div></div>");
                response.render()
            }
        });
    });

