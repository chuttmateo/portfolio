
export default function Profile() {
  return (
    <div className="p-3 flex flex-col justify-center font-sans 
    dark:bg-gradient-to-r from-blue-500 to-cyan-400
    rounded-md sm:rounded-lg">
      <h2 className=" text-title-color dark:text-dark-text-color text-3xl sm:text-7xl font-extrabold">Mateo Chutt</h2>
      <ul className="text-sm flex justify-center gap-2 sm:gap-5 md:gap-10">
        <li>Dev Ops</li>
        <li>Qa Automation</li>
        <li>Back Developer</li>
        <li>Front Developer</li>
      </ul>
    </div>
  )
}
