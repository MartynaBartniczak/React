# Redux

Poznaliśmy bibliotekę `redux`, która służy do budowania składnicy danych, zwanej `store`.

Reduksowy `store`:
- jest obiektem,
- jest miejscem, w którym aplikacja przetrzymuje cały swój stan, czyli wszystkie dane, które powinny być dostępne w trakcie jej działania
- zarządza swoim stanem za pomocą reducerów, które są funkcjami czystymi (operują na parametrach wejściowych,
nie wywołują efektów ubocznych i zwracają nową wartość - nie modyfikując parametrów wejściowych)
- tworzymy go używając funkcji `createStore` dostępnej w bibliotece `redux`
- posiada metody `subscribe`, `getState` oraz `dispatch` - ostatnia z nich służy do wysyłania akcji do `store`
  - akcja musi być obiektem, który posiada atrybut `type` (na podstawie którego jest rozróżniana przez reducery)
  - akcja może posiadać więcej niż jeden atrybut
  - każda akcja trafia poprzez `dispatch` do wszystkich reducerów - na jej podstawie zwracają one fragment stanu,
  za który są odpowiedzialne (jeżeli nie rozpoznają akcji, to powinny zwrócić taki stan, jaki posiadały poprzednio)
  
W celu określenia, które akcje przeznacznoe są dla danych reducerów stosuje się konwencję, która mówi, że typy akcji
powinniśmy prefiksować nazwą modułu, którego dotyczą (np. `{ type: 'counter/INCREMENT' }`).

# Moduł react-redux

Żeby podłączyć dowolny komponent do reduksowego `store` musimy użyć funkcji `connect` dostępnej w bibliotece
`react-redux`. Funkcja ta przyjmuje 2 parametry - są to funkcje mapStateToProps oraz mapDispatchToProps.
Zadaniem pierwszej jest ustalenie w jaki sposób komponent będzie czytał dane ze `store`, druga zaś ma
pomóc zdefiniować funkcje, które będą nam służyły do wysyłania (dispatch) akcji do `store`. Ważne jest, żeby
obiekty zwracane przez każdą z nich posiadały różne od siebie atrybuty, gdyż wszystkie docelowo lądują
w `props` przy wywołaniu danego komponentu.

W `mapStateToProps` ustalamy pod jakimi nazwami chcemy mieć dostęp do odpowiednich części globalnego `state`
aplikacji.

W `mapDispatchToProps` przygotowujemy sobie funkcje pomocnicze, które będą przez nas używane w obrębie komponentu w celu komunikacji ze `store`. Funkcje te będą miały dostęp do metody `dispatch` danego `store` i będą używane do wysyłania do `store` obiektów akcji.

Funkcja `connect` jest funkcją wyższego rzędu, która zwraca funkcję, będącą jednocześnie komponentem wyższego rzędu, do której możemy przekazać nasz komponent uzyskując przy tym kompozycję zdolną do bezpośredniej komunikacji ze `store`.

# Redux Dev Tools

Ten dodatek do Chrome'a umożliwia nam podglądanie zawartości `store` w aplikacji, przewijanie stanu aplikacji wstecz,
wysyłanie akcji do `store` oraz podglądanie akcji przychodzących do `store`. Wykorzystanie go w aplikacji wymaga dodania
do definicji `store` kilku obowiązkowych linijek zależnych od stopnia zaawansowania ustawień reduksa w naszej aplikacji.

# Instalacja podstawowa

W głównym pliku naszej aplikacji potrzebujemy zaimportować komponent `Provider` z `react-redux` oraz `store`, który przekażemy do niego w propsach. Obiekt `store` tworzymy używając funkcji `createStore` (z modułu `redux`), przekazując do niej nasz autorski reducer (może on być złożony z kilku mniejszych reducerów połączonych za pomocą `combineReducers` - też z paczki `redux`). Komponent `Provider` powinien wrapować całą aplikację - dzięki temu dowolny komponent w aplikacji możemy podłączyć do `store` za pomocą funkcji `connect`.
