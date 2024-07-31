import React, { useState } from 'react';

interface EditBannerProps {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onSave: (id: number, updatedBanner: { title: string; description: string; cta: string; image: string; background: string; }) => void;
  onClose: () => void;
}

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ id, title, description, cta, image, background, onSave, onClose }) => {
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const [updatedCta, setUpdatedCta] = useState(cta);
  const [updatedImage, setUpdatedImage] = useState(image);
  const [updatedBackground, setUpdatedBackground] = useState(background);

  const handleSave = () => {
    onSave(id, {
      title: updatedTitle,
      description: updatedDescription,
      cta: updatedCta,
      image: updatedImage,
      background: updatedBackground
    });
    onClose();
  };

  return (
    <div className="edit-banner-bottom-sheet">
      <h3 className='text-center font-bold underline'>Edit Banner</h3>
      <label>
        Title:
        <input type="text" value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)} />
      </label>
      <label>
        Description:
        <input type="text" value={updatedDescription} onChange={(e) => setUpdatedDescription(e.target.value)} />
      </label>
      <label>
        CTA:
        <input type="text" value={updatedCta} onChange={(e) => setUpdatedCta(e.target.value)} />
      </label>
      <label>
        Image URL:
        <input type="text" value={updatedImage} onChange={(e) => setUpdatedImage(e.target.value)} />
      </label>
      <label>
        Background:
        <input type="text" value={updatedBackground} onChange={(e) => setUpdatedBackground(e.target.value)} />
      </label>
      {/* <button >Save</button> */}

<button type="button" onClick={handleSave} className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 text-xl">save</button>
<button type="button"onClick={onClose}  className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">cancle</button>
    </div>
  );
};

export default EditBannerTemplateBs;
