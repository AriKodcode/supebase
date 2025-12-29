import express from 'express';
import supabase from '../connectionToDB.js';
import checkHeaders from '../middleware/checkUserByHeaders.js';

const getAllProducts = express();
getAllProducts.get('/', checkHeaders, async (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const { data: users } = await supabase
    .from('users')
    .select()
    .eq('username', username)
    .eq('password', password);
  if (users.length >= 1) {
    const select = await supabase.from('products').select('*');
    res.status(200).send(select);
  }
  res.status(404).send('Unauthorized');
});
export default getAllProducts;
