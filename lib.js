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
    return "<a href=\"" + url + "\">" + text + "</a>";
}

lib.generateFormTextField = function(name) {
    return "<input type=\"text\" name=\"" + name + "\">";
}

lib.generateFormTextFieldWithLabel = function(name, label) {
    var labelElem = "<label>" + label + "</label>";
    return labelElem + "<input type=\"text\" name=\"" + name + "\">";
}

lib.generateDropdownList = function(arrayOfValues, arrayOfText) {
    var options = "";
    var count = arrayOfValues.length;
    if (count != arrayOfText.length) {
        throw "Invalid dimensions";
    } else {
        for (var i = 0; i < count; i++) {
            options += "<option value=\"" + arrayOfValues[i] + "\">" + arrayOfText[i] + "</option>";
        }
    }
    return "<select>" + options + "</select>";
}

lib.generateYoutubeVideoEmbeddableFrame = function(width, height, videoId, allowfullscreen) {
    var allow = allowfullscreen ? " allowfullscreen" : "";
    return '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' + videoId +  '"' + allow + '></iframe>';
}

module.exports = lib
