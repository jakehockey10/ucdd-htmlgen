var debug = require('debug')('lib')
var lib = {}

var generateListItems = function(arrayOfText) {
    var listItems = "";
    var count = arrayOfText.length;
    for (var i = 0; i < count; i++) {
        listItems += "<li>" + arrayOfText[i] + "</li>";
    }
    return listItems;
}

lib.generateHeading1 = function(text) {
    return "<h1>" + text + "</h1>"
}

lib.generateHeading = function(level, text) {
    return "<h" + level + ">" + text + "</h" + level + ">"
}

lib.generateOrderedList = function(arrayOfText) {
  var listItems = generateListItems(arrayOfText);
  return "<ol>" + listItems + "</ol>";
}


lib.generateUnorderedList = function(arrayOfText) {
    var listItems = generateListItems(arrayOfText);
    return "<ul>" + listItems + "</ul>";
}

lib.generateTableRow = function (arrayOfText) {
    // Author: Brian Newsom
    var outStr = '<tr>';
    for (var i = 0 ; i < arrayOfText.length ; i++){
        outStr = outStr + '<td>' + arrayOfText[i] + '</td>';
    }

    outStr = outStr + '</tr>'
    return outStr;

}

lib.generateTable = function(twoDimensionalArrayOfText) {
    var outStr = '<table>';
	for (var i = 0; i < twoDimensionalArrayOfText.length ; i++){
	    outStr = outStr + '<tr>';
	    for (var j = 0; j < twoDimensionalArrayOfText[0].length ; j++){
		    outStr = outStr + '<td>' + twoDimensionalArrayOfText[i][j] + '</td>';
		}
		outStr = outStr + '</tr>';
	}
	outStr = outStr + '</table>';
    return outStr;
}

lib.generateHyperLink = function(url, text) {
    // Author: Brian Newsom
    return "<a href='"+ url + "'>" + text + "</a>";
}

lib.generateFormTextField = function(name) {
    // Author: Brian Newsom
    return '<input type="text" name="' + name + '">';
}

lib.generateFormTextFieldWithLabel = function(name, label) {
    // Author: Brian Newsom
    return '<label>' + label + '</label> <input type="text" name="' + name + '">';
}

lib.generateDropdownList = function(arrayOfValues, arrayOfText) {
    // Author: Brian Newsom
    var outStr = '<select>\n';
    for (var i = 0 ; i < arrayOfValues.length ; i++){
        outStr = outStr + '<option value="' + arrayOfValues[i] + '">' + arrayOfText[i] + '</option>\n';
    }
    outStr = outStr + '</select>\n';
    return outStr;
}

lib.generateYoutubeVideoEmbeddableFrame = function(width, height, videoId, allowfullscreen) {
    // Author: Brian Newsom
    var fs = '';
    (allowfullscreen) ? fs = 'allowfullscreen' : fs = '';
    return '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' + videoId +  '" ' + fs + '></iframe>';
}

module.exports = lib
