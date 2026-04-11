import { Image, Pressable, StyleSheet, View } from 'react-native';
import { PictureAdapter } from '@/config/adapters/picture-adapter';
import { AlertMessage } from '@/presentation/components/ui/alerts/alertMessage/AlertMessage';
import { Placeholder } from './components/Placeholder';
import { isTablet } from '@/presentation/helpers/isTablet';
import { useCreatePublication } from '@/presentation/context/CreatePublicationContext';

export const UploadImage = () => {
    const { formState, alertMessage, handleChange, closeAlertMesssage, showAlertMessage } = useCreatePublication();
    const loadImage = async () => {
        try {
            const result = await PictureAdapter.getPictureFromLibrary(200000);
            console.log(result);
            handleChange('image', result.url??'');
        } catch (error) {
            const errorMessage = (error as Error).message;
            showAlertMessage({title:'Error al cargar la imagen', message:errorMessage});
        }
    }
    return (
       <>
            <View style={{
                ...styles.container, 
                height: isTablet ? 500 : 350, 
                marginTop:isTablet ? 50 : 30
            }}>
                <Pressable
                    onPress={() => loadImage()}
                    style={({pressed}) => [{flex:1, opacity: pressed ? 0.5 : 1}]}
                >
                    {(formState.values.image.value !== '')
                        ?   <Image
                                source={{uri:formState.values.image.value}}
                                style={styles.imgOffer}
                            />
                        :   <Placeholder />
                    }
                </Pressable>
            </View>
            <AlertMessage
                alertState={alertMessage}
                closeAlert={closeAlertMesssage}
            />
       </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        paddingHorizontal:10,
        marginBottom: 20,
    },
    imgOffer: {
        objectFit: 'contain', 
        flex:1
    }
});