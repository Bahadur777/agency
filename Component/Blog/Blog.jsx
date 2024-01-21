import Image from "next/image";
import BlogData from "@/Component/Blog/BlogData";
import "./blog.css";

const Blog = () => {
  return (
    <div className="blog-section">
      {BlogData.map(({ id, img, dateIcons, date, title, blogText }) => {
        return (
          <div key={id} className="Blog-card">
            <div className="blog-img">
              <Image src={img} className="bb" />
            </div>
            <div className="blog-content">
              <div className="blog-date">
                <span className="blog-icons">{dateIcons}</span>
                <span>{date}</span>
              </div>
              <div className="blog-title">
                <h1 className="blog-title-text">{title}</h1>
              </div>

              
                <div className="blog-pera">
                  <p className="blog-pera-text">{blogText}</p>
                
              </div>
              
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
