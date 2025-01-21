const Person = ({ name, age, image }) => {
  return (
    <div>
      <img src={image} alt={name} style={{ width: 100 }} />

      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
};
export default Person;
