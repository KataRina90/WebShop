import Colors from './Colors/Colors';
import PriceRange from './PriceRange/PriceRange';
import Sizes from './Sizes/Sizes';
import './Acc.css';

export default function SearchCriteria() {
  return (
    <div className='search-crtieria-container'>
      <PriceRange />
      <Colors />
      <Sizes />
    </div>
  );
}
