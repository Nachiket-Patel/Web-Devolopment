import Tour from './Tour';


const Tours = ({ tour, removeTour }) => {
  return(
    <section>
      <div className="title">
        <h2>Our Tour</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tour.map((tours) => {
          return <Tour key={tours.id} {...tours} removeTour={removeTour}></Tour>
        })}
      </div>
    </section>
  );
}


export default Tours;
