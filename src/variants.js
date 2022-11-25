export const header = {
    rest :{
        height : 64
    },
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
        x: '-50%',
        top: "72px",
        height: "20vh",
        width: "20vh",
    },
    hover: (e) => {
        let element = document.querySelector('.header')
        let viewportHeight = window.innerHeight;
        let viewportWidth = window.innerWidth;
        // console.log(element.offsetHeight);
        // console.log((innerHeight * 0.2) - 64)
        // console.log(e);
        return {

            backgroundColor: 'blue',
            // transform: 'translateX(-10vw)',
            top: 'calc(10vh - 64px)',
            // y : "-10vw",
            // y : 0
        }
    }
}


export const menuItem = {
    hover: () => {
        return {

            // backgroundColor: 'red',
            boxShadow: '0px 0px 20px 8px #F9F9F9'
            // transform: 'translateX(-10vw)',
            // top: 'calc(10vh - 64px)',
            // y : "-10vw",
            // y : 0
        }
    }
}