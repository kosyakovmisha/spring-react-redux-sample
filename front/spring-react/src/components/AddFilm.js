import React from 'react';
import FilmForm from './FilmForm';
import { connect } from 'react-redux';
import { addFilm } from '../actions/films';

const AddFilm = (props) => (
    <div className="container__box">
        <h3>Set Film Info:</h3>
        <FilmForm 
            onSubmitFilm={(film) => {
                props.dispatch(addFilm(film));
                props.history.push('/');
            }}
         />
    </div>
);

export default connect()(AddFilm);