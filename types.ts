
export interface StreamingPlatform {
  name: 'Netflix' | 'Amazon Prime' | 'Disney+ Hotstar' | 'Sun NXT' | 'Zee5' | 'YouTube';
  url: string;
  icon: string;
}

export interface Movie {
  id: string;
  title: string;
  originalTitle?: string;
  poster: string;
  backdrop: string;
  story: string;
  cast: string[];
  crew: {
    director: string;
    music: string;
    producer: string;
  };
  releaseYear: number;
  genres: string[];
  rating: number;
  trailerId: string;
  streamingLinks: StreamingPlatform[];
}
