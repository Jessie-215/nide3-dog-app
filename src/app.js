import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs';
import {getDogFact} from './util/dogFact.js'


// define paths for Express config
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

const app = express()

// setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


// setup static directory to server
app.use(express.static(publicDirPath))

app.get('', (req, res)=>{
    res.render('index', {title: 'Dog App', name: 'Jessica'})
})

app.get('/dog', (req, res)=>{
    if (!req.query.search) {
        return res.send({error: 'search term'})
    }
    console.log(req.query)

    getDogFact('golden retriever', (grooming)=>{
    const products = {
        search: req.query.search
    }
    const dogFound = {
        name: req.query.search,
        grooming: grooming
    } 
    res.send(dogFound)

    })
})

app.get('/about', (req, res)=>{
    res.render('about', {title: 'about', name: 'Jessica'})
})

app.get('/help', (req, res)=>{
    res.render('help', {title: 'help page', name: 'Jessica'})
})

app.get('/help/*', (req, res)=>{
    res.send('help page not found !')
})

app.get('*', (req, res)=>{
    res.send('this is error page !')
})

app.listen(3000, ()=>{
    console.log('Server is up on part 3000...');
});


