import axios from "axios";
import { useState } from "react";

import PublishBoxStyled from "./Styleds/Form";
import InputLink from "./Styleds/InputLink";
import InputText from "./Styleds/InputText";
import PublishButton from "./Styleds/PublishButton";
import AvatarImg from "./AvatarPicture";

function PublishBox() {

  const [loading, setLoading] = useState(false);

  const [postForm, setPostForm] = useState({
    userId: "",
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

      await axios.post("http://localhost:5000/signup", {
        ...postForm
      }
      )

    } catch {

      alert("Houve um erro ao publicar seu link")

    }

    setLoading(false)

  }



  return (
    <PublishBoxStyled onSubmit={handleSubmit} disabled={loading}>
      <AvatarImg
        img="https://picsum.photos/200"
      />
      <div className="publish-box-wrapper">
        <h1>
          What are you going to share today?
        </h1>
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