function bannerExpression(schemaJsonString, valueJsonString, attributeId) {
  var valueJson = Dictionary(valueJsonString);
  var schemaJson = Dictionary(schemaJsonString);
  var selectionText = "";
  if (HasKey(valueJson, "classification")) {
    selectionText = selectionText + valueJson["classification"];
    if (HasKey(valueJson, "distribution")) {
      selectionText = selectionText + "//" + valueJson["distribution"];
    }
    if (HasKey(valueJson, "reviewDate") && valueJson["classification"] != "Unclassified") {
      selectionText = selectionText + "/" + "To be reviewed on" + " " + valueJson["reviewDate"];
    }
  }
  return selectionText;
}
bannerExpression(schemaJsonString, valueJsonString, attributeId);
