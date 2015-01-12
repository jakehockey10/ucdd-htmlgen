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
    return "not yet implemented"
}

lib.generateUnorderedList = function(arrayOfText) {
    var listItems = generateListItems(arrayOfText);
    return "<ul>" + listItems + "</ul>";
}

lib.generateTableRow = function (arrayOfText) {
    var outStr = '<tr>';
    for (var i = 0 ; i < arrayOfText.length ; i++){
        outStr = outStr + '<td>' + arrayOfText[i] + '</td>';
    }

    outStr = outStr + '</tr>'
    return outStr;

}

lib.generateTable = function(twoDimensionalArrayOfText) {
    return "not yet implemented"
}

lib.generateHyperLink = function(url, text) {
    return "<a href=\"" + url + "\">" + text + "</a>";
}

lib.generateFormTextField = function(name) {
    return "not yet implemented"
}

lib.generateFormTextField = function(name) {
    return "not yet implemented"
}

lib.generateFormTextFieldWithLabel = function(name, label) {
    return "not yet implemented"
}

lib.generateDropdownList = function(arrayOfValues, arrayOfText) {
    return "not yet implemented"
}

lib.generateYoutubeVideoEmbeddableFrame = function(width, height, videoId, allowfullscreen) {
    return "not yet implemented"
}

module.exports = lib
