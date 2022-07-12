interface Shoe {
  shoe: string;
  thumb: string;
}

interface ThumbnailProps {
  main: string;
  shoe: Shoe;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  timer: number;
}

export const Thumbnail: React.FC<ThumbnailProps> = ({
  main,
  shoe,
  setTimer,
  timer,
}) => {
  return main === shoe.shoe ? (
    <div style={{ outline: "0.2em orange solid" }} className="thumb-img">
      <img
        style={{ opacity: "0.5" }}
        onClick={() => setTimer((timer) => timer)}
        src={shoe.shoe}
        alt="1"
      />
    </div>
  ) : (
    <div className="thumb-img">
      <img onClick={() => setTimer(timer)} src={shoe.thumb} alt="thumbnail" />
    </div>
  );
};
