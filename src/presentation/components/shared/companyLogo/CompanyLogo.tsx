import { Logo } from "@/domain/entities";
import { AvatarLogo, LogoImg } from "./components";

interface Props {
    logo: Logo;
}

export const CompanyLogo = ({logo}:Props) => {
    if(logo.url) {
        return <LogoImg logo={logo} />
    }
    return <AvatarLogo logo={logo}/>
}