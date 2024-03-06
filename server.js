const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Endpoint para listar os endpoints disponíveis
app.get('/', (req, res) => {
  res.send(`
    <h1>Endpoints disponíveis:</h1>
    <ul>
      <li><a href="/posts">/posts</a></li>
      <li><a href="/comments">/comments</a></li>
      <li><a href="/albums">/albums</a></li>
      <li><a href="/photos">/photos</a></li>
      <li><a href="/todos">/todos</a></li>
      <li><a href="/users">/users</a></li>
    </ul>
  `);
});

// Endpoint para listar posts
app.get('/posts', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para listar comentários
app.get('/comments', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para listar álbuns
app.get('/albums', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para listar fotos
app.get('/photos', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para listar tarefas
app.get('/todos', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para listar usuários
app.get('/users', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
