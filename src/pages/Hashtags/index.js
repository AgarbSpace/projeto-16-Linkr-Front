import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import api from "../../services/api.js";
import useAuth from "../../hooks/useAuth.js";
import { errServer } from "../../modals/errServer.js";
import {
  Loading,
  NoPosts,
  Timeline,
  TimelineContainer,
  TrendingBox
} from "./Styleds";
import {
  Posts,
  Header,
  SearchBar,
  HashtagRanking
} from "../../components";

export default function Hashtag() {
  const { auth } = useAuth();
  const params = useParams();

  const [posts, setPosts] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const list = await api.getPublicationByHashtag(auth.token, params.hashtag)
        setPosts(list.data);
      } catch (error) {
        console.log(error)
        errServer()
      };
    }
    fetchData()
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
      <SearchBar />
      <Header />
      <TimelineContainer>
        <Timeline>
          <h2>#{params.hashtag}</h2>
          {posts.map((post, index) =>
            <Posts key={index} post={post} setPosts={setPosts} />
          )}
        </Timeline>
        <TrendingBox>
          <HashtagRanking />
        </TrendingBox>
      </TimelineContainer>
    </>
  );
}