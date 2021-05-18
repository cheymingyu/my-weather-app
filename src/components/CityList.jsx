function CityList(props) {
  // const cities = props.cities;
  const { cities } = props;

  return (
    <div>
      <h1 className="App-Citylist-header">CityList</h1>

      <hr size="5" color="black"></hr>

      <ul className="App-Citylist">
        {cities.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default CityList;
