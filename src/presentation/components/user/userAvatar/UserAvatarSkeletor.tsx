import { isTablet } from "@/presentation/helpers/isTablet";
import { Skeletor } from "../../shared";

export const UserAvatarSkeletor = () => (
    <Skeletor 
        width={isTablet ? 90 : 70}
        height={isTablet ? 90 : 70}
        borderRadius={isTablet ? 45 : 35}
        marginRight={15}
    />
);