import React from 'react'
import './FeaturedMovie.css'
import { RiStarSFill } from 'react-icons/ri'
import { GrPlayFill } from 'react-icons/gr'

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
        height: '90vh'
    }}>
        <div className='featured--vertical'>
            <div className='featured--horizontal'>
                <div className='featured--name'>{film.title}</div>
                <div className='featured--info'>
                    <div className='featured--info--stars'>
                        <RiStarSFill style={{color: 'yellow'}} />
                        {film.vote_average}
                    </div>
                    <div className='featured--info--release'>- {film.release_date} -</div>
                </div>
                <div className='featured--overview'>{film.overview}</div>
                <div className='featured--button'>
                    <button className='btn--play'><GrPlayFill /> Lecture</button>
                    <button className='btn--addList'>+ Ma Liste</button>
                </div>
                <div className='featured--categorie'>
                    Catégorie : {genres.join(' | ')}
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeaturedMovie