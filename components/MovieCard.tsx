
import React from 'react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  onClick: (movie: Movie) => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  return (
    <div 
      onClick={() => onClick(movie)}
      className="group relative bg-zinc-900 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-900/20"
    >
      <div className="aspect-[2/3] overflow-hidden">
        <img 
          src={movie.poster} 
          alt={movie.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="bg-red-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
            {movie.genres[0]}
          </span>
          <span className="text-zinc-400 text-xs">{movie.releaseYear}</span>
        </div>
        <h3 className="font-bold text-lg leading-tight truncate">{movie.title}</h3>
        <div className="flex items-center gap-1 mt-1 text-yellow-500 text-sm">
          <i className="fa-solid fa-star text-xs"></i>
          <span>{movie.rating}</span>
        </div>
      </div>
    </div>
  );
};
