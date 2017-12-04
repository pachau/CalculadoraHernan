var calculadora={

	num1:"",
	num2: "",
	signo: "",

	agregarNumero: function(num){ 
		var pantalla = $("#display").html();
		if (pantalla==null || pantalla=="0") {
			$("#display").html(num);	
		}else{
			if (pantalla.length<8) 
			$("#display").html(pantalla+num); 
		}
		
	},
	 raiz:function (){
	 	var pantalla = $("#display").html();
	 	var resultado = Math.sqrt(pantalla);
	 	var tam = resultado.toString().length;
	 	if(tam>8){
		  $('#display').html(resultado.toFixed(5));
		}else{
			$('#display').html(resultado);

		}
	 },


	operarSigno: function(signo){
		var pantalla = $("#display").html();// la pantalla
		this.num1 = pantalla;
		this.signo = signo;
		$("#display").html("0"); // lo vaciamos
	}, //pinches comitas

	igual: function(){
		var pantalla = $("#display").html();
		this.num2 = pantalla;
		$("#display").html(eval(this.num1+this.signo+this.num2)); 
		this.num1 = "";
		this.num2 = "";
		this.signo = "";
		// con eval operamos cadenas con matematicas
	},
	signo:function(){
		var pantalla=$("#display").html();
		if (pantalla.indexOf("-")==-1){
			$("#display").html("-"+pantalla)
		}else{
			 $("#display").html(pantalla.substring(1, pantalla.length));
		}
	},

	limpiar: function(){ // <ya estaba esto
		$("#display").html("0"); //esto maneja lo que se ve en pantalla
		this.num1 = "";
		this.num2 = "";
		this.signo = "";
	},
	
	colocarPunto: function(){ // 
		var pantalla=$("#display").html();
		//if (pantalla.indexOf(".")==-1) {
			$("#display").html(pantalla+".")
		//}
	}, //pinche comita



	iniciar: function(){ //
		$(".tecla").click(function(){ //q raro...
			var alt=$(this).attr('alt'); //
			switch(alt){ //utilizamos los "alt" cada botón tiene uno
				case "+": calculadora.operarSigno(alt); break; //con break terminamos los 'cases'
				case "-": calculadora.operarSigno(alt); break;//ahora tu copealo hasta abajo me cansé 
				case "*": calculadora.operarSigno(alt); break; //'alt' es igual a en cada caso
				case "/": calculadora.operarSigno(alt); break;
				case ".": calculadora.colocarPunto(); break; //todos son signos
				case "CE": calculadora.limpiar(); break;
				case "signo":calculadora.signo(); break;
				case "raiz": calculadora.raiz(); break;
				case "igual": calculadora.igual();break;
				default: calculadora.agregarNumero(alt); break;//aca van los numeros, en otras palabras
			}
		});
	}
}

calculadora.iniciar(); //corrigeme pe >:
