# scroll-hide.js
E' un piccolo plugin jQuery per la scomparsa del menu quando si scrolla in basso e la ricomparsa quando si scrolla in alto, un comportamento estremamente utile sui dispositivi mobili, per dare all'area di contenuto più spazio possibile e favorire la lettura.

## Doc
Il plugin è estremamente semplice e leggero, prima di tutto bisogna aggiungere scroll-hide.js nella pagina, la cartella contiene anche il file animation.css con un paio di stili di base, per nascondere l'area interessata con una gradevole animazione.

Non ci resta che agganciare scrollHide().
```javascript
$('header').scrollHide();
```
## Opzioni

Il plugin è provvisto di una serie di opzioni:
1. **scrollDelta** = equivale alla velocità di scorrimento superata la quale la testata viene nascosta o resa visibile, il valore di default è 5 (int)
2. **scrollOffset** = equivale al valore di scorrimento superato il quale viene attivato il plugin, il valore di default è 200 (int) quindi la testata non scomparirà indipendentemente da tutto se non si scrolla in basso per almeno 200px
3. **scrollClass** = equivale alla classe che viene aggiunta all'elemento selezionato, serve ad agganciare le animazioni del file css animation.css, valore di default "scrh-header" (string)
4. **scrollClassHide** = equivale alla classe che viene aggiunta all'elemento selezionato quando si scorre verso il basso, serve ad agganciare le animazioni del file css animation.css, valore di default "scrh-hide" (string)
5. **onScroll** = è una funzione callback che viene lanciata quando si scorre verso il basso e verso l'alto, ritornando rispettivamente "up" o "down" (function)

## Esempio
Nel seguente esempio andiamo a specificare delle impostazioni custom per il plugin, vediamo inoltre come utilizzare la callback onScroll.
```javascript
$('header').scrollHide({
  scrollDelta: 10,
  scrollOffset: 400,
  onScroll: function(context, msg) {
    if (msg === 'up') $(context).addClass('su');
    if (msg === 'down') $(context).addClass('giu');
  }
});
```
MIT LICENSE
