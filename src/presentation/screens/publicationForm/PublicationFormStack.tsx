import { createStackNavigator } from "@react-navigation/stack";
import { CompanyForm, PublicationForm, SelectCompany} from "./screens";
import type { CompanyForm as CompanyFormType } from "@/presentation/types";

export type CreatePublicStackParamList = {
    PublicationForm: undefined;
    CompanyForm: {form:CompanyFormType};
    SelectCompany: undefined;
}

const Stack = createStackNavigator<CreatePublicStackParamList>();

export const PublicationFormStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="PublicationForm"
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen
                name="PublicationForm"
                component={PublicationForm}
                options={{animation:'slide_from_right'}}
            />
            <Stack.Screen 
                name="SelectCompany"
                component={SelectCompany}
                options={{animation:'slide_from_bottom'}}
            />
            <Stack.Screen 
                name="CompanyForm"
                component={CompanyForm}
                options={{animation:'slide_from_right'}}
            />
        </Stack.Navigator>
    );
}