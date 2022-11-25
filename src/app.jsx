import "./app.css";

import { header, menuItem, profileImage } from "./variants";
import { motion, useInView, useScroll, useTransform, MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "preact/hooks";

import pointer from "./assets/pointer.svg";
import preactLogo from "./assets/preact.svg";

export function App() {
  const [showSubMenu, setShowSubMenu] = useState(null);

  const scrollRef = useRef(null);
  const headerRef = useRef(true);
  const isInView = useInView(headerRef)
  const menuView = useScroll({
    target: scrollRef,
    // offset: ["start end", "end end"],
  });
  // const headerView = useScroll({
  //   target: headerRef,
  //   // offset: ["start end", "end end"],
  // });
  useEffect(() => {
    // console.log("Element is in view: ", isInView,)
    if (isInView || showSubMenu == null) {
      setShowSubMenu(false)
    } else {
      setShowSubMenu(true)
    }
  }, [isInView])
  useEffect(() => {
    return menuView.scrollYProgress.onChange((latest) => {
      // console.log("Page scroll: ", latest);
    });
  }, []);
  // useEffect(() => {
  //   return headerView.scrollYProgress.onChange((latest) => {
  //     console.log("Page scroll Header: ", latest);
  //   });
  // }, []);
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
          className="header"
          initial="rest"
          whileHover="hover"
          onHoverStart={e => {console.log(e)}}
          animate="rest"
        >
          <motion.div variants={header} id='header'
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
          <motion.img id='profile'
            whileHover={{
              backgroundColor: 'blue',
              top: 'calc(10vh - 64px)'
            }}
            // onHoverStart={e => {console.log(e);
            // return null}}
            src={"./src/assets/rick.png"}
            variants={profileImage}
            class="profile-image"
          ></motion.img>
        </motion.div>
      </div>
      {/* <Section>
          asdasd
      </Section> */}
      {/* <div className="section1"></div>
      <div className="section1"></div>
      <div className="section1"></div>
      <div className="section1"></div> */}
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

      {/* <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: showSubMenu === true ? 1 : 0 }}
        exit={{ opacity: showSubMenu === true ? 0 : 1 }}
        src={"./src/assets/rick.png"}
        variants={profileImage}
        class="profile-image-right"
      ></motion.img>
      <div className="test">

        {[1, 2, 3, 4, 5].map((image) => (
          <Section> 
            <div style={{backgroundColor : 'red'}}>asdasd</div>
             </Section>
        ))}
      </div> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showSubMenu === true ? 1 : 0 }}
        exit={{ opacity: showSubMenu === true ? 0 : 1 }}

        className="menu">
        <SideMenu />
        <SideMenu />
        <SideMenu />
        <SideMenu />

      </motion.div>

    </>
  );
}

const SideMenu = ({ }) => {
  return (
    <motion.div className="menu-item" whileHover="hover">
      <motion.div

        // exit={{ opacity: 0 }}
        variants={menuItem}
        className="line-menu pointer"
      ></motion.div>
    </motion.div>
  );
};

function Section(props) {
  const ref = useRef(null);


  return (
    <section>
      <div ref={ref}>
        {props.children}
      </div>
    </section>
  );
}

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}