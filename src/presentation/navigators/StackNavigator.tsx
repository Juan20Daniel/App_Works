import { createStackNavigator, StackAnimationName } from '@react-navigation/stack';
import { 
    Home,
    Search,
    Profile,
    Publication,
    Notifications,
    PublicationFormStack,
    PruebaForm,
    SearchResults,
} from '../screens';

import { ModalPublicationOptions } from '../components/publication';

export type RootStackParamList = {
    Home: {animationType?:StackAnimationName};
    Search: undefined;
    SearchResults: undefined;
    Profile: { animationType?:StackAnimationName };
    Login: { animationType?:StackAnimationName };
    Register: { animationType?:StackAnimationName };
    PublicationFormStack: undefined;
    Publication: {typeUser: "user"|"owner"};
    Notifications: undefined;
    PruebaForm: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
    return (
        <>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen 
                    name="Home" 
                    component={Home}  
                    options={({route}) => ({
                        animation: route.params
                        ? route.params.animationType   
                        :'fade'
                    })}
                />
                <Stack.Screen 
                    name='Search' 
                    component={Search}
                    options={{animation:'slide_from_left'}} 
                />
                <Stack.Screen 
                    name='SearchResults' 
                    component={SearchResults} 
                    options={{animation:'fade'}} 
                />
                <Stack.Screen
                    name='Profile'
                    component={Profile}
                    options={({route}) => ({
                        animation:route.params.animationType??'slide_from_right'
                    })}
                />
                <Stack.Screen 
                    name='PruebaForm'
                    component={PruebaForm}
                />
                <Stack.Screen 
                    name='Publication' 
                    component={Publication} 
                    options={{animation:'slide_from_right'}} 
                />
                <Stack.Screen 
                    name='PublicationFormStack' 
                    component={PublicationFormStack}
                />
                <Stack.Screen 
                    name='Notifications' 
                    component={Notifications} 
                />
                <Stack.Screen
                    name='Login'
                    getComponent={() => require('../screens/auth/login/Login').default}
                    options={({route}) => ({
                        animation:route.params.animationType??'fade'
                    })}
                />
                <Stack.Screen
                    name='Register'
                    getComponent={() => require('../screens/auth/register/Register').default}
                    options={({route}) => ({
                        animation:route.params.animationType??'fade'
                    })}
                />
            </Stack.Navigator>
            <ModalPublicationOptions />
        </>
    );
}

export default StackNavigator;