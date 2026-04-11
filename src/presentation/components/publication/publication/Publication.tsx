import { Dimensions, Image, ImageSourcePropType } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { isTablet } from '@/presentation/helpers/isTablet';
import { Container, Description, Header, Salary, Title, Footer, RequirmentsList } from './components';
const { width:widthWindow } = Dimensions.get('window');

interface Props {
    title?:string;
    hasSeen?:boolean;
    source: ImageSourcePropType;
}

const calcImgSize = (source:ImageSourcePropType) => {
    const { width:widthImg, height:heightImg } = Image.resolveAssetSource(source);
    let difference;
    if(isTablet) {
        if(widthImg < widthWindow-20) {
            difference = (widthWindow-20) - widthImg;
            return {
                width: widthImg+difference,
                height: heightImg+difference
            }
        } 
        difference = widthImg - (widthWindow-20);
        return {
            width: widthImg - difference,
            height: heightImg - difference
        }
    }
    if(widthImg === widthWindow) {
        return {
            width: widthImg,
            height: heightImg
        }
    }
    if(widthImg < widthWindow) {
        difference = widthWindow - widthImg;
        return {
            width: widthImg+difference,
            height: heightImg+difference
        }
    }
    difference = widthImg - widthWindow;
    return {
        width: widthImg-difference,
        height: heightImg-difference
    }
}

export const Publication = ({title, hasSeen=false, source}:Props) => {
    return (
        <Container>
            <Header
                companyName='People Carso'
                description='Neque porro quisquam est quiooo das dwdds fwefewf ewf w fwef wefwe fw das dwdds fwefewf fff ddsds ad adsad ad'
            />
            <Image
                source={source}
                style={{
                    width: calcImgSize(source).width,
                    height: calcImgSize(source).height,
                    backgroundColor: globalColors.white,
                }}
                resizeMode='stretch'
            />
            <Title value={title??''} />
            <Description />
            <Salary />
            <RequirmentsList />
            <Footer />
        </Container>
    );
}