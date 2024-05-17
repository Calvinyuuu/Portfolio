import { styles } from "../styles";

const HeroAnimated = () => {
  return (
    <div className="mt-5">
      {/* row 1 */}
      <div className="grid grid-cols-11 gap-0.5">
        <div className={`h-2.5 w-full rounded col-span-3 ${styles.gradient_blue_teal} ${styles.animateInitial} `} />
        <div className={`h-2.5 w-full rounded col-span-2 bg-[#e5e5e5] ${styles.animateOne} `} />
        <div className={`h-2.5 w-2.5 rounded-full bg-[#e5e5e5] ${styles.animateTwo} `} />
      </div>
      {/* row 2 */}
      <div className="grid grid-cols-8 mt-1">
        <div className={`h-2.5 w-full rounded col-span-5 ${styles.gradient_purple_blue}`} />
      </div>
      {/* row 3 */}
      <div className="grid grid-cols-10 gap-0.5 mt-1">
        <div className={`h-2.5 w-full rounded col-span-2 ${styles.gradient_yellow_orange} ${styles.animateInitial} `} />
        <div className="flex gap-0.5 col-span-2">
          <div className={`h-2.5 w-3 rounded bg-[#e5e5e5] ${styles.animateOne}`} />
          <div className={`h-2.5 w-full rounded bg-[#e5e5e5] ${styles.animateTwo}`} />
        </div>
        <div className={`h-2.5 w-full rounded ${styles.gradient_blue_teal} col-span-3 ${styles.animateThree}`} />
      </div>
      {/* row 4 */}
      <div className="grid grid-cols-11 gap-0.5 mt-1">
        <div className={`h-2.5 w-full rounded ${styles.gradient_blue_teal} col-span-4 ${styles.animateInitial}`} />
        <div className="flex gap-0.5 col-span-2">
          <div className={`h-2.5 w-full rounded bg-[#e5e5e5] ${styles.animateOne}`} />
          <div className={`h-2.5 w-3 rounded bg-[#e5e5e5] ${styles.animateTwo}`} />
        </div>
        <div className={`h-2.5 w-full rounded ${styles.gradient_purple_blue} col-span-3 ${styles.animateThree}`} />
      </div>
      {/* row 5 */}
      <div className="grid grid-cols-11 gap-0.5 mt-1">
        <div />
        <div className={`h-2.5 w-full rounded ${styles.gradient_blue_teal} col-span-2 ${styles.animateInitial}`} />
        <div className="flex gap-0.5 col-span-2">
          <div className={`h-2.5 w-3 rounded bg-[#e5e5e5] ${styles.animateOne}`} />
          <div className={`h-2.5 w-full rounded bg-[#e5e5e5] ${styles.animateTwo}`} />
        </div>
        <div className={`h-2.5 w-full rounded col-span-3 ${styles.gradient_purple_blue} ${styles.animateThree}`} />
      </div>

      <div className={`my-3 ml-4 ${styles.animateOne}`}>
        <div className={`${styles.sectionHeadText} leading-none`}>Calvin Yu</div>
        <div className={`${styles.sectionDescriptionText} mt-1`}>Fullstack Developer</div>
      </div>

      {/* bottom row 1 */}
      <div className="grid grid-cols-6 gap-0.5">
        <div className={`h-2.5 w-full rounded ${styles.gradient_yellow_orange} col-span-2 ${styles.animateInitial}`} />
        <div className={`h-2.5 w-2.5 rounded-full bg-[#e5e5e5] ${styles.animateOne}`} />
      </div>
      {/* bottom row 2 */}
      <div className="grid grid-cols-12 gap-0.5 mt-1">
        <div className={`h-2.5 w-full rounded col-span-3 ${styles.gradient_purple_blue} ${styles.animateInitial}`} />
        <div className={`h-2.5 w-full rounded col-span-2 ${styles.gradient_blue_teal} ${styles.animateOne}`} />
        <div className={`h-2.5 w-full rounded col-span-4 ${styles.gradient_purple_blue} ${styles.animateTwo}`} />
      </div>
      {/* bottom row 3 */}
      <div className="grid grid-cols-11 gap-0.5 mt-1">
        <div className={`h-2.5 w-full rounded ${styles.gradient_blue_teal} col-span-4 ${styles.animateOne}`} />
        <div className={`h-2.5 w-full rounded ${styles.gradient_purple_blue} col-span-2 ${styles.animateTwo}`} />
      </div>
      {/* bottom row 4 */}
      <div className="grid grid-cols-12 mt-1">
        <div className={`h-2.5 w-full rounded ${styles.gradient_yellow_orange} col-span-5`} />
      </div>
      {/* bottom row 5 */}
      <div className="grid grid-cols-12 gap-0.5 mt-1">
        <div className={`h-2.5 w-full rounded ${styles.gradient_purple_blue} ${styles.animateInitial} col-span-2`} />
        <div className="flex gap-0.5 col-span-3">
          <div className={`h-2.5 w-3 rounded bg-[#e5e5e5] ${styles.animateOne}`} />
          <div className={`h-2.5 w-full rounded bg-[#e5e5e5] col-span-2 ${styles.animateTwo}`} />
        </div>
        <div className={`h-2.5 w-full rounded ${styles.gradient_blue_teal} ${styles.animateThree}`} />
      </div>
    </div>
  );
};

export default HeroAnimated;
