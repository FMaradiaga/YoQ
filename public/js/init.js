(function ($) {
  $(function () {

    // Or with jQuery

    $('.dropdown-trigger').dropdown();

    $(document).ready(function () {
      $('.collapsible').collapsible();
    });

    $(document).ready(function () {
      $('.fixed-action-btn').floatingActionButton();
    });
    
    $('.sidenav').sidenav();
    //etiquetas Tag
    $('.chips').chips();
    $('.chips-placeholder').chips({
      placeholder: 'Ingrese Etiquetas Tag',
      secondaryPlaceholder: '+Tag',
    });
//menu del reporte
    $(document).ready(function () {
      $('.sidenav').sidenav();
    });


    //Wizard Registro

    $('#next1').click(function () {
      $('#stepper1').addClass('step-done');
      $('#stepper1').removeClass('editable-step');
      $('#stepper2').addClass('active-step');
      $('#stepper2').addClass('editable-step');
      activeStep($('#step2'));
    });
    $('#next2').click(function () {
      $('#stepper2').addClass('step-done');
      $('#stepper2').removeClass('editable-step');
      $('#stepper3').addClass('active-step');
      $('#stepper3').addClass('editable-step');
      activeStep($('#step3'));
    });
    $('#finish').click(function () {
      $('#stepper3').addClass('step-done');
      $('#stepper3').removeClass('editable-step');
      //DO SOMETHING
    });
    $('#previous2').click(function () {
      $('#stepper1').removeClass('step-done');
      activeStep($('#step1'));
    });
    $('#previous3').click(function () {
      $('#stepper2').removeClass('step-done');
      activeStep($('#step2'));
    });

    function activeStep(stepDiv) {
      $('.step').addClass('hide');
      stepDiv.removeClass('hide');
    }





  }); // end of document ready
})(jQuery); // end of jQuery name space


