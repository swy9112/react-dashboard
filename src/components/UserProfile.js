import styled from "styled-components";
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
import Card from "./Card";
import Avatar from "./Avatar";
import { useContext } from "react";
import { followrUsers, GitUserContext } from "../api";
import { useQuery } from "react-query";

const Container = styled.div`
  .first {
    margin-bottom: 16px;
  }

  .second {
    overflow: auto;
    align-items: baseline;
    height: 225px;
  }

  .second>div {
    margin-bottom: 24px;
  }
`

const FollowBtn = styled.button`
  margin-left: auto;
`

const Bio = styled.p`
  margin: 12px 0;
`

const SubInfo = styled.ul`
  li {
    display: flex;
    align-items: center;
    margin-bottom: 6px;
    color: ${(props)=>props.theme.subText}
  }

  li svg {
    margin-right: 4px;
    font-size: 2rem;
  }
`

function UserProfile(){
  const user = useContext(GitUserContext);
  const {data, isLoading} = useQuery("followPerson", followrUsers);

  return (
    <Container>
      <Card className="first" subLabel="User">
        <Avatar size="large" img={user.avatar} name={user.name} login={user.login} url={user.url}>
          {/* <FollowBtn>Follow</FollowBtn> */}
        </Avatar>
        <Bio>{user.bio}</Bio>
        <SubInfo>
          <li>
            <MdBusiness/>
            <span>{user.company}</span>
          </li>
          <li>
            <MdLocationOn/>
            <span>{user.location}</span>
          </li>
          <li>
            <MdLink/>
            <span>-</span>
          </li>
        </SubInfo>
      </Card>
      <Card subLabel="Followers" className="second">
        {!isLoading && data.map((person) => {
          return <Avatar key={person.id} size="small" img={person.avatar_url} name={person.name} login={person.login} url={person.html_url}/>
        })}
      </Card>
    </Container>
  );
}

export default UserProfile;