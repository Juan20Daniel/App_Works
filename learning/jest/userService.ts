export const calculateShipping = (
    total: number,
    isPremium: boolean
) => {
    if (isPremium) {
        return 0;
    }

    if (total >= 1000) {
        return 0;
    }

    return 150;
};