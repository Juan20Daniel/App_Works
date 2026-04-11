import { launchImageLibrary, PhotoQuality } from "react-native-image-picker";

interface Result {
    url:string|null, 
    name:string
}

const verifyExtention = (imgName:string) => {
    const listAllowedExtensions = ['PNG','png','JPG','jpg'];
    const imgExtention = imgName.split('.').pop();
    return listAllowedExtensions.includes(imgExtention!);
}

export class PictureAdapter {
    static async getPictureFromLibrary(limitFileSize:number = 20000, quality?:PhotoQuality):Promise<Result> {
        try {
            const response = await launchImageLibrary({
                mediaType:'photo',
                quality: quality??0.5
            });
            if(response.hasOwnProperty('didCancel') && response.didCancel) {
                return {url:null, name:''}
            }
            if(!verifyExtention(response.assets![0].fileName!)) {
                throw new Error("La imagen no es válida, verifica que sea imagen JPG o PNG.");
            }
            if(response.assets![0].fileSize! > limitFileSize) {
                throw new Error(`La imagen es muy grande, el tamaño maximo es de ${limitFileSize}kb, selecciona una mas pequeña.`);
            }
            const image = response.assets![0];
            return {url:image.uri!, name:image.fileName!};
        } catch (error) {
            if (error instanceof Error) {
                throw error;
            } else {
                throw new Error(String(error));
            } 
        }
    }
}