import {generate} from 'random-words'

const RandomWords = () => {
    return generate({minLength: 5, maxLength: 5})
}

export default RandomWords;