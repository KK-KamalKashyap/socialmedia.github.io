import { useContext } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";

import { PostList as PostListData } from "../store/post-list-store";


const Post = ({post})=> {
const {deletePost}  =  useContext(PostListData);
return (
    <div className="card post-card" style={{width: "30rem"}}>

  <div className="card-body">
    <h5 className="card-title">{post.title} 
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
     onClick={()=> deletePost(post.id )}>
  
     <RiDeleteBin2Fill /></span>
  

    </h5>
    <p className="card-text">{post.body}</p>
    {/* {post.tags.map(tags =>)} */}
    {post.tags && post.tags.map(tag => ( <span key={tag} className=" hashtag badge rounded-pill text-bg-primary">{tag}</span> ))}

 
  </div>
  <div className="alert alert-primary reactions" role="alert">
This post has been reacted by {post.reactions} people.
</div>
</div>
)
}
export default Post;