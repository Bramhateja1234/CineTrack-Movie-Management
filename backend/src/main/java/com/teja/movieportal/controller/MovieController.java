package com.teja.movieportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teja.movieportal.model.Movie;
import com.teja.movieportal.service.MovieServiceImpl;

@RestController
@RequestMapping("/Movie")
@CrossOrigin(origins = "http://localhost:3001")


public class MovieController {
	
	@Autowired
	MovieServiceImpl movieServiceImpl;
	
	
	//http://localhost:2222/Movie/createMovie
	@PostMapping("/createMovie")
	Movie createMovie(@RequestBody Movie m) {
		return movieServiceImpl.saveMovie(m);
	}
	
	//http://localhost:2222/Movie/getMovie/1
	@GetMapping("/getMovie/{mid}")
	Movie getMovie(@PathVariable Integer mid) {
		return movieServiceImpl.getMovie(mid);
	}
	
	//http://localhost:2222/Movie/deleteMovie/4
	@DeleteMapping("/deleteMovie/{mid}")
	String deleteMovie(@PathVariable Integer mid){
		movieServiceImpl.deleteMovie(mid);
		return "Movie deleted " + mid + " Successfully";
	}
	
	//http://localhost:2222/Movie/updateMovie/3
	@PutMapping("/updateMovie/{mid}")
	Movie updateMovie(@PathVariable Integer mid,@RequestBody Movie m) {
		
		Movie movieFromDB = getMovie(mid);
		
		movieFromDB.setDirector(m.getDirector());
		movieFromDB.setLanguage(m.getLanguage());
		movieFromDB.setRating(m.getRating());
		movieFromDB.setReleaseYear(m.getReleaseYear());
		movieFromDB.setTitle(m.getTitle());
		
		return movieServiceImpl.updateMovie(movieFromDB);

	}
	//http://localhost:2222/Movie/getAllMovies
	@GetMapping("/getAllMovies")
	List<Movie>getAllMovies(){
		return movieServiceImpl.getAlMovies();
	}

}
