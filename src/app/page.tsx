"use client"
import { useState } from 'react';
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';
import adBanners from '../data/BannersData.json';

interface Banner {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
}

const Home: React.FC = () => {
  const [banners, setBanners] = useState<Banner[]>(adBanners);
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);

  const handleEdit = (id: number) => {
    const banner = banners.find((b) => b.id === id) || null;
    setEditingBanner(banner);
  };

  const handleSave = (id: number, updatedBanner: { title: string; description: string; cta: string; image: string; background: string; }) => {
    setBanners((prevBanners) =>
      prevBanners.map((b) => (b.id === id ? { ...b, ...updatedBanner } : b))
    );
    setEditingBanner(null); // Close the edit modal after saving
  };

  const handleClose = () => {
    setEditingBanner(null);
  };

  return (
    <div>
      <h1 className='text-center text-3xl font-bold text-cyan-700'>Ad Banners</h1>
      <div className="banner-list">
        {banners.map((banner) => (
          <BannerImageComp
            key={banner.id}
            id={banner.id}
            title={banner.title}
            description={banner.description}
            cta={banner.cta}
            image={banner.image}
            background={banner.background}
            onEdit={handleEdit}
          />
        ))}
      </div>
      {editingBanner && (
        <EditBannerTemplateBs
          id={editingBanner.id}
          title={editingBanner.title}
          description={editingBanner.description}
          cta={editingBanner.cta}
          image={editingBanner.image}
          background={editingBanner.background}
          onSave={handleSave}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default Home;
