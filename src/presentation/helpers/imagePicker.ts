import { AppError } from "@/shared";
import { launchImageLibrary, PhotoQuality } from "react-native-image-picker";

interface Result {
    uri: string|null;
    name: string;
    type: string;
}

const verifyExtention = (imgName:string) => {
    const listAllowedExtensions = ['PNG','png','JPG','jpg'];
    const imgExtention = imgName.split('.').pop();
    return listAllowedExtensions.includes(imgExtention!);
}
//2097152 = 2MB
export const imagePicker = async (limitFileSize:number = 2097152, quality?:PhotoQuality):Promise<Result> => {
    try {
        const response = await launchImageLibrary({
            mediaType:'photo',
            quality: quality??0.5
        });
        if(response.hasOwnProperty('didCancel') && response.didCancel) {
            return {uri:null, name:'', type: ''}
        }
        if(!verifyExtention(response.assets![0].fileName!)) {
            throw new AppError(
                "INVALID_IMAGE",
                "La imagen no es válida, verifica que sea imagen JPG o PNG."
            );
        }
        if(response.assets![0].fileSize! > limitFileSize) {
            throw new AppError(
                "IMAGE_TOO_LONG",
                `La imagen es muy grande, el tamaño maximo es de ${limitFileSize}kb, selecciona una mas pequeña.`,
            );
        }
        const image = response.assets![0];

        return {
            uri:image.uri!, 
            name:image.fileName!,
            type:image.type!
        };
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        } else {
            throw new AppError(
                "UNKNOWN_ER",
                String(error),
            );
        } 
    }
}