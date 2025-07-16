import React from "react";
import { ChipGroup } from "@arcgisdevelopers/gatsby-theme/components/chip-group";
import { Chip } from "@arcgisdevelopers/gatsby-theme/components/chip";

// export type DataType = "string" | "number" | "integer" | "boolean" | "array" | "object";
export interface IParamMetadata {
  types: [];
  required?: boolean;
  defaultValue?: string;
  values?: string;
}

const ParamTypes = (items: []) => {
  return (
    <>
      {items.map((item) => {
        return !item.link ? (
          <code>{item.name}</code>
        ) : (
          <a href={item.link}>
            <code>{item.name}</code>
          </a>
        );
      })}
    </>
  );
};

const ParamMetadata: React.FunctionComponent<React.PropsWithChildren<IParamMetadata>> = function ({
  types = [],
  required = false,
  defaultValue = null,
  values = null
}) {
  if (types.length < 1 || !types[0].name) {
    return;
  }

  const names = ParamTypes(types);
  const chips = (
    <ChipGroup isInline>
      {names}
      <Chip value={required ? "required" : "optional"} color={required ? "purple" : "gray"} size="small" />
    </ChipGroup>
  );
  const vals = values ? (
    <>
      Values: <i>{values}</i>
    </>
  ) : null;
  const defaultVal = defaultValue ? (
    <>
      Default value: <i>{defaultValue}</i>
    </>
  ) : null;
  const allVals =
    values || defaultValue ? (
      <div style={{ marginTop: "10px" } as any}>
        <span>
          {vals} {defaultVal}
        </span>
      </div>
    ) : null;

  return (
    <div className="param-metadata">
      {chips}
      {allVals}
    </div>
  );
};

export default ParamMetadata;
