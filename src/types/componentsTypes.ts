
import React, {ReactElement} from "react";

export type DropdownListValue = {
    key: string;
    showName:  ReactElement<ReactElement, string>;
    name?: string;
    value?:string;
};

export type CurrencyType = {
  name?: string;
  symbol?: string;
};
