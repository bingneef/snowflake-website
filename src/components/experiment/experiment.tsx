import {
  Experiment as OptimizeExperiment,
  Variant
} from "@bingneef/react-optimize";
import React, { ReactNode } from "react";

function Experiment({ id, variants, loader }: Props) {
  return (
    <OptimizeExperiment id={id} loader={loader}>
      {variants.map((variant, index) => (
        <Variant id={index.toString()} key={index}>
          {variant}
        </Variant>
      ))}
    </OptimizeExperiment>
  );
}

interface Props {
  id: string;
  variants: ReactNode[];
  loader?: ReactNode;
}

export default Experiment;
