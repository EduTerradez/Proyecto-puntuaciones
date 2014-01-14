/*global define */
/*define([], function () {
	'use strict';
	var random = []
	var clics = []
	var userPlaying = false
	var generateComputerSequence = function(){
		
			var n =	Math.floor(Math.random() * 4)
			
			console.log(n)
			if(n === 0){
				random.push("Sred")
				
			}
			else if(n === 1){
				random.push("Sblue")
				
			}
			else if(n === 2){
				random.push("Syellow")
				
			}
			else{
				random.push("Sgreen")
				
			}
	}
	var ShowComputerSequence = function(){
		for(var i = 0;i < random.length ; i++){
			(function(i){
		        setTimeout(function(){
	                if(random[i] === "Sred"){
	                    $('#Sred').css('background-color','#FF6666')
	                    .delay(300).queue(function(){
	                        $('#Sred').css('background-color', 'red').dequeue()
	                    })
	                    
	                }
	                else if(random[i] === "Sblue"){
	                    $('#Sblue').css('background-color','#3366FF')
	                    .delay(300).queue(function(){
	                        $('#Sblue').css('background-color', 'blue').dequeue()
	                    })
	                }
	                else if(random[i] === "Syellow"){
	                    $('#Syellow').css('background-color','#FFFF99')
	                    .delay(300).queue(function(){
	                        $('#Syellow').css('background-color', 'yellow').dequeue()
	                    })
	                }
	                else{
	                    $('#Sgreen').css('background-color','#66FF66')
	                    .delay(300).queue(function(){
	                        $('#Sgreen').css('background-color', 'green').dequeue()
	                    })
	                }
		        }, 800 * i);
		    }(i));
		}
	}
	var userSequence = function(){
		while(true){
			$(".button").click( function(){
			var thisId = $(this).attr('id')
			console.log(thisId)
			if ( thisId === "Sred") {
				clics.push (thisId)
				$(this).css('background-color','#FF6666')
				.delay(300).queue(function(){
					$(this).css('background-color', 'red').dequeue()
				})
			} else if ( thisId === "Sblue"){
				clics.push (thisId) 
				$(this).css('background-color','#3366FF')
				.delay(300).queue(function(){
					$(this).css('background-color', 'blue').dequeue()
				})
			} else if ( thisId === "Syellow"){
				clics.push (thisId)
				$(this).css('background-color','#FFFF99')
				.delay(300).queue(function(){
					$(this).css('background-color', 'yellow').dequeue()
				})
			} else if ( thisId === "Sgreen"){
				clics.push (thisId)
				$(this).css('background-color','#66FF66')
				.delay(300).queue(function(){
					$(this).css('background-color', 'green').dequeue()
				})
			} else {
				console.log("Error")
			} 
		}
			if(random.length === clics.length){
				userPlaying = true
				break
			}
		}
	}
	var compareSequences = function(){
		for(var i = 0;i < random.length; i++){
			if(random[i] === clics [i]){
				console.log("acertado")
			else{
				console.log("fallo")
				break
			}
			
			}
		}
		userPlaying = false
	}
	$(document).ready(function() {
		
			while(true){
			generateComputerSequence()
			ShowComputerSequence()
			userSequence()
			if(userPlaying = true){
				compareSequences()
				break
			}
			
		}
		/*$(".button").click( function(){
			var thisId = $(this).attr('id')
			console.log(thisId)
			var n =	Math.floor(Math.random() * 4 + 0)
			
			console.log(n)
			if(n === 0){
				random.push("Sred")
				
			}
			else if(n === 1){
				random.push("Sblue")
				
			}
			else if(n === 2){
				random.push("Syellow")
				
			}
			else{
				random.push("Sgreen")
				
			}
			
			for(var i = 0;i < random.length ; i++){
				(function(i){
			        setTimeout(function(){
		                if(random[i] === "Sred"){
		                    $('#Sred').css('background-color','#FF6666')
		                    .delay(300).queue(function(){
		                        $('#Sred').css('background-color', 'red').dequeue()
		                    })
		                    console.log("caca")
		                }
		                else if(random[i] === "Sblue"){
		                    $('#Sblue').css('background-color','#3366FF')
		                    .delay(300).queue(function(){
		                        $('#Sblue').css('background-color', 'blue').dequeue()
		                    })
		                }
		                else if(random[i] === "Syellow"){
		                    $('#Syellow').css('background-color','#FFFF99')
		                    .delay(300).queue(function(){
		                        $('#Syellow').css('background-color', 'yellow').dequeue()
		                    })
		                }
		                else{
		                    $('#Sgreen').css('background-color','#66FF66')
		                    .delay(300).queue(function(){
		                        $('#Sgreen').css('background-color', 'green').dequeue()
		                    })
		                }
			        }, 800 * i);
			    }(i));
			}
			
			
			*/
			/*
			if ( thisId === "Sred") {
				clics.push (thisId)
				$(this).css('background-color','#FF6666')
				.delay(300).queue(function(){
					$(this).css('background-color', 'red').dequeue()
				})
			} else if ( thisId === "Sblue"){
				clics.push (thisId) 
				$(this).css('background-color','#3366FF')
				.delay(300).queue(function(){
					$(this).css('background-color', 'blue').dequeue()
				})
			} else if ( thisId === "Syellow"){
				clics.push (thisId)
				$(this).css('background-color','#FFFF99')
				.delay(300).queue(function(){
					$(this).css('background-color', 'yellow').dequeue()
				})
			} else if ( thisId === "Sgreen"){
				clics.push (thisId)
				$(this).css('background-color','#66FF66')
				.delay(300).queue(function(){
					$(this).css('background-color', 'green').dequeue()
				})
			} else {
				console.log("Error")
			} 
			*/
			
			
			/*console.log (clics)
			console.log (random)
		})
	})
	return 0;
});*/
var puntuacionMax;

define([], function () {
	'use strict'
	//variables globales
	
	var userPlaying = false
	var userClicks = new Array()
	var buttonList
	var computerSequence = new Array()
	//inicializamos buttonList con todos los elementos de nuestra clase boton
	var initialize = function() {
		buttonList = jQuery.map( $(".button"),
				function(element) {
			return $(element).attr('id')
		})
	}
	//generamos un random de la secuencia automatica
	var generateComputerSequence = function() {
		computerSequence.push( buttonList[Math.floor(Math.random() * buttonList.length)] )
		console.log(computerSequence)
	}
	//cambiar el color del css y tras un delay volver al color original
	var highlight = function(button, color) {
		var oldColor = button.css("background-color")
		button.css("background-color", color).dequeue()
		.delay(300)
		.queue( function() {
			button.css("background-color", oldColor).dequeue()
		})
	}
	// mostramos la secuecia generada aleatoria
	var showComputerSequence = function() {
		var seq = computerSequence
		for(var id in seq) {//se espera 600 ms en mostrar cada elemento
			(function(id){
				setTimeout( function() {

					if (seq[id] === 'Sred'){
						highlight ($("#"+seq[id]), 'red')

					}
					else if(seq[id] === "Sblue"){               	
						highlight ($("#"+seq[id]), 'blue')
					}
					else if(seq[id] === "Syellow"){
						highlight ($("#"+seq[id]), '#F7FE2E')
					}
					else if(seq[id] === "Sgreen"){             	
						highlight ($("#"+seq[id]), '#6CFF52')
					}

				}, 600*id)
			})(id)
		}
		setTimeout( function() {
			userPlaying = true
		}, 600*seq.length)
	}
	//comparamos las secuencias
	var compareSequences = function() {
		// TODO 
		for(var i = 0; i < userClicks.length; ++i)
		{
			if(userClicks[i] != computerSequence[i])
			{
				return false;
			}
			$("#current_score").html(userClicks.length); // Puntuacion actual
			var max = userClicks.length
			if(max >=  puntuacionMax){
				max = userClicks.length
				console.log("Nueva puntuacion maxima")	
			}
			$("#max_score").html(userClicks.length); // Puntuacion maxima
			
		}

		console.log("Correcto!");
		//PUNTUACIó preemoohhhh
		return true;
	}
	//finalizacion del juego, reseteamos los arrays y volvemos a mostrar el boton
	var endGame = function() {
		
		userClicks.length=0;
		computerSequence.length=0;
		$('#GameOver').fadeIn()
		$('#start').fadeIn()
		console.log (puntuacionMax)
		


	}
	//********FUNCION PRINCIPAL********
	$(document).ready(function() {
		initialize()
		$('#GameOver').fadeOut()

		$('#start').click(function() {
			$(this).css('color', '#fff').fadeOut()
			$('#GameOver').fadeOut()
			setTimeout( function() {
				generateComputerSequence()
				showComputerSequence()
			}, 500)

		})

		$('.button').click( function() { //asociamos la siguiente funcion al elemento boton para que se ejecute cada vez que realicemos el evento click
			if(userPlaying) {//solo se ejecuta si ya hemos visualizado la secuencia random			
				var thisId = $(this).attr('id')
				if(thisId === "Sred"){                	
					highlight($(this), "RED")
					$(this).css("border", '8px solid red')
					.queue( function() {
						$(this).css("border", '8px solid black').dequeue()
					})
				}
				else if(thisId === "Sblue"){               	
					highlight($(this), "BLUE")
					$(this).css("border", '8px solid blue')
					.queue( function() {
						$(this).css("border", '8px solid black').dequeue()
					})
				}
				else if(thisId === "Syellow"){
					highlight($(this), "#F7FE2E")
					$(this).css("border", '8px solid #F7FE2E')
					.queue( function() {
						$(this).css("border", '8px solid black').dequeue()
					})
				}
				else if(thisId === "Sgreen"){             	
					highlight($(this), "#6CFF52")
					$(this).css("border", '8px solid #6CFF52')
					.queue( function() {
						$(this).css("border", '8px solid black').dequeue()
					})
				}


				userClicks.push(thisId)

				if (userClicks.length >= computerSequence.length) {
					userPlaying = false
					if (compareSequences()){
						userClicks.length = 0
						setTimeout(function() {
							generateComputerSequence()
							showComputerSequence()
						}, 1000)

					}
					else
					{
						endGame()
					}

				}


			}
		})
	})
	return "hola";
});

