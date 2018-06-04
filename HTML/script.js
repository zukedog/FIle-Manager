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
$("li").on("click", function (e) {
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
		this.addItem = function (type, name, contents) {
			this.contents.push(new item(type, name, contents));
		}
		this.getContents = function () {
			var cont = "";

			for (var i = 0; i < this.contents.length; i++) {
				cont += this.contents[i].html();
			}
			return cont;
		};
	} else {
		this.contents = contents || "";
	}

	this.html = function () {
		if (this.type == "dir") {
			return `<li>
			<input type='checkbox' name='file' value='none' id="arrow${this.ID}" class="arrow"/><label for="arrow${this.ID}"></label>
			<input type='checkbox' name='file' value='none' id="file${this.ID}" class="file" data-type="dir"/><label for="file${this.ID}">${this.name}</label>
			<ul>
				${this.getContents()}
			</ul>
		</li>`
		}
		return `<li><input type='checkbox' name='file' value='none' id="file${this.ID}" class="file" data-type="${this.type}"/><label for="file${this.ID}">${this.name}</label></li>`
	};
	
}


var me = new item("dir","grandfather");
me.addItem("dir","father");
me.addItem("file","son");
console.log(me);







$(document).ready(function () {
	$("body").html(`<ul>${me.html()}</ul>`);
	$("input[type=checkbox].file + label").click(fileSelect);
});

function fileSelect(e) {
	if (!(e.originalEvent.metaKey || e.originalEvent.ctrlKey || e.originalEvent.shiftKey)) {
		$("input[type=checkbox].file").not($(e.originalEvent.target).prev()).prop("checked", false);

	} else {
		$("#" + $(e.originalEvent.target).attr("for")).prop("checked", true);
	}
}
