import { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";

export const GitUserContext = createContext({});

export const followrUsers = async () => {
  return await fetch(`https://api.github.com/users/swy9112/followers`).then((response) => response.json());
}

export const fetchUser = async () => {
  return await fetch(`https://api.github.com/users/swy9112`).then((response) => response.json());
}

export const GitUserProvider = ({ children }) => {
  const [login, setLogin] = useState();
  const [avatar, setAvatar] = useState("");
  const [company, setCompany] = useState("");
  const [follower, setFollower] = useState("");
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [git, setGit] = useState(0);
  const [gist, setGist] = useState(0);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [url, setUrl] = useState("");
  const {data, isLoading} = useQuery("user", fetchUser);


  useEffect( () => {
    if(!isLoading) {
      setLogin(data.login);
      setAvatar(data.avatar_url);
      setCompany(data.company);
      setFollowers(data.followers);
      setFollowing(data.following);
      setGit(data.public_repos);
      setGist(data.public_gists);
      setName(data.name);
      setLocation(data.location);
      setBio(data.bio);
      setFollower(data.followers_url);
      setUrl(data.html_url);
    }
  }, [isLoading]);


  return (
    <GitUserContext.Provider value={
      {
        login,
        avatar,
        company,
        follower,
        followers,
        following,
        git,
        gist,
        name,
        location,
        bio,
        url
      }
    }>{children}</GitUserContext.Provider>
  );
};