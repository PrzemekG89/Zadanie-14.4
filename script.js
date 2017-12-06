var movies = [{
        id: 1,
        title: 'Harry Potter',
        image: 'images/Harry.jpg',
        descript: 'film o czarodzieju'
    },
    {
        id: 2,
        title: 'Hulk',
        image: 'images/Hulk.jpg',
        descript: 'film o zielonym stworze'
    },
    {
        id: 3,
        title: 'SpiderMan',
        image: 'images/Spiderman.jpg',
        descript: 'film o człowieku pająku'
    },
    {
        id: 4,
        title: 'Shrek',
        image: 'images/Shrek.jpg',
        descript: 'animowany film o ogrze mieszkającym na bagnach'
    },
    {
        id: 5,
        title: 'Rocky Balboa',
        image: 'images/Rocky.jpg',
        descript: 'film o bokserze'
    }
];


var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, { title: this.props.movie.title }),
                React.createElement(MovieImg, { image: this.props.movie.image }),
                React.createElement(MovieDescript, { descript: this.props.movie.descript })
            )
        )
    },
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },

    render: function() {
        return React.createElement('h2', {}, this.props.title)
    },
});

var MovieImg = React.createClass({
    propTypes: {
        image: React.PropTypes.string.isRequired,
    },

    render: function() {
        return React.createElement('img', { src: this.props.image })
    },
});

var MovieDescript = React.createClass({
    propTypes: {
        descript: React.PropTypes.string.isRequired,
    },

    render: function() {
        return React.createElement('p', {}, this.props.descript)
    },
});

var moviesElements = movies.map(function(movie) {
    return React.createElement(Movie, { key: movie.id, movie: movie })
});

var MovieList = React.createClass({
    render: function() {
        return React.createElement('ul', {}, moviesElements)
    }
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement(MovieList, {})
    );

ReactDOM.render(element, document.getElementById('app'));