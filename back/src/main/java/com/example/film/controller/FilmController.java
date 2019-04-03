package com.example.film.controller;

import com.example.film.model.Film;
import com.example.film.repository.FilmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class FilmController {

    @Autowired
    FilmRepository filmRepository;

    @GetMapping("/films")
    public List<Film> getAllFilms() {
        System.out.println("Get all films...");

        List<Film> list = new ArrayList<>();
        Iterable<Film> customers = filmRepository.findAll();

        customers.forEach(list::add);
        return list;
    }

    @PostMapping("/films/create")
    public Film createFilm(@Valid @RequestBody Film film) {
        System.out.println("Create film: " + film.getTitle() + "...");

        return filmRepository.save(film);
    }

    @GetMapping("/films/{id}")
    public ResponseEntity<Film> getFilm(@PathVariable("id") Long id) {
        System.out.println("Get film by id...");

        Optional<Film> filmData = filmRepository.findById(id);
        if (filmData.isPresent()) {
            return new ResponseEntity<>(filmData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/films/{id}")
    public ResponseEntity<Film> updateFilm(@PathVariable("id") Long id, @RequestBody Film film) {
        System.out.println("Update film with id = " + id + "...");

        Optional<Film> filmData = filmRepository.findById(id);
        if (filmData.isPresent()) {
            Film savedFilm = filmData.get();
            savedFilm.setTitle(film.getTitle());
            savedFilm.setAuthor(film.getAuthor());
            savedFilm.setDescription(film.getDescription());
            savedFilm.setPublished(film.getPublished());

            Film updatedFilm = filmRepository.save(savedFilm);
            return new ResponseEntity<>(updatedFilm, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/films/{id}")
    public ResponseEntity<String> deleteFilm(@PathVariable("id") Long id) {
        System.out.println("Delete film with id = " + id + "...");

        try {
            filmRepository.deleteById(id);
        } catch (Exception e) {
            return new ResponseEntity<>("Fail to delete", HttpStatus.EXPECTATION_FAILED);
        }

        return new ResponseEntity<>("Book has been delete", HttpStatus.OK);
    }
}
