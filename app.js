import express from 'express'
import cors from 'cors'
import sql from './database.js';
import { CompararHash, CriarHash } from './util.js'

const app = express();
app.use(cors());
app.use(express.json());

//ROTAS LOGIN E CADASTRO

app.post('/login', async (req, res) =>{
    try{
    const {email, senha} = req.body;

    const usuario = await sql`select
    id, senha, funcao from usuarios
    where email = ${email}`
    console.log(usuario)

    if(usuario.length == 0){
        return res.status(401).json('Usuarios ou senha incorretos')
    }

    const teste = await CompararHash(senha, usuario[0].senha)

    if(teste) {
        return res.status(200).json(usuario[0])
    }
    else{
        return res.status(401).json('Usuarios ou senha incorreto...')
    }
    
    }
    catch (error){
        return res.status(500).json('Error in login')
    }
})

app.post('/usuario', async (req, res) =>{
    try
    {
        const {nome, email, senha} = req.body

        const hash = await CriarHash(senha, 10)

        await sql`insert into usuarios(nome, email, senha, funcao)
        values (${nome}, ${email}, ${hash}, 'aluno')`;

        return res.status(200).json('Cadastrado com sucesso!')
    }
    catch (error){
        console.log(error)
        return res.status(500).json('Error to create user')
    }
})

//ROTAS QUESTÕES

app.get('/questoes', async (req, res) =>{
    try{
        const questao = await sql`SELECT * FROM questoes ORDER BY random() limit 1`
        return res.status(200).json(questao)
    }   
    catch(error){""
        return res.status(500).json("Erro ao consultar questão")
    }
})

app.post('/questao/nova', async (req, res) => {
    try
    {
      const { enunciado, materia, dificuldade, alternativa_a, alternativa_b, alternativa_c, alternativa_d, resposta_correta } = req.body;
      const insert = await sql `INSERT INTO questoes
      (enunciado, materia, dificuldade, alternativa_a, alternativa_b, alternativa_c, alternativa_d, resposta_correta)
      VALUES (${enunciado}, ${materia}, ${dificuldade}, ${alternativa_a}, ${alternativa_b}, ${alternativa_c}, ${alternativa_d}, ${resposta_correta})`;
      res.status(200).json('Questão criada com sucesso!');
    }

    catch(error){
      console.log(error)
      if(error.code == 23505){
        return res.status(409).json('Erro ao cadastrar')
      }
      return res.status(500).json('Erro ao cadastrar questão')
    }});

//LEVANTAR A API

app.listen(3000,()=>{
    console.log('Running!!')
});

/* app.get('/login/:usuario/:senha', async (req, res)=>{
    const { usuario, senha } = req.params

    const consulta = await sql`select * from usuarios where
    email = ${usuario} and senha = ${senha}`

    if(consulta != null && consulta != '')
        return res.status(200).json(consulta[0].id);
    else
        return res.status(401).json('Usuario ou senha incorretos')
}); */