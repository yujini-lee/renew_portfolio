import project1 from '../img/mock1.png';
import project2 from "../img/mock2.png"
// import project3 from "../img/project3.png"
// import project4 from "../img/project4.png"
// import project5 from "../img/project5.png"

export const info = {
    firstName: "유진",
    lastName: "이",
    initials: "🖥️",
    miniBio: [
        {
            emoji: "⚒️",
            text: "포트폴리오 제작중"
        },
        {
            emoji: '😆',
            text: '밝은 성격 보유자'
        },
        {
            emoji: '📚',
            text: '꾸준한 자기개발'
        },
        {
            emoji: '🏋🏻',
            text: '운동도 열심히'
        },
        {
            emoji: "📧",
            text: "yjlee2324@naver.com"
        }
    ],
    socials: [
        {
            link: "https://velog.io/@yujini_lee",
            icon: 'Velog',
            label: 'Velog'
        },
        {
            link: "https://github.com/yujini-lee",
            icon: "BsGithub",
            label: 'fa-brands fa-github'
        },
       {
            link: "https://twitter.com/yujini_lee",
            icon: '',
            label: 'fa-brands fa-twitter'
        },
    ],
    skills : { 
        proficientWith:['HTML','CSS','Javascript & Jquery','React','Git','Firebase','Photoshop']
    },
    portfolio : [
        {
            title: 'project1',
            link : 'http://www.digitalidea.co.kr/myboard/vfx',
            img : project1,
        },
        {
            title: 'project2',
            link : 'http://www.digitalidea.co.kr/myboard/vfx',
            img : project2,
        },
        
    ]
}