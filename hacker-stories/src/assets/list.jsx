
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