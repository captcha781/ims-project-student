// import package
import browser from 'browser-detect';

const browserResult = browser();

export const isMobile = () => {
    return browserResult.mobile;
}

export const mobileType = () => {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;
    let platForm = navigator.platform;

    let macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
    let windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];

    if (macosPlatforms.includes(platForm)) {
        return 'mac';
    } else if (windowsPlatforms.includes(platForm)) {
        return 'windows';
    } else if (/android/i.test(userAgent)) {
        return "android";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "ios";
    }
    return '';
}