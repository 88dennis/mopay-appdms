import img from '../../images/undraw_by_my_car_ttge.svg';
import img2 from '../../images/undraw_make_it_rain_iwk4.svg';
import img3 from '../../images/undraw_add_tasks_mxew.svg';



export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to track unlimited transactions without getting charged any fees',
    buttonLabel: 'Get started',
    imgStart: false,
    img: img,
    alt: 'Car',
    dark: false,
    primary: true,
    darkText: false,
    navigateTo: "signup"
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Login to your account anytime',
    description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: img2,
    alt: 'Piggybank',
    dark: false,
    primary: false,
    darkText: true,
    navigateTo: "services"
};


export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join our Community',
    headline: 'Creating an account is extremely easy',
    description: "Get everything up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
    buttonLabel: 'Start Now',
    imgStart: false,
    img: img3,
    alt: 'Papers',
    dark: false,
    primary: false,
    darkText: true,
    navigateTo: "home"
};