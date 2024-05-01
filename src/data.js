import heartLogo from "./assets/images.jpg";
import tempLogo from "./assets/temp.jpg";
import liverLogo from "./assets/liver.jpg";
import calciumLogo from "./assets/calcium.jpg";
import cordycepsLogo from "./assets/cordyceps.jpg";
import chitozanLogo from "./assets/chitozan.jpg";
import doctorImg1 from "./assets/doctor1.jpg";
import doctorImg2 from "./assets/doctor2.jpg";
import doctorImg3 from "./assets/doctor3.jpg";
import portraitImg1 from "./assets/portrait1.jpg";
import portraitImg2 from "./assets/portrait2.jpg";
import portraitImg3 from "./assets/portrait3.jpg";

export const CommonDiseases = {
    title: "Տարածված Հիվանդություններ",
    array: [
        {
            name: "Սրտային առիթմիա",
            shortTitle: "Սրտի ռիթմի խանգարումները կարող են առաջանալ ամենատարբեր պատճառներից՝ ինչպես սրտային, այնպես էլ արտասրտային ծագման",
            image: heartLogo,
            about: "Սիրտը կազմված է 4 խոռոչից՝ երկու վերին (նախասրտեր կամ ատրիա) և երկու ստորին (փորոքներ կամ վերտրիկուլա):",
            treatment: "Սովորաբար, բուժում պահանջվում է միայն այն դեպքում, երբ առիթմիան"
        },
        {
            name: "Ճնշման տատանումներ",
            shortTitle: "Հաճախ մարդիկ գանգատվում են զարկերակային ճնշման բարձրացումից կամ իջեցումից",
            image: tempLogo,
            about: "Սիրտը կազմված է 4 խոռոչից՝ երկու վերին (նախասրտեր կամ ատրիա) և երկու ստորին (փորոքներ կամ վերտրիկուլա):",
            treatment: "Սովորաբար, բուժում պահանջվում է միայն այն դեպքում, երբ առիթմիան"
        },
        {
            name: "Լյարդի ցիռոզ",
            shortTitle: "Հիվանդություն, որի ժամանակ լյարդը չի կարողանում նորմալ գործել երկարատև վնասման պատճառով",
            image: liverLogo,
            about: "Սիրտը կազմված է 4 խոռոչից՝ երկու վերին (նախասրտեր կամ ատրիա) և երկու ստորին (փորոքներ կամ վերտրիկուլա):",
            treatment: "Սովորաբար, բուժում պահանջվում է միայն այն դեպքում, երբ առիթմիան"
        }
    ]
}

export const foods = {
    title: "Կենսաբանական ակտիվ հավելումներ",
    array: [
        {
            name: "Կալցիում",
            shortTitle: "հատուկ նախատեսված է արյան մեջ շաքարի բարձր մակարդակ ունեցող մարդկանց, դիետիկների և դիաբետիկների համար",
            image: calciumLogo,
            about: "",
        },
        {
            name: "Կարդիցեպս",
            shortTitle: "Բարելավում է մարդու օրգանիզմի իմունային համակարգի վիճակը, մեծացնում է դիմադրողականությունը տարբեր պաթոգեն բակտերիաների և այլ միկրոօրգանիզմների նկատմամբ, մեծացնում է օրգանիզմի հարմարվողական կարողությունները",
            image: cordycepsLogo,
            about: "",
        },
        {
            name: "Խիտոզան",
            shortTitle: "Препарат подавляет размножение и препятствует метастазированию раковых клеток. Снижает артериальное давление, путем регуляции уровня холестерина и предотвращения развития атеросклероза",
            image: chitozanLogo,
            about: "",
        }
    ]
}

export const professors = {
    title: "Մեր մասնագետները",
    isProfessors: true,
    array: [
        {
            name: "Մարինե Մարուքյան",
            role: "Ավագ մասնագետ",
            image: doctorImg1
        },
        {
            name: "Ստեփան Փարթամյան",
            role: "Մասնագետ",
            image: doctorImg2
        },
        {
            name: "Տաթև Սարգսյան",
            role: "Խորհրդատու Մասնագետ",
            image: doctorImg3
        },
    ]
}

export const feedbackData = [
    { image: portraitImg1, name: 'Alice', surname: "Johnson", comment: 'Easy to use and navigate.' },
    { image: portraitImg2, name: 'Jane', surname: "Smith", comment: 'Very helpful customer service.' },
    { image: portraitImg3, name: 'John', surname: "Doe", comment: 'Great product, I love it!' },
  ];
  