interface ImageGalleryProps {
  src: string;
}

export const ImageGallery = (props: ImageGalleryProps) => {
  return <img src={props.src} alt="" />;
};
