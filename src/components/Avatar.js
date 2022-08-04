import * as React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  align-items: center;

  h4 {
    margin-bottom: 6px;
  }
`

const Img = styled.img`
  overflow: hidden;
  border-radius: 50%;
  width: ${(props)=>props.size}px;
  height: ${(props)=>props.size}px;
  margin-right: 16px;
`

function Avatar({size, children, img, name, login, url}){
  const sizeValue = size === "small" ? 45 : 75;

  return (
    <Wrap>
      <button onClick={() => {
        window.location = url;
      }}>
        <Img src={img} size={sizeValue}/>
      </button>
      <div>
        <h4>{login}</h4>
        <p>{name}</p>
      </div>
      {children}
    </Wrap>
  )
}

export default Avatar;