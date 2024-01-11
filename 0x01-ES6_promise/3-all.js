import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  createUser().then((userData) => {
    const data = Object.values(userData);
    console.log(...data);

    uploadPhoto();
  }, (err) => Error('Signup system offline', err));
}
