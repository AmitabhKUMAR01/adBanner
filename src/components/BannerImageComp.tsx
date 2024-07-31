import React from 'react';
import { MdEdit } from "react-icons/md";
interface AdBannerProps {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: (id: number) => void;
}

const BannerImageComp: React.FC<AdBannerProps> = ({ id, title, description, cta, image, background, onEdit }) => {
  return (
    <div  style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="ad-banner">
      <img src={image} alt={title} />
      <div className="ad-details">
        <h3 className='font-bold text-2xl'>{title}</h3>
        <p className='text-xl font-light'>{description}</p>

<button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{cta}</button>
        <button onClick={() => onEdit(id)} className='editBtn'><MdEdit/></button>

      </div>
    </div>
  );
};

export default BannerImageComp;

