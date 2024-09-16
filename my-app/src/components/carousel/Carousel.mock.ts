import { CarouselItem } from "./Craousel.types";
import BookCover1 from "../../assets/Book1.svg";

export const itemsMock: Array<CarouselItem> = [
  {
    image: {
      src: "https://cdn.mall.adeptmind.ai/https%3A%2F%2Ftarget.scene7.com%2Fis%2Fimage%2FTarget%2FGUEST_adbef501-2f1b-473a-b25b-f575d259cfba%3Fwid%3D1000%26hei%3D1000_large.webp",
      alt: "image-alt",
    },
    rating: 0,
    title: "Mindwise: Why we misunderstand what others...",
    author: "Nicholas Epley",
    bookStatus: "Available",
  },
  {
    image: {
      src: "https://danpink.com/wp-content/uploads/2017/08/When-678x1024.jpg",
      alt: "image-alt",
    },
    rating: 0,
    title: "Mindwise: Why we misunderstand what others...",
    author: "Nicholas Epley",
    bookStatus: "Available",
  },
  {
    image: {
      src: "https://www.apolloadvisor.com/content/images/size/w1200/2023/09/fastslow.png",
      alt: "image-alt",
    },
    rating: 0,
    title: "Mindwise: Why we misunderstand what others...",
    author: "Nicholas Epley",
    bookStatus: "Available",
  },
  {
    image: {
      src: "data:image/jpeg;base64,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",
      alt: "image-alt",
    },
    rating: 0,
    title: "Mindwise: Why we misunderstand what others...",
    author: "Nicholas Epley",
    bookStatus: "Available",
  },
  {
    image: {
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Flandscape-tree-water-nature-wilderness-mountain-cloud-hiking-meadow-lake-valley-mountain-range-reflection-autumn-park-italy-alpine-fjord-national-park-mountains-alps-plateau-loch-dolomites-landform-tarn-mountainous-landforms-computer-wallpaper-1382394.jpg&f=1&nofb=1&ipt=d91452be2645e9ae08984faf623c7c62290eb8b9a4969f9c18745553080f1595&ipo=images",
      alt: "image-alt",
    },
    rating: 0,
    title: "Mindwise: Why we misunderstand what others...",
    author: "Nicholas Epley",
    bookStatus: "Available",
  },
  {
    image: {
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Flandscape-tree-water-nature-wilderness-mountain-cloud-hiking-meadow-lake-valley-mountain-range-reflection-autumn-park-italy-alpine-fjord-national-park-mountains-alps-plateau-loch-dolomites-landform-tarn-mountainous-landforms-computer-wallpaper-1382394.jpg&f=1&nofb=1&ipt=d91452be2645e9ae08984faf623c7c62290eb8b9a4969f9c18745553080f1595&ipo=images",
      alt: "image-alt",
    },
    rating: 0,
    title: "Mindwise: Why we misunderstand what others...",
    author: "Nicholas Epley",
    bookStatus: "Available",
  },
  {
    image: {
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Flandscape-tree-water-nature-wilderness-mountain-cloud-hiking-meadow-lake-valley-mountain-range-reflection-autumn-park-italy-alpine-fjord-national-park-mountains-alps-plateau-loch-dolomites-landform-tarn-mountainous-landforms-computer-wallpaper-1382394.jpg&f=1&nofb=1&ipt=d91452be2645e9ae08984faf623c7c62290eb8b9a4969f9c18745553080f1595&ipo=images",
      alt: "image-alt",
    },
    rating: 0,
    title: "Mindwise: Why we misunderstand what others...",
    author: "Nicholas Epley",
    bookStatus: "Available",
  },
  {
    image: {
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Flandscape-tree-water-nature-wilderness-mountain-cloud-hiking-meadow-lake-valley-mountain-range-reflection-autumn-park-italy-alpine-fjord-national-park-mountains-alps-plateau-loch-dolomites-landform-tarn-mountainous-landforms-computer-wallpaper-1382394.jpg&f=1&nofb=1&ipt=d91452be2645e9ae08984faf623c7c62290eb8b9a4969f9c18745553080f1595&ipo=images",
      alt: "image-alt",
    },
    rating: 0,
    title: "Mindwise: Why we misunderstand what others...",
    author: "Nicholas Epley",
    bookStatus: "Available",
  },
  {
    image: {
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Flandscape-tree-water-nature-wilderness-mountain-cloud-hiking-meadow-lake-valley-mountain-range-reflection-autumn-park-italy-alpine-fjord-national-park-mountains-alps-plateau-loch-dolomites-landform-tarn-mountainous-landforms-computer-wallpaper-1382394.jpg&f=1&nofb=1&ipt=d91452be2645e9ae08984faf623c7c62290eb8b9a4969f9c18745553080f1595&ipo=images",
      alt: "image-alt",
    },
    rating: 0,
    title: "Mindwise: Why we misunderstand what others...",
    author: "Nicholas Epley",
    bookStatus: "Available",
  },
  {
    image: {
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Flandscape-tree-water-nature-wilderness-mountain-cloud-hiking-meadow-lake-valley-mountain-range-reflection-autumn-park-italy-alpine-fjord-national-park-mountains-alps-plateau-loch-dolomites-landform-tarn-mountainous-landforms-computer-wallpaper-1382394.jpg&f=1&nofb=1&ipt=d91452be2645e9ae08984faf623c7c62290eb8b9a4969f9c18745553080f1595&ipo=images",
      alt: "image-alt",
    },
    rating: 0,
    title: "Mindwise: Why we misunderstand what others...",
    author: "Nicholas Epley",
    bookStatus: "Available",
  },
  {
    image: {
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Flandscape-tree-water-nature-wilderness-mountain-cloud-hiking-meadow-lake-valley-mountain-range-reflection-autumn-park-italy-alpine-fjord-national-park-mountains-alps-plateau-loch-dolomites-landform-tarn-mountainous-landforms-computer-wallpaper-1382394.jpg&f=1&nofb=1&ipt=d91452be2645e9ae08984faf623c7c62290eb8b9a4969f9c18745553080f1595&ipo=images",
      alt: "image-alt",
    },
    rating: 0,
    title: "Mindwise: Why we misunderstand what others...",
    author: "Nicholas Epley",
    bookStatus: "Available",
  },
  {
    image: {
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Flandscape-tree-water-nature-wilderness-mountain-cloud-hiking-meadow-lake-valley-mountain-range-reflection-autumn-park-italy-alpine-fjord-national-park-mountains-alps-plateau-loch-dolomites-landform-tarn-mountainous-landforms-computer-wallpaper-1382394.jpg&f=1&nofb=1&ipt=d91452be2645e9ae08984faf623c7c62290eb8b9a4969f9c18745553080f1595&ipo=images",
      alt: "image-alt",
    },
    rating: 0,
    title: "Mindwise: Why we misunderstand what others...",
    author: "Nicholas Epley",
    bookStatus: "Available",
  },
];
