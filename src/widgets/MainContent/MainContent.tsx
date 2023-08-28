import React, { useState } from "react";
import "./style.sass";
import ClientProfile from "../../entities/clients/ui/ClientProfile";
import ClientMemu from "../../entities/clients/ui/ClientMemu";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/scss";
import NoteList from "../../entities/note/ui/NoteList";
import ConsultationList from "../../entities/consultation/ui/ConsultationList";
import VideoList from "../../entities/video/ui/VideoList";
import EventList from "../../entities/event/ui/EventList";
import { useAppSelector } from "../../shared/hooks/redux";

export default function MainContent() {
  const [swipper, setSwipper] = useState<null | SwiperClass>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const clientId = useAppSelector(state =>  state.client.activClientId)

  return (
    <div className="main-content">
      <ClientProfile />
      {swipper && (
        <ClientMemu
          key={String(Math.random())}
          activMenuId={activeIndex + 1}
          updateMenuId={(menuId) => swipper.slideTo(menuId - 1)}
          onBtnAddClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      )}
      <div className="main-slider">
        <Swiper
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={setSwipper}
        >
          <SwiperSlide>
            <NoteList clientId={clientId} />
          </SwiperSlide>
          <SwiperSlide>
            <ConsultationList />
          </SwiperSlide>
          <SwiperSlide>
            <VideoList />
          </SwiperSlide>
          <SwiperSlide>
            <EventList />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
