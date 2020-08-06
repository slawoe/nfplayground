export async function getNorrisJokes() {
  const response = await fetch(
    "http://api.icndb.com/jokes/random?firstName=Slawo"
  );

  if (!response.ok) {
    throw new Error(response.status);
  }

  const data = await response.json();
  return data;
}
