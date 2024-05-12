import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

const Tech = () => {
  return (
    <div className="grid grid-cols-5 gap-10 justify-items-center items-center">
      {technologies.map((technology) => (
        <div className="w-28 h-28 mb-10" key={technology.name}>
          <BallCanvas icon={technology.icon} name={technology.name} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");