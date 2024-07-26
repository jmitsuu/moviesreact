import React from 'react';
interface video{
  videoId:string
}
const YouTubeVideo = ({ videoId }:video) => {
  const videoUrl = `https://www.youtube.com/${videoId}?autoplay=1&mute=1&playsinline=1`; // Adiciona autoplay e mute

  return (

      <iframe
        width="560"
        height="315"
        src={videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        
      ></iframe>

  );
};

export default YouTubeVideo;
