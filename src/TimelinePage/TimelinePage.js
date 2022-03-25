import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { Header } from "../components";
import PublishBox from "../components/PublishBox";
import AvatarImg from "../components/PublishBox/AvatarPicture";
import useAuth from "../hooks/useAuth";
import { provider } from "../provider/provider";
import AvatarAndLikeBox from "./Styleds/AvatarAndLikeBox";
import ContentBox from "./Styleds/ContentBox";
import EditAndDeleteBox from "./Styleds/EditAndDeleteBox";
import ImageSnippet from "./Styleds/ImageSnippet";
import InfosSnippet from "./Styleds/InfosSnippet";
import Loading from "./Styleds/Loading";
import NoPosts from "./Styleds/NoPosts";
import Post from "./Styleds/Post";
import PostHeader from "./Styleds/PostHeader";
import Snippet from "./Styleds/Snippet";
import Timeline from "./Styleds/Timeline";
import TimelineContainer from "./Styleds/TimelineContainer";
import TrendingBox from "./Styleds/TrendingBox";
import { Text } from "../components/ReactHashtag";
import HashtagRanking from "../components/HashtagRanking";
import useReload from "../hooks/useReload";

export default function TimelinePage() {

  const { auth } = useAuth();

  const { reload, setReload } = useReload()


  const [posts, setPosts] = useState()

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
      <NoPosts>
        <Header />
        <PublishBox />
        <span>There are no posts yet</span>
      </NoPosts>
    </>
  }
    return (
        <> 
            <Header/>
            <TimelineContainer>
                <Timeline>
                    <h2>timeline</h2>
                    <PublishBox/>
                    {posts.map(post => 
                        <Post>
                        <AvatarAndLikeBox>
                            <AvatarImg img = {post.picture}/>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="heart"></ion-icon>
                            <span>13 likes</span>
                        </AvatarAndLikeBox>
                        <ContentBox>
                            <PostHeader>
                                <Link to = "/timeline">{post.username}</Link>
                                <EditAndDeleteBox>
                                    <ion-icon name="trash-outline"></ion-icon>
                                    <ion-icon name="create-outline"></ion-icon>
                                </EditAndDeleteBox>
                            </PostHeader>
                            <Text>{post.text}</Text>
                            <Snippet>
                                <InfosSnippet>
                                    <a href={post.source} target="_blank" rel="noreferrer">{post.title}</a>
                                    <span>{post.description}</span>
                                    <a href={post.source} target="_blank" rel="noreferrer">{post.source}</a>
                                </InfosSnippet>
                                <ImageSnippet src = {post.image} onClick={() => window.open(post.source, '_blank')}/>
                            </Snippet>
                        </ContentBox>
                    </Post>
                    )}
                </Timeline>
                <TrendingBox>
                <HashtagRanking />
                </TrendingBox>
            </TimelineContainer>
        </>
    )
}