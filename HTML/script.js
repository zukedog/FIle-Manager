// JavaScript Document
/*
var zip = new JSZip();
zip.file("josh","stuffs");
var jDir = zip.folder("jDir").file("bob","stuffs");


jDir.generateAsync({type:"blob"})
.then(function (blob) {
    saveAs(blob, "hello.zip");
});


console.log(zip);
zip.forEach(function(stuffs){
	console.log(stuffs);
});

*/
$("li").on("click", function(e){
	$(e).children(":checkbox").first().hide();
});


var ID = 0;

function item(type, name, contents) {
	this.type = type;
	this.name = name;
	this.ID = ID;
	ID++;
	if (this.type == "dir") {
		this.contents = contents || [];
		this.addItem = function(type, name, contents){
			this.contents.push(new item(type, name, contents));
		}
	} else {
		this.contents = contents || "";
	}
}



var me = new item("dir");
me.addItem("dir");
me.addItem("file");
console.log(me);

