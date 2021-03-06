import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import useAuth from "../../hooks/useAuth";
import useReload from "../../hooks/useReload";
import { useParams } from "react-router";
import api from "../../services/api";
import InfiniteScroll from "react-infinite-scroller"
import NewPostNotification from '../../components/NewPostNotification'
import {
  Posts,
  Header,
  SearchBar,
  HashtagRanking,
  PublishBox,
  UserHeader,
} from "../../components";
import {
  FooterLoader,
  NoFollow,
  Loading,
  NoPosts,
  Timeline,
  TimelineContainer,
  TrendingBox
} from "./Styleds";

export default function TimelinePage() {
  const { auth } = useAuth();
  const { reload } = useReload();
  const [username, setUsername] = useState("");
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(10)
  const [hasMore, setHasMore] = useState(true)
  const [listFollowsUser, setListFOllowsUser] = useState([]);
  const { id, hashtag } = useParams();


  useEffect(() => {
    async function getFuntionEffect() {
      setIsLoading(true);
      const list = await api.listFollows(auth.token);
      setListFOllowsUser(list);
      if (!id && !hashtag) {
        const postsArray = await api.getTimeline(auth.token);
        setPosts(postsArray);
      }

      else if (id) {
        const postsArray = await api.getUserTimeline(id, auth.token);
        setUsername(postsArray.username);
        setPosts(postsArray.posts);
      }
      else {

        const list = await api.getPublicationByHashtag(auth.token, hashtag)

        setPosts(list.data);
      }
      setIsLoading(false);
    }

    getFuntionEffect();

  }, [reload, id, hashtag]);

  if (!posts) {
    return (
      <>
        <Header />
        <Loading>
          <InfinitySpin color="grey" />
        </Loading>
      </>
    )
  }


  if (posts.length === 0 && !isLoading) {

    return (
      <>
        <SearchBar />
        <Header />
        <TimelineContainer>
          <Timeline>
            {id === undefined ? (
              <h2>timeline</h2>
            ) : (
              <UserHeader />
            )}
            {id === undefined
              ? hashtag === undefined
                ? <PublishBox />
                : ""
              : ""}
            <NoPosts>
              <span>{(listFollowsUser.length === 0 && !isLoading) ? "You don't follow anyone yet. Search for new friends!" : "No posts found from your friends"}</span>
            </NoPosts>
          </Timeline>
          <TrendingBox>
            <HashtagRanking />
          </TrendingBox>
        </TimelineContainer>
      </>
    );
  }

  const loadPosts = async () => {

    if (id || hashtag) {
      return []
    }


    const loadMorePosts = await api.getTimeline(auth.token, offset);

    return loadMorePosts;
  }

  const loadFunc = async () => {


    const morePosts = await loadPosts();

    if (morePosts.length === 0) {
      return setHasMore(false)
    }

    const MorePostIndex = morePosts.length - 1
    if (morePosts[MorePostIndex].id === posts[0].id) {
      return setHasMore(false)
    }

    setPosts([...posts, ...morePosts]);
    setOffset(offset + 10);
  }
  return (
    <>
      <SearchBar />
      <Header />
      <TimelineContainer>
        <Timeline>
          {id === undefined
            ? hashtag === undefined
              ? <h2>timeline</h2>
              : <UserHeader />
            : <UserHeader />
          }
          {id === undefined
            ? hashtag === undefined
              ? <PublishBox />
              : ""
            : ""}
          {(listFollowsUser.length === 0 && !isLoading) ? ((id === undefined && hashtag === undefined) ? <NoFollow><span>You don't follow anyone yet. Search for new friends!</span></NoFollow> : "") : ""}
          {isLoading
            ? <>
              <Loading>
                <InfinitySpin color="grey" />
              </Loading>
            </>
            : <div>
              <NewPostNotification currentList={posts} setPosts={setPosts} />
              <InfiniteScroll
                pageStart={0}
                loadMore={loadFunc}
                hasMore={hasMore}
                loader={<FooterLoader>
                  <InfinitySpin color="grey" />
                </FooterLoader >}>
                {
                  posts.map((post) =>
                    <Posts key={post.id} post={post} setPosts={setPosts} />
                  )
                }
              </InfiniteScroll >
              {hasMore === true ? <></> : <FooterLoader><span>There are no more posts</span></FooterLoader>}
            </div >
          }
        </Timeline >
        <TrendingBox>
          <HashtagRanking />
        </TrendingBox>
      </TimelineContainer >
    </>
  );
}


