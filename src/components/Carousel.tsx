import { shoes } from "../assets/shoes";
import { Thumbnail } from "./Thubmnails";
import { useEffect, useState } from "react";

export const Carousel: React.FC = () => {
  const [timer, setTimer] = useState<number>(0);
  const [main, setMain] = useState<string>(shoes[timer].shoe);

  useEffect(() => {
    !shoes[timer + 1] && setTimer(0);
    setMain(shoes[timer].shoe);
  }, [timer]);

  return (
    <div className="carousel">
      <img
        onClick={() => setTimer(timer + 1)}
        className="carousel-main"
        src={main}
        alt="main"
      />
      <div className="thumbnails">
        <Thumbnail main={main} setTimer={setTimer} shoe={shoes[0]} timer={0} />
        <Thumbnail main={main} setTimer={setTimer} shoe={shoes[1]} timer={1} />
        <Thumbnail main={main} setTimer={setTimer} shoe={shoes[2]} timer={2} />
        <Thumbnail main={main} setTimer={setTimer} shoe={shoes[3]} timer={3} />
      </div>
    </div>
  );
};
