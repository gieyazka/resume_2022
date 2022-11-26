export const header = {

    hover: () => {
        // let element = document.querySelector('.header')
        // console.log(element.offsetHeight);
        return {

            height: 'calc(20vh - 64px)',
            textShadow: "0px 0px 4px gray",
            // transition: { duration: 0.3 }
        }
    }
}


export const profileImage = {

    rest: {
        // y: 20,
        top: "calc(96px)",
  
    },
    hover: (e) => {
      
        return {

            backgroundColor: 'blue',
            top: 'calc(10vh - 64px)',
        }
    }
}


export const menuItem = {
    hover: () => {
        return {

            backgroundColor: 'blue',
            // transform: 'translateX(-10vw)',
            // top: 'calc(10vh - 64px)',
            // y : "-10vw",
            // y : 0
        }
    }
}