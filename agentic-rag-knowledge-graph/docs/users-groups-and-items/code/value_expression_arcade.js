function getDisseminationOptionsValues(schemaJsonString, valueJsonString, attributeId) {
  var valueJson = Dictionary(valueJsonString);
  var schemaJson = Dictionary(schemaJsonString);
  if (!HasKey(valueJson, "classification")) return null;
  if (valueJson.classification == "UNCLASSIFIED") return schemaJson.attributes[attributeId].arcadeResultLookup["UNCLASSIFIED_List"];
  if (valueJson.classification == "CONFIDENTIAL") return schemaJson.attributes[attributeId].arcadeResultLookup["CONFIDENTIAL_List"];
  if (valueJson.classification == "SECRET") return schemaJson.attributes[attributeId].arcadeResultLookup["SECRET_List"];
  if (valueJson.classification == "TOP SECRET") return schemaJson.attributes[attributeId].arcadeResultLookup["TOP_SECRET_List"];
  return null;
}
getDisseminationOptionsValues(schemaJsonString, valueJsonString, attributeId);
