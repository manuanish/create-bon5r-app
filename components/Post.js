import * as React from 'react';
import Link from 'next/link';

function Post(props){
  return (
    <div className="p-10 border rounded-xl shadow-md mb-20">
      <div className="font-bold text-2xl">{props.title}</div>
      <div className="text-[gray]">Posted at: {props.date}</div>
      <br />
      <p>
      {props.description}
      </p>
      <br/>
      <br/>
      <Link href={props.href} passHref><button className="bg-orange-50 p-4 rounded-lg hover:bg-orange-500 hover:text-white duration-75"> Read More&#8198;&#8198;&#8198;👉</button></Link>
    </div>
  );
}

export default Post;
