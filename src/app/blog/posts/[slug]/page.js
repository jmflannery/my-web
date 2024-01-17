const Post = ({params}) => {
  console.log(params);
  const {slug} = params;
  return <article>{slug}</article>;
};

export default Post;
