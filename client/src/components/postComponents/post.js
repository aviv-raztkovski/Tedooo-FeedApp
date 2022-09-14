import React from 'react';
import ProfileImg from '../ProfileImg'

export default function Post({ username, avatar, shopName, images, comments, date, text, likes, didLike }) {
    const imgsToRender = images.slice(0,2);

    function getTimeDifference() {
        const jsDate = new Date(date)
        const now = Date.now();
        const deltaTime = now - jsDate
        const diffInHours = deltaTime / (1000 * 3600);
        if (diffInHours < 24)
            return `${diffInHours}h`;
        
        return `${Math.ceil(deltaTime / (1000 * 3600 * 24))}d`
    }

    return (
        <div className="post">
            <div className="userInfo">
                <ProfileImg img={avatar} />
                <div className="userInfo-text">
                    <p className="userName">{username}</p>
                    <p className="shopName">{shopName}</p>
                    <p className="date">{getTimeDifference()}</p>
                </div>
            </div>

            <div className="postBody">
                <p className="post-text">{text}</p>
                <div className="post-imgs">
                    {!imgsToRender.length?(
                            <></>
                        ):( imgsToRender.map((img) => {
                            return (
                                <img src={img} alt={"post"} />
                            )
                        }))
                    }
                </div>

                <div className="post-info">
                    <p className="post-likes">{likes} likes</p>
                    <p className="post-comments">{comments} comments</p>
                </div>
            </div>

            <div className="post-btns">
                <button className="btn btn-post btn-post-like">Like</button>
                <button className="btn btn-post btn-post-comment">Comment</button>
            </div>
        </div>
    );
}