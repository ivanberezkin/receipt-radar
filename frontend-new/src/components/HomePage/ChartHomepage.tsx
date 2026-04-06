export const ChartHomepage = () => {
  return (
    <>
      <div className="h-64 w-full relative z-10 mt-4 overflow-hidden rounded-lg">
        <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none">
          <div className="w-full h-px bg-outline-variant/5"></div>
          <div className="w-full h-px bg-outline-variant/5"></div>
          <div className="w-full h-px bg-outline-variant/5"></div>
          <div className="w-full h-px bg-outline-variant/5"></div>
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-primary/20 via-primary/5 to-transparent area-chart-clip"></div>
        <div className="absolute inset-0 bg-primary shadow-[0_0_20px_rgba(160,255,195,0.4)] area-chart-line"></div>
        <div className="absolute left-[45%] top-[40%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group/dot">
          <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_#a0ffc3] border-2 border-surface-container-low"></div>
          <div className="mt-2 bg-surface-bright text-[10px] px-2 py-1 rounded-md font-bold text-primary border border-primary/20 shadow-xl opacity-100 transition-opacity">
            Thu: $842
          </div>
        </div>
      </div>
      <div className="flex justify-between px-2 text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-widest">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </>
  );
};
