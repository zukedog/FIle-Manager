// JavaScript Document
var zip = new JSZip();
zip.file("josh","stuffs");
var jDir = zip.folder("jDir").file("bob","stuffs");
/*
jDir.generateAsync({type:"blob"})
.then(function (blob) {
    saveAs(blob, "hello.zip");
});
*/
console.log(zip);
zip.forEach(function(stuffs){
	console.log(stuffs);
});