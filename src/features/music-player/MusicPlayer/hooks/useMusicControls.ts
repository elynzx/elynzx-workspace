import { useState, useRef } from "react";
import type { YouTubeProps, YouTubePlayer } from "react-youtube";

export const useMusicControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const playerRef = useRef<YouTubePlayer | null>(null);

  const PLAYLIST_ID = "PLHGKmtxOFv7x7qL2n7nmYD-EbYGlkj5qq";

  const opts: YouTubeProps["opts"] = {
    height: "0",
    width: "0",
    playerVars: {
      listType: "playlist",
      list: PLAYLIST_ID,
      autoplay: 0,
      controls: 0,
    },
  };

  const onReady: YouTubeProps["onReady"] = (event) => {
    playerRef.current = event.target;
    playerRef.current.setVolume(30);
    const initialIndex = playerRef.current.getPlaylistIndex();
    setCurrentSongIndex(initialIndex >= 0 ? initialIndex : 0);
  };

  const onStateChange: YouTubeProps["onStateChange"] = (event) => {
    const player = event.target;

    if (event.data === 1) setIsPlaying(true);
    if (event.data === 2) setIsPlaying(false);

    if (player) {
      const activeIndex = player.getPlaylistIndex();
      if (activeIndex >= 0) {
        setCurrentSongIndex(activeIndex);
      }
    }
  };

  const togglePlay = () => {
    if (!playerRef.current) return;
    
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      const currentIndex = playerRef.current.getPlaylistIndex();
      if (currentIndex === -1 || currentIndex === undefined) {
        playerRef.current.loadPlaylist({
          listType: "playlist",
          list: PLAYLIST_ID,
          index: 0,
        });
      } else {
        playerRef.current.playVideo();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    playerRef.current?.nextVideo();
  };

  const playPrevious = () => {
    playerRef.current?.previousVideo();
  };

  const playSongAtIndex = (index: number) => {
    if (playerRef.current) {
      playerRef.current.loadPlaylist({
        listType: "playlist",
        list: PLAYLIST_ID,
        index: index,
      });
      setCurrentSongIndex(index);
      setIsPlaying(true);
    }
  };

  return {
    isPlaying,
    currentSongIndex,
    opts,
    onReady,
    onStateChange,
    actions: {
      togglePlay,
      playNext,
      playPrevious,
      playSongAtIndex,
    },
  };
};
