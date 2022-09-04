import { Component } from 'react';

import { LinearProgress } from "@mui/material";
import { Alert } from "@mui/material";

import MarvelService from '../../services/MarvelService';
import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';


class RandomChar extends Component  {

    state = {
        char: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChar();
    }

    marvelService = new MarvelService();

    onCharloaded = (char) => {
        this.setState({char, loading: false})
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
        this.marvelService
            .getCharacter(id)
            .then(this.onCharloaded)
            .catch(this.onError);
    }

    tryIt = () => {
        this.updateChar();
        this.setState({
            loading: true
        })
    }


    render () {
        const {char, loading, error} = this.state;
        const errorMessage = error ? <Alert severity="error"/> : null;
        const spinner = loading ? <LinearProgress/> : null;
        const content = !(error || loading) ? <View char={char}/> : null;
        return (
            <div className="randomchar">
                {content}
                {spinner}
                {errorMessage}
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button className="button button__main">
                        <div onClick={this.tryIt} className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        )
    }
}


const View = ({char}) => {
    const {name, desciption, thumbnail, wiki, homepage} = char;
    let className = "randomchar__img"
    if (thumbnail.indexOf('image_not_available.jpg') !== -1) {
        className = "randomchar__imgunk"
    }
    return (
        <div className="randomchar__block">
                    <img src={thumbnail} alt="Random character" className={className}/>
                    <div className="randomchar__info">
                        <p className="randomchar__name">{name}</p>
                        <p className="randomchar__descr">
                            {desciption}
                        </p>
                        <div className="randomchar__btns">
                            <a href={homepage} className="button button__main">
                                <div className="inner">homepage</div>
                            </a>
                            <a href={wiki} className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
    )
}

export default RandomChar;