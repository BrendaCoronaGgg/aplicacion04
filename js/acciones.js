// JavaScript Document

 $(document).ready(function (e){
	document .addEventListener ("deviceready",function(){
		$('#disp table td').eq(3).text(device.model);
		$('#disp table td').eq(5).text(device.cordova);
		$('#disp table td').eq(7).text(device.platform);
		$('#disp table td').eq(9).text(device.version);
		$('#disp table td').eq(11).text(device.uuid);
	document.addEventlistener("pause",function(){
		escribehistoria ('la app se pausó');
	},false);
	document.addEventlistener("resume",function(){
		escribehistoria ('la app se reinició');
	},false);
	document.addEventlistener("online",function(){
		escribehistoria ('la app se conecto a la red');
	},false);
	document.addEventlistener("offline",function(){
		escribehistoria ('la app se desconecto a la red');
	},false);
	
	},false);
	
 });
 
 function escribehistoria(accion){
	 $('#eHistoria').append('<li>'+accion+'</li>');
 }
	