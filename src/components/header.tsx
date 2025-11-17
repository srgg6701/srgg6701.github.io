import { useNavigate } from "react-router-dom";
import { usePortfolio, type Filter } from "../data/items";
export default function Header({ pathname }: { pathname: string }) {
  const filters = usePortfolio((s) => s.filters);
  const toggleFilter = usePortfolio((s) => s.toggleFilter);
  const clearFilters = usePortfolio((s) => s.clearFilters);
  const navigate = useNavigate();
  const skills: Filter[] = [
    "TS",
    "React",
    "Vue.js",
    "NextJS",
    "Redux",
    "Zustand",
    "Mobx",
    "jQuery",
    "Backbone.js",
    "Angular",
    "Joomla",
    "Wordpress",
    "BE integration",
    "Team leading",
  ];
  const pathAboutStr = "/about";
  const partOf = pathname === pathAboutStr ? "Life" : "Portfolio";
  const ImgAbs = (
    src: string,
    width: number,
    right: number,
    top: number,
    index: number
  ) => {
    const iUrl = `/images/${src}`;
    return (
      <div
        key={`${index}-${top}`}
        className='absolute wrapper'
        style={{
          right: `${right}vw`,
          top: `${top}vh`,
        }}
        onClick={() => (location.href = iUrl)}
      >
        <img src={iUrl} width={width} />
      </div>
    );
  };
  function dropSkills() {
    return <span className="skill" onClick={clearFilters}>[ Clear Filters ]</span>
  }
  return (
    <header className='top-0 z-10 bg-white/70 pt-6 relative'>
      <h1 className='flex gap-8 items-center'>
        <div className='flex text-center flex-wrap md:flex-nowrap items-center'>
          {pathname === "/" && (
            <img
              src='/images/teams.png'
              //alt="telegram: @srgg6701"
              //title="telegram: @srgg6701"
              width='128'
              onDoubleClick={() => navigate("/about")}
              style={{aspectRatio: "128/154"}}
            />
          )}
          <div className='m-auto pt-8 md:py-[unset]'>
            <span>{partOf} of Sergei Klevtsov</span>
            <br />
            <span className='txtBorderColor'>&lt;Part of Experience /&gt;</span>
          </div>
          {pathname === "/" && (
            <div className='
              flex 
              flex-wrap 
              w-full
              md:w-[52%]
              mt-6
              md:mt-0'>
              {
                skills.map((skill) => (
                  <span
                    key={skill}
                    className={`skill${filters.has(skill) ? " selected" : ""}`}
                    onClick={() => toggleFilter(skill)}
                  >
                    {skill}
                  </span>
                ))
              }
              {filters.size > 1 ? dropSkills() : null}
            </div>
          )}
        </div>
        {pathname === pathAboutStr && (
          <>
            <img
              onClick={() => {
                location.href = "/images/la-sagrada-familia.jpg";
              }}
              src='/images/la-sagrada-familia.jpg'
              width={200}
              alt='La Sagrada Familia'
              title='La Sagrada Familia'
              className='inline-block relative align-middle my-4 z-[1] imgOver'
            />
            {[
              /* { src: "zero-ground.png", zindex: -1, width: 200, right: 31, top: 10 }, */
              {
                src: "i-am-sorry.jpg",
                width: 210,
                right: 24,
                top: 11,
              },
              {
                src: "pluto-rabbit.jpg",
                width: 248,
                right: 14.8,
                top: 4,
              },
              { src: "philo.jpg", zindex: -1, width: 200, right: 6.6, top: 13 },
              {
                src: "bus-vilnius.jpg",
                width: 89,
                right: 11.4,
                top: 5,
              },
            ].map((item, index) =>
              ImgAbs(item.src, item.width, item.right, item.top, index)
            )}
          </>
        )}
      </h1>
    </header>
  );
}
