import { useEffect, useState } from 'react';
import Category from '../../components/Category';
import { getCardsQuizz } from '../../services/apiService';
import './Quizz.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Quiz() {
  const [cardsByCategory, setCardsByCategory] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    getCardsQuizz().then(data => setCardsByCategory(data));
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    getCardsQuizz(date.toISOString().split('T')[0]).then(data => setCardsByCategory(data));
  };

  return (
    <>       
    <button className="button" onClick={() => window.location.href = '/'}>Back to Home</button>
    <button className="button" onClick={() => window.location.href = '/create-card'}>Create Card</button>
    <DatePicker selected={selectedDate} onChange={handleDateChange} dateFormat="yyyy-MM-dd" />
    <div className="quiz">
    {Object.entries(cardsByCategory).map(([categoryName, cards]) => (
        <Category key={categoryName} name={categoryName} cards={cards} />
      ))}
    </div>
    </>

  );
}

export default Quiz;