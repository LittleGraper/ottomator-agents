function validateDisseminationOptionsValues(schemaJsonString, valueJsonString, attributeId) {
  var valueJson = Dictionary(valueJsonString);
  if (HasKey(valueJson, attributeId)) {
    if (Includes(valueJson[attributeId], "ORCON") && Includes(valueJson[attributeId], "ORCON-USGOV"))
      return "IC Markings System Register & Manual dictates that ORCON cannot be used with ORCON-USGOV";
  }
  return "";
}
validateDisseminationOptionsValues(schemaJsonString, valueJsonString, attributeId);
