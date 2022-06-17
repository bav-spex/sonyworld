import { useMemo } from "react";
import sortBy from "lodash/sortBy";

export const useSortHook = ({ obj, sortArrStr }) =>
  useMemo(() => sortBy(obj, sortArrStr), [obj, sortArrStr]);