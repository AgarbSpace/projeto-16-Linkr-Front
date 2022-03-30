import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import useAuth from "../../hooks/useAuth";
import useReload from "../../hooks/useReload";
import { useParams } from "react-router";
import api from "../../services/api";
import InfiniteScroll from "react-infinite-scroller"
import NewPostNotification from '../../components/NewPostNotification'
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
import { HeaderTimeline, ButtonFollow, ButtonUnfollow, FooterLoader } from "./Styleds";

export default function TimelinePage() {
  const { auth } = useAuth();
  const { reload, setReload } = useReload();
  const [username, setUsername] = useState("");
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(10)
  const [hasMore, setHasMore] = useState(true)
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

  if(!posts){
    return (
      <>
        <Header />
        <Loading>
          <InfinitySpin color="grey" />
        </Loading>
      </>
    )
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

  const loadPosts = async () => {
    const loadMorePosts = await api.getTimeline(auth.token, offset);
    return loadMorePosts;
  }

  const loadFunc = async () => {
    const morePosts = await loadPosts();
    setPosts([...posts, ...morePosts]);

    if(morePosts.length === 0 || morePosts.length < 10){
      setHasMore(false)
    }

    setOffset(offset+10);
  }

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
          {isLoading
            ? <>
              <Loading>
                <InfinitySpin color="grey" />
              </Loading>
            </>
            : <>
              <NewPostNotification currentList={posts} setPosts={setPosts} />
              <InfiniteScroll
                pageStart={0}
                loadMore={loadFunc}
                hasMore={hasMore}
                loader={<FooterLoader>
                          <InfinitySpin color="grey" />
                        </FooterLoader>}>
                  {posts.map((post) =>
                    <Posts key={post.id} post={post} setPosts={setPosts} />
                  )} 
              </InfiniteScroll>
              {hasMore === true ? <></> : <FooterLoader><span>There are no more posts</span></FooterLoader>}
            </>
          }
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
  const { auth } = useAuth()
  const followerId = posts[0].userId
  const userId = auth.userId

  postFollow()
  getAllFollows()

  async function postFollow(){
    const verification = await api.postFollowOrUnfollow(auth.token, userId, followerId)
    if(verification.data.length > 0){
      setFollow(true)
    }
  }

  async function getAllFollows(){
    const allFollows = await api.getAllFollows(auth.token, userId)
    return allFollows.data
  }

  async function handleFollow(){
    try {
      await api.postFollow(auth.token, userId, followerId)
      setFollow(true)
    } catch (error) {
      console.log(error.response)
    }
  }

  async function handleUnfollow(){
    try {
      await api.postUnfollow(auth.token, userId, followerId)
      setFollow(false)
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <HeaderTimeline>
      <div>
        <img src={posts[0].picture} alt="imageUser" />
        <h2>{id === undefined ? "timeline" : `${username}'s posts'`}</h2>
      </div>
      {followerId === userId ?
      "" :
      <>
      {follow === false ? 
      <ButtonFollow onClick={handleFollow}>Follow</ButtonFollow>
      :
      <ButtonUnfollow onClick={handleUnfollow}>Unfollow</ButtonUnfollow>
      }
      </>
      }
    </HeaderTimeline>
  );
}
