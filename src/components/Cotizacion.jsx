import styled from "@emotion/styled"

const Cotizar = styled.div`
  color: #FFF;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`

const Imagen = styled.img`
  display: block;
  width: 120px;
`

const Precio = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`

const Texto = styled.p`
  font-size: 14px;
  span {
    font-weight: 700;
  }
`

const Cotizacion = ({cotizacion}) => {
  const {
    PRICE,
    HIGHDAY,
    LOWDAY,
    CHANGEPCT24HOUR,
    IMAGEURL,
    LASTUPDATE
  } = cotizacion

  return(
    <Cotizar>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen criptomoneda"/>
      <div>
        <Precio>El precio es de: <span>{PRICE}</span></Precio>
        <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
        <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
        <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
      </div>
    </Cotizar>
  )
}

export default Cotizacion
