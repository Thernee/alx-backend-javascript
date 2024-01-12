export default function handleResponseFromAPI(promise) {
  promise.then(() => ({
    status: 200,
    body: 'Success',
  })).catch(() => Error()).finally('Got a response from the API');
}
