export const menuItemsData = [
    {
        title: "HOME",
        url: "/",
    },
    {
        title: "회사소개",
        // url: "/services",
        submenu: [
            {
                title: "인사말",
                url: "/intro/greetings",
            },
            // 2024.03.19 SJH) If I use below code, I can make sub-menu.  
            // {
            //     title: "Web Development",
            //     url: "web-dev",
            //     submenu: [
            //         {
            //             title: "Frontend",
            //             url: "frontend",
            //         },
            //         {
            //             title: "Backend",
            //             submenu: [
            //                 {
            //                     title: "NodeJS",
            //                     url: "node",
            //                 },
            //                 {
            //                     title: "PHP",
            //                     url: "php",
            //                 },
            //             ],
            //         },
            //     ],
            // },
            {
                title: "교육 철학",
                url: "/intro/philosophy",
            },
            {
                title: "교육 현장",
                url: "seo",
            }
        ],
    },
    {
        title: "프로그램",
        // url: "/services",
        submenu: [
            {
                title: "프로그램 소개",
                url: "web-design",
            },
            {
                title: "학습코칭 기초과정",
                url: "seo",
            },
            {
                title: "학습코칭 기본과정",
                url: "seo",
            },
            {
                title: "학습코칭 심화과정",
                url: "seo",
            },
            {
                title: "학습코칭 집중과정",
                url: "seo",
            },
            {
                title: "진로학업설계 지원교육",
                url: "seo",
            }
        ],
    },
    {
        title: "교육문의",
        // url: "/services",
        submenu: [
            {
                title: "문의하기",
                url: "web-design",
            },
            {
                title: "자주 묻는 질문 (FAQ)",
                url: "seo",
            },
            {
                title: "교재안내",
                url: "seo",
            }
        ],
    },    
];