'use client'
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import {useTranslations} from 'next-intl';

const Blog = () => {
  const msg = useTranslations('blog');
  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title={msg('title')}
          paragraph={msg('paragraph')}
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          <div key={1} className="w-full">
              <SingleBlog blog={blogData[0]} blogTitle={msg('captions.1')} preText={msg('preparagraph.1')} index={1}/>
          </div>
          <div key={2} className="w-full">
              <SingleBlog blog={blogData[1]} blogTitle={msg('captions.2')} preText={msg('preparagraph.2')} index={2}/>
          </div>
          <div key={3} className="w-full">
              <SingleBlog blog={blogData[2]} blogTitle={msg('captions.3')} preText={msg('preparagraph.3')} index={3}/>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Blog;
