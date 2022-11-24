import "./app.css";

import { header, profileImage ,menuItem } from "./variants";
import { motion, useScroll  } from "framer-motion";
import { useEffect, useRef, useState } from "preact/hooks";

import pointer from "./assets/pointer.svg";
import preactLogo from "./assets/preact.svg";

export function App() {
  const [count, setCount] = useState(0);
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end end"]
  })

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      let viewportHeight = window.innerHeight;
      console.log(viewportHeight);
      console.log("Page scroll: ", latest)
    })
  }, [])
  console.table({
    'Time Stamp': new Date().getTime(),
    'OS': navigator['platform'],
    'Browser': navigator['appCodeName'],
    'Language': navigator['language'],
  });
  return (
    <>

      <motion.div
        class="header"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.div variants={header} class="row">
          <p>Subject Name</p>
          <div class="row-end">b
            <div className="row-item pointer ">section 1</div>
            <div className="row-item pointer">section 2</div>
            <div className="row-item pointer">section 3</div>
            <div className="row-item pointer">section 4</div>
          </div>
        </motion.div>
        <motion.div variants={profileImage} class="profile-image"></motion.div>
      </motion.div>
      <div ref={scrollRef} style={{ height: '120vh' }}>
        <motion.div style={{ background: 'green' }}
          initial={{ width: '500px', opacity: 0 }}
          whileInView={{ width: '1000px', opacity: 1 }}
          viewport={{ root: scrollRef }}
        >asdasdsad</motion.div>
      </div>
      <div className="menu">

          <motion.div wh className="line-menu"></motion.div>
          <motion.div className="line-menu"></motion.div>
          <motion.div className="line-menu"></motion.div>
          <motion.div className="line-menu"></motion.div>
      </div>
    </>
  );
}
