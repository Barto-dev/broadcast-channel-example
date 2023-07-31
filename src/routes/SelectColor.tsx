import { useState } from 'preact/hooks';
import { colorChannel } from '../channels/color.ts';

const SelectColor = () => {
  const [color, setColor] = useState('');

  const onInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    colorChannel.postMessage(target.value);
    setColor(target.value);
  }

  return (
    <div class="container" style={{background: color}}>
      <h1 className="title">Open <a target="_blank" href="/favourite-color">the page in new tab</a> and try to change color</h1>
      <input
        type="color"
        value={color}
        onInput={onInput}
      />
    </div>
  )
};

export default SelectColor;
