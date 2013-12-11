/*global define */
define([], function () {
	'use strict';

	var myArray = []

	$(document).ready(function() {
		$(".button").click( function(){
			var thisId = $(this).attr('id')
			console.log(thisId)

			if ( thisId === "Sred") {
				myArray.push (thisId)
				$(this).css('background-color','#FF6666')
			} else if ( thisId === "Sblue"){
				myArray.push (thisId) 
				$(this).css('background-color','#3366FF')
			} else if ( thisId === "Syellow"){
				myArray.push (thisId)
				$(this).css('background-color','#FFFF99')
			} else if ( thisId === "Sgreen"){
				myArray.push (thisId)
				$(this).css('background-color','#66FF66')
			} else {
				console.log("Error")
			}    
			console.log (myArray)
		})
	})
	return 0;
});