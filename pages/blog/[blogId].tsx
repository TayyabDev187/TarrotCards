import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { blogPosts } from "../blog";

const BlogIds = () => {
  const router = useRouter();
  const [post, setPost] = useState('');
  const {blogId} = router.query;

  const getData = async () => {
    try {
      if(blogId) {
        const page = await fetch(`https://www.lumi-tarot.com/blog/${blogId}`)
         .then((res) => res.text())
         const mainElement = document.createElement('main');
         mainElement.innerHTML = page;
         const childElem = mainElement.getElementsByTagName('main')[0];
         const imgElement = childElem.querySelector('img');
         const heading = childElem.querySelector('h1');
         if(heading && heading.className.includes('Blog_title') ) {
          heading.style.display = 'none';
         }
         if(imgElement) {
          imgElement.src = blogPosts.find(a => a.blogIds === blogId)?.imageUrl || '';
          imgElement.srcset = blogPosts.find(a => a.blogIds === blogId)?.imageUrl || '';
         }
         setPost(childElem.innerHTML);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData()
  }, [blogId]);

  return (
    <div className="w-full pt-36 pb-20 flex px-8 max-sm:px-4 flex-col">
      <div dangerouslySetInnerHTML={{
        __html: post
      }} className="flex flex-col">
      </div>
      <div className="flex justify-between max-sm:gap-6 pr-32 mt-16 max-lg:flex-wrap max-sm:flex-wrap max-md:flex-wrap">
        <div className="flex flex-col">
          <h1 className="text-2xl text-black font-bold">TarotCards</h1>
          <span className="text-black">© 2024 TarotCards, Inc.</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl text-black font-bold mb-2">Resources</h1>
          <span
            className="text-black hover:text-[#5e3fda] cursor-pointer"
            onClick={() => router.push("/reading")}
          >
            Reading
          </span>
          <span
            className="text-black hover:text-[#5e3fda] cursor-pointer"
            onClick={() => router.push("/contact")}
          >
            Contact
          </span>
          <span
            className="text-black hover:text-[#5e3fda] cursor-pointer"
            onClick={() => router.push("/blog")}
          >
            Blog
          </span>
          <span
            className="text-black hover:text-[#5e3fda] cursor-pointer"
            onClick={() => router.push("/pricing")}
          >
            Pricing
          </span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl text-black font-bold mb-2">Company</h1>
          <span className="text-black hover:text-[#5e3fda] cursor-pointer">
            Terms of Use
          </span>
          <span className="text-black hover:text-[#5e3fda] cursor-pointer">
            Privacy Policy
          </span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl text-black font-bold mb-2">Channels</h1>
          <span className="text-black hover:text-[#5e3fda] cursor-pointer">
            Twitter
          </span>
          <span className="text-black hover:text-[#5e3fda] cursor-pointer">
            Linkedin
          </span>
          <span className="text-black hover:text-[#5e3fda] cursor-pointer">
            Instagram
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogIds;
