import "./app.css";

import { header, menuItem, profileImage } from "./variants";
import { motion, useInView, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "preact/hooks";

import pointer from "./assets/pointer.svg";
import preactLogo from "./assets/preact.svg";

export function App() {
  const [count, setCount] = useState(0);
  const scrollRef = useRef(null);
  const headerRef = useRef(null);
  // const headerView = useInView()
  const menuView = useScroll({
    target: scrollRef,
    // offset: ["start end", "end end"],
  });
  const headerView = useScroll({
    target: headerRef,
    // offset: ["start end", "end end"],
  });

  useEffect(() => {
    return menuView.scrollYProgress.onChange((latest) => {
      console.log("Page scroll: ", latest);
    });
  }, []);
  useEffect(() => {
    return headerView.scrollYProgress.onChange((latest) => {
      console.log("Page scroll Header: ", latest);
    });
  }, []);
  // console.table({
  //   "Time Stamp": new Date().getTime(),
  //   OS: navigator["platform"],
  //   Browser: navigator["appCodeName"],
  //   Language: navigator["language"],
  // viewportHeight : window.innerHeight;

  // });
  return (
    <>
      <div ref={headerRef}>
        <motion.div
          class="header"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <motion.div variants={header}
           viewport={{ root: headerRef }}
          class="row">
            <p>Subject Name</p>
            <div class="row-end">
              <div className="row-item pointer ">section 1</div>
              <div className="row-item pointer">section 2</div>
              <div className="row-item pointer">section 3</div>
              <div className="row-item pointer">section 4</div>
            </div>
          </motion.div>
          <motion.img
            src={"./src/assets/rick.png"}
            variants={profileImage}
            class="profile-image"
          ></motion.img>
        </motion.div>
      </div>

      <div className="section1"></div>
      <div className="section1"></div>
      <div className="section1"></div>
      <div className="section1"></div>
      {/* <div
      //  ref={scrollRef}
        style={{ height: "120vh" }}>
        <motion.div
          style={{ background: "green" }}
          initial={{ width: "100vw", opacity: 0 }}
          whileInView={{  opacity: 1 }}
          // viewport={{ root: scrollRef }}
        >
          asdasdsad
        </motion.div>
      </div> */}
      <div style={{width : '100%',background : 'green'}}>
        asdsd
      </div>

      <motion.div className="menu">
        <SideMenu />
        <SideMenu />
        <SideMenu />
        <SideMenu />
      </motion.div>
    </>
  );
}

const SideMenu = () => {
  return (
    <motion.div className="menu-item" whileHover="hover">
      <motion.div
        variants={menuItem}
        className="line-menu pointer"
      ></motion.div>
    </motion.div>
  );
};
