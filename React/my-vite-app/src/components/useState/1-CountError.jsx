const CountError = () => {
  let count = 0;

  const handleClick = () => {
    count += 1;
    console.log(count);
  }

  return(
    <div>
      <h2>{count}</h2>
      <button type='button' onClick={handleClick}>Click me!</button>
      <p>To solve this error we need useState.</p>
    </div>
  );
};

export default CountError;
