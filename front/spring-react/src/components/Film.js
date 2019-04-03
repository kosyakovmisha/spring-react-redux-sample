import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFilm } from '../actions/films';

import '../styles/style.css';

const Film = ({ id, title, description, author, published, dispatch }) => (
    <div className="div__film">
        <Link to={`/film/${id}`}>
            <h4>{title} ({published})</h4>
        </Link>
        <p>Author: {author}</p>
        {description && <p>{description}</p>}
        <button onClick={() => {
            dispatch(removeFilm({ id }))
        }}>Remove</button>
    </div>
);

export default connect()(Film);