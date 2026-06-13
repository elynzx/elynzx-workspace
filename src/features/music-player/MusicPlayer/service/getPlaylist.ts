const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = ` https://youtube.googleapis.com/youtube/v3/playlistItems`

export const getPlaylist = async (playlistId: string) => {

    const url = `${BASE_URL}?part=snippet&playlistId=${playlistId}&key=${API_KEY}`
    const response = await fetch(url)

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error.message || "Fetch playlist failed")
    }

    const data = await response.json()
    return data.items?.map((item: any) => ({
      title: item.snippet.title,
      image: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url || "",
      artist: item.snippet.videoOwnerChannelTitle || "Unknown Artist"
    })) || [];
}