import heartLogo from "./assets/heart_arrhythmia.jpg";
import tempLogo from "./assets/pressure_fluctuations.jpg";
import liverLogo from "./assets/cirrhosis.jpg";

import mindcalciumLogo from "./assets/calcium_for_brain_nutrition.jpg";
import cordycepsLogo from "./assets/cordyceps.jpg";
import chitozanLogo from "./assets/chitosan.jpg";
import feedbackImg1 from "./assets/feedbackImg1.jpg";
import portraitImg2 from "./assets/susanna_vardanyan.jpg";

export const diseases = {
    title: "Տարածված Հիվանդություններ",
    array: [
        {
            id: "1",
            name: "heart_arrhythmia",
            key: "heart_arrhythmia",
            image: heartLogo,
            about: "heart_arrhythmia_about",
        },
        {
            id: "2",
            name: "pressure_fluctuations",
            key: "pressure_fluctuations",
            image: tempLogo,
            about: "pressure_fluctuations_about",
        },
        {
            id: "3",
            name: "cirrhosis",
            key: "cirrhosis",
            image: liverLogo,
            about: "cirrhosis_about",
        },
        // {
        //     id: "4",
        //     key: "adenoma_prostate",
        //     name: "prostatate_adenoma",
        //     shortTitle: "Հիվանդություն, որի ժամանակ լյարդը չի կարողանում նորմալ գործել երկարատև վնասման պատճառով",
        //     image: prostateLogo,
        //     about: "prostatate_adenoma_about",
        // },
    ]
}

export const foods = {
    product: true,
    title: "Կենսաբանական ակտիվ հավելումներ, որոնք կօգնեն մաքրել օրգանիզմը",
    // title: "",
    array: [
        {
            id: "1",
            name: "calcium_for_brain_nutrition",
            key: "calcium_for_brain_nutrition",
            image: mindcalciumLogo,
            category: "recovery",
            compound: "compound_calcium",
            function: "function_calcium",
            healing_properties: "healing_properties_calcium",
            about: "",
            filter: ["forSportsmen"],
        },
        {
            id: "2",
            name: "cordyceps",
            key: "cordyceps",
            image: cordycepsLogo,
            category: "replenishment",
            compound: "compound_cordyceps",
            function: "function_cordyceps",
            healing_properties: "healing_properties_cordyceps",
            about: "",
            filter: ["forSportsmen", "forLoseWeight"],
        },
        {
            id: "3",
            name: "chitosan",
            key: "chitosan",
            image: chitozanLogo,
            category: "cleansing",
            compound: "compound_chitozan",
            function: "function_chitozan",
            healing_properties: "healing_properties_chitozan",
            about: "",
            filter: ["forSportsmen"],
        },
        
    ]
}

export const feedbackData = [
    { image: portraitImg2, name: 'susanna_vardanyan', city: "susanna_city", comment: "susanna_feedback" },
    { image: feedbackImg1, name: 'sofi_grigoryan', city: "sofi_city", comment: "sofi_feedback"},
    // { image: feedbackImg3, name: 'meri_manukyan', city: "meri_city", comment: "meri_feedback"},
];
