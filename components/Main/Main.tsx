const Main = () => {
  return (
    <main className="bg-main w-full md:h-screen flex justify-center items-center pt-[120px] px-4 md:px-10">
      <div className="flex justify-center flex-col max-w-[1400px] w-full h-full text-[#fff] tracking-widest font-Roboto text-base relative">
        <div>
          <p className="p-3 bg-details text-main inline-block rounded-md">Front-End Developer</p>
          <p className="pt-12 md:max-w-[400px]">
            Ik ben Olaf Kudrewicz en ik volg de opleiding software developer. Ik hou mijzelf vooral
            bezig met php en sinds kort ook met Laravel. Ik ben jong , leergierig en kan niet
            wachten om samen met jou te werken!
          </p>
        </div>
        <ul className="flex gap-4 py-12">
          <li className="flex items-center gap-4">
            <span className="text-2xl">1</span>
            <p>YEARS EXPERIENCE</p>
          </li>
          <li className="flex items-center gap-4">
            <span className="text-2xl">1</span>
            <p>PROJECTS COMPLETED</p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Main;
