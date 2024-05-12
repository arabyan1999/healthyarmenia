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
import thyroidTreatmentImg from "./assets/thyroidtreatment.webp";

export const CommonDiseases = {
    title: "Տարածված Հիվանդություններ",
    array: [
        {
            id: "1",
            name: "Սրտային առիթմիա",
            shortTitle: "Սրտի ռիթմի խանգարումները կարող են առաջանալ ամենատարբեր պատճառներից՝ ինչպես սրտային, այնպես էլ արտասրտային ծագման",
            image: heartLogo,
            about: "Սիրտը կազմված է 4 խոռոչից՝ երկու վերին (նախասրտեր կամ ատրիա) և երկու ստորին (փորոքներ կամ վերտրիկուլա):",
            treatment: "Սովորաբար, բուժում պահանջվում է միայն այն դեպքում, երբ առիթմիան"
        },
        {
            id: "2",
            name: "Ճնշման տատանումներ",
            shortTitle: "Հաճախ մարդիկ գանգատվում են զարկերակային ճնշման բարձրացումից կամ իջեցումից",
            image: tempLogo,
            about: "Սիրտը կազմված է 4 խոռոչից՝ երկու վերին (նախասրտեր կամ ատրիա) և երկու ստորին (փորոքներ կամ վերտրիկուլա):",
            treatment: "Սովորաբար, բուժում պահանջվում է միայն այն դեպքում, երբ առիթմիան"
        },
        {
            id: "3",
            name: "Լյարդի ցիռոզ",
            shortTitle: "Հիվանդություն, որի ժամանակ լյարդը չի կարողանում նորմալ գործել երկարատև վնասման պատճառով",
            image: liverLogo,
            about: "Սիրտը կազմված է 4 խոռոչից՝ երկու վերին (նախասրտեր կամ ատրիա) և երկու ստորին (փորոքներ կամ վերտրիկուլա):",
            treatment: "Սովորաբար, բուժում պահանջվում է միայն այն դեպքում, երբ առիթմիան"
        }
    ]
}

export const foods = {
    product: true,
    title: "Կենսաբանական ակտիվ հավելումներ",
    array: [
        {
            id: "1",
            name: "Կալցիում",
            shortTitle: "հատուկ նախատեսված է արյան մեջ շաքարի բարձր մակարդակ ունեցող մարդկանց, դիետիկների և դիաբետիկների համար",
            image: calciumLogo,
            category: "recovery",
            compound: "compound_calcium",
            function: "function_calcium",
            healing_properties: "healing_properties_calcium",
            about: "",
        },
        {
            id: "2",
            name: "Կարդիցեպս",
            shortTitle: "Բարելավում է մարդու օրգանիզմի իմունային համակարգի վիճակը, մեծացնում է դիմադրողականությունը տարբեր պաթոգեն բակտերիաների և այլ միկրոօրգանիզմների նկատմամբ, մեծացնում է օրգանիզմի հարմարվողական կարողությունները",
            image: cordycepsLogo,
            category: "replenishment",
            compound: "compound_cordyceps",
            function: "function_cordyceps",
            healing_properties: "healing_properties_cordyceps",
            about: "",
        },
        {
            id: "3",
            name: "Խիտոզան",
            shortTitle: "Դեղը արգելակում է տարածումը և կանխում քաղցկեղի բջիջների մետաստազիզացումը: Նվազեցնում է արյան ճնշումը՝ կարգավորելով խոլեստերինի մակարդակը և կանխելով աթերոսկլերոզի զարգացումը",
            image: chitozanLogo,
            category: "cleansing",
            compound: "compound_chitozan",
            function: "function_chitozan",
            healing_properties: "healing_properties_chitozan",
            about: "",
        }
    ]
}

export const professors = {
    title: "Մեր մասնագետները",
    isProfessors: true,
    array: [
        {
            id: "1",
            name: "Մարինե Մարուքյան",
            role: "Ավագ մասնագետ",
            image: doctorImg1
        },
        {
            id: "2",
            name: "Ստեփան Փարթամյան",
            role: "Մասնագետ",
            image: doctorImg2
        },
        {
            id: "3",
            name: "Տաթև Սարգսյան",
            role: "Խորհրդատու Մասնագետ",
            image: doctorImg3
        },
    ]
}

export const feedbackData = [
    { image: portraitImg1, name: 'Alice', surname: "Johnson", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris." },
    { image: portraitImg2, name: 'Jane', surname: "Smith", comment: "Content is intended to stand out on a page. So, if a designer or client is reviewing a template and its layout, they can easily become distracted by the writing and lose focus of the design itself." },
    { image: portraitImg3, name: "John", surname: "Doe", comment: "Even as we developed new technologies in the 20th and 21st centuries, Lorem Ipsum endured as our preferred filler text. In the 1960s, the text was printed on dry-transfer sheets and used by architects." },
];
  
export const threatmentData = {
    title: "Մեր բուժումները",
    array: [
        {
            image: thyroidTreatmentImg,
            name: "Thyroid Treatment",
            shortTitle: "Lorem Ipsum, type lorem then press the shortcut. The default keyboard shortcut is the same for all supported platforms."
        },
        {
            image: thyroidTreatmentImg,
            name: "Diabetes Treatment",
            shortTitle: "Lorem Ipsum, type lorem then press the shortcut. The default keyboard shortcut is the same for all supported platforms."
        },
        {
            image: thyroidTreatmentImg,
            name: "Treatment for Arthritis",
            shortTitle: "Lorem Ipsum, type lorem then press the shortcut. The default keyboard shortcut is the same for all supported platforms."
        },
        {
            image: thyroidTreatmentImg,
            name: "Treatment for Asthma",
            shortTitle: "Lorem Ipsum, type lorem then press the shortcut. The default keyboard shortcut is the same for all supported platforms."
        },
        {
            image: thyroidTreatmentImg,
            name: "Treatment for Skin",
            shortTitle: "Lorem Ipsum, type lorem then press the shortcut. The default keyboard shortcut is the same for all supported platforms."
        },
        {
            image: thyroidTreatmentImg,
            name: "Treatment for Obesity",
            shortTitle: "Lorem Ipsum, type lorem then press the shortcut. The default keyboard shortcut is the same for all supported platforms."
        }
    ]
}

export const diseases = [
    { label: 'heart', link: '/' },
    { label: 'liver', link: '/about' },
    { label: '', link: '/services' },
    { label: 'Contact', link: '/contact' },
];
