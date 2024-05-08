import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

export const blogPosts = [
  {
    imageUrl: "/img/blog1.gif",
    title: "Yes or No tarot reading with Lumi Tarot",
    date: "2023-10-11",
    blogIds: "yes-or-no-tarot-reading-with-lumi-tarot"
  },
  {
    imageUrl: "/img/blog2.webp",
    title: "Top Questions to Ask Tarot Cards",
    date: "2023-10-11",
    blogIds: "top-questions-to-ask-tarot-cards"
  },
  {
    imageUrl: "/img/blog3.gif",
    title: "The Top 10 Benefits of Tarot Readings with Lumi-Tarot",
    date: "2023-05-17",
    blogIds: "the-top-10-benefits"
  },
  {
    imageUrl: "/img/blog4.webp",
    title: "How to Ask Questions for an Online Tarot Reading",
    date: "2023-05-17",
    blogIds: "how-to-ask"
  },
  {
    imageUrl: "/img/blog.gif",
    title: "Unveiling the Future: Experience Interactive Tarot Card Readings Powered by AI Technology",
    date: "2023-04-03",
    blogIds: "announce"
  },
];

const Blog = () => {
  const router = useRouter();

  const handleCardClick = (blogId: any) => {
    router.push(`/blog/${blogId}`);
  };
  
  return (
    <div className="w-full pt-36 pb-20 flex px-6 max-sm:px-4 flex-col">
      <div className='flex flex-wrap gap-6 max-sm:justify-center max-md:justify-center'>
        {blogPosts.map((post, index) => (
          <div key={index} className='flex flex-col gap-2 w-[380px] max-sm:w-[280px] cursor-pointer mb-4' onClick={() => handleCardClick(post.blogIds)}>
            <Image src={post.imageUrl} alt="blogImage" width={100} height={100} className='rounded-2xl w-full'/>
            <h4 className='text-black text-[20px] font-bold'>{post.title}</h4>
            <span className='text-[#69697C]'>{post.date}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between max-sm:gap-6 pr-32 mt-16 max-lg:flex-wrap max-sm:flex-wrap max-md:flex-wrap">
        <div className="flex flex-col">
          <h1 className="text-2xl text-black font-bold">TarotCards</h1>
          <span className="text-black">© 2024 TarotCards, Inc.</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl text-black font-bold mb-2">Resources</h1>
          <span className="text-black hover:text-[#5e3fda] cursor-pointer" onClick={() => router.push("/reading")}>Reading</span>
          <span className="text-black hover:text-[#5e3fda] cursor-pointer" onClick={() => router.push("/contact")}>Contact</span>
          <span className="text-black hover:text-[#5e3fda] cursor-pointer" onClick={() => router.push("/blog")}>Blog</span>
          <span className="text-black hover:text-[#5e3fda] cursor-pointer" onClick={() => router.push("/pricing")}>Pricing</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl text-black font-bold mb-2">Company</h1>
          <span className="text-black hover:text-[#5e3fda] cursor-pointer">Terms of Use</span>
          <span className="text-black hover:text-[#5e3fda] cursor-pointer">Privacy Policy</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl text-black font-bold mb-2">Channels</h1>
          <span className="text-black hover:text-[#5e3fda] cursor-pointer">Twitter</span>
          <span className="text-black hover:text-[#5e3fda] cursor-pointer">Linkedin</span>
          <span className="text-black hover:text-[#5e3fda] cursor-pointer">Instagram</span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
