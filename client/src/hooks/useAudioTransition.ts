import { useState, useEffect, useRef } from 'react';

/**
 * useAudioTransition Hook
 * Manages smooth transitions between ambient audio tracks
 * Fades out current track and fades in next track
 */

interface UseAudioTransitionOptions {
  fadeInDuration?: number;
  fadeOutDuration?: number;
  volume?: number;
}

export function useAudioTransition(options: UseAudioTransitionOptions = {}) {
  const {
    fadeInDuration = 1000,
    fadeOutDuration = 500,
    volume = 0.3,
  } = options;

  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Create or get audio element
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.volume = 0;
      audioRef.current.loop = true;
    }
  }, []);

  // Transition to new track
  const transitionToTrack = (trackUrl: string) => {
    if (!audioRef.current) return;

    // Clear existing fade
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
    }

    const audio = audioRef.current;

    // If same track, just ensure it's playing
    if (currentTrack === trackUrl && audio.src === trackUrl) {
      if (audio.paused) {
        audio.play().catch(() => {
          // Autoplay blocked, user interaction required
        });
      }
      return;
    }

    // Fade out current track
    if (audio.src && !audio.paused) {
      const currentVolume = audio.volume;
      const fadeOutStep = currentVolume / (fadeOutDuration / 50);
      let steps = 0;

      fadeIntervalRef.current = setInterval(() => {
        steps++;
        audio.volume = Math.max(0, currentVolume - fadeOutStep * steps);

        if (audio.volume <= 0) {
          audio.pause();
          audio.currentTime = 0;

          // Load and fade in new track
          audio.src = trackUrl;
          audio.volume = 0;
          audio.play().catch(() => {
            // Autoplay blocked
          });

          const fadeInStep = volume / (fadeInDuration / 50);
          let fadeInSteps = 0;

          const fadeInInterval = setInterval(() => {
            fadeInSteps++;
            audio.volume = Math.min(volume, fadeInStep * fadeInSteps);

            if (audio.volume >= volume) {
              clearInterval(fadeInInterval);
              fadeIntervalRef.current = null;
            }
          }, 50);

          setCurrentTrack(trackUrl);
          clearInterval(fadeIntervalRef.current!);
        }
      }, 50);
    } else {
      // No current track, just play new one
      audio.src = trackUrl;
      audio.volume = 0;
      audio.play().catch(() => {
        // Autoplay blocked
      });

      const fadeInStep = volume / (fadeInDuration / 50);
      let fadeInSteps = 0;

      fadeIntervalRef.current = setInterval(() => {
        fadeInSteps++;
        audio.volume = Math.min(volume, fadeInStep * fadeInSteps);

        if (audio.volume >= volume) {
          clearInterval(fadeIntervalRef.current!);
          fadeIntervalRef.current = null;
        }
      }, 50);

      setCurrentTrack(trackUrl);
    }
  };

  // Stop audio
  const stopAudio = () => {
    if (!audioRef.current) return;

    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
    }

    const audio = audioRef.current;
    const currentVolume = audio.volume;
    const fadeOutStep = currentVolume / (fadeOutDuration / 50);
    let steps = 0;

    fadeIntervalRef.current = setInterval(() => {
      steps++;
      audio.volume = Math.max(0, currentVolume - fadeOutStep * steps);

      if (audio.volume <= 0) {
        audio.pause();
        audio.currentTime = 0;
        clearInterval(fadeIntervalRef.current!);
        fadeIntervalRef.current = null;
        setCurrentTrack(null);
      }
    }, 50);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  return {
    transitionToTrack,
    stopAudio,
    currentTrack,
    audioRef,
  };
}
