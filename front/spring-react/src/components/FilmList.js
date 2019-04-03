import React from 'react';
import { connect } from 'react-redux';
import  Film  from './Film';

const FilmList = (props) => (
    <div className="container__list">
        FilmList:
        <ul>
            {props.films.map(film => {
                return(
                    <li key={film.id}>
                        <Film {...film} />
                    </li>
                );
            })}
        </ul>
    </div>
);

const mapStateToProps = (state) => {
    return {
        films: state
    };
};

export default connect(mapStateToProps)(FilmList);
