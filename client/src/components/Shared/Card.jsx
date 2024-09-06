import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="card lg:card-side bg-base-200 shadow-xl">
      <figure >
        <img
          src={item.thumbnail_url}
          alt="character image"
          className="h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.class}</p>
        <p>{item.active_spec_name}</p>
        <div className="card-actions justify-end">
          <Link to={`/character/${item.id}`}><button className="btn btn-primary">Details</button></Link>
        </div>
      </div>
    </div>
  );
};
export default Card;
