/*global define */
define([], function () {
	'use strict';
	var random = []
	
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
				break
			}
		}
	}
	var compareSequences = function(){
		for(var i = 0;i < random.length; i++){
			if()
		}
	}
	$(document).ready(function() {
		
			while(true){
			generateComputerSequence()
			ShowComputerSequence()
			userSequence()
			if(!compareSequences()){
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
			
			
			console.log (clics)
			console.log (random)
		})
	})
	return 0;
});