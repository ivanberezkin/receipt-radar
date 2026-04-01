export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  // Hämta delarna vi behöver
  const year = date.getFullYear().toString(); // Tar sista två siffrorna (t.ex. "26")
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Månader är 0-indexerade
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};
