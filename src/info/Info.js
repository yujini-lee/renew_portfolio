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
        proficientWith:['HTML','CSS','Javascript & Jquery','React','Git','GitHub','Firebase','Photoshop']
    },
    portfolio : [
        {
            title: '컬리 이벤트 페이지 개발',
            description : '리액트 환경에서 마켓 & 뷰티 이벤트 페이지 제작 및 개발 하였습니다.',
            techStack : ['HTML','CSS','Javascript & Jquery','React','GitHub'],
            period : '2023.04 ~ ',
        },
        {
            title: 'LG 스토어 운영',
            description : 'LG 스토어 웹 & 앱 운영을 하였고, 이벤트 페이지도 제작 및 개발 하였습니다. 이 프로젝트 참여중 웹접근성으로 사이트 전체 수정 작업도 이루어졌습니다.',
            techStack : ['HTML','CSS','Javascript & Jquery'],
            period : '2019.08 ~ 2020.01, 2020.08 ~ 2023.03',
        },
        {
            title: '아모레퍼시픽 브랜드 사이트 운영',
            description : 'AEM을 사용하여 아모레퍼시픽의 전반적인 브랜드 사이트 운영 및 페이지 유지보수를 하였습니다.',
            techStack : ['HTML','CSS','Javascript & Jquery'],
            period : '2019.03 ~ 2019.08',
        },
        {
            title: 'Yujin Renew Portfolio',
            description : '포트폴리오를 리뉴얼 작업했습니다. Module CSS, Router 등으로 제작 하였습니다.',
            techStack : ['HTML','CSS','Javascript & Jquery','React','GitHub'],
            period : '~ing',
            github : 'https://github.com/yujini-lee/renew_portfolio',
        },
        {
            title: '날씨 API',
            description : 'Weather API를 사용하여 검색했을때 해당 국가의 날씨를 알 수 있는 리액트 페이지를 만들었습니다.',
            techStack : ['HTML','CSS','Javascript & Jquery','React','GitHub'],
            period : '2day',
            github : 'https://github.com/yujini-lee/project_weather',
        },
        

    ]
}
