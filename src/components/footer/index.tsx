import "./style.scss";
import { Container } from "@containers";

const index = (clas:any) => {
  return (
    <footer className="pb-[50px]">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex gap-[108px]">
            <div className="w-[120px]">
              <h4 className="text-white text-[24px] font-medium text-center">
                396 mi
              </h4>
              <p className="text-white text-[12px] font-medium text-center">
                Range (EPA est.)
              </p>
            </div>
            <div className="w-[120px]">
              <h4 className="text-white text-[24px] font-medium text-center">
                1.99s
              </h4>
              <p className="text-white text-[12px] font-medium text-center">
                0-60 mph*
              </p>
            </div>
            <div className="w-[120px]">
              <h4 className="text-white text-[24px] font-medium text-center">
                200mph
              </h4>
              <p className="text-white text-[12px] font-medium text-center">
                Top Speed†
              </p>
            </div>
            <div className="w-[120px]">
              <h4 className="text-white text-[24px] font-medium text-center">
                1,020hp
              </h4>
              <p className="text-white text-[12px] font-medium text-center">
                Peak Power
              </p>
            </div>
          </div>

          <button className={clas.clas + " flex items-center gap-3 py-[10px] px-[20px]"}>
            Order Now
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
              >
                <path
                  d="M19.8288 7.55462L13.8292 0.888313C13.7012 0.746988 13.5225 0.666992 13.3332 0.666992H9.3334C9.07074 0.666992 8.83209 0.82165 8.7241 1.06164C8.61743 1.30296 8.66143 1.58428 8.83742 1.77893L14.4358 7.99993L8.83742 14.2196C8.66143 14.4156 8.6161 14.6969 8.7241 14.9369C8.83209 15.1782 9.07074 15.3329 9.3334 15.3329H13.3332C13.5225 15.3329 13.7012 15.2515 13.8292 15.1129L19.8288 8.44657C20.0568 8.19325 20.0568 7.8066 19.8288 7.55462Z"
                  fill="white"
                />
                <path
                  d="M11.1628 7.55462L5.16314 0.888313C5.03514 0.746988 4.85649 0.666992 4.66716 0.666992H0.66738C0.404728 0.666992 0.166074 0.82165 0.0580799 1.06164C-0.048581 1.30296 -0.00458339 1.58428 0.171407 1.77893L5.76977 7.99993L0.171407 14.2196C-0.00458339 14.4156 -0.0499143 14.6969 0.0580799 14.9369C0.166074 15.1782 0.404728 15.3329 0.66738 15.3329H4.66716C4.85649 15.3329 5.03514 15.2515 5.16314 15.1129L11.1628 8.44657C11.3908 8.19325 11.3908 7.8066 11.1628 7.55462Z"
                  fill="white"
                />
              </svg>
            </span>
          </button>
        </div>
      </Container>
    </footer>
  );
};

export default index;
