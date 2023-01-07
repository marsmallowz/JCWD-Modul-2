import PostCard from "../components/PostCard";
import { useState } from "react";
import NavBar from "../components/navBar";
import ModalMain from "../components/ModalMain";
import { axiosInstance } from "../config/config";
import { useEffect } from "react";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    await axiosInstance.get("items").then((res) => {
      setItems(res.data);
      setTimeout(() => {
        setIsLoading(!isLoading);
      }, 500);
    });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="bg-white">
      <NavBar setShowModal={setShowModal} />
      <div className="flex gap-8 py-3 px-8 items-center ">
        <div className="font-medium">SEMUA KATEGORI</div>
        <div className="flex gap-4 text-sm">
          <div>Mobil Bekas</div>
          <div>Motor Bekas</div>
          <div>Properti</div>
          <div>Handphone</div>
          <div>Jasa & Lowongan Kerja</div>
          <div>TV & Audio, Video</div>
        </div>
      </div>
      <img
        src="https://statics.olx.co.id/external/base/img/hero_bg_id.jpg"
        alt=""
        className="h-64 object-cover shadow-inner "
      />
      <div className="text-2xl px-14 py-5">Rekomendasi Terbaru</div>
      <div className="px-14 py-1 mb-5">
        <div className="grid grid-cols-4 gap-3">
          {items.map((item) => {
            return <PostCard item={item} />;
          })}
          {/* <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard /> */}
        </div>
      </div>
      <ModalMain isVisible={showModal} closeModal={() => setShowModal(false)} />
    </div>
  );
}
