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
  NewPostNotification,
} from "../../components";


export default function TimelinePage() {

  const { auth } = useAuth();
  const { reload, setReload } = useReload();
  const [username, setUsername] = useState('');
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams() || 0;

  useEffect(async () => {
    setIsLoading(true)
    if (!id) {
      const postsArray = await api.getTimeline(auth.token);
      setPosts(postsArray);
    } else {
      const postsArray = await api.getUserTimeline(id, auth.token);
      setUsername(postsArray.username);
      setPosts(postsArray.posts);
    }
    setIsLoading(false)
  }, [reload, id]);


  if (posts.length === 0) {
    return <>
      <Header />
      <NoPosts>
        {id === undefined ? <PublishBox /> : false}
        <span>There are no posts yet</span>
      </NoPosts>
    </>
  }

  return (
    <>
      <SearchBar />
      <Header />
      <TimelineContainer>
        <Timeline>
          <h2>{id === undefined ? 'timeline' : `${username}'s posts'`}</h2>
          {id === undefined ? <PublishBox /> : false}
          {isLoading
            ? <>
              <Loading>
                <InfinitySpin color="grey" />
              </Loading>
            </>
            : <>
              <NewPostNotification currentList={posts} setPosts={setPosts} />
              {posts.map((post) =>
                <Posts key={post.id} post={post} setPosts={setPosts} /> //Key precisa ser única, por isso, utilizar post.id em vez de index
              )}
            </>
          }
        </Timeline>
        <TrendingBox>
          <HashtagRanking />
        </TrendingBox>
      </TimelineContainer>
    </>
  )
}