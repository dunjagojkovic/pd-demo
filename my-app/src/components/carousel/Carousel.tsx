import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "swiper/css";
import 'swiper/css/navigation';
import { CarouselItem } from "./Craousel.types";

type CarouselProps = {
  items: Array<CarouselItem>;
};

export default function Carousel({ items }: CarouselProps) {
  return (
    <Box
      sx={{
        paddingInline: "24px",
        maxWidth: "1344px",
        width: "100%",
        marginInline: "auto",
      }}
    >
      <Swiper
        spaceBetween={12}
        slidesPerView={5.5}
        navigation={true}
        modules={[Navigation]}
        style={{ marginTop: "219px" }} //todo obrisi ovo
      >
        {items.map(({ image, rating, title, author, bookStatus }, index) => (
          <SwiperSlide key={index} style={{ width: "204px" }}>
            <Box>
              <Box
                sx={{
                  isolation: "isolate",
                  position: "relative",
                  height: "240px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    height: "100%",
                    width: "64%",
                    top: "0",
                    left: "0",
                    bgcolor: "#eee",
                    zIndex: "-1",
                    borderRadius: "16px",
                  }}
                />
                <Box
                  sx={{
                    height: "212px",
                    width: "148px",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 6px 0px #0000001a",
                    overflow: "hidden",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={image.src}
                    alt={image.alt}
                  />
                </Box>
              </Box>
              <Box>
                <Typography>{rating}</Typography>
                <Typography>{title}</Typography>
                <Typography>{author}</Typography>
                <Typography>{bookStatus}</Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
