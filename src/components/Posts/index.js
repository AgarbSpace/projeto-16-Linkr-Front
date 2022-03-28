import {
  AvatarAndLikeBox, ContentBox, EditAndDeleteBox, ImageSnippet, InfosSnippet,
  PostConteiner, PostHeader, Snippet
} from "./Styleds";
import AvatarImg from '../PublishBox/AvatarPicture';
import { confirmDelete } from "../../modals/deletePostModal.js";
import useAuth from "../../hooks/useAuth";
import { useEffect, useRef, useState } from "react";
import api from "../../services/api";
import { errorEdit } from "../../modals/errorEditingPost.js";
import { useNavigate } from 'react-router-dom';
import Likes from "../Likes";
import { Text } from "../ReactHashtag";

function Posts({ post, setPosts }) {

  const { auth } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [textToEdit, setTextToEdit] = useState(post.text);

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
    navigate(`/user/${post.userId}`);
  }

  console.log(post)

  return (
    <PostConteiner>
      <AvatarAndLikeBox>
        <div onClick={goToUserPage}>
          <AvatarImg img={post.picture} />
        </div>
        <Likes postId={post.id} />
      </AvatarAndLikeBox>
      <ContentBox>
        <PostHeader>
          <h1 onClick={goToUserPage}>{post.username}</h1>
          <EditAndDeleteBox>
            <ion-icon name="trash-outline" onClick={deletePost}></ion-icon>
            <ion-icon name="create-outline" onClick={toggleEdit}></ion-icon>
          </EditAndDeleteBox>
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
  );
}

export default Posts;