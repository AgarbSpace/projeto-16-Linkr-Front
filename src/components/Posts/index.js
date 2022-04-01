import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import useReload from "../../hooks/useReload";
import useAuth from "../../hooks/useAuth";
import { confirmDelete } from "../../modals/deletePostModal.js";
import { errorEdit } from "../../modals/errorEditingPost.js";
import api from "../../services/api";
import { Text, Likes, CommentsIcon, CommentSection } from "../index"
import AvatarImg from '../PublishBox/AvatarPicture';
import {
  AvatarAndLikeBox,
  ContentBox,
  EditAndDeleteBox,
  ImageSnippet,
  InfosSnippet,
  PostConteiner,
  PostHeader,
  Snippet
} from "./Styleds";
import RepostsIcons from "../Reposts/RepostIcons";
import RepostsBar from "../Reposts/RepostBar";

function Posts({ post, setPosts }) {

  const { auth } = useAuth();
  const { reload, setReload } = useReload()

  const [isEditing, setIsEditing] = useState(false);
  const [textToEdit, setTextToEdit] = useState(post.text);
  const [comments, setComments] = useState([])
  const [displayCommentSection, setDisplayCommentSection] = useState(false)


  const inputRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  function deletePost() {
    confirmDelete(post, auth);
  }

  function editPost(e) {
    e.preventDefault();
    const body = { text: textToEdit };
    api.editPublication(auth.token, body, post.id)
      .then(setIsEditing(!isEditing))
      .catch(() => errorEdit());
  }

  function toggleEdit() {
    setTextToEdit(post.text);
    setIsEditing(!isEditing);
  }

  function verifyEsc(e) {
    if (e.key === 'Escape') toggleEdit();
  }

  function goToUserPage() {
    setPosts([]);
    navigate(`/user/${post.userId}`)
    setReload(!reload)

      ;
  }

  async function fetchCommentData() {

    try {
      const data = await api.getCommentsByPostId(auth.token, post.id)
      if (data) setComments(data)

    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchCommentData();
  }, []);

  function handleClickDisplayComments() {
    setDisplayCommentSection(!displayCommentSection)
  }

  return (
    <>
      <PostConteiner>
        {post.reposterId === undefined
          ? ""
          : post.reposterId !== post.userId && <RepostsBar reposterName={post.reposterName} />}
        <AvatarAndLikeBox>
          <div onClick={goToUserPage}>
            <AvatarImg img={post.picture} />
          </div>
          <Likes postId={post.id} />
          <CommentsIcon onClick={handleClickDisplayComments} number={comments.length} />
          <RepostsIcons postId={post.id} />
        </AvatarAndLikeBox>
        <ContentBox>
          <PostHeader>
            <h1 onClick={goToUserPage}>{post.username}</h1>
            {auth.userId === post.userId &&
              <EditAndDeleteBox>
                <ion-icon name="trash-outline" onClick={deletePost}></ion-icon>
                <ion-icon name="create-outline" onClick={toggleEdit}></ion-icon>
              </EditAndDeleteBox>
            }
          </PostHeader>
          <span>{
            isEditing ?
              (
                <form onSubmit={editPost} onKeyDown={verifyEsc}>
                  <input
                    ref={inputRef}
                    value={textToEdit}
                    onChange={e => setTextToEdit(e.target.value)}
                  >
                  </input>
                </form>
              )
              :
              (
                <Text>{textToEdit}</Text>
              )
          }</span>
          <Snippet>
            <InfosSnippet>
              <a href={post.source} rel='noreferrer' target="_blank">{post.title}</a>
              <span>{post.description}</span>
              <a href={post.source} rel='noreferrer' target="_blank">{post.source}</a>
            </InfosSnippet>
            <ImageSnippet src={post.image} onClick={() => window.open(post.source, '_blank')} />
          </Snippet>
        </ContentBox>
      </PostConteiner>
      <CommentSection comments={comments} postOwnerId={post.userId} isDisplayed={displayCommentSection} postId={post.id} fetchCommentData={fetchCommentData} />
    </>
  );
}

export default Posts;