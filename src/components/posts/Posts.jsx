import Post from "../post/Post"
import "./posts.css"

export default function Posts({posts}) {
  return (
      <div className="posts">
        {
    (posts && posts.length >0)?:
          (posts.map((c)=>(
          <Post post={c}/>
          )))
  :(<p>loading</p>)
         }
      </div>
  )
}
