import { FormState } from "@/presentation/types";

export const formInitialState:FormState = {
    logoCompany: { 
        type:'select',
        name:'logoCompany', 
        selectedOptionId:null,
        value:'', 
        status:null, 
        isValid:false, 
        isFocus:false, 
        isRequired:false 
    },
    typeWork: { 
        type:'text',
        name:'typeWork', 
        value:'', 
        status:null, 
        isValid:false, 
        isFocus:false, 
        isRequired:false
    },
    companyName: { 
        type:'text',
        name:'companyName', 
        value:'', 
        status:null, 
        isValid:false, 
        isFocus:false, 
        isRequired:false
    },
    image: { 
        type:'text',
        name:'image', 
        value:'', 
        status:null, 
        isValid:false, 
        isFocus:false, 
        isRequired:false
    },
    minimumWage: { 
        type:'text',
        name:'maximumWage', 
        value:'', 
        status:null, 
        isValid:false, 
        isFocus:false, 
        isRequired:false 
    },
    maximumWage: { 
        type:'text',
        name:'minimumWage', 
        value:'', 
        status:null, 
        isValid:false, 
        isFocus:false, 
        isRequired:false 
    },
    schedule: { 
        type:'text',
        name:'schedule', 
        value:'', 
        status:null, 
        isValid:false, 
        isFocus:false, 
        isRequired:false 
    },
    description: { 
        type:'text',
        name:'description', 
        value:'', 
        status:null, 
        isValid:false, 
        isFocus:false, 
        isRequired:false 
    },
    // requirements: { 
    // value:'', 
    // isFocus:false, 
    // isRequired:false, 
    // list:[]
    // },
    // benefits: { 
    // value:'', 
    // isFocus:false, 
    // isRequired:false, 
    // list:[]
    // },
    companyDesc: { 
        type:'text',
        name:'companyDesc', 
        value:'', 
        status:null, 
        isValid:false, 
        isFocus:false, 
        isRequired:false 
    },
    coords: { 
        type:'text',
        name:'coords', 
        value:'', 
        status:null, 
        isValid:false, 
        isFocus:false, 
        isRequired:false 
    }
}