import { PictureAdapter } from "@/config/adapters/picture-adapter";
import { useAlertMessageStore } from "@/presentation/store";
import { FieldPath, FieldPathByValue, FieldPathValue, FieldValues, UseFormSetValue } from "react-hook-form";

export const useLoadImage = <T extends FieldValues,> (
    name: FieldPathByValue<T, string>,
    setValue: UseFormSetValue<T>
) => {
    const openAlertModal = useAlertMessageStore(state => state.openAlertMessage);
    const loadImage = async () => {
        try {
            const result = await PictureAdapter.getPictureFromLibrary(200000);
          
            const image = result.name as FieldPathValue<T, typeof name>;
            setValue(name, image);
        } catch (error) {
            const errorMessage = (error as Error).message;
            openAlertModal('error', 'Error al cargar la imagen', errorMessage);
        }
    }

    return {
        loadImage
    }
}