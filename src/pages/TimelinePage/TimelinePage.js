import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { Header } from "../../components";
import PublishBox from "../../components/PublishBox";
import useAuth from "../../hooks/useAuth";
import { provider } from "../../provider/provider";
import { Loading, NoPosts, Timeline, TimelineContainer, TrendingBox } from "../Hashtags/Styleds"
import HashtagRanking from "../../components/HashtagRanking";
import useReload from "../../hooks/useReload";
import Posts from "../../components/Posts";
import SearchBar from "../../components/SearchBar";
import { useParams } from "react-router";


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
      const postsArray = await provider.getTimeline(auth.token);
      setPosts(postsArray);
    } else {
      const postsArray = await provider.getUserTimeline(id, auth.token);
      setUsername(postsArray.username);
      setPosts(postsArray.posts);
    }
    setIsLoading(false)
  }, [reload, id]);


  if (isLoading) {
    return <Loading>
      <InfinitySpin color="grey" />
    </Loading>
  }


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
          {posts.map((post, index) =>
            <Posts key={index} post={post} setPosts={setPosts} />
          )}
        </Timeline>
        <TrendingBox>
          <HashtagRanking />
        </TrendingBox>
      </TimelineContainer>
    </>
  )
}