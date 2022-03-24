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

export default function TimelinePage(){

    const { auth } = useAuth();
    
    const [posts, setPosts] = useState()

    useEffect(async () => {
        const postsArray = await provider.getTimeline();
        setPosts(postsArray)
    }, []);
   
    if(!posts){
        return <Loading>
            <InfinitySpin color="grey" />
        </Loading>
    }


    if(posts.length === 0){
        return <>
            <NoPosts>
                <span>There are no posts yet</span>
            </NoPosts>
        </>
    }

    return (
        <>
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
                            <span>{post.text}</span>
                            <Snippet>
                                <InfosSnippet>
                                    <a href={post.source} target="_blank">{post.title}</a>
                                    <span>{post.description}</span>
                                    <a href={post.source} target="_blank">{post.source}</a>
                                </InfosSnippet>
                                <ImageSnippet src = {post.image} onClick={() => window.open(post.source, '_blank')}/>
                            </Snippet>
                        </ContentBox>
                    </Post>
                    )}
                </Timeline>
                <TrendingBox>
                    <h1>trending</h1>
                    <hr/>
                    <ul>
                        <li>Internet Explorer</li>
                        <li>Opera</li>
                        <li>Firefox</li>
                        <li>Safari</li>
                    </ul>
                </TrendingBox>
            </TimelineContainer>
        </>
    )
}