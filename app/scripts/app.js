/*global define */
define([], function () {
	'use strict';
	var random = []
	var clics = []

	$(document).ready(function() {
		$(".button").click( function(){
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
			else if(n === 1){
				random.push("Syellow")
				
			}
			else{
				random.push("Sgreen")
				
			}
			
			
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
			console.log (clics)
			console.log (random)
		})
	})
	return 0;
});