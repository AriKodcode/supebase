import express from 'express';
import checkBody from '../middleware/checkUserByBody.js';
import supabase from '../connectionToDB.js';

const login = express();

login.post('/', checkBody, async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const { data: users } = await supabase
    .from('users')
    .select()
    .eq('username', username)
    .eq('password', password);
  if (users.length >= 1) {
    res.status(200).send('Login successful');
  }
  res.status(404).send('user not found!');
});

export default login;
