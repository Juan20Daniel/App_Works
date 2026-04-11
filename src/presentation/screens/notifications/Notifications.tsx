import { useState } from "react";
import { FlatList, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigators/StackNavigator";
import { Container, HeaderApp } from "@/presentation/components/ui";
import { Notification, NotificationOptionsModal } from "@/presentation/components/notifications";

interface Props extends StackScreenProps<RootStackParamList,'Notifications'>{}

export const Notifications = ({navigation}:Props) => {
    const [ showNotificationOptions, setShowNotificationOptions ] = useState(false);
    return (
        <>
            <Container>
                <FlatList
                    data={['header',1,2,3,4,5,6,7,8]}
                    keyExtractor={(item) => item.toString()}
                    showsVerticalScrollIndicator={false}
                    stickyHeaderIndices={[1]}
                    stickyHeaderHiddenOnScroll={true}
                    ListHeaderComponent={() => (
                        <View style={{width:'100%', height: 5}} />
                    )}
                    ListFooterComponent={() => (
                        <View style={{width:'100%', height: 100}} />
                    )}
                    renderItem={({item}) => {
                        if(item === 'header') {
                            return (
                                <HeaderApp
                                    subText="Noificaciones"
                                    alignTitle='flex-start'
                                    actionBtnClose={() => navigation.goBack()}
                                />
                            )
                        };
                        return (
                            <Notification
                                openNotificationOptions={() => setShowNotificationOptions(!showNotificationOptions)}
                            />
                        );
                    }}
                />
            </Container>
            <NotificationOptionsModal
                visible={showNotificationOptions}
                closeOptions={() => setShowNotificationOptions(!showNotificationOptions)}
            />
        </>
    );
}