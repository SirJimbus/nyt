## Riassunto breve

...

## Search Form

In Articles.js viene utilizzato il componente SearchForm che accetta una funzione searchText come prop. Questa funzione viene utilizzata per impostare il termine di ricerca quando viene inviato il modulo di ricerca.

La componente Articles utilizza i hook di stato di React per tenere traccia di diversi stati:

articles: l'elenco di articoli che verrà visualizzato sulla pagina.

term: il termine di ricerca attuale.

isLoading: un flag che indica se i dati sono ancora in fase di caricamento.

La componente utilizza anche il hook useEffect per effettuare una richiesta all'API del New York Times ogni volta che il termine di ricerca viene modificato.

Nel componente SearchForm, viene gestito il comportamento del modulo di ricerca utilizzando una funzione handleSubmit. Quando il modulo viene inviato, viene chiamata la funzione searchText passata come prop dalla componente Articles e il testo di ricerca viene passato come argomento. Questo fa sì che la componente Articles imposti il termine di ricerca e, di conseguenza, effettui una nuova richiesta all'API.

## Prova

L' applicazione si può trovare all'indirizzo https://gentle-sfogliatella-6134f6.netlify.app
