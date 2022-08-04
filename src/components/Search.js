import { useForm } from "react-hook-form";
import { MdSearch } from 'react-icons/md';

import styled from "styled-components";

const Container = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: repeat(3, 1fr);
	gap: 2em;
	margin: 20px 0 36px;
`

const InputWrap = styled.form`
	display: flex;
	align-items: center;
	grid-column: 1 / 3;
	column-gap: 1rem;
	padding: 8px;
	background-color: #fff;

	svg {
		font-size: 2rem;
		color: var(--clr-grey-5);
	}
`

const InputArea = styled.input`
	flex: 1 1 0; 
	padding: 6px;
	border: none;
	font-size: 1.6rem;
`

const InputBtn = styled.button`
	padding: 6px;
	font-size: 1.8rem;
	color: ${(props)=>props.theme.cardBgColor};
	background-color: ${(props)=>props.theme.accentColor};
	border-radius: 4px;
`

const Requests = styled.div`
	padding: 8px;
	font-size: 2rem;
`
function Search() {
	return(
		<Container>
			<InputWrap>
				<MdSearch/>
				<InputArea />
				<InputBtn>Search</InputBtn>
			</InputWrap>
			<Requests>Requests : 58/60</Requests>
		</Container>
	)
}

export default Search;