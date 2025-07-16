function isDeclassifyOnEnabled(schemaJsonString, valueJsonString, attributeId) {
  var valueJson = Dictionary(valueJsonString);
  if (!HasKey(valueJson, "classification")) return false;
  return valueJson.classification != "UNCLASSIFIED";
}
isDeclassifyOnEnabled(schemaJsonString, valueJsonString, attributeId);
