function init(){
	 
var imghtml=$("#imgc");
var codigo=$("#code");
var jalarimg=localStorage.getItem("loimage");
var callCod=localStorage.getItem("codigo");	
	imghtml.attr({'src':jalarimg});

	codigo.text(callCod);
}