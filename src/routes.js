const express = require('express');
const db = require('./database/connection');

const router = express.Router();


router.get('/users', async(request, response) => {

  const users = await db('users')

  return response.json({
    users
  })
})

router.post('/insert-user', async(request, response) => {
  const { name, document_number } = request.body;

  try {
    await db('users').insert({
      name,
      document_number
    })
    return response.status(201).send();
  } catch (error) {
    return response.status(400).json({
      error
    });
  }
})

module.exports = router;
