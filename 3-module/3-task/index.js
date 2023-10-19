function camelize(str) {
return str
.split('-') // ['', 'adfd', 'efefe', 'fefe']
.map( 
    (word, index) => index 
    ? word[0].toUpperCase() + word.slice(1) 
    : word
) // ['', 'Adfd', 'Efefe', 'Fefe']
.join('')
}

