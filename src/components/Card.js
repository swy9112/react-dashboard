import styled from "styled-components"


export const Wrap = styled.div`
  display: grid;
  padding: 1em 2em;
  background-color: ${(props)=>props.theme.cardBgColor};
`

const SubLabel = styled.div`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: ${(props)=>props.theme.cardBgColor};
  color: ${(props)=>props.theme.subText};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

function Card({children, subLabel, className}) {
  return (
    <>
      {subLabel && <SubLabel>{subLabel}</SubLabel>}
      <Wrap className={className}>
        {children}
      </Wrap>
    </>
  )
}

export default Card;