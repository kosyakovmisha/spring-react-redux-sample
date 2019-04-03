package com.example.film.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name = "film")
public class Film implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "title")
    private String title;

    @Column(name = "author")
    private String author;

    @Column(name = "description")
    private String description;

    @Column(name = "published")
    private int published;

    public String toString() {
        return "Film [id=" + id + ", title=" + title + ", author=" + author + ", description=" + description
                + ", published" + published + "]";
    }

    protected Film() {}


}
