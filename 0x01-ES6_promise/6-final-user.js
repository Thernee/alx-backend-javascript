import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled(
    uploadPhoto(fileName).catch(() => null),
    signUpUser(firstName, lastName),

  ).then((values) => console.log(values)).catch(() => null);
}
