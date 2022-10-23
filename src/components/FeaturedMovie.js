import React from 'react'
import './FeaturedMovie.css'

const FeaturedMovie = ({film}) => {
    console.log(film)
    let genres = []
    for ( let genre of film.genres) {
        genres.push(genre.name)
    }
  return (
    <section className='featured' style={{
        backgroundSize: 'cover',
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${film.backdrop_path})`,
        backgroundPosition: 'center',
        height: '80vh'
    }}>
        <div className='featured--vertical'>
            <div className='featured--horizontal'>
                <div className='featured--name'>{film.title}</div>
                <div className='featured--info'>
                    <div className='featured--info--stars'>{film.vote_average}</div>
                    <div className='featured--info--release'>{film.release_date}</div>
                </div>
                <div className='featured--overview'>{film.overview}</div>
                <div className='featured--button'>
                    <button className='btn'>Lecture</button>
                    <button className='btn'>+ Ma Liste</button>
                </div>
                <div>
                    Catégorie : {genres.join(' | ')}
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeaturedMovie