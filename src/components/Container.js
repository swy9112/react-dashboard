import { useQuery } from "react-query";
import styled from "styled-components";

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props)=>props.grid}, 1fr);
  gap: 1em 2em;
  margin-bottom: 32px;
`

function Container({children, flexWrap, grid = "1"}) {
  return (
    <Wrap flexWrap={flexWrap} grid={grid}>{children}</Wrap>
  )
}

export default Container;