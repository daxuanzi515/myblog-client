import Post from "../post/Post"
import "./posts.css"

export default function Posts({posts}) {
  return (
      <div className="posts">
        {
    posts&&posts ?:
          (posts.map((c)=>(
          <Post post={c}/>
          )))
  :(<></>)
         }
      </div>
  )
}
