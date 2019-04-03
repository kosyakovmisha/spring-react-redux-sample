import axios from '../axios/axios';
export const ADD_FILM = 'ADD_FILM', REMOVE_FILM = 'REMOVE_FILM', EDIT_FILM = 'EDIT_FILM', GET_FILMs = 'GET_FILMs'

const _addFilm = (film) => ({
    type: ADD_FILM,
    film
}); 

export const addFilm = (filmData = {
    title: '',
    description: '',
    author: '',
    published: 0
}) => {
    return (dispatch) => {
        const film = {
            title: filmData.title,
            description: filmData.description,
            published: filmData.published,
            author: filmData.author
        };

        return axios.post(`films/create`, film).then(result =>{
            dispatch(_addFilm(result.data));
        });
    };
};

const _removeFilm = ({ id } = {}) => ({
    type: REMOVE_FILM, 
    id
}); 

export const removeFilm = ({ id } = {}) => {
    return (dispatch) => {
        return axios.delete(`films/${id}`).then(() => {
            dispatch(_removeFilm({ id }));
        });
    }
};

const _editFilm = (id, updates) => ({
    type: EDIT_FILM, 
    id,
    updates
});

export const editFilm = (id, updates) => {
    return (dispatch) => {
        return axios.put(`films/${id}`, updates).then(() => {
            dispatch(_editFilm(id, updates));
        });
    }
};

const _getFilms = (films) => ({
    type: GET_FILMs,
    films
});

export const getFilms = () => {
    return (dispatch) => {
        return axios.get('films').then(result => {
            const films = [];

            result.data.forEach(item => {
                films.push(item);
            });

            dispatch(_getFilms(films));
        });
    };
};