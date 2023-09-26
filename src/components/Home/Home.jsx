import { useEffect, useState } from 'react';
import Banner from '../Banner/Banner'
import CategoryList from '../CategoryList/CategoryList'

const Home = () => {

  const [search, setSearch] = useState('');
  const [allData, setAllData] = useState([]);
  const [isSearching, setIsSearching] = useState(null);


  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setAllData(data))
  }, [])

  const handleChange = event => {
    setSearch(event.target.value);
  };


  const handleClick = event => {
    event.preventDefault();

    const foundDonation = allData.filter(donation => donation.category === search);
    // console.log(foundDonation);

    if (foundDonation.length > 0) {
      setIsSearching(foundDonation);
    } else {
      setIsSearching(allData); // Reset to null if no match is found
    }
  }

  return (
    <div>
      <Banner handleChange={handleChange} handleClick={handleClick}></Banner>
      <CategoryList search={search} setSearch={setSearch}></CategoryList>
    </div>
  )
}

export default Home