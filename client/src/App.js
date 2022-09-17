import React, {useState, useRef, useCallback} from 'react';
import Post from './components/postComponents/post';
import Toolbar from './components/toolbarComponents/toolbar';
import useFeedLoad from './useFeedLoad';

export default function App() {

  const [pageNumber, setPageNumber] = useState(1);
  const [limit, setLimit] = useState(6);
  const postsID = [];

  const { loading, error, posts, hasMore } = useFeedLoad(pageNumber, limit);

  const observer = useRef();
  const lastPostElement = useCallback(node => {
    console.log(node)
    if(loading) return;
    if(observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    })

    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  return (
    <>
      <Toolbar />
      {console.log(`posts: ${posts.length}`)}
      {posts.map((post, index) => {
        if(postsID.includes(post.id[0])) return <></>;
        postsID.push(post.id[0]);
        console.log(post.id[0])
        console.log(index)
        if (posts.length === index + 1) {
          return (<Post 
            ref={lastPostElement}
            key={index}
            username={post.username[0]}
            avatar={post.avatar[0]}
            shopName={post.shopName[0]}
            images={post.images}
            comments={post.comments[0]}
            date={post.date[0]}
            text={post.text[0]}
            likes={post.likes[0]}
            didLike={post.didLike[0]}
          />);
        }

        return (<Post 
          key={index}
          username={post.username[0]}
          avatar={post.avatar[0]}
          shopName={post.shopName[0]}
          images={post.images}
          comments={post.comments[0]}
          date={post.date[0]}
          text={post.text[0]}
          likes={post.likes[0]}
          didLike={post.didLike[0]}
        />)})
      }

      <div>{loading && 'loading...'}</div>
      <div>{error && 'error...'}</div>

    </>
  );
}