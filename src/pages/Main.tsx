import ButtonContact from "../atoms/ButtonContact"
import Frontend from "../templates/Frontend"
import * as S from './styles'

import MainImage from '../assets/main-image.png'

function Main() {
  return (
    <Frontend>
      <S.Container>
        <div>
          <h1>Design driven development of your web product</h1>
          <h6>We are a full service digital agency that builds immesive user experience.</h6>
          <ButtonContact />
        </div>

        <S.ColumnImage>
          <img src={MainImage} alt="HeroHeaderImage" />
        </S.ColumnImage>
      </S.Container>
    </Frontend>
  )
}

export default Main
