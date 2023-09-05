import useSWR from 'swr';
import { getHeadlinesByCategory } from '../../api/headlinesStore/fetchNews';
import { PulseLoader } from 'react-spinners';
import { NewsBody } from '../ResusableComponents/NewsBody/NewsBody';

export const NewsByCategory = ({ category, country, delay }) => {
  const props = { category, country, delay };
  const config = { suspense: true };
  const { data, error } = useSWR(props, getHeadlinesByCategory, config);

  if(error){
    return (
      <>
        <h3 style={{ color: "#d9d9d9" }}>Error: {error.message}</h3>
        <p>{error.stack}</p>
      </>
    )
  }

  if(!data) {
    return <PulseLoader color='#e0e1dd' size={12} speedMultiplier={0.7} />
  }

  console.log(data)

  return <NewsBody newsData={data} />;
}