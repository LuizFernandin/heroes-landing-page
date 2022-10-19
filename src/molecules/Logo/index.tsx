import * as S from './styles'
import LogoHero from '../../assets/logohero.svg'

const Logo = () => {
    return(
        <S.Img>
            <img src={LogoHero} alt="Logo Hero Header" />
        </S.Img>
    )
}

export default Logo