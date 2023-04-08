import style from './PostBox.module.css'
import Post from './Post'

export default function PostBox({ posts }) {
  return (
    <div className={style.postBox}>
        <h1>Posts</h1>
        <div className={style.content}>
            {posts.map((post) => 
                <Post key={post.id} image={post.imageURL} title={post.title} description={post.description} date={new Date()}/>
            )}
        </div>
    </div>
  )
}
