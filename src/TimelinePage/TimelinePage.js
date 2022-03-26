import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { Header } from "../components";
import PublishBox from "../components/PublishBox";
import useAuth from "../hooks/useAuth";
import { provider } from "../provider/provider";
import { Loading, NoPosts, Timeline, TimelineContainer,TrendingBox } from "./Styleds"
import HashtagRanking from "../components/HashtagRanking";
import useReload from "../hooks/useReload";
import Posts from "../components/Posts";

export default function TimelinePage() {

  const { auth } = useAuth();

  const { reload, setReload } = useReload()

  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const postsArray = await provider.getTimeline();
    setPosts(postsArray)
  }, [reload]);

  if (!posts) {
    return <Loading>
      <InfinitySpin color="grey" />
    </Loading>
  }


  if (posts.length === 0) {
    return <>
      <Header />
      <NoPosts>
        <PublishBox />
        <span>There are no posts yet</span>
      </NoPosts>
    </>
  }
  
  return (
    <>
      <Header />
      <TimelineContainer>
        <Timeline>
          <h2>timeline</h2>
          <PublishBox />
          {posts.map((post, index) =>
            <Posts key = {index} post = {post}/>
          )}
        </Timeline>
        <TrendingBox>
          <HashtagRanking />
        </TrendingBox>
      </TimelineContainer>
    </>
  )
}