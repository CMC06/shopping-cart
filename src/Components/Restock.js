const Restock = ({ query, setQuery, setItems, restockProducts }) => {

  

  return (
    <form
          onSubmit={(event) => {
            restockProducts(`${query}`);
            console.log(`Restock called on ${query}`);
            event.preventDefault();
          }}
        >
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button type="submit">Restock Products</button>
        </form>
  )
}

export default Restock
