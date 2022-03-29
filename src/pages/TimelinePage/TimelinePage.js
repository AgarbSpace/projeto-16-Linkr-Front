import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import useAuth from "../../hooks/useAuth";
import useReload from "../../hooks/useReload";
import { useParams } from "react-router";
import api from "../../services/api";
import {
  Loading,
  NoPosts,
  Timeline,
  TimelineContainer,
  TrendingBox
} from "../Hashtags/Styleds";
import {
  Posts,
  Header,
  SearchBar,
  HashtagRanking,
  PublishBox,
} from "../../components";
import { HeaderTimeline, ButtonFollow, ButtonUnfollow } from "./Styleds";

export default function TimelinePage() {
  const { auth } = useAuth();
  const { reload, setReload } = useReload();
  const [username, setUsername] = useState("");
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams() || 0;

  useEffect(async () => {
    setIsLoading(true);
    if (!id) {
      const postsArray = await api.getTimeline(auth.token);
      setPosts(postsArray);
    } else {
      const postsArray = await api.getUserTimeline(id, auth.token);
      setUsername(postsArray.username);
      setPosts(postsArray.posts);
    }
    setIsLoading(false);
  }, [reload, id]);

  if (isLoading) {
    return (
      <Loading>
        <InfinitySpin color="grey" />
      </Loading>
    );
  }

  if (posts.length === 0) {
    return (
      <>
        <Header />
        <NoPosts>
          {id === undefined ? <PublishBox /> : false}
          <span>There are no posts yet</span>
        </NoPosts>
      </>
    );
  }
  console.log(posts);
  return (
    <>
      <SearchBar />
      <Header />
      <TimelineContainer>
        <Timeline>
          {id === undefined ? (
            <h2>timeline</h2>
          ) : (
            <UserHeader posts={posts} id={id} username={username} />
          )}
          {id === undefined ? <PublishBox /> : false}
          {posts.map((post, index) => (
            <Posts key={index} post={post} setPosts={setPosts} />
          ))}
        </Timeline>
        <TrendingBox>
          <HashtagRanking />
        </TrendingBox>
      </TimelineContainer>
    </>
  );
}

function UserHeader({ posts, id, username }) {
  const [follow, setFollow] = useState(false)
  function handleFollow(){
    setFollow(true)
  }

  function handleUnfollow(){
    setFollow(false)
  }

  return (
    <HeaderTimeline>
      <div>
        <img src={posts[0].picture} alt="imageUser" />
        <h2>{id === undefined ? "timeline" : `${username}'s posts'`}</h2>
      </div>
      {follow === false ? 
      <ButtonFollow onClick={handleFollow}>Follow</ButtonFollow>
      :
      <ButtonUnfollow onClick={handleUnfollow}>Unfollow</ButtonUnfollow>
      }
    </HeaderTimeline>
  );
}
