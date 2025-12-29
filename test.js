import supabase from './connectionToDB.js';

// async function main() {
//   const insertRes = await supabase
//   .from('products')
//   .select()
//   console.log("insert:", insertRes);

//   const selectRes = await supabase.from("todos").select("*");
//   console.log("select:", selectRes);
// }
const select = await supabase.from('users').select('*');
console.log('select', select.data);
