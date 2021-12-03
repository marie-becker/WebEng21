import express from 'express'
import fileupload from 'express-fileupload'
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('C:\\Users\\marie\\WebstormProjects\\07_node\\03_express\\index.html')
})

app.post('/upload',function(req, res, next){
    let first = req.files.first;
    let second = req.files.second;
    res.send(mergefunction(first,second))
})

app.use(fileupload({createParentPath: true}));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})