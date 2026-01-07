
import { Movie } from './types';

export const MOVIES: Movie[] = [
  {
    id: '1',
    title: 'Ponniyin Selvan: Part 2',
    poster: 'https://picsum.photos/seed/ps2/600/900',
    backdrop: 'https://picsum.photos/seed/ps2bg/1200/600',
    story: 'Arulmozhi Varman continues his journey to become Rajaraja I, the greatest ruler of the Chola empire, while facing internal conspiracies and external threats.',
    cast: ['Vikram', 'Aishwarya Rai Bachchan', 'Jayam Ravi', 'Karthi', 'Trisha'],
    crew: { director: 'Mani Ratnam', music: 'A.R. Rahman', producer: 'Lyca Productions' },
    releaseYear: 2023,
    genres: ['Historical', 'Action', 'Drama'],
    rating: 8.4,
    trailerId: 'b7SREH6v18E',
    streamingLinks: [
      { name: 'Amazon Prime', url: 'https://www.amazon.com/adlp/ponniyin-selvan', icon: 'fa-brands fa-amazon' }
    ]
  },
  {
    id: '2',
    title: 'Leo',
    poster: 'https://picsum.photos/seed/leo/600/900',
    backdrop: 'https://picsum.photos/seed/leobg/1200/600',
    story: 'A mild-mannered cafe owner becomes a target of a ruthless gang who believe he is a former member of their organization.',
    cast: ['Vijay', 'Trisha', 'Sanjay Dutt', 'Arjun'],
    crew: { director: 'Lokesh Kanagaraj', music: 'Anirudh Ravichander', producer: 'Seven Screen Studio' },
    releaseYear: 2023,
    genres: ['Action', 'Thriller'],
    rating: 7.9,
    trailerId: 'Po3jVh9jgyM',
    streamingLinks: [
      { name: 'Netflix', url: 'https://www.netflix.com', icon: 'fa-solid fa-play' }
    ]
  },
  {
    id: '3',
    title: 'Jailer',
    poster: 'https://picsum.photos/seed/jailer/600/900',
    backdrop: 'https://picsum.photos/seed/jailerbg/1200/600',
    story: 'A retired jailer goes on a hunt to track down his son\'s killers, leading him into the dark underworld of idol smuggling.',
    cast: ['Rajinikanth', 'Vinayakan', 'Ramya Krishnan', 'Vasanth Ravi'],
    crew: { director: 'Nelson Dilipkumar', music: 'Anirudh Ravichander', producer: 'Sun Pictures' },
    releaseYear: 2023,
    genres: ['Action', 'Crime'],
    rating: 8.1,
    trailerId: 'xenOE1T_OT8',
    streamingLinks: [
      { name: 'Amazon Prime', url: 'https://www.amazon.com', icon: 'fa-brands fa-amazon' },
      { name: 'Sun NXT', url: 'https://www.sunnxt.com', icon: 'fa-solid fa-sun' }
    ]
  },
  {
    id: '4',
    title: 'Viduthalai Part 1',
    poster: 'https://picsum.photos/seed/viduthalai/600/900',
    backdrop: 'https://picsum.photos/seed/viduthalaibg/1200/600',
    story: 'A police recruit is torn between his duty and his conscience when he is tasked with capturing the leader of a separatist group.',
    cast: ['Soori', 'Vijay Sethupathi', 'Bhavani Sre'],
    crew: { director: 'Vetrimaaran', music: 'Ilaiyaraaja', producer: 'RS Infotainment' },
    releaseYear: 2023,
    genres: ['Crime', 'Drama'],
    rating: 8.5,
    trailerId: 'I7mH9Xw97yI',
    streamingLinks: [
      { name: 'Zee5', url: 'https://www.zee5.com', icon: 'fa-solid fa-z' }
    ]
  }
];
