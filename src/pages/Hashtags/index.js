import { Header } from "../../components";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import { provider } from "../../provider/provider.js";
import AvatarAndLikeBox from "./Styleds/AvatarAndLikeBox";
import ContentBox from "./Styleds/ContentBox";
import EditAndDeleteBox from "./Styleds/EditAndDeleteBox";
import ImageSnippet from "./Styleds/ImageSnippet";
import InfosSnippet from "./Styleds/InfosSnippet";
import Post from "./Styleds/Post";
import PostHeader from "./Styleds/PostHeader";
import Snippet from "./Styleds/Snippet";
import Timeline from "./Styleds/Timeline";
import TimelineContainer from "./Styleds/TimelineContainer";
import TrendingBox from "./Styleds/TrendingBox";
import HashtagRanking from "../../components/HashtagRanking/index.js";
import AvatarImg from "../../components/PublishBox/AvatarPicture";
import NoPosts from "./Styleds/NoPosts";
import Loading from "./Styleds/Loading";

export default function Hashtag() {
  const { auth } = useAuth();
  const params = useParams();

  const [posts, setPosts] = useState();
  const [hashtag, setHashtag] = useState();

  useEffect(() => {
    const promise = axios.get("http://localhost:5000/hashtag", {
      headers: {
        nameHashtag: `${params.hashtag}`,
      },
    });
    promise.then((response) => {
      setPosts(response.data);
    });
    promise.catch((error) => console.log(error));
  }, [params.hashtag]);

  if (!posts) {
    return (
      <Loading>
        <InfinitySpin color="grey" />
      </Loading>
    );
  }

  if (posts.length === 0) {
    return (
      <>
        <NoPosts>
          <span>There are no posts yet</span>
        </NoPosts>
      </>
    );
  }

  return (
    <>
      <Header />
      <TimelineContainer>
        <Timeline>
          <h2>#{params.hashtag}</h2>
          {posts.map(post =>
            <Post>
              <AvatarAndLikeBox>
                <AvatarImg img={post.picture} />
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="heart"></ion-icon>
                <span>13 likes</span>
              </AvatarAndLikeBox>
              <ContentBox>
                <PostHeader>
                  <Link to="/timeline">{post.username}</Link>
                  <EditAndDeleteBox>
                    <ion-icon name="trash-outline"></ion-icon>
                    <ion-icon name="create-outline"></ion-icon>
                  </EditAndDeleteBox>
                </PostHeader>
                <span>{post.text}</span>
                <Snippet>
                  <InfosSnippet>
                    <a href={post.source} target="_blank">{post.title}</a>
                    <span>{post.description}</span>
                    <a href={post.source} target="_blank">{post.source}</a>
                  </InfosSnippet>
                  <ImageSnippet src={post.image} onClick={() => window.open(post.source, '_blank')} />
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
  );
}
