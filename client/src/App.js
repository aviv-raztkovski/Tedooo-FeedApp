import React from 'react';
import Post from './components/postComponents/post';
import Toolbar from './components/toolbarComponents/toolbar';

const postExample = {
  "results": [
    {
      "id": [
        "6319f52ed519ba15e06d72a7"
      ],
      "userId": [
        "631762c2a2967db5fdc89596"
      ],
      "username": [
        "vintage57"
      ],
      "avatar": [
        "https://images.tedooo.com/biz/631762c2a2967db5fdc89596/e7fa1bd9-adb8-4ba5-bf2b-80e8909ed4ed.jpg"
      ],
      "shopName": [
        "Vintage 57"
      ],
      "shopId": [
        "6317638ba2967db5fdc895a4"
      ],
      "images": [
        "https://images.tedooo.com/biz/631762c2a2967db5fdc89596/60e88bbd-1a16-46df-861d-99dbf3076230.jpg",
        "https://images.tedooo.com/biz/631762c2a2967db5fdc89596/be5ea7dc-69cc-451e-b641-be09e6d0c3cd.jpg",
        "https://images.tedooo.com/biz/631762c2a2967db5fdc89596/760233af-57dd-400c-8942-213461d9cea4.jpg"
      ],
      "comments": [
        "0"
      ],
      "date": [
        "2022-09-08T13:59:10.012Z"
      ],
      "text": [
        "some new teal & black glitter Halloweenies"
      ],
      "likes": [
        "0"
      ],
      "didLike": [
        "true"
      ],
      "premium": [
        "false"
      ]
    }
  ]
}

export default function App() {
  return (
    <>
      <Toolbar />
      <Post 
        username={postExample.results[0].username[0]}
        avatar={postExample.results[0].avatar[0]}
        shopName={postExample.results[0].shopName[0]}
        images={postExample.results[0].images}
        comments={postExample.results[0].comments[0]}
        date={postExample.results[0].date[0]}
        text={postExample.results[0].text[0]}
        likes={postExample.results[0].likes[0]}
        didLike={postExample.results[0].didLike[0]}
      />
    </>
  );
}