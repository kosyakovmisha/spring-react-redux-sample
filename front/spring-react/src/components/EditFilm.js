import React from 'react';
import FilmForm from './FilmForm'
import { connect } from 'react-redux';
import { editFilm } from '../actions/films'

const EditFilm = (props) => (
    <div className='container__box'>
        <FilmForm 
            film={props.film}
            onSubmitFilm={(film) => {
                props.dispatch(editFilm(props.film.id, film));
                props.history.push('/');
            }}
        />
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        film: state.find((film) =>
            film.id == props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditFilm);