import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const values = await Promise.allSettled([
      uploadPhoto(fileName),
      signUpUser(firstName, lastName),
    ]);

    return values;
  } catch (err) {
    return err;
  }
}
