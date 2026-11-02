package com.teja.movieportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teja.movieportal.model.Movie;
import com.teja.movieportal.repository.MovieRepo;

@Service
public class MovieServiceImpl implements MovieService {

    @Autowired
    MovieRepo movieRepo;

    @Override
    public Movie saveMovie(Movie m) {
        return movieRepo.save(m);
    }

    @Override
    public Movie getMovie(Integer mid) {
        return movieRepo.findById(mid).orElseThrow();
    }

    @Override
    public List<Movie> getAlMovies() {
        return movieRepo.findAll();
    }

    @Override
    public Movie updateMovie(Movie mid) {
        return movieRepo.save(mid);
    }

    @Override
    public void deleteMovie(Integer mid) {
         movieRepo.deleteById(mid);
    }
}