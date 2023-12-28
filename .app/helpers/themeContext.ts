
interface themeInterface {
    clearTheme: () => void;
    setDefaultTheme: () => void;
    detectColorScheme: () => "dark" | "light";
    setTheme: (value: "dark" | "light") => void;
    getTheme: () => string | null;

}
let themeHandlers:themeInterface = {} as any;

const KEY = 'theme';

themeHandlers.getTheme = function(): string|null{
    return localStorage.getItem(KEY)
}


themeHandlers.setTheme = function(value:  'dark'|'light') {
        // STORE THE DARK MODE ON THE HTML AS class
    // document.documentElement.dataset.mode = value
    return localStorage.setItem(KEY, value)
}

themeHandlers.clearTheme = function(){
    return localStorage.removeItem(KEY)
}

themeHandlers.detectColorScheme = function() {
//     const getCurTheme = window.matchMedia("(prefers-color-theme: dark)").matches;

//     return getCurTheme ? 'dark' : 'light';
return 'dark'
}

themeHandlers.setDefaultTheme = function() {
    // check system esisting theme
    if(!getTheme()) {
        document.documentElement.classList.add(detectColorScheme())
        return setTheme(detectColorScheme())
    }
    document.documentElement.classList.add(getTheme() as string)
    return setTheme(getTheme() as 'dark'|'light')
 
}

// GLOBAL
export const {setDefaultTheme, detectColorScheme, getTheme, setTheme, clearTheme} = themeHandlers;


export default function toggleThemeMode() {
    if(getTheme() === 'dark') {
        setTheme("light")
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
    }else if(getTheme() === 'light') {
        setTheme('dark')
        document.documentElement.classList.remove('light')
        document.documentElement.classList.add('dark')
    }else {
        clearTheme();
        setDefaultTheme()
    }

    window.scrollTo({
        top: window.scrollY-1,
        behavior: "smooth"
    })
}

