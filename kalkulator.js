function masuk(angka){
	document.form.textview.value= document.form.textview.value+angka;
}
function C(){
	document.form.textview.value=""
}
function equal(){
	var angka=document.form.textview.value
	if(angka){
		document.form.textview.value=eval(angka)
	}
}
function del(){
	var isi=document.form.textview.value
	document.form.textview.value=isi.substring(0,isi.length-1)
}