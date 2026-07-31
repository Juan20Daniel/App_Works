import { InputErrorMessage, InputName, InputState } from "./input";

export type FormState = Partial<Record<InputName, InputState>>;
export type FormErrorMessage = Partial<Record<InputName, InputErrorMessage>>;