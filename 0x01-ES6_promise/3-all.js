import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // createUser().then((userData) => {
  //   const data = Object.values(userData);
  //   console.log(...data);

  //   uploadPhoto();
  // }, (err) => Error('Signup system offline', err));

  uploadPhoto().then(({ body }) => {
    createUser()
      .then(({ firstName, lastName }) => {
        console.log(body, firstName, lastName);
      }).catch(() => console.log('Signup system offline'));
  }).catch(() => console.log('Signup system offline'));
}
