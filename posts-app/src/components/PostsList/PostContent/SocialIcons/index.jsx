//libraries
import React from "react";
import {
  FacebookShareButton, TwitterShareButton, VKShareButton, TelegramShareButton, ViberShareButton, LinkedinShareButton,
  FacebookIcon, TwitterIcon, VKIcon, TelegramIcon, ViberIcon, LinkedinIcon
} from "react-share";
//components
//styles
import "./SocialIcons.scss";

const SocialIcons = ({ post }) => {
  console.log(post)
  return (
    <div className="post__share-social">
      <FacebookShareButton
        className="post__social-buttons"
        url={'http://zhulym.github.io/posts-app'}
        quote={post.title}
        hashtag={`#${post.city}`}
      ><FacebookIcon className="post__social-icon" size={32} round={true} />
      </FacebookShareButton>

      <TwitterShareButton
        url={'http://zhulym.github.io/posts-app'}
        className="post__social-buttons"
        title={post.title}
      ><TwitterIcon className="post__social-icon" size={32} round={true} />
      </TwitterShareButton>

      <VKShareButton
        url={'http://zhulym.github.io/posts-app'}
        className="post__social-buttons"
        title={post.title}
        image={`https://farm66.staticflickr.com/${post.server}/${post.imageId}_${post.secret}.jpg`}
      ><VKIcon size={32} className="post__social-icon" round={true} />
      </VKShareButton>

      <TelegramShareButton
        url={'http://zhulym.github.io/posts-app'}
        className="post__social-buttons"
        title={post.title}
      ><TelegramIcon size={32} className="post__social-icon" round={true} />
      </TelegramShareButton>

      <ViberShareButton
        url={'http://zhulym.github.io/posts-app'}
        className="post__social-buttons"
        title={post.title}
      ><ViberIcon size={32} className="post__social-icon" round={true} />
      </ViberShareButton>

      <LinkedinShareButton
        className="post__social-buttons"
        url={'http://zhulym.github.io/posts-app'}
        title={post.title}
        summary={post.name}
        source={'http://zhulym.github.io/posts-app'}
      ><LinkedinIcon size={32} className="post__social-icon" round={true} />
      </LinkedinShareButton>
    </div>
  );
};

export default SocialIcons;