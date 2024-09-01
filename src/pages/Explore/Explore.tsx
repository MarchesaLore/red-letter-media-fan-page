import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Explore.module.scss";

const API_KEY = "AIzaSyBvmBLz6afOxFRS1QgKAJRvKVnFltV_bQc";
const CHANNEL_ID = "UCrTNhL_yO3tPTdQ5XgmmWjA"; //Red Letter Media's channel ID
const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/search";

interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

const Explore = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(YOUTUBE_API_URL, {
          params: {
            key: API_KEY,
            channelId: CHANNEL_ID,
            part: "snippet",
            maxResults: 10, // Adjust to however many videos you want to display
            type: "video",
          },
        });
        setVideos(response.data.items);
      } catch (err) {
        console.error("Error fetching videos", err);
        setError("Could not fetch videos. Please try again later.");
      }
    };

    fetchVideos();
  }, []);

  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  return (
    <div className={styles.exploreContainer}>
      <h1>Explore Movie Reviews on YouTube</h1>
      <div className={styles.videoGrid}>
        {videos.map((video) => (
          <div key={video.id.videoId} className={styles.videoCard}>
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className={styles.thumbnail}
              />
              <h3 className={styles.videoTitle}>{video.snippet.title}</h3>
              <p className={styles.videoDescription}>
                {video.snippet.description}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
