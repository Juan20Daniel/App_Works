export const orderBy = <T extends object>(
    array:T[], 
    paramsToOrder: { field: keyof T; type: 'string' | 'boolean' | 'number' }
):T[] => {
    switch (paramsToOrder.type) {
        case 'string': 
            const orderByString = [...array].sort((a,b) => {
                if(a[paramsToOrder.field]! > b[paramsToOrder.field]!) {
                    return 1
                }
                if(a[paramsToOrder.field]! < b[paramsToOrder.field]!) {
                    return -1
                }
                return 0
            })
            return orderByString;
        case 'boolean':
            const orderByBoolean = [...array].sort((a,b) => {
                if(a[paramsToOrder.field]! === b[paramsToOrder.field]!) {
                    return 0;
                } 
                if(a[paramsToOrder.field]) {
                    return -1
                }
                return 1
            })
            return orderByBoolean;
        default:
            return array;
    }
}