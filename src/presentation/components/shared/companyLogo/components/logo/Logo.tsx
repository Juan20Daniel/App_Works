import { useState } from "react";
import { Image, View } from "react-native";
import { Logo } from "@/domain/entities";
import { calcDimension } from "@/presentation/helpers/calcDimension";
import { Skeletor } from "@/presentation/components/shared";
import { styles } from "./styles";
import { AvatarLogo } from "../avatarLogo";

interface Props {
    logo: Logo;
}

export const LogoImg = ({logo}:Props) => {
    const [ isLoading, setLoading ] = useState(true);
    const [ onError, setOnError ] = useState(false);
    return (
        <View style={styles.containerLogo}>
            <Image
                style={styles.logo}
                source={{uri:logo.url}}
                resizeMode="cover"
                onLoadStart={() => setLoading(true)}
                onLoadEnd={() => setLoading(false)}
                onError={() => setOnError(true)}
            />
            {/* Mientras se carga la imagen */}
            {isLoading && 
                <View style={styles.loader}>
                    <Skeletor 
                        width={calcDimension({small:100, medium: 120, large:150})}
                        height={calcDimension({small:60, medium: 80, large:110})}
                        borderRadius={calcDimension({small:5, medium: 20, large:15})}
                    />
                </View>
            }
             {/* En caso de que haya un error (url invalida o no encontrada), se muestra avatar */}
            {onError &&
                <View style={styles.error}>
                    <AvatarLogo logo={logo} />
                </View>
            }
        </View>
    );   
}