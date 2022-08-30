const quotes = [
    {
        quote: "꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다.",
        author: "<월트 디즈니>",
    },
    {
        quote: "절대로 고개를 떨구지 말라. 고개를 꼿꼿이 치켜 들고 두 눈으로 똑똑히 세상을 보라.",
        author: "<헬렌 켈러>",
    },
    {
        quote: "우리는 한 번도 존재하지 않았던 것을 꿈꿀 수 있는 사람들이 필요하다.",
        author: "<존 F. 케네디>",
    },
    {
        quote: "변화는 우리가 누군가나 무엇, 혹은 후일을 기다린다고 찾아오지 않는다. 우리 자신이 우리가 기다리던 사람이고 우리가 바로 우리가 추구하는 변화이다.",
        author: "<버락 오바마 대통령>",
    },
    {
        quote: "조금도 도전하지 않으려고 하는 것이 인생에서 가장 위험한 일이다.",
        author: "<오프라 윈프리>",
    },
    {
        quote: "남들이 할 수 있거나 하려는 일을 하지 말고 남들이 할 수 없거나 하지 않으려는 일을 하라.",
        author: "<최초로 대서양을 횡단한 여성 비행사 아멜리아 에어하트>",
    },
    {
        quote: "새로운 일에 도전하다 보면 가끔 실수를 저지를 수 있다. 자신의 실수를 빨리 인정하고 다른 시도에 집중하는 것이 최선이다.",
        author: "<스티브 잡스>",
    },
    {
        quote: "행동은 모든 성공의 가장 기초적인 핵심이다.",
        author: "<파블로 피카소>",
    },
    {
        quote: "노력하는 사람에게 불가능이란 없다.",
        author: "<알렉산더 대왕>",
    },
    {
        quote: "가장 용감한 행동은 자신에 대해 생각하고 그것을 큰 소리로 외치는 일이다.",
        author: "<패션 디자이너 코코 샤넬>",
    },
    {
        quote: "나약한 태도는 그 사람 자체도 나약하게 만든다.",
        author: "<알버트 아인슈타인>",
    },
    {
        quote: "인간은 자신이 원하는 만큼 위대해질 수 있다. 자신을 믿고 용기, 투지, 헌신, 경쟁력있는 추진력을 가진다면, 그리고 가치있는 것들을 위한 대가로 작은 것들을 희생할 용의가 있다면 가능하다.",
        author: "<빈스 롬바디>",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
