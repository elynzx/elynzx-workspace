import { useState, useEffect } from "react";
import { getPlaylist } from "../service/getPlaylist";

interface SongProps {
  title: string;
  image: string;
  artist: string;
}

export const useYoutubePlaylist = (playlistId: string) => {
  const [songs, setSongs] = useState<SongProps[]>([]);

  useEffect(() => {
    if (!playlistId) return;

    const loadSongs = async () => {
      try {
        const data = await getPlaylist(playlistId);
        setSongs(data);
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    loadSongs();
  }, [playlistId]);

  return songs;
};
