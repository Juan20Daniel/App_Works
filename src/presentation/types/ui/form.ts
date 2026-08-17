import { InputNames, InputValueMap } from "./input";

export type FormValue<K extends InputNames> = Pick<InputValueMap, K>;