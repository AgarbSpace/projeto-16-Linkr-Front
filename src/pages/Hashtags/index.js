import { Header } from "../../components";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import Timeline from "./Styleds/Timeline";
import TimelineContainer from "./Styleds/TimelineContainer";
import TrendingBox from "./Styleds/TrendingBox";
import HashtagRanking from "../../components/HashtagRanking/index.js";
import NoPosts from "./Styleds/NoPosts";
import Loading from "./Styleds/Loading";
import Posts from "../../components/Posts";

export default function Hashtag() {
  const { auth } = useAuth();
  const params = useParams();

  const [posts, setPosts] = useState();

  useEffect(() => {
    const promise = axios.get("https://back--linkr.herokuapp.com/hashtag", {
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