import { useState } from "react";
import myAlbumCover from "../../../assets/stickers/bunny01.svg";
import YouTube from "react-youtube";
import { motion, useDragControls } from "motion/react";
import {
  PlayIcon,
  PauseIcon,
  SkipBackIcon,
  SkipForwardIcon,
  ListBulletsIcon,
  HeadsetIcon,
  XIcon,
  PlaylistIcon,
} from "@phosphor-icons/react";
import { useYoutubePlaylist } from "./hooks/useYoutubePlaylist";
import { useMusicControls } from "./hooks/useMusicControls";
import { useWorkspaceStore } from "../../../store/useWorkspaceStore";
import WingRight from "../../../assets/stickers/wing_right.png";
import WingLeft from "../../../assets/stickers/wing_left.png";

export const MusicPlayer = () => {
  const activeApp = useWorkspaceStore((state) => state.activeApp);
  const focusApp = useWorkspaceStore((state) => state.focusApp);
  const toggleApp = useWorkspaceStore((state) => state.toggleApp);

  const [isPlaylistVisible, setIsPlaylistVisible] = useState(true);
  const dragControls = useDragControls();
  const isMobile = window.innerWidth < 768;

  const PLAYLIST_ID = "PLHGKmtxOFv7x7qL2n7nmYD-EbYGlkj5qq";

  const { isPlaying, currentSongIndex, opts, onReady, onStateChange, actions } =
    useMusicControls();
  const songs = useYoutubePlaylist(PLAYLIST_ID);
  const currentSong = songs[currentSongIndex];
  const zIndex = activeApp === "MusicPlayer" ? "z-50" : "z-10";

  const handleSelectedSong = (index: number) => {
    actions.playSongAtIndex(index);
  };

  return (
    <motion.div
      drag
      dragListener={false}
      dragMomentum={false}
      dragControls={dragControls}
      onMouseDown={() => focusApp("MusicPlayer")}
      className={`${zIndex} absolute top-10 left-4 md:left-10 flex flex-col text-ui-text bg-ui-glass/30 backdrop-blur-xl border border-ui-border rounded-xl w-100 pointer-events-auto shadow-lg select-none `}
    >
      <div className="absolute invisible h-0 w-0 overflow-hidden pointer-events-none">
        <YouTube
          key={PLAYLIST_ID}
          opts={opts}
          onReady={onReady}
          onStateChange={onStateChange}
        />
      </div>

      <img
        src={WingRight}
        alt="Wing Right"
        className="absolute top-4 -right-16 w-16 z-53 pointer-events-none drop-shadow-lg select-none jello-vertical"
      />
      <img
        src={WingLeft}
        alt="Wing Left"
        className="absolute top-4 -left-16 w-16 z-53 pointer-events-none drop-shadow-lg select-none jello-vertical"
      />

      <div
        onPointerDown={(e) => !isMobile && dragControls.start(e)}
        className={`w-full h-10 flex items-center justify-between px-4 bg-ui-inner/40 border-b border-ui-border/40 shrink-0 gap-4 ${
          isMobile
            ? "cursor-default"
            : "cursor-crosshair active:cursor-grabbing"
        }`}
      >
        <div className="flex items-center gap-2.5 text-ui-text pointer-events-none">
          <HeadsetIcon
            size={16}
            weight="fill"
            className="text-ui-accent animate-pulse"
          />
          <div className="flex gap-2 font-secondary text-[11px] font-black uppercase tracking-wider text-ui-text/80">
            <span>AngelBeats </span>
            <div className="hidden md:flex gap-0.5 items-center h-4 pl-2">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className={`w-0.5 bg-ui-text rounded-full transition-all duration-300 ${isPlaying ? "animate-wave" : "h-1 opacity-40"}`}
                  style={{
                    height: isPlaying
                      ? `${Math.floor(Math.random() * 12) + 4}px`
                      : "3px",
                    animationDelay: `${i * 0.15}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <button
          onClick={() => toggleApp("MusicPlayer")}
          onPointerDown={(e) => e.stopPropagation()}
          className="w-5 h-5 rounded bg-ui-glass/40 hover:bg-ui-accent border border-ui-border/60 flex items-center justify-center text-ui-text/70 hover:text-white transition-all focus:outline-none hover:scale-105 active:scale-95"
        >
          <XIcon size={10} weight="bold" />
        </button>
      </div>

      <div className="flex items-center h-16 justify-between p-3 gap-3 w-full bg-ui-glass/5 border-b border-ui-border/20 shrink-0 px-6">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <div
            className={`bg-ui-inner/60 border border-ui-border/60 rounded-full overflow-hidden shrink-0 flex items-center justify-center transition-all duration-500 ${
              isPlaying ? "animate-spin-slow ring-1 ring-ui-accent/30" : ""
            }`}
          >
            <img
              src={myAlbumCover}
              alt="Cover"
              className="w-9 h-9 object-contain"
            />
          </div>

          <div className="w-27 overflow-hidden whitespace-nowrap px-1">
            <p
              className={`font-code text-[12px] font-bold text-ui-text/80 tracking-tight ${isPlaying ? "animate-marquee" : ""}`}
            >
              {currentSong ? `${currentSong.title}` : "Loading track..."}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 shrink-0 pl-5 border-l border-ui-border/20">
          <button
            onClick={actions.playPrevious}
            className="text-ui-text/60 hover:bg-ui-inner/40 rounded-md hover:text-ui-accent p-1 transition-colors"
          >
            <SkipBackIcon size={14} weight="fill" />
          </button>
          <button
            onClick={actions.togglePlay}
            className="text-ui-text/60 p-1 hover:bg-ui-inner/40 rounded-md hover:text-ui-accent transition-colors"
          >
            {isPlaying ? (
              <PauseIcon weight="fill" size={14} />
            ) : (
              <PlayIcon weight="fill" size={14} />
            )}
          </button>
          <button
            onClick={actions.playNext}
            className="text-ui-text/60 hover:bg-ui-inner/40 rounded-md hover:text-ui-accent p-1 transition-colors"
          >
            <SkipForwardIcon size={14} weight="fill" />
          </button>
        </div>

        <button
          onClick={() => setIsPlaylistVisible((prev) => !prev)}
          className={`text-ui-text/70 hover:text-ui-accent transition-colors p-1 rounded-md ml-2 ${
            isPlaylistVisible
              ? "bg-ui-accent/10 text-ui-accent"
              : "hover:bg-ui-inner/40"
          }`}
        >
          <PlaylistIcon size={16} weight="bold" />
        </button>
      </div>

      <div
        className={`w-full flex-1 transition-all duration-300 ${isPlaylistVisible ? "block" : "hidden"}`}
      >
        <div className="flex flex-col w-full h-50 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-ui-border/40 scrollbar-track-transparent">
          {songs.map((song, index) => (
            <button
              key={index}
              onClick={() => handleSelectedSong(index)}
              className="flex items-center gap-3 p-2 hover:bg-ui-glass/40 border border-transparent hover:border-ui-border/10 rounded-lg transition-all group w-full text-left"
            >
              <div className="relative w-7 h-7 shrink-0 rounded bg-ui-inner border border-ui-border/40 overflow-hidden shadow-2xs">
                <img
                  src={song.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  alt={song.title}
                />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold truncate group-hover:text-ui-accent transition-colors duration-150">
                  {song.title}
                </p>
                <p className="text-[9px] text-ui-text/50 truncate mt-0.5 font-code">
                  {song.artist}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="py-2 w-full flex items-center justify-center border-t border-ui-border/20 bg-ui-glass/10">
          <p className="text-[8px] font-code text-ui-text/60 tracking-widest uppercase animate-pulse">
            Powered by YouTube Data API v3
          </p>
        </div>
      </div>
    </motion.div>
  );
};
