// JavaScript Document

 $(document).ready(function (e){
	document .addEventListener ("deviceready",function(){
		$('#disp table td').eq(3).text(devide.model);
		$('#disp table td').eq(5).text(devide.cordova);
		$('#disp table td').eq(7).text(devide.platform);
		$('#disp table td').eq(9).text(devide.version);
		$('#disp table td').eq(11).text(devide.uuid);
	document.addEvenlistener("pause",function(){
		escribehistoria ('la app se pausó');
	},false);
	document.addEvenlistener("resume",function(){
		escribehistoria ('la app se reinició');
	},false);
	document.addEvenlistener("online",function(){
		escribehistoria ('la app se conecto a la red');
	},false);
	document.addEvenlistener("offline",function(){
		escribehistoria ('la app se desconecto a la red');
	},false);
	
	},false);
	
 });
 
 function escribehistoria(accion){
	 $('#eHistoria').append('<li>'+accion+'</li>');
 }
	