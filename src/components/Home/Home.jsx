import { useState } from 'react';
import Banner from '../Banner/Banner'
import CategoryList from '../CategoryList/CategoryList'

const Home = () => {

  const [search, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(null);


  const handleChange = event => {
    setSearch(event.target.value);
  };


  const handleClick = event => {
    event.preventDefault();

    const foundDonation = search;
    console.log(foundDonation);

    if (foundDonation.length > 0) {
      setIsSearching(foundDonation);
    } else {
      setIsSearching(null);// Reset to null if no match is found
    }
  }

  return (
    <div>
      <Banner handleChange={handleChange} handleClick={handleClick}></Banner>
      <CategoryList isSearching={isSearching} setIsSearching={setIsSearching}></CategoryList>
    </div>
  )
}

export default Home