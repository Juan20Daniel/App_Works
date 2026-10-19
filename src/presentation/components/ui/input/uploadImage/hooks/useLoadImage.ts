import { imagePicker } from "@/presentation/helpers/imagePicker";
import { useAlertMessageStore } from "@/presentation/store";
import { AppError } from "@/shared";

export const useLoadImage = () => {
    const openAlertModal = useAlertMessageStore(state => state.openAlertMessage);
    const loadImage = async () => {
        try {
            const result = await imagePicker(2097152);
        
            // const image = result.name as FieldPathValue<T, typeof name>;

            return result;
        } catch (error) {
            const { message } = (error as AppError);
            openAlertModal(
                'error',
                'No fue posible al cargar la imagen',
                message
            );
        }
    }

    return {
        loadImage
    }
}