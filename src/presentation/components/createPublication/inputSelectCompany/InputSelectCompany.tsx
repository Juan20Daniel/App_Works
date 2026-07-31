import { InputState } from "@/presentation/types";
import { BoxInputSelect } from "../shared";

interface Props {
    label: string;
    state: InputState;
    placeholder: string;
    children?: React.ReactNode;
    onFocus: (field:string) => void;
}

export const InputSelectCompany = (props:Props) => {
    return (
        <BoxInputSelect {...props}>
            
        </BoxInputSelect>
    );
}
