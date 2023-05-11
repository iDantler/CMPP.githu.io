$(function() {
	$.datepicker.setDefaults({
	  changeMonth: true,
	  changeYear: true,
	  showButtonPanel: true,
	  dateFormat: 'dd/mm/yy',
	  yearRange: '1995:2023'
	});
  
	// Esto es para el idioma (Español)
	$.datepicker.regional['es'] = {
	  closeText: 'Cerrar',
	  prevText: '<Ant',
	  nextText: 'Sig>',
	  currentText: 'Hoy',
	  monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
		'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
	  ],
	  monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
		'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
	  ],
	  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
	  dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
	  dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
	  weekHeader: 'Sm',
	  dateFormat: 'dd/mm/yy',
	  firstDay: 1,
	  isRTL: false,
	  showMonthAfterYear: false,
	  yearSuffix: ''
	};
	$.datepicker.setDefaults($.datepicker.regional['es']);
	
	$('#calendario').datepicker({
	  onSelect: function(dateText) {
		$('#calendario').val(dateText);
		$('#calendario').datepicker('hide');
	  }
	});
  });
  
  function abrirCalendario() {
	$('#calendario').datepicker("show");
  }
  
  function verificarFecha() {
	var fechaString = $("#calendario").val();
	var fecha = moment(fechaString, 'DD/MM/YYYY', true);
	if (fecha.isValid() && fecha.year() == 1998 && fecha.month() == 4 && fecha.date() == 15) {
	  window.location.href = "contador.html";
	} else {
	Swal.fire({
		icon: 'error',
		title: 'Póngale 0 Profe',
		text: 'Coloca bien la fecha 🤠',
		footer: '<a>¿Será que te olvidaste de tu fecha? 🤔</a>'
		});
	}
  } 