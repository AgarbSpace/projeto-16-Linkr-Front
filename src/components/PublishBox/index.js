import { useState } from "react";
import useReload from "../../hooks/useReload";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import { errServer } from "../../modals/errServer";
import AvatarImg from "./AvatarPicture";
import {
  PublishBoxStyled,
  InputText,
  InputLink,
  PublishButton
} from "./Styleds"

function PublishBox() {

  const { auth } = useAuth();
  const [loading, setLoading] = useState(false);
  const { reload, setReload } = useReload()
  const [postForm, setPostForm] = useState({
    userId: `${auth.userId}`,
    link: "",
    text: "",
  })

  function handleInputChange(e) {
    setPostForm({ ...postForm, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)
    try {
      await api.postPublication(auth.token, postForm)
      setPostForm({
        userId: `${auth.userId}`,
        link: "",
        text: "",
      })
      setReload([!reload[0]])
    } catch {
      errServer()
    }
    setLoading(false)
  }

  return (
    <PublishBoxStyled onSubmit={handleSubmit} disabled={loading}>
      <AvatarImg
        img={auth.userPicture}
      />
      <div className="publish-box-wrapper">
        <h1>What are you going to share today?</h1>
        <InputLink
          type="text"
          placeholder="http://..."
          onChange={handleInputChange}
          value={postForm.link}
          name="link"
          required={true}
          disabled={loading}
        />
        <InputText
          type="textarea"
          placeholder="Awesome article about #javascript"
          onChange={handleInputChange}
          value={postForm.text}
          name="text"
          disabled={loading}
        />
        <PublishButton
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Publishing..."
            : "Publish"
          }
        </PublishButton>
      </div>
    </PublishBoxStyled>
  )
}

export default PublishBox