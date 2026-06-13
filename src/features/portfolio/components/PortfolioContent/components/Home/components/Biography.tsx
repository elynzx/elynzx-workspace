import { ABOUT_DATA } from "../../../data/aboutData";

export const Biography = () => {
  const { bio } = ABOUT_DATA.about;

  return (
    <div className="flex flex-col gap-4 w-full px-2 md:px-3">
      <div className="flex justify-between items-center pb-3">
        <div className="text-left">
          <h3 className="text-2xl font-black text-ui-text tracking-tight">
            Biography Overview
          </h3>
          <p className="text-xs font-bold text-ui-accent tracking-wide mt-0.5 font-code uppercase">
            Engineering Mindset
          </p>
        </div>
        <div className="flex items-center gap-1.5 bg-ui-accent/10 border border-pink-500/20 text-ui-accent text-[10px] font-bold px-2.5 py-1 rounded-md uppercase font-code">
          <span className="w-1.5 h-1.5 rounded-full bg-ui-accent animate-pulse shadow-[0_0_6px_#f6339a]" />{" "}
          Available
        </div>
      </div>

      <p
        className="text-sm md:text-base text-justify leading-relaxed text-ui-text/90 whitespace-pre-line"
        dangerouslySetInnerHTML={{ __html: bio }}
      />

    </div>
  );
};
