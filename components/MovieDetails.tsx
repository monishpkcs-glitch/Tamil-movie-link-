
import React from 'react';
import { Movie } from '../types';

interface MovieDetailsProps {
  movie: Movie;
  onClose: () => void;
}

export const MovieDetails: React.FC<MovieDetailsProps> = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-sm animate-in fade-in duration-300">
      <button 
        onClick={onClose}
        className="fixed top-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <i className="fa-solid fa-xmark text-2xl"></i>
      </button>

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Poster & Trailer */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black">
              <img src={movie.poster} alt={movie.title} className="w-full h-auto" />
            </div>
            
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
              <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4">Official Trailer</h4>
              <div className="aspect-video rounded-xl overflow-hidden bg-black">
                <iframe 
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${movie.trailerId}`}
                  title="Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column: Info & Links */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="text-red-500 font-bold tracking-widest uppercase text-sm">Tamil Cinema</span>
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-400">{movie.releaseYear}</span>
                <span className="text-zinc-500">•</span>
                <div className="flex items-center gap-1 text-yellow-500">
                  <i className="fa-solid fa-star"></i>
                  <span className="font-bold">{movie.rating} / 10</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">{movie.title}</h1>
              <div className="flex flex-wrap gap-2">
                {movie.genres.map(g => (
                  <span key={g} className="px-3 py-1 rounded-full bg-zinc-800 text-xs font-medium border border-zinc-700">{g}</span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold border-l-4 border-red-600 pl-4 uppercase tracking-wider">Synopsis</h3>
              <p className="text-zinc-300 text-lg leading-relaxed">{movie.story}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold border-l-4 border-red-600 pl-4 uppercase tracking-wider text-sm">Cast</h3>
                <div className="flex flex-wrap gap-2">
                  {movie.cast.map(c => (
                    <span key={c} className="bg-zinc-900 px-3 py-2 rounded-lg text-sm border border-zinc-800">{c}</span>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold border-l-4 border-red-600 pl-4 uppercase tracking-wider text-sm">Crew</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="text-zinc-500">Director:</span> <span className="text-zinc-200">{movie.crew.director}</span></p>
                  <p><span className="text-zinc-500">Music:</span> <span className="text-zinc-200">{movie.crew.music}</span></p>
                  <p><span className="text-zinc-500">Producer:</span> <span className="text-zinc-200">{movie.crew.producer}</span></p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                <i className="fa-solid fa-circle-play text-red-600"></i>
                WATCH NOW ON
              </h3>
              <div className="flex flex-wrap gap-4">
                {movie.streamingLinks.map(link => (
                  <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-zinc-100 text-black px-6 py-4 rounded-2xl font-black transition-all hover:scale-105 hover:bg-white"
                  >
                    <i className={`${link.icon} text-xl`}></i>
                    {link.name.toUpperCase()}
                  </a>
                ))}
              </div>
              <p className="mt-4 text-xs text-zinc-500 italic">* You will be redirected to the official legal streaming platform.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
