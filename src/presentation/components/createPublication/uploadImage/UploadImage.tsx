import { Image, Pressable, StyleSheet, View } from 'react-native';
import { PictureAdapter } from '@/config/adapters/picture-adapter';
import { Placeholder } from './components/Placeholder';
import { isTablet } from '@/presentation/helpers/isTablet';
import { useAlertMessageStore } from '@/presentation/store';

export const UploadImage = () => {
    const { formState, setValue } = useCreatePublication();
    const openAlertModal = useAlertMessageStore(state => state.openAlertMessage);
    const loadImage = async () => {
        try {
            const result = await PictureAdapter.getPictureFromLibrary(200000);
            console.log(result);
            setValue('image', result.url??'');
        } catch (error) {
            const errorMessage = (error as Error).message;
            openAlertModal('error', 'Error al cargar la imagen', errorMessage);
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
                    {(formState.image?.value !== '')
                        ?   <Image
                                source={{uri:formState.image?.value}}
                                style={styles.imgOffer}
                            />
                        :   <Placeholder />
                    }
                </Pressable>
            </View>
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