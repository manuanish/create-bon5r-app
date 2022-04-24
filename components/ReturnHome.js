import * as React from 'react';
import Link from 'next/link';

function ReturnHome(){
  return (
    <div>
      <Link href='/' passHref><button className="bg-orange-50 p-4 rounded-lg hover:bg-orange-500 hover:text-white duration-75 mb-10 mt-10">👈&#8198;&#8198;&#8198;Back to Blog</button></Link>
    </div>
  );
}

export default ReturnHome;
