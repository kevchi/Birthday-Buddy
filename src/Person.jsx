const Person = ({ name, age, image }) => {
  return (
    <article className="person">
      <img src={image} alt={name} className="img" style={{ width: 100 }} />

      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};
export default Person;
