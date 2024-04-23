
const List = (props)  => (
    console.log('List renders')
    <ul>
      {props.list.map((item)=>(
      <li key={item.objectID}>
          <span>
            <a href={item.url}>{item.title} </a>
          </span>
          <span>{props.item.author}</span>
          <span> {props.item.num_comments}</span>
          <span> {props.item.points} </span>
      </li>))}
      </ul>
      );
      
const Search = (props) =>  {
        console.log('search renders')
        const[searchTerm, setSearchTerm]=React.useState('');
        const handleChange = (event) => {
          setSearchTerm(event.target.value);
          props.onSearch(event);
        };
        return(
          <div >
          <label htmlFor="search">Search: </label>
          <input id="search" type="text"  onChange={handleChange} />
          <p>
            Searching for <strong>{searchTerm}</strong>
          </p>
          </div>
        );};