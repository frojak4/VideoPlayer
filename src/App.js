import React, {useState} from 'react';
import './App.css';
import Menu from './Menu.jsx';
import Video from './Video.jsx';


function App() {

  

  const VIDEOS = {
    video1: 'https://content.codecademy.com/courses/React/react_video-fast.mp4',
    video2: 'https://content.codecademy.com/courses/React/react_video-slow.mp4',
    video3: 'https://content.codecademy.com/courses/React/react_video-cute.mp4',
    video4: 'https://content.codecademy.com/courses/React/react_video-eek.mp4'
  };

  const [src, setSrc] = useState(VIDEOS.video1);

  function handleVideoChange(newVideo){
    setSrc(VIDEOS[newVideo])
  }

  return (
    <div>
      <h1>Video Player</h1>
      <Menu handleChange={handleVideoChange}/>
      <Video src={src}/>
    </div>
  );
}

export default App;
