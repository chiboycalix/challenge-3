/* eslint-disable no-console */
import express from 'express';
import test from './test';

test('bable is working');


const app = express();


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
