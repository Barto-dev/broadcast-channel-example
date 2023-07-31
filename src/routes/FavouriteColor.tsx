import { useState } from 'preact/hooks';
import { colorChannel } from '../channels/color.ts';

const FavouriteColor = () => {
  const [favouriteColor, setFavouriteColor] = useState('');

  colorChannel.onmessage = (e) => {
    setFavouriteColor(e.data)
  }

  return (
    <div className="container">
      You favourite color is: <span className="color" style={{ background: favouriteColor }}></span>
    </div>
  );
};

export default FavouriteColor;
