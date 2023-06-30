import { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
const url = 'https://course-api.com/react-tours-project';


export default function Project2() {

  const [loading, setLoading] = useState(true);
  const [tour, setTour] = useState([]);

  const removeTour = (id) => {
    const newTours = tour.filter((tour) => tour.id !== id);
    setTour(newTours);
  }

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTour(tours);
      console.log(tours);
    }
    catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, [])

  if(loading) {
    return(
      <main>
        <Loading />
      </main>
    );
  }

  if(tour.length === 0) {
    return(
      <main>
        <div className="title">
          <h2>No tour left</h2>
          <button className='btn' onClick={fetchTours}>refresh</button>
        </div>
      </main>
    );
  }

  return(
    <main>
      <Tours tour={tour} removeTour={removeTour} />
    </main>
  );
  
}
