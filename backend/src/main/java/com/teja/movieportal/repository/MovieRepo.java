package com.teja.movieportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teja.movieportal.model.Movie;

@Repository
public interface MovieRepo extends JpaRepository<Movie, Integer>{

}
