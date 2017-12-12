const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  process.env.PORT = 3030;
  process.env.MONGODB_URI = 'mongodb://localhost/NoteApp';
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost/NoteApp';
}

console.log('****Working Environment is : ', env);
console.log('****MONGO Environment is : ', process.env.MONGODB_URI);