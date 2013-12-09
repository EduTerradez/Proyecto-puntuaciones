/*global define */
define([], function () {
    'use strict';
    $(document).ready(function(){
    	$('#Sblue').click(function(){
            alert("Este es el azul");
        });
    	$('#Sgreen').click(function(){
            alert("Este es el verde");
        });
    	$('#Sred').click(function(){
            alert("Este es el rojo");
        });
    	$('#Syellow').click(function(){
            alert("Este es el amarillo");
        });
    })
    return 0;
});