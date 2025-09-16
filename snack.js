const books = [
  {
    title: "React Billionaire",
    pages: 250,
    author: {
      name: "Alice",
      age: 35,
    },
    available: false,
    price: "101€",
    tags: ["advanced", "js", "react", "senior"],
  },
  {
    title: "Advanced JS",
    pages: 500,
    author: {
      name: "Bob",
      age: 20,
    },
    available: true,
    price: "25€",
    tags: ["advanced", "js", "mid-senior"],
  },
  {
    title: "CSS Secrets",
    pages: 320,
    author: {
      name: "Alice",
      age: 17,
    },
    available: true,
    price: "8€",
    tags: ["html", "css", "junior"],
  },
  {
    title: "HTML Mastery",
    pages: 200,
    author: {
      name: "Charlie",
      age: 50,
    },
    available: false,
    price: "48€",
    tags: ["html", "advanced", "junior", "mid-senior"],
  },
];

// Snack 1 - Filtra e Modifica
console.log("SNACK 1////////////");

// Crea una funzione che somma due numeri.
const somma = function (a, b) {
  return console.log(a + b);
};
somma(10, 5);

// Crea un array (longBooks) con i libri che hanno più di 300 pagine;
const longBooks = books.filter((b) => b.pages > 300);
console.log(longBooks);

// Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
const longBooksTitles = longBooks.map((b) => b.title);
console.log(longBooksTitles);

// Stampa in console ogni titolo nella console.
const allTitles = books.map((b) => console.log(b.title));

// Snack 2 - Il primo libro scontato
console.log("SNACK 2////////////");

// Creare un array (availableBooks) che contiene tutti i libri disponibili.
const availableBooks = books.filter((b) => b.available === true);
console.log(availableBooks);

// Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
const discountedBooks = availableBooks.map((b) => {
  return {
    ...b,
    price: parseFloat(b.price).toFixed(2) * 0.8,
  };
});
console.log(discountedBooks);

// Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).
const fullPricedBook = discountedBooks.find((b) => b.price % 1 === 0);
console.log(fullPricedBook);

// Snack 3 - Ordinare gli Autori
console.log("SNACK 3////////////");

// Creare un array (authors) che contiene gli autori dei libri.
const authors = books.map((b) => b.author);
console.log(authors);

// Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.

const areAuthorsAdult = authors.every((b) => b.age >= 18);
console.log(areAuthorsAdult);

// Ordina l’array authors in base all’età, senza creare un nuovo array.

const orderByAge = authors.sort((a, b) => {
  return a.age - b.age;
});
console.log(orderByAge);

// (se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)

const sortedAuthors = [...authors].sort((a, b) => {
  return areAuthorsAdult ? a.age - b.age : b.age - a.age;
});

console.log(sortedAuthors);

// Snack 4 - Calcola l’età media
console.log("SNACK 4 ///////////");
// Creare un array (ages) che contiene le età degli autori dei libri.

const age = authors.map((a) => a.age);
console.log(age);

// Calcola la somma delle età (agesSum) usando reduce.

const agesSum = age.reduce((acc, num) => {
  return acc + num;
}, 0);

console.log("La somma delle età è:", agesSum);

// Stampa in console l’età media degli autori dei libri.

const mediaEtà = agesSum / authors.length;
console.log(mediaEtà);

// Snack 5 (Bonus) - Raccogli i libri
// Usando la l'API http://localhost:3333/books/{id} usa la combinazione di .map() e Promise.all(), per creare una funzione (getBooks) che a partire da un array di id (ids), ritorna una promise che risolve un array di libri (books).
// Testala con l’array [2, 13, 7, 21, 19] .
