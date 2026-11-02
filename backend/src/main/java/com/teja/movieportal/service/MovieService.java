package com.teja.movieportal.service;

import java.util.List;

import com.teja.movieportal.model.Movie;

public interface MovieService {
     Movie saveMovie(Movie m);
     
     Movie getMovie(Integer mid);
     
     List<Movie> getAlMovies();
     
     Movie updateMovie(Movie mid);
     
     void deleteMovie(Integer mid);
     
   
}
