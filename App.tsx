
import React, { useState, useMemo } from 'react';
import { MOVIES } from './data';
import { Movie } from './types';
import { MovieCard } from './components/MovieCard';
import { MovieDetails } from './components/MovieDetails';

const App: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeGenre, setActiveGenre] = useState('All');

  const genres = useMemo(() => {
    const allGenres = MOVIES.flatMap(m => m.genres);
    return ['All', ...Array.from(new Set(allGenres))];
  }, []);

  const filteredMovies = useMemo(() => {
    return MOVIES.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            movie.cast.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesGenre = activeGenre === 'All' || movie.genres.includes(activeGenre);
      return matchesSearch && matchesGenre;
    });
  }, [searchQuery, activeGenre]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setSearchQuery(''); setActiveGenre('All'); }}>
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              <i className="fa-solid fa-film text-xl"></i>
            </div>
            <span className="text-2xl font-black tracking-tighter hidden sm:block">KOLLY<span className="text-red-600">STREAM</span></span>
          </div>

          <div className="flex-1 max-w-md relative group">
            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-red-500 transition-colors"></i>
            <input 
              type="text" 
              placeholder="Search movies, actors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-full py-2.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-red-600/50 transition-all text-sm"
            />
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">Trending</a>
            <a href="#" className="hover:text-white transition-colors">New Releases</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/hero/1920/1080" 
            className="w-full h-full object-cover opacity-30 scale-105 blur-sm"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <span className="bg-red-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-[0.2em] mb-4 inline-block">Featured Today</span>
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-none">Experience Tamil Cinema Like Never Before.</h2>
            <p className="text-zinc-400 text-lg md:text-xl mb-8 leading-relaxed">
              Discover official streaming links, exclusive trailers, and deep dives into the latest Kollywood blockbusters. Legal. Official. High Quality.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-red-600 hover:text-white transition-all flex items-center gap-2">
                <i className="fa-solid fa-play"></i> Watch Trailer
              </button>
              <button className="bg-zinc-900 border border-zinc-800 px-8 py-3 rounded-full font-bold hover:bg-zinc-800 transition-all">
                Browse Library
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 flex-1 w-full">
        {/* Genre Filter */}
        <div className="flex items-center gap-3 overflow-x-auto pb-8 no-scrollbar">
          {genres.map(genre => (
            <button
              key={genre}
              onClick={() => setActiveGenre(genre)}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                activeGenre === genre 
                ? 'bg-red-600 border-red-600 text-white shadow-lg shadow-red-600/20' 
                : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredMovies.map(movie => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              onClick={setSelectedMovie} 
            />
          ))}
          {filteredMovies.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <i className="fa-solid fa-magnifying-glass text-4xl text-zinc-800 mb-4"></i>
              <p className="text-zinc-500 text-lg font-medium">No movies found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900/30 border-t border-zinc-900 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
             <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                <i className="fa-solid fa-film text-sm"></i>
              </div>
              <span className="text-xl font-black tracking-tighter">KOLLY<span className="text-red-600">STREAM</span></span>
            </div>
            <p className="text-zinc-500 max-w-md leading-relaxed">
              Your ultimate gateway to Kollywood. We aggregate legal streaming information to help fans enjoy their favorite movies while supporting the industry.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-zinc-400">OTT Partners</h4>
            <ul className="space-y-3 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-red-500">Netflix</a></li>
              <li><a href="#" className="hover:text-red-500">Amazon Prime Video</a></li>
              <li><a href="#" className="hover:text-red-500">Disney+ Hotstar</a></li>
              <li><a href="#" className="hover:text-red-500">Sun NXT</a></li>
              <li><a href="#" className="hover:text-red-500">Zee5</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-zinc-400">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-red-600 transition-all">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-red-600 transition-all">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-red-600 transition-all">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-zinc-800 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} KollyStream. All rights reserved. Content provided for informational purposes only.
        </div>
      </footer>

      {/* Modal Overlay */}
      {selectedMovie && (
        <MovieDetails 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}
    </div>
  );
};

export default App;
