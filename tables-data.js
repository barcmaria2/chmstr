
// База данных всех таблиц из методички ПИМУ
const tablesData = {
    table2: {
        title: "Таблица 2. Коэффициенты активности ионов",
        instruction: "Выберите значение ионной силы раствора (I):",
        data: [
            { id: "0.0001", name: "I = 0,0001", info: "Заряд ±1: <span class='result-val'>0,99</span><br>Заряд ±2: <span class='result-val'>0,95</span><br>Заряд ±3: <span class='result-val'>0,90</span>" },
            { id: "0.0002", name: "I = 0,0002", info: "Заряд ±1: <span class='result-val'>0,98</span><br>Заряд ±2: <span class='result-val'>0,94</span><br>Заряд ±3: <span class='result-val'>0,87</span>" },
            { id: "0.0005", name: "I = 0,0005", info: "Заряд ±1: <span class='result-val'>0,97</span><br>Заряд ±2: <span class='result-val'>0,90</span><br>Заряд ±3: <span class='result-val'>0,80</span>" },
            { id: "0.001", name: "I = 0,001", info: "Заряд ±1: <span class='result-val'>0,96</span><br>Заряд ±2: <span class='result-val'>0,86</span><br>Заряд ±3: <span class='result-val'>0,73</span>" },
            { id: "0.002", name: "I = 0,002", info: "Заряд ±1: <span class='result-val'>0,95</span><br>Заряд ±2: <span class='result-val'>0,81</span><br>Заряд ±3: <span class='result-val'>0,64</span>" },
            { id: "0.005", name: "I = 0,005", info: "Заряд ±1: <span class='result-val'>0,92</span><br>Заряд ±2: <span class='result-val'>0,72</span><br>Заряд ±3: <span class='result-val'>0,51</span>" },
            { id: "0.01", name: "I = 0,01", info: "Заряд ±1: <span class='result-val'>0,89</span><br>Заряд ±2: <span class='result-val'>0,63</span><br>Заряд ±3: <span class='result-val'>0,39</span>" },
            { id: "0.02", name: "I = 0,02", info: "Заряд ±1: <span class='result-val'>0,87</span><br>Заряд ±2: <span class='result-val'>0,57</span><br>Заряд ±3: <span class='result-val'>0,28</span>" },
            { id: "0.05", name: "I = 0,05", info: "Заряд ±1: <span class='result-val'>0,84</span><br>Заряд ±2: <span class='result-val'>0,50</span><br>Заряд ±3: <span class='result-val'>0,21</span>" },
            { id: "0.1", name: "I = 0,1", info: "Заряд ±1: <span class='result-val'>0,81</span><br>Заряд ±2: <span class='result-val'>0,44</span><br>Заряд ±3: <span class='result-val'>0,16</span>" },
            { id: "0.2", name: "I = 0,2", info: "Заряд ±1: <span class='result-val'>0,80</span><br>Заряд ±2: <span class='result-val'>0,41</span><br>Заряд ±3: <span class='result-val'>0,14</span>" },
            { id: "0.3", name: "I = 0,3", info: "Заряд ±1: <span class='result-val'>0,81</span><br>Заряд ±2: <span class='result-val'>0,42</span><br>Заряд ±3: <span class='result-val'>0,14</span>" },
            { id: "0.4", name: "I = 0,4", info: "Заряд ±1: <span class='result-val'>0,82</span><br>Заряд ±2: <span class='result-val'>0,45</span><br>Заряд ±3: <span class='result-val'>0,17</span>" },
            { id: "0.5", name: "I = 0,5", info: "Заряд ±1: <span class='result-val'>0,84</span><br>Заряд ±2: <span class='result-val'>0,50</span><br>Заряд ±3: <span class='result-val'>0,21</span>" },
            { id: "0.6", name: "I = 0,6", info: "Заряд ±1: <span class='result-val'>0,87</span><br>Заряд ±2: <span class='result-val'>0,56</span><br>Заряд ±3: <span class='result-val'>0,27</span>" },
            { id: "0.7", name: "I = 0,7", info: "Заряд ±1: <span class='result-val'>0,89</span><br>Заряд ±2: <span class='result-val'>0,63</span><br>Заряд ±3: <span class='result-val'>0,36</span>" }
        ]
    },
    table3: {
        title: "Таблица 3. Термодинамические параметры при 25°C",
        instruction: "1. Сначала выберите химическую группу:",
        isGrouped: true,
        data: [
            {id:"t3_1", group:"Группа IA (H, Li, Na, K)", text:"H⁺ (водн)", dh:"0", dg:"0", s:"0"},
            {id:"t3_2", group:"Группа IA (H, Li, Na, K)", text:"H₂ (г)", dh:"0", dg:"0", s:"131"},
            {id:"t3_3", group:"Группа IA (H, Li, Na, K)", text:"Li⁺ (водн)", dh:"-278.46", dg:"-293.80", s:"14.00"},
            {id:"t3_4", group:"Группа IA (H, Li, Na, K)", text:"Li (тв)", dh:"0", dg:"0", s:"29.10"},
            {id:"t3_5", group:"Группа IA (H, Li, Na, K)", text:"LiF (тв)", dh:"-616.90", dg:"-588.70", s:"35.66"},
            {id:"t3_6", group:"Группа IA (H, Li, Na, K)", text:"LiCl (тв)", dh:"-408.00", dg:"-384.00", s:"59.30"},
            {id:"t3_7", group:"Группа IA (H, Li, Na, K)", text:"LiBr (тв)", dh:"-351.00", dg:"-342.00", s:"74.10"},
            {id:"t3_8", group:"Группа IA (H, Li, Na, K)", text:"LiI (тв)", dh:"-270.00", dg:"-270.00", s:"85.80"},
            {id:"t3_9", group:"Группа IA (H, Li, Na, K)", text:"Na⁺ (водн)", dh:"-239.66", dg:"-261.87", s:"60.20"},
            {id:"t3_10", group:"Группа IA (H, Li, Na, K)", text:"Na (тв)", dh:"0", dg:"0", s:"51.446"},
            {id:"t3_11", group:"Группа IA (H, Li, Na, K)", text:"NaF (тв)", dh:"-575.40", dg:"-545.10", s:"51.21"},
            {id:"t3_12", group:"Группа IA (H, Li, Na, K)", text:"NaCl (тв)", dh:"-411.10", dg:"-384.00", s:"72.12"},
            {id:"t3_13", group:"Группа IA (H, Li, Na, K)", text:"NaBr (тв)", dh:"-361.00", dg:"-349.00", s:"86.82"},
            {id:"t3_14", group:"Группа IA (H, Li, Na, K)", text:"NaI (тв)", dh:"-288.00", dg:"-285.00", s:"98.50"},
            {id:"t3_15", group:"Группа IA (H, Li, Na, K)", text:"NaHCO₃ (тв)", dh:"-947.70", dg:"-851.90", s:"102.00"},
            {id:"t3_16", group:"Группа IA (H, Li, Na, K)", text:"Na₂CO₃ (тв)", dh:"-1130.80", dg:"-1048.10", s:"139.00"},
            {id:"t3_17", group:"Группа IA (H, Li, Na, K)", text:"K⁺ (водн)", dh:"-251.20", dg:"-282.28", s:"103.00"},
            {id:"t3_18", group:"Группа IA (H, Li, Na, K)", text:"K (тв)", dh:"0", dg:"0", s:"64.672"},
            {id:"t3_19", group:"Группа IA (H, Li, Na, K)", text:"KF (тв)", dh:"-568.60", dg:"-538.90", s:"66.55"},
            {id:"t3_20", group:"Группа IA (H, Li, Na, K)", text:"KCl (тв)", dh:"-436.68", dg:"-408.80", s:"82.55"},
            {id:"t3_21", group:"Группа IA (H, Li, Na, K)", text:"KBr (тв)", dh:"-394.00", dg:"-380.00", s:"95.94"},
            {id:"t3_22", group:"Группа IA (H, Li, Na, K)", text:"KI (тв)", dh:"-328.00", dg:"-323.00", s:"106.39"},
            
            {id:"t3_23", group:"Группа IIA (Mg, Ca, Ba)", text:"Mg²⁺ (водн)", dh:"-461.96", dg:"-456.01", s:"-118.00"},
            {id:"t3_24", group:"Группа IIA (Mg, Ca, Ba)", text:"Mg (тв)", dh:"0", dg:"0", s:"32.69"},
            {id:"t3_25", group:"Группа IIA (Mg, Ca, Ba)", text:"MgCl₂ (тв)", dh:"-641.60", dg:"-592.10", s:"89.63"},
            {id:"t3_26", group:"Группа IIA (Mg, Ca, Ba)", text:"MgO (тв)", dh:"-601.20", dg:"-569.00", s:"26.90"},
            {id:"t3_27", group:"Группа IIA (Mg, Ca, Ba)", text:"Mg₃N₂ (тв)", dh:"-461.00", dg:"-401.00", s:"88.00"},
            {id:"t3_28", group:"Группа IIA (Mg, Ca, Ba)", text:"MgCO₃ (тв)", dh:"-1112.00", dg:"-1028.00", s:"65.86"},
            {id:"t3_29", group:"Группа IIA (Mg, Ca, Ba)", text:"Ca²⁺ (водн)", dh:"-542.96", dg:"-553.04", s:"-55.20"},
            {id:"t3_30", group:"Группа IIA (Mg, Ca, Ba)", text:"Ca (тв)", dh:"0", dg:"0", s:"41.60"},
            {id:"t3_31", group:"Группа IIA (Mg, Ca, Ba)", text:"CaF₂ (тв)", dh:"-1215.00", dg:"-1162.00", s:"68.87"},
            {id:"t3_32", group:"Группа IIA (Mg, Ca, Ba)", text:"CaCl₂ (тв)", dh:"-795.00", dg:"-750.20", s:"114.00"},
            {id:"t3_33", group:"Группа IIA (Mg, Ca, Ba)", text:"CaO (тв)", dh:"-635.10", dg:"-603.50", s:"38.20"},
            {id:"t3_34", group:"Группа IIA (Mg, Ca, Ba)", text:"CaCO₃ (тв)", dh:"-1206.90", dg:"-1128.80", s:"92.90"},
            {id:"t3_35", group:"Группа IIA (Mg, Ca, Ba)", text:"CaSO₄ (тв)", dh:"-1432.70", dg:"-1320.30", s:"107.00"},
            {id:"t3_36", group:"Группа IIA (Mg, Ca, Ba)", text:"Ca₃(PO₄)₂ (тв)", dh:"-4138.00", dg:"-3899.00", s:"263.00"},
            {id:"t3_37", group:"Группа IIA (Mg, Ca, Ba)", text:"Ba²⁺ (водн)", dh:"-538.36", dg:"-560.70", s:"13.00"},
            {id:"t3_38", group:"Группа IIA (Mg, Ca, Ba)", text:"Ba (тв)", dh:"0", dg:"0", s:"62.50"},
            {id:"t3_39", group:"Группа IIA (Mg, Ca, Ba)", text:"BaCl₂ (тв)", dh:"-806.06", dg:"-810.90", s:"126.00"},
            {id:"t3_40", group:"Группа IIA (Mg, Ca, Ba)", text:"BaO (тв)", dh:"-548.10", dg:"-520.40", s:"72.07"},
            {id:"t3_41", group:"Группа IIA (Mg, Ca, Ba)", text:"BaCO₃ (тв)", dh:"-1219.00", dg:"-1139.00", s:"112.00"},
            {id:"t3_42", group:"Группа IIA (Mg, Ca, Ba)", text:"BaSO₄ (тв)", dh:"-1465.00", dg:"-1353.00", s:"132.00"},

            {id:"t3_43", group:"Группа IIIA (B, Al)", text:"B (β-ромбич.)", dh:"0", dg:"0", s:"5.87"},
            {id:"t3_44", group:"Группа IIIA (B, Al)", text:"B₂O₃ (тв)", dh:"-1272.00", dg:"-1193.00", s:"53.80"},
            {id:"t3_45", group:"Группа IIIA (B, Al)", text:"Al (тв)", dh:"0", dg:"0", s:"28.30"},
            {id:"t3_46", group:"Группа IIIA (B, Al)", text:"Al³⁺ (водн)", dh:"-524.70", dg:"-481.20", s:"-313.00"},
            {id:"t3_47", group:"Группа IIIA (B, Al)", text:"Al₂O₃ (тв)", dh:"-1676.00", dg:"-1582.00", s:"50.94"},

            {id:"t3_48", group:"Группа IVA (C, Si, Sn, Pb)", text:"C (графит)", dh:"0", dg:"0", s:"5.686"},
            {id:"t3_49", group:"Группа IVA (C, Si, Sn, Pb)", text:"C (алмаз)", dh:"1.896", dg:"2.866", s:"2.439"},
            {id:"t3_50", group:"Группа IVA (C, Si, Sn, Pb)", text:"CO (г)", dh:"-110", dg:"-137.20", s:"197.50"},
            {id:"t3_51", group:"Группа IVA (C, Si, Sn, Pb)", text:"CO(NH₂)₂ (тв)", dh:"-332.98", dg:"-196.863", s:"104.67"},
            {id:"t3_52", group:"Группа IVA (C, Si, Sn, Pb)", text:"CO(NH₂)₂ (водн)", dh:"-317.66", dg:"-202.72", s:"175.74"},
            {id:"t3_53", group:"Группа IVA (C, Si, Sn, Pb)", text:"CO₂ (г)", dh:"-393.50", dg:"-394.40", s:"213.70"},
            {id:"t3_54", group:"Группа IVA (C, Si, Sn, Pb)", text:"CO₂ (р)", dh:"-412.90", dg:"-386.20", s:"121.00"},
            {id:"t3_55", group:"Группа IVA (C, Si, Sn, Pb)", text:"CO₃²⁻ (водн)", dh:"-676.26", dg:"-528.10", s:"-53.10"},
            {id:"t3_56", group:"Группа IVA (C, Si, Sn, Pb)", text:"HCO₃⁻ (водн)", dh:"-691.11", dg:"-587.06", s:"95.00"},
            {id:"t3_57", group:"Группа IVA (C, Si, Sn, Pb)", text:"H₂CO₃ (водн)", dh:"-698.70", dg:"-623.42", s:"191.00"},
            {id:"t3_58", group:"Группа IVA (C, Si, Sn, Pb)", text:"CH₄ (г)", dh:"-74.87", dg:"-50.81", s:"186.10"},
            {id:"t3_59", group:"Группа IVA (C, Si, Sn, Pb)", text:"C₂H₂ (г)", dh:"227.00", dg:"209.00", s:"200.85"},
            {id:"t3_60", group:"Группа IVA (C, Si, Sn, Pb)", text:"C₂H₄ (г)", dh:"52.47", dg:"68.36", s:"219.22"},
            {id:"t3_61", group:"Группа IVA (C, Si, Sn, Pb)", text:"C₂H₆ (г)", dh:"-84.667", dg:"-32.89", s:"229.50"},
            {id:"t3_62", group:"Группа IVA (C, Si, Sn, Pb)", text:"C₆H₆ (ж)", dh:"49.00", dg:"124.50", s:"172.80"},
            {id:"t3_63", group:"Группа IVA (C, Si, Sn, Pb)", text:"C₆H₆ (г)", dh:"83.00", dg:"130.00", s:"269.00"},
            {id:"t3_64", group:"Группа IVA (C, Si, Sn, Pb)", text:"CH₃OH (г)", dh:"-201.20", dg:"-161.90", s:"238.00"},
            {id:"t3_65", group:"Группа IVA (C, Si, Sn, Pb)", text:"CH₃OH (ж)", dh:"-238.60", dg:"-166.20", s:"127.00"},
            {id:"t3_66", group:"Группа IVA (C, Si, Sn, Pb)", text:"HCHO (г)", dh:"-116.00", dg:"-110.00", s:"219.00"},
            {id:"t3_67", group:"Группа IVA (C, Si, Sn, Pb)", text:"HCOO⁻ (водн)", dh:"-410.00", dg:"-335.00", s:"91.60"},
            {id:"t3_68", group:"Группа IVA (C, Si, Sn, Pb)", text:"HCOOH (ж)", dh:"-410.00", dg:"-346.00", s:"129.00"},
            {id:"t3_69", group:"Группа IVA (C, Si, Sn, Pb)", text:"C₂H₅OH (ж)", dh:"-277.63", dg:"-174.80", s:"161.00"},
            {id:"t3_70", group:"Группа IVA (C, Si, Sn, Pb)", text:"CH₃CHO (г)", dh:"-166.00", dg:"-133.70", s:"266.00"},
            {id:"t3_71", group:"Группа IVA (C, Si, Sn, Pb)", text:"CH₃COOH (ж)", dh:"-487.00", dg:"-392.00", s:"160.00"},
            {id:"t3_72", group:"Группа IVA (C, Si, Sn, Pb)", text:"C₆H₁₂O₆ (тв) глюкоза", dh:"-1275.00", dg:"-911.00", s:"212.00"},
            {id:"t3_73", group:"Группа IVA (C, Si, Sn, Pb)", text:"C₆H₁₂O₆ (р) глюкоза", dh:"-1264", dg:"-917.00", s:"270.00"},
            {id:"t3_74", group:"Группа IVA (C, Si, Sn, Pb)", text:"C₁₇H₃₅COOH (тв)", dh:"-891.00", dg:"-315.00", s:"455.00"},
            {id:"t3_75", group:"Группа IVA (C, Si, Sn, Pb)", text:"C₃H₅O₃(C₁₇H₃₅CO)₃", dh:"-7250.00", dg:"-7730.00", s:"1600.00"},
            {id:"t3_76", group:"Группа IVA (C, Si, Sn, Pb)", text:"CN⁻ (водн)", dh:"151.00", dg:"166.00", s:"118.00"},
            {id:"t3_77", group:"Группа IVA (C, Si, Sn, Pb)", text:"HCN (г)", dh:"135.00", dg:"125.00", s:"201.70"},
            {id:"t3_78", group:"Группа IVA (C, Si, Sn, Pb)", text:"HCN (ж)", dh:"105.00", dg:"121.00", s:"112.80"},
            {id:"t3_79", group:"Группа IVA (C, Si, Sn, Pb)", text:"HCN (водн)", dh:"105.00", dg:"112.00", s:"129.00"},
            {id:"t3_80", group:"Группа IVA (C, Si, Sn, Pb)", text:"CS₂ (г)", dh:"117.00", dg:"66.90", s:"237.79"},
            {id:"t3_81", group:"Группа IVA (C, Si, Sn, Pb)", text:"CS₂ (ж)", dh:"87.90", dg:"63.60", s:"151.00"},
            {id:"t3_82", group:"Группа IVA (C, Si, Sn, Pb)", text:"CH₃Cl (г)", dh:"-83.70", dg:"-60.20", s:"234.00"},
            {id:"t3_83", group:"Группа IVA (C, Si, Sn, Pb)", text:"CH₂Cl₂ (ж)", dh:"-117.00", dg:"-63.20", s:"179.00"},
            {id:"t3_84", group:"Группа IVA (C, Si, Sn, Pb)", text:"CHCl₃ (ж)", dh:"-132.00", dg:"-71.50", s:"203.00"},
            {id:"t3_85", group:"Группа IVA (C, Si, Sn, Pb)", text:"CCl₄ (г)", dh:"-96.00", dg:"-53.70", s:"309.70"},
            {id:"t3_86", group:"Группа IVA (C, Si, Sn, Pb)", text:"CCl₄ (ж)", dh:"-139.00", dg:"-68.60", s:"214.40"},
            {id:"t3_87", group:"Группа IVA (C, Si, Sn, Pb)", text:"COCl₂ (г)", dh:"-220.00", dg:"-206.00", s:"283.74"},
            {id:"t3_88", group:"Группа IVA (C, Si, Sn, Pb)", text:"Si (тв)", dh:"0", dg:"0", s:"18.00"},
            {id:"t3_89", group:"Группа IVA (C, Si, Sn, Pb)", text:"SiO₂ (тв)", dh:"-910.90", dg:"-856.50", s:"41.50"},
            {id:"t3_90", group:"Группа IVA (C, Si, Sn, Pb)", text:"Sn (серое)", dh:"3.00", dg:"4.60", s:"44.80"},
            {id:"t3_91", group:"Группа IVA (C, Si, Sn, Pb)", text:"Sn (белое)", dh:"0", dg:"0", s:"51.50"},
            {id:"t3_92", group:"Группа IVA (C, Si, Sn, Pb)", text:"SnCl₄ (ж)", dh:"-545.20", dg:"-474.00", s:"259.00"},
            {id:"t3_93", group:"Группа IVA (C, Si, Sn, Pb)", text:"Pb²⁺ (водн)", dh:"1.60", dg:"-24.30", s:"21.00"},
            {id:"t3_94", group:"Группа IVA (C, Si, Sn, Pb)", text:"Pb (тв)", dh:"0", dg:"0", s:"64.785"},
            {id:"t3_95", group:"Группа IVA (C, Si, Sn, Pb)", text:"PbO (тв)", dh:"-218.00", dg:"-198.00", s:"68.70"},
            {id:"t3_96", group:"Группа IVA (C, Si, Sn, Pb)", text:"PbO₂ (тв)", dh:"-276.60", dg:"-219.00", s:"76.60"},
            {id:"t3_97", group:"Группа IVA (C, Si, Sn, Pb)", text:"PbS (тв)", dh:"-98.30", dg:"-96.70", s:"91.30"},
            {id:"t3_98", group:"Группа IVA (C, Si, Sn, Pb)", text:"PbCl₂ (тв)", dh:"-359.00", dg:"-314.00", s:"136.00"},
            {id:"t3_99", group:"Группа IVA (C, Si, Sn, Pb)", text:"PbSO₄ (тв)", dh:"-918.39", dg:"-811.24", s:"147.00"},

            {id:"t3_100", group:"Группа VA (N, P)", text:"N₂ (г)", dh:"0", dg:"0", s:"191.50"},
            {id:"t3_101", group:"Группа VA (N, P)", text:"NO (г)", dh:"90.29", dg:"86.60", s:"210.65"},
            {id:"t3_102", group:"Группа VA (N, P)", text:"NO₂ (г)", dh:"33.20", dg:"51.00", s:"239.90"},
            {id:"t3_103", group:"Группа VA (N, P)", text:"N₂O₄ (г)", dh:"9.16", dg:"97.70", s:"304.30"},
            {id:"t3_104", group:"Группа VA (N, P)", text:"N₂O₅ (г)", dh:"11.00", dg:"118.00", s:"346.00"},
            {id:"t3_105", group:"Группа VA (N, P)", text:"NH₃ (г)", dh:"-45.90", dg:"-16.00", s:"193.00"},
            {id:"t3_106", group:"Группа VA (N, P)", text:"NH₃ (водн)", dh:"-80.83", dg:"26.70", s:"110.00"},
            {id:"t3_107", group:"Группа VA (N, P)", text:"NH₄⁺ (водн)", dh:"-133", dg:"-79.5", s:"-113"},
            {id:"t3_108", group:"Группа VA (N, P)", text:"NO₃⁻ (водн)", dh:"-206.57", dg:"-110.50", s:"146.00"},
            {id:"t3_109", group:"Группа VA (N, P)", text:"HNO₃ (ж)", dh:"-173.23", dg:"-79.914", s:"155.60"},
            {id:"t3_110", group:"Группа VA (N, P)", text:"HNO₃ (водн)", dh:"-206.57", dg:"-110.50", s:"146.00"},
            {id:"t3_111", group:"Группа VA (N, P)", text:"P (красн.)", dh:"0", dg:"0", s:"22.80"},
            {id:"t3_112", group:"Группа VA (N, P)", text:"P₄ (белый)", dh:"68.00", dg:"48.00", s:"164.00"},
            {id:"t3_113", group:"Группа VA (N, P)", text:"P₂ (г)", dh:"179.00", dg:"127.00", s:"218.00"},
            {id:"t3_114", group:"Группа VA (N, P)", text:"P₄ (г)", dh:"129.00", dg:"72.50", s:"280.00"},
            {id:"t3_115", group:"Группа VA (N, P)", text:"PCl₃ (г)", dh:"-271.00", dg:"-258.00", s:"312.00"},
            {id:"t3_116", group:"Группа VA (N, P)", text:"PCl₅ (г)", dh:"-382.00", dg:"-313.00", s:"353.00"},
            {id:"t3_117", group:"Группа VA (N, P)", text:"P₄O₁₀ (тв)", dh:"-2942.00", dg:"-2675.00", s:"229.00"},
            {id:"t3_118", group:"Группа VA (N, P)", text:"PO₄³⁻ (водн)", dh:"-1266.00", dg:"-1013.00", s:"-218.00"},
            {id:"t3_119", group:"Группа VA (N, P)", text:"HPO₄²⁻ (водн)", dh:"-1281.00", dg:"-1082.00", s:"-36.00"},
            {id:"t3_120", group:"Группа VA (N, P)", text:"H₂PO₄⁻ (водн)", dh:"-1285.00", dg:"-1135.00", s:"89.10"},
            {id:"t3_121", group:"Группа VA (N, P)", text:"H₃PO₄ (водн)", dh:"-1277.00", dg:"-1019", s:"-222"},

            {id:"t3_122", group:"Группа VIA (O, S)", text:"O (г)", dh:"249.20", dg:"231.70", s:"160.95"},
            {id:"t3_123", group:"Группа VIA (O, S)", text:"O₂ (г)", dh:"0", dg:"0", s:"205.00"},
            {id:"t3_124", group:"Группа VIA (O, S)", text:"O₃ (г)", dh:"143.00", dg:"163.00", s:"238.82"},
            {id:"t3_125", group:"Группа VIA (O, S)", text:"OH⁻ (водн)", dh:"-229.94", dg:"-157.30", s:"-10.54"},
            {id:"t3_126", group:"Группа VIA (O, S)", text:"H₂O (г)", dh:"-241.826", dg:"-228.60", s:"188.72"},
            {id:"t3_127", group:"Группа VIA (O, S)", text:"H₂O (ж)", dh:"-285.840", dg:"-237.192", s:"69.940"},
            {id:"t3_128", group:"Группа VIA (O, S)", text:"H₂O₂ (ж)", dh:"-187.80", dg:"-120.40", s:"110.00"},
            {id:"t3_129", group:"Группа VIA (O, S)", text:"H₂O₂ (водн)", dh:"-191.20", dg:"-134.10", s:"144.00"},
            {id:"t3_130", group:"Группа VIA (O, S)", text:"S (г)", dh:"279.00", dg:"239.00", s:"168.00"},
            {id:"t3_131", group:"Группа VIA (O, S)", text:"S₂ (г)", dh:"129.00", dg:"80.10", s:"228.10"},
            {id:"t3_132", group:"Группа VIA (O, S)", text:"S₈ (г)", dh:"101.00", dg:"49.10", s:"30.211"},
            {id:"t3_133", group:"Группа VIA (O, S)", text:"S (ромб)", dh:"0", dg:"0", s:"31.90"},
            {id:"t3_134", group:"Группа VIA (O, S)", text:"S (моноклин)", dh:"0.30", dg:"0.096", s:"32.60"},
            {id:"t3_135", group:"Группа VIA (O, S)", text:"S²⁻ (водн)", dh:"41.80", dg:"83.70", s:"22.00"},
            {id:"t3_136", group:"Группа VIA (O, S)", text:"HS⁻ (водн)", dh:"-17.70", dg:"12.60", s:"61.10"},
            {id:"t3_137", group:"Группа VIA (O, S)", text:"H₂S (г)", dh:"-20.20", dg:"-33.00", s:"205.60"},
            {id:"t3_138", group:"Группа VIA (O, S)", text:"H₂S (водн)", dh:"-39.00", dg:"-27.40", s:"122.00"},
            {id:"t3_139", group:"Группа VIA (O, S)", text:"SO₂ (г)", dh:"-296.80", dg:"-300.20", s:"248.10"},
            {id:"t3_140", group:"Группа VIA (O, S)", text:"SO₃ (г)", dh:"-396.00", dg:"-371.00", s:"256.66"},
            {id:"t3_141", group:"Группа VIA (O, S)", text:"SO₄²⁻ (водн)", dh:"-907.51", dg:"-741.99", s:"17.00"},
            {id:"t3_142", group:"Группа VIA (O, S)", text:"HSO₄⁻ (водн)", dh:"-885.75", dg:"-752.87", s:"126.90"},
            {id:"t3_143", group:"Группа VIA (O, S)", text:"H₂SO₄ (ж)", dh:"-813.989", dg:"-690.059", s:"156.90"},
            {id:"t3_144", group:"Группа VIA (O, S)", text:"H₂SO₄ (водн)", dh:"-907.51", dg:"-741.99", s:"17.00"},

            {id:"t3_145", group:"Группа VIIA (F, Cl, Br, I)", text:"F (г)", dh:"78.90", dg:"61.80", s:"158.64"},
            {id:"t3_146", group:"Группа VIIA (F, Cl, Br, I)", text:"F⁻ (г)", dh:"-255.60", dg:"-262.50", s:"145.47"},
            {id:"t3_147", group:"Группа VIIA (F, Cl, Br, I)", text:"F⁻ (водн)", dh:"-329.10", dg:"-276.50", s:"-9.60"},
            {id:"t3_148", group:"Группа VIIA (F, Cl, Br, I)", text:"F₂ (г)", dh:"0", dg:"0", s:"202.70"},
            {id:"t3_149", group:"Группа VIIA (F, Cl, Br, I)", text:"HF (г)", dh:"-273.00", dg:"-275.00", s:"173.67"},
            {id:"t3_150", group:"Группа VIIA (F, Cl, Br, I)", text:"Cl (г)", dh:"121.00", dg:"105.00", s:"165.10"},
            {id:"t3_151", group:"Группа VIIA (F, Cl, Br, I)", text:"Cl⁻ (г)", dh:"-234.00", dg:"-240.00", s:"153.25"},
            {id:"t3_152", group:"Группа VIIA (F, Cl, Br, I)", text:"Cl⁻ (водн)", dh:"-167.46", dg:"-131.17", s:"55.10"},
            {id:"t3_153", group:"Группа VIIA (F, Cl, Br, I)", text:"Cl₂ (г)", dh:"0", dg:"0", s:"223.00"},
            {id:"t3_154", group:"Группа VIIA (F, Cl, Br, I)", text:"HCl (г)", dh:"-92.31", dg:"-95.30", s:"186.79"},
            {id:"t3_155", group:"Группа VIIA (F, Cl, Br, I)", text:"HCl (водн)", dh:"-167.46", dg:"-131.17", s:"55.06"},
            {id:"t3_156", group:"Группа VIIA (F, Cl, Br, I)", text:"Br (г)", dh:"111.90", dg:"82.40", s:"174.90"},
            {id:"t3_157", group:"Группа VIIA (F, Cl, Br, I)", text:"Br⁻ (водн)", dh:"-120.90", dg:"-102.82", s:"80.71"},
            {id:"t3_158", group:"Группа VIIA (F, Cl, Br, I)", text:"Br₂ (г)", dh:"30.91", dg:"3.13", s:"245.38"},
            {id:"t3_159", group:"Группа VIIA (F, Cl, Br, I)", text:"Br₂ (ж)", dh:"0", dg:"0", s:"152.23"},
            {id:"t3_160", group:"Группа VIIA (F, Cl, Br, I)", text:"HBr (г)", dh:"-36.00", dg:"-53.50", s:"198.59"},
            {id:"t3_161", group:"Группа VIIA (F, Cl, Br, I)", text:"I (г)", dh:"106.80", dg:"70.21", s:"180.67"},
            {id:"t3_162", group:"Группа VIIA (F, Cl, Br, I)", text:"I⁻ (водн)", dh:"-55.94", dg:"-51.67", s:"109.40"},
            {id:"t3_163", group:"Группа VIIA (F, Cl, Br, I)", text:"I₂ (г)", dh:"62.442", dg:"19.38", s:"260.58"},
            {id:"t3_164", group:"Группа VIIA (F, Cl, Br, I)", text:"I₂ (тв)", dh:"0", dg:"0", s:"116.14"},
            {id:"t3_165", group:"Группа VIIA (F, Cl, Br, I)", text:"HI (г)", dh:"25.90", dg:"1.30", s:"206.33"},

            {id:"t3_166", group:"Группа IБ (Cu, Ag)", text:"Cu⁺ (водн)", dh:"51.90", dg:"50.20", s:"-26.00"},
            {id:"t3_167", group:"Группа IБ (Cu, Ag)", text:"Cu²⁺ (водн)", dh:"64.39", dg:"64.98", s:"-98.70"},
            {id:"t3_168", group:"Группа IБ (Cu, Ag)", text:"Cu (г)", dh:"341.10", dg:"301.40", s:"166.29"},
            {id:"t3_169", group:"Группа IБ (Cu, Ag)", text:"Cu (тв)", dh:"0", dg:"0", s:"33.10"},
            {id:"t3_170", group:"Группа IБ (Cu, Ag)", text:"Ag⁺ (водн)", dh:"105.90", dg:"77.111", s:"73.93"},
            {id:"t3_171", group:"Группа IБ (Cu, Ag)", text:"Ag (г)", dh:"289.20", dg:"250.40", s:"172.892"},
            {id:"t3_172", group:"Группа IБ (Cu, Ag)", text:"Ag (тв)", dh:"0", dg:"0", s:"42.702"},
            {id:"t3_173", group:"Группа IБ (Cu, Ag)", text:"AgF (тв)", dh:"-203.00", dg:"-185.00", s:"84.00"},
            {id:"t3_174", group:"Группа IБ (Cu, Ag)", text:"AgCl (тв)", dh:"-127.03", dg:"-109.72", s:"96.11"},
            {id:"t3_175", group:"Группа IБ (Cu, Ag)", text:"AgBr (тв)", dh:"-99.50", dg:"-95.939", s:"107.10"},
            {id:"t3_176", group:"Группа IБ (Cu, Ag)", text:"AgI (тв)", dh:"-62.38", dg:"-66.32", s:"114.00"},
            {id:"t3_177", group:"Группа IБ (Cu, Ag)", text:"Ag₂S (тв)", dh:"-31.80", dg:"-40.30", s:"146.00"},

            {id:"t3_178", group:"Группа IIБ (Zn, Cd, Hg)", text:"Zn²⁺ (водн)", dh:"-152.40", dg:"-147.21", s:"-106.50"},
            {id:"t3_179", group:"Группа IIБ (Zn, Cd, Hg)", text:"Zn (тв)", dh:"0", dg:"0", s:"41.60"},
            {id:"t3_180", group:"Группа IIБ (Zn, Cd, Hg)", text:"ZnO (тв)", dh:"-348.00", dg:"-318.20", s:"43.90"},
            {id:"t3_181", group:"Группа IIБ (Zn, Cd, Hg)", text:"ZnS (тв)", dh:"-203.00", dg:"-198.00", s:"57.70"},
            {id:"t3_182", group:"Группа IIБ (Zn, Cd, Hg)", text:"Cd²⁺ (водн)", dh:"-72.38", dg:"-77.74", s:"-61.10"},
            {id:"t3_183", group:"Группа IIБ (Zn, Cd, Hg)", text:"Cd (тв)", dh:"0", dg:"0", s:"51.50"},
            {id:"t3_184", group:"Группа IIБ (Zn, Cd, Hg)", text:"CdS (тв)", dh:"-144.00", dg:"-141.00", s:"71.00"},
            {id:"t3_185", group:"Группа IIБ (Zn, Cd, Hg)", text:"Hg²⁺ (водн)", dh:"171", dg:"164.80", s:"-32"},
            {id:"t3_186", group:"Группа IIБ (Zn, Cd, Hg)", text:"Hg₂²⁺ (водн)", dh:"172", dg:"153.90", s:"84.50"},
            {id:"t3_187", group:"Группа IIБ (Zn, Cd, Hg)", text:"Hg (г)", dh:"61.30", dg:"31.80", s:"174.87"},
            {id:"t3_188", group:"Группа IIБ (Zn, Cd, Hg)", text:"Hg (ж)", dh:"0", dg:"0", s:"76.027"},
            {id:"t3_189", group:"Группа IIБ (Zn, Cd, Hg)", text:"HgCl₂ (тв)", dh:"-230.00", dg:"-184.00", s:"144.00"},
            {id:"t3_190", group:"Группа IIБ (Zn, Cd, Hg)", text:"Hg₂Cl₂ (тв)", dh:"-264.90", dg:"-210.66", s:"196.00"},
            {id:"t3_191", group:"Группа IIБ (Zn, Cd, Hg)", text:"HgO (тв)", dh:"-90.79", dg:"-58.50", s:"70.27"},

            {id:"t3_192", group:"Группа VIБ (Cr)", text:"Cr (тв)", dh:"0", dg:"0", s:"23.80"},
            {id:"t3_193", group:"Группа VIБ (Cr)", text:"CrO₄²⁻ (водн)", dh:"-863.20", dg:"-706.30", s:"38.00"},
            {id:"t3_194", group:"Группа VIБ (Cr)", text:"Cr₂O₇²⁻ (водн)", dh:"-1461.00", dg:"-1257.00", s:"214.00"},

            {id:"t3_195", group:"Группа VIIБ (Mn)", text:"Mn²⁺ (водн)", dh:"-219.00", dg:"-223.00", s:"-84.00"},
            {id:"t3_196", group:"Группа VIIБ (Mn)", text:"Mn (тв, α)", dh:"0", dg:"0", s:"31.80"},
            {id:"t3_197", group:"Группа VIIБ (Mn)", text:"MnO₂ (тв)", dh:"-520.90", dg:"-466.10", s:"53.10"},
            {id:"t3_198", group:"Группа VIIБ (Mn)", text:"MnO₄⁻ (водн)", dh:"-518.40", dg:"-425.10", s:"190.00"},

            {id:"t3_199", group:"Группа VIIIБ (Fe, Co, Ni)", text:"Fe³⁺ (водн)", dh:"-47.70", dg:"-10.50", s:"-293.00"},
            {id:"t3_200", group:"Группа VIIIБ (Fe, Co, Ni)", text:"Fe²⁺ (водн)", dh:"-87.90", dg:"-84.94", s:"113.00"},
            {id:"t3_201", group:"Группа VIIIБ (Fe, Co, Ni)", text:"Fe (тв)", dh:"0", dg:"0", s:"27.30"},
            {id:"t3_202", group:"Группа VIIIБ (Fe, Co, Ni)", text:"FeO (тв)", dh:"-272.00", dg:"-251.40", s:"60.75"},
            {id:"t3_203", group:"Группа VIIIБ (Fe, Co, Ni)", text:"Fe₂O₃ (тв)", dh:"-825.50", dg:"-743.60", s:"87.400"},
            {id:"t3_204", group:"Группа VIIIБ (Fe, Co, Ni)", text:"Fe₃O₄ (тв)", dh:"-1121.00", dg:"-1018.00", s:"145.30"},
            {id:"t3_205", group:"Группа VIIIБ (Fe, Co, Ni)", text:"Co²⁺ (водн)", dh:"-67.40", dg:"-51.50", s:"-155.00"},
            {id:"t3_206", group:"Группа VIIIБ (Fe, Co, Ni)", text:"Co (тв)", dh:"0", dg:"0", s:"30.00"},
            {id:"t3_207", group:"Группа VIIIБ (Fe, Co, Ni)", text:"Ni²⁺ (водн)", dh:"-64.00", dg:"-46.40", s:"-159.00"},
            {id:"t3_208", group:"Группа VIIIБ (Fe, Co, Ni)", text:"Ni (тв)", dh:"0", dg:"0", s:"30.10"},

            {id:"t3_209", group:"Органические вещества", text:"Глицерин", dh:"-669", dg:"-477", s:"204"},
            {id:"t3_210", group:"Органические вещества", text:"Глицин", dh:"-537", dg:"-378", s:"103.5"},
            {id:"t3_211", group:"Органические вещества", text:"Глицилглицин", dh:"-734", dg:"492", s:"231"},
            {id:"t3_212", group:"Органические вещества", text:"Молочная кислота", dh:"-694", dg:"—", s:"222"},
            {id:"t3_213", group:"Органические вещества", text:"Этиленоксид (СH₂)₂О", dh:"-52.6", dg:"-13.1", s:"242"}
        ].map(item => ({
            id: item.id,
            group: item.group,
            name: item.text,
            info: `ΔH⁰обр: <span class='result-val'>${item.dh}</span> кДж/моль<br>ΔG⁰обр: <span class='result-val'>${item.dg}</span> кДж/моль<br>S⁰: <span class='result-val'>${item.s}</span> Дж/(К·моль)`
        }))
    },
    table8: {
        title: "Таблица 8. Стандартные электродные потенциалы",
        instruction: "1. Сначала выберите химическую группу (металл/элемент):",
        isGrouped: true,
        data: [
            {id:"t8_1", group:"Ag (Серебро)", text:"Ag2+ / Ag+", eq:"Ag<sup>2+</sup> / Ag<sup>+</sup>", n:1, e:"+1,99"},
            {id:"t8_2", group:"Ag (Серебро)", text:"Ag+ / Ag", eq:"Ag<sup>+</sup> / Ag", n:1, e:"+0,80"},
            {id:"t8_3", group:"Ag (Серебро)", text:"AgCl / Ag + Cl–", eq:"AgCl / Ag + Cl<sup>–</sup>", n:1, e:"+0,22"},
            {id:"t8_4", group:"Al (Алюминий)", text:"Al3+ / Al", eq:"Al<sup>3+</sup> / Al", n:3, e:"–1,66"},
            {id:"t8_5", group:"Au (Золото)", text:"Au3+ / Au+", eq:"Au<sup>3+</sup> / Au<sup>+</sup>", n:2, e:"+1,41"},
            {id:"t8_6", group:"Au (Золото)", text:"Au3+ / Au", eq:"Au<sup>3+</sup> / Au", n:3, e:"+1,50"},
            {id:"t8_7", group:"Br (Бром)", text:"Br2 / 2Br–", eq:"Br<sub>2</sub> / 2Br<sup>–</sup>", n:2, e:"+1,09"},
            {id:"t8_8", group:"Ca (Кальций)", text:"Ca2+ / Ca", eq:"Ca<sup>2+</sup> / Ca", n:2, e:"–2,87"},
            {id:"t8_9", group:"Cl (Хлор)", text:"Cl2 / 2Cl–", eq:"Cl<sub>2</sub> / 2Cl<sup>–</sup>", n:2, e:"+1,36"},
            {id:"t8_10", group:"Co (Кобальт)", text:"Co3+ / Co2+", eq:"Co<sup>3+</sup> / Co<sup>2+</sup>", n:1, e:"+1,81"},
            {id:"t8_11", group:"Co (Кобальт)", text:"Co3+ / Co", eq:"Co<sup>3+</sup> / Co", n:3, e:"+0,46"},
            {id:"t8_12", group:"Co (Кобальт)", text:"Co2+ / Co", eq:"Co<sup>2+</sup> / Co", n:2, e:"–0,29"},
            {id:"t8_13", group:"Cr (Хром)", text:"Cr3+ / Cr2+", eq:"Cr<sup>3+</sup> / Cr<sup>2+</sup>", n:1, e:"–0,41"},
            {id:"t8_14", group:"Cr (Хром)", text:"Cr2+ / Cr", eq:"Cr<sup>2+</sup> / Cr", n:2, e:"–0,91"},
            {id:"t8_15", group:"Cr (Хром)", text:"Cr3+ / Cr", eq:"Cr<sup>3+</sup> / Cr", n:3, e:"–0,74"},
            {id:"t8_16", group:"Cr (Хром)", text:"Cr2O7 2– + 14H+ / 2Cr3+ + 7H2O", eq:"Cr<sub>2</sub>O<sub>7</sub><sup>2–</sup> + 14H<sup>+</sup> / 2Cr<sup>3+</sup> + 7H<sub>2</sub>O", n:6, e:"+1,33"},
            {id:"t8_17", group:"Cr (Хром)", text:"CrO4 2– + 4H2O / Cr(OH)3 + 5OH–", eq:"CrO<sub>4</sub><sup>2–</sup> + 4H<sub>2</sub>O / Cr(OH)<sub>3</sub> + 5OH<sup>–</sup>", n:3, e:"–0,13"},
            {id:"t8_18", group:"Cu (Медь)", text:"Cu+ / Cu", eq:"Cu<sup>+</sup> / Cu", n:1, e:"+0,53"},
            {id:"t8_19", group:"Cu (Медь)", text:"Cu2+ / Cu", eq:"Cu<sup>2+</sup> / Cu", n:2, e:"+0,35"},
            {id:"t8_20", group:"Mn (Марганец)", text:"MnO4– + 8H+ / Mn2+ + 4H2O", eq:"MnO<sub>4</sub><sup>–</sup> + 8H<sup>+</sup> / Mn<sup>2+</sup> + 4H<sub>2</sub>O", n:5, e:"+1,51"},
            {id:"t8_21", group:"Mn (Марганец)", text:"MnO4– / MnO4 2–", eq:"MnO<sub>4</sub><sup>–</sup> / MnO<sub>4</sub><sup>2–</sup>", n:1, e:"+0,56"},
            {id:"t8_22", group:"Mn (Марганец)", text:"MnO4– + 2H2O / MnO2 + 4OH–", eq:"MnO<sub>4</sub><sup>–</sup> + 2H<sub>2</sub>O / MnO<sub>2</sub> + 4OH<sup>–</sup>", n:3, e:"+0,60"},
            {id:"t8_23", group:"N (Азот)", text:"N2 + 8H+ / 2NH4+", eq:"N<sub>2</sub> + 8H<sup>+</sup> / 2NH<sub>4</sub><sup>+</sup>", n:6, e:"+0,26"},
            {id:"t8_24", group:"N (Азот)", text:"NO3– + 4H+ / NO + 2H2O", eq:"NO<sub>3</sub><sup>–</sup> + 4H<sup>+</sup> / NO + 2H<sub>2</sub>O", n:3, e:"+0,96"},
            {id:"t8_25", group:"N (Азот)", text:"NO3– + 2H+ / NO2 + H2O", eq:"NO<sub>3</sub><sup>–</sup> + 2H<sup>+</sup> / NO<sub>2</sub> + H<sub>2</sub>O", n:1, e:"+0,80"},
            {id:"t8_26", group:"N (Азот)", text:"NO3– + 3H+ / HNO2 + H2O", eq:"NO<sub>3</sub><sup>–</sup> + 3H<sup>+</sup> / HNO<sub>2</sub> + H<sub>2</sub>O", n:2, e:"+0,94"},
            {id:"t8_27", group:"N (Азот)", text:"NO3– + H2O / NO2 + 2HO–", eq:"NO<sub>3</sub><sup>–</sup> + H<sub>2</sub>O / NO<sub>2</sub> + 2HO<sup>–</sup>", n:1, e:"–0,86"},
            {id:"t8_28", group:"N (Азот)", text:"NO3– + 2H2O / NO + 4HO–", eq:"NO<sub>3</sub><sup>–</sup> + 2H<sub>2</sub>O / NO + 4HO<sup>–</sup>", n:3, e:"–0,14"},
            {id:"t8_29", group:"Na (Натрий)", text:"Na+ / Na", eq:"Na<sup>+</sup> / Na", n:1, e:"–2,71"},
            {id:"t8_30", group:"Ni (Никель)", text:"Ni2+ / Ni", eq:"Ni<sup>2+</sup> / Ni", n:2, e:"–0,25"},
            {id:"t8_31", group:"O (Кислород)", text:"O2 + 4H+ / 2H2O (pH = 0)", eq:"O<sub>2</sub> + 4H<sup>+</sup> / 2H<sub>2</sub>O (pH = 0)", n:4, e:"+1,23"},
            {id:"t8_32", group:"O (Кислород)", text:"O2 + 4H+ / 2H2O (pH = 7)", eq:"O<sub>2</sub> + 4H<sup>+</sup> / 2H<sub>2</sub>O (pH = 7)", n:4, e:"+0,82"},
            {id:"t8_33", group:"O (Кислород)", text:"O2 + 2H+ / H2O2", eq:"O<sub>2</sub> + 2H<sup>+</sup> / H<sub>2</sub>O<sub>2</sub>", n:2, e:"+0,68"},
            {id:"t8_34", group:"O (Кислород)", text:"O2 + 2H2O / 4OH–", eq:"O<sub>2</sub> + 2H<sub>2</sub>O / 4OH<sup>–</sup>", n:4, e:"+0,40"},
            {id:"t8_35", group:"O (Кислород)", text:"O3 + 2H+ / O2 + H2O", eq:"O<sub>3</sub> + 2H<sup>+</sup> / O<sub>2</sub> + H<sub>2</sub>O", n:2, e:"+2,07"},
            {id:"t8_36", group:"O (Кислород)", text:"O3 + H2O / O2 + 2HO–", eq:"O<sub>3</sub> + H<sub>2</sub>O / O<sub>2</sub> + 2HO<sup>–</sup>", n:2, e:"+1,24"},
            {id:"t8_37", group:"P (Фосфор)", text:"PO4 3– + 2H2O / PO4 2– + 3HO–", eq:"PO<sub>4</sub><sup>3–</sup> + 2H<sub>2</sub>O / PO<sub>4</sub><sup>2–</sup> + 3HO<sup>–</sup>", n:2, e:"–1,12"},
            {id:"t8_38", group:"P (Фосфор)", text:"H3PO4 + 4H+ / H3PO2 + 2H2O", eq:"H<sub>3</sub>PO<sub>4</sub> + 4H<sup>+</sup> / H<sub>3</sub>PO<sub>2</sub> + 2H<sub>2</sub>O", n:4, e:"–0,39"},
            {id:"t8_39", group:"P (Фосфор)", text:"H3PO4 + 5H+ / P + 4H2O", eq:"H<sub>3</sub>PO<sub>4</sub> + 5H<sup>+</sup> / P + 4H<sub>2</sub>O", n:5, e:"–0,38"},
            {id:"t8_40", group:"Pb (Свинец)", text:"Pb2+ / Pb", eq:"Pb<sup>2+</sup> / Pb", n:2, e:"–0,13"},
            {id:"t8_41", group:"Pb (Свинец)", text:"PbO2 + 4H+ + SO4 2– / PbSO4 + 2H2O", eq:"PbO<sub>2</sub> + 4H<sup>+</sup> + SO<sub>4</sub><sup>2–</sup> / PbSO<sub>4</sub> + 2H<sub>2</sub>O", n:2, e:"+1,68"},
            {id:"t8_42", group:"S (Сера)", text:"S + 2H+ / H2S", eq:"S + 2H<sup>+</sup> / H<sub>2</sub>S", n:2, e:"+0,17"},
            {id:"t8_43", group:"S (Сера)", text:"S / S2–", eq:"S / S<sup>2–</sup>", n:2, e:"–0,48"},
            {id:"t8_44", group:"S (Сера)", text:"SO3 2– + 6H+ / S+ 3H2O", eq:"SO<sub>3</sub><sup>2–</sup> + 6H<sup>+</sup> / S + 3H<sub>2</sub>O", n:2, e:"+0,17"},
            {id:"t8_45", group:"S (Сера)", text:"SO4 2– + H2O / SO3 2– + 2HO–", eq:"SO<sub>4</sub><sup>2–</sup> + H<sub>2</sub>O / SO<sub>3</sub><sup>2–</sup> + 2HO<sup>–</sup>", n:2, e:"+0,45"},
            {id:"t8_46", group:"S (Сера)", text:"SO4 2– + 4H+ / SO2 + 2H2O", eq:"SO<sub>4</sub><sup>2–</sup> + 4H<sup>+</sup> / SO<sub>2</sub> + 2H<sub>2</sub>O", n:4, e:"–0,93"},
            {id:"t8_47", group:"S (Сера)", text:"SO4 2– + 8H+ / S+ 4H2O", eq:"SO<sub>4</sub><sup>2–</sup> + 8H<sup>+</sup> / S + 4H<sub>2</sub>O", n:6, e:"+0,36"},
            {id:"t8_48", group:"S (Сера)", text:"SO4 2– + 8H+ / S2– + 4H2O", eq:"SO<sub>4</sub><sup>2–</sup> + 8H<sup>+</sup> / S<sup>2–</sup> + 4H<sub>2</sub>O", n:8, e:"+0,15"},
            {id:"t8_49", group:"Sn (Олово)", text:"Sn2+ / Sn", eq:"Sn<sup>2+</sup> / Sn", n:2, e:"–0,14"},
            {id:"t8_50", group:"Sn (Олово)", text:"Sn4+ / Sn2+", eq:"Sn<sup>4+</sup> / Sn<sup>2+</sup>", n:2, e:"+0,15"},
            {id:"t8_51", group:"Sn (Олово)", text:"Sn4+ / Sn", eq:"Sn<sup>4+</sup> / Sn", n:4, e:"+0,01"},
            {id:"t8_52", group:"Zn (Цинк)", text:"Zn2+ / Zn", eq:"Zn<sup>2+</sup> / Zn", n:2, e:"–0,76"}
        ].map(item => ({
            id: item.id,
            group: item.group,
            name: item.text,
            info: `Уравнение: <span class='formula'>${item.eq}</span><br>Число электронов (n): <span class='result-val'>${item.n}</span><br>Стандартный потенциал (φ⁰): <span class='result-val'>${item.e} В</span>`
        }))
    },
    table4: {
        title: "Таблица 4. Кинетические характеристики реакций",
        instruction: "Выберите порядок реакции:",
        data: [
            { 
                id: "t4_0", 
                name: "Нулевой порядок", 
                info: "Кинетическое уравнение (дифференциальное):<br><span class='formula'>ʋ = k</span><br><br>Кинетическое уравнение (интегральное):<br><span class='formula'>k = (C₀ - Cτ) / τ</span><br><br>Размерность k: <span class='result-val'>моль/(л·время)</span><br><br>Период полупревращения:<br><span class='formula'>τ₀,₅ = C₀ / 2k</span>" 
            },
            { 
                id: "t4_1", 
                name: "Первый порядок", 
                info: "Кинетическое уравнение (дифференциальное):<br><span class='formula'>ʋ = k·C</span><br><br>Кинетическое уравнение (интегральное):<br><span class='formula'>k = (1/τ) · ln(C₀ / Cτ)</span><br><br>Размерность k: <span class='result-val'>время⁻¹</span><br><br>Период полупревращения:<br><span class='formula'>τ₀,₅ = ln(2) / k = 0,69 / k</span>" 
            },
            { 
                id: "t4_2", 
                name: "Второй порядок", 
                info: "Кинетическое уравнение (дифференциальное):<br><span class='formula'>ʋ = k·C²</span><br><br>Кинетическое уравнение (интегральное):<br><span class='formula'>k = (1/τ) · (1/Cτ - 1/C₀)</span><br><br>Размерность k: <span class='result-val'>л/(моль·время)</span><br><br>Период полупревращения:<br><span class='formula'>τ₀,₅ = 1 / (k·C₀)</span>" 
            }
        ]
    },
    table5: {
        title: "Таблица 5. Константы ионизации некоторых оснований при 25°C",
        instruction: "Выберите основание:",
        data: [
            { 
                id: "t5_1", 
                name: "Алюминия гидроксид", 
                info: "Формула: <span class='formula'>Al(OH)<sub>3</sub></span><br>Константа K<sub>b</sub>: <span class='result-val'>K<sub>3</sub> = 1,38 &middot; 10<sup>-9</sup></span>" 
            },
            { 
                id: "t5_2", 
                name: "Аммиака раствор", 
                info: "Формула: <span class='formula'>NH<sub>3</sub> &middot; H<sub>2</sub>O</span><br>Константа K<sub>b</sub>: <span class='result-val'>1,76 &middot; 10<sup>-5</sup></span>" 
            },
            { 
                id: "t5_3", 
                name: "Анилин", 
                info: "Формула: <span class='formula'>C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> + H<sub>2</sub>O</span><br>Константа K<sub>b</sub>: <span class='result-val'>4,3 &middot; 10<sup>-10</sup></span>" 
            },
            { 
                id: "t5_4", 
                name: "Вода", 
                info: "Формула: <span class='formula'>H<sub>2</sub>O</span><br>Константа K<sub>b</sub>: <span class='result-val'>1,8 &middot; 10<sup>-16</sup></span>" 
            },
            { 
                id: "t5_5", 
                name: "Диметиламин", 
                info: "Формула: <span class='formula'>(CH<sub>3</sub>)<sub>2</sub>NH + H<sub>2</sub>O</span><br>Константа K<sub>b</sub>: <span class='result-val'>5,4 &middot; 10<sup>-4</sup></span>" 
            },
            { 
                id: "t5_6", 
                name: "Диэтиламин", 
                info: "Формула: <span class='formula'>(C<sub>2</sub>H<sub>5</sub>)<sub>2</sub>NH + H<sub>2</sub>O</span><br>Константа K<sub>b</sub>: <span class='result-val'>1,2 &middot; 10<sup>-3</sup></span>" 
            },
            { 
                id: "t5_7", 
                name: "Железа(II) гидроксид", 
                info: "Формула: <span class='formula'>Fe(OH)<sub>2</sub></span><br>Константа K<sub>b</sub>: <span class='result-val'>K<sub>2</sub> = 1,3 &middot; 10<sup>-4</sup></span>" 
            },
            { 
                id: "t5_8", 
                name: "Железа(III) гидроксид", 
                info: "Формула: <span class='formula'>Fe(OH)<sub>3</sub></span><br>Константа K<sub>b</sub>: <span class='result-val'>K<sub>1</sub> = 1,82 &middot; 10<sup>-11</sup><br>K<sub>2</sub> = 1,35 &middot; 10<sup>-12</sup></span>" 
            },
            { 
                id: "t5_9", 
                name: "Кальция гидроксид", 
                info: "Формула: <span class='formula'>Ca(OH)<sub>2</sub></span><br>Константа K<sub>b</sub>: <span class='result-val'>K<sub>2</sub> = 4,0 &middot; 10<sup>-2</sup></span>" 
            },
            { 
                id: "t5_10", 
                name: "Меди(II) гидроксид", 
                info: "Формула: <span class='formula'>Cu(OH)<sub>2</sub></span><br>Константа K<sub>b</sub>: <span class='result-val'>K<sub>2</sub> = 3,4 &middot; 10<sup>-7</sup></span>" 
            },
            { 
                id: "t5_11", 
                name: "Метиламин", 
                info: "Формула: <span class='formula'>CH<sub>3</sub>NH<sub>2</sub> + H<sub>2</sub>O</span><br>Константа K<sub>b</sub>: <span class='result-val'>4,6 &middot; 10<sup>-3</sup></span>" 
            },
            { 
                id: "t5_12", 
                name: "Пиридин", 
                info: "Формула: <span class='formula'>C<sub>5</sub>H<sub>5</sub>N + H<sub>2</sub>O</span><br>Константа K<sub>b</sub>: <span class='result-val'>1,5 &middot; 10<sup>-9</sup></span>" 
            },
            { 
                id: "t5_13", 
                name: "Серебра гидроксид", 
                info: "Формула: <span class='formula'>AgOH</span><br>Константа K<sub>b</sub>: <span class='result-val'>5,0 &middot; 10<sup>-3</sup></span>" 
            },
            { 
                id: "t5_14", 
                name: "Триэтиламин", 
                info: "Формула: <span class='formula'>(C<sub>2</sub>H<sub>5</sub>)<sub>3</sub>N + H<sub>2</sub>O</span><br>Константа K<sub>b</sub>: <span class='result-val'>1,0 &middot; 10<sup>-3</sup></span>" 
            },
            { 
                id: "t5_15", 
                name: "Хрома(III) гидроксид", 
                info: "Формула: <span class='formula'>Cr(OH)<sub>3</sub></span><br>Константа K<sub>b</sub>: <span class='result-val'>K<sub>3</sub> = 1,02 &middot; 10<sup>-10</sup></span>" 
            },
            { 
                id: "t5_16", 
                name: "Цинка гидроксид", 
                info: "Формула: <span class='formula'>Zn(OH)<sub>2</sub></span><br>Константа K<sub>b</sub>: <span class='result-val'>K<sub>2</sub> = 4,0 &middot; 10<sup>-5</sup></span>" 
            },
            { 
                id: "t5_17", 
                name: "Этилендиамин", 
                info: "Формула: <span class='formula'>NH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>NH<sub>2</sub></span><br>Константа K<sub>b</sub>: <span class='result-val'>K<sub>1</sub> = 1,2 &middot; 10<sup>-4</sup><br>K<sub>2</sub> = 9,8 &middot; 10<sup>-8</sup></span>" 
            }
        ]
    },
    table6: {
        title: "Таблица 6. Константы ионизации некоторых кислот при 25°C",
        instruction: "Выберите кислоту:",
        data: [
            { 
                id: "t6_1", 
                name: "Азотистая", 
                info: "Формула: <span class='formula'>HNO<sub>2</sub></span><br>Константа K<sub>a</sub>: <span class='result-val'>5,1 &middot; 10<sup>-4</sup></span>" 
            },
            { 
                id: "t6_2", 
                name: "Аскорбиновая", 
                info: "Формула: <span class='formula'>H<sub>2</sub>C<sub>6</sub>H<sub>6</sub>O<sub>6</sub></span><br>Константа K<sub>a</sub>: <span class='result-val'>K<sub>1</sub> = 9,1 &middot; 10<sup>-5</sup><br>K<sub>2</sub> = 4,6 &middot; 10<sup>-12</sup></span>" 
            },
            { 
                id: "t6_3", 
                name: "Бензойная", 
                info: "Формула: <span class='formula'>С<sub>6</sub>H<sub>5</sub>COOH</span><br>Константа K<sub>a</sub>: <span class='result-val'>6,3 &middot; 10<sup>-5</sup></span>" 
            },
            { 
                id: "t6_4", 
                name: "Борная (орто)", 
                info: "Формула: <span class='formula'>H<sub>3</sub>BO<sub>3</sub></span><br>Константа K<sub>a</sub>: <span class='result-val'>K<sub>1</sub> = 7,1 &middot; 10<sup>-10</sup><br>K<sub>2</sub> = 1,8 &middot; 10<sup>-13</sup><br>K<sub>3</sub> = 1,6 &middot; 10<sup>-14</sup></span>" 
            },
            { 
                id: "t6_5", 
                name: "Бромноватистая", 
                info: "Формула: <span class='formula'>HBrO</span><br>Константа K<sub>a</sub>: <span class='result-val'>2,2 &middot; 10<sup>-9</sup></span>" 
            },
            { 
                id: "t6_6", 
                name: "Йодноватая", 
                info: "Формула: <span class='formula'>HIO<sub>3</sub></span><br>Константа K<sub>a</sub>: <span class='result-val'>1,7 &middot; 10<sup>-1</sup></span>" 
            },
            { 
                id: "t6_7", 
                name: "Йодноватистая", 
                info: "Формула: <span class='formula'>HIO</span><br>Константа K<sub>a</sub>: <span class='result-val'>2,3 &middot; 10<sup>-11</sup></span>" 
            },
            { 
                id: "t6_8", 
                name: "Муравьиная", 
                info: "Формула: <span class='formula'>HCOOH</span><br>Константа K<sub>a</sub>: <span class='result-val'>1,8 &middot; 10<sup>-4</sup></span>" 
            },
            { 
                id: "t6_9", 
                name: "Мышьяковая", 
                info: "Формула: <span class='formula'>H<sub>3</sub>AsO<sub>4</sub></span><br>Константа K<sub>a</sub>: <span class='result-val'>K<sub>1</sub> = 5,6 &middot; 10<sup>-3</sup><br>K<sub>2</sub> = 1,7 &middot; 10<sup>-7</sup><br>K<sub>3</sub> = 2,95 &middot; 10<sup>-12</sup></span>" 
            },
            { 
                id: "t6_10", 
                name: "Пероксид водорода", 
                info: "Формула: <span class='formula'>H<sub>2</sub>O<sub>2</sub></span><br>Константа K<sub>a</sub>: <span class='result-val'>2,0 &middot; 10<sup>-12</sup></span>" 
            },
            { 
                id: "t6_11", 
                name: "Сернистая", 
                info: "Формула: <span class='formula'>H<sub>2</sub>SO<sub>3</sub></span><br>Константа K<sub>a</sub>: <span class='result-val'>K<sub>1</sub> = 1,4 &middot; 10<sup>-2</sup><br>K<sub>2</sub> = 6,2 &middot; 10<sup>-8</sup></span>" 
            },
            { 
                id: "t6_12", 
                name: "Сероводородная", 
                info: "Формула: <span class='formula'>H<sub>2</sub>S</span><br>Константа K<sub>a</sub>: <span class='result-val'>K<sub>1</sub> = 1,0 &middot; 10<sup>-7</sup><br>K<sub>2</sub> = 2,5 &middot; 10<sup>-13</sup></span>" 
            },
            { 
                id: "t6_13", 
                name: "Синильная (циановодородная)", 
                info: "Формула: <span class='formula'>HCN</span><br>Константа K<sub>a</sub>: <span class='result-val'>5,1 &middot; 10<sup>-10</sup></span>" 
            },
            { 
                id: "t6_14", 
                name: "Угольная", 
                info: "Формула: <span class='formula'>CO<sub>2</sub> &middot; H<sub>2</sub>O</span><br>Константа K<sub>a</sub>: <span class='result-val'>K<sub>1</sub> = 4,5 &middot; 10<sup>-7</sup><br>K<sub>2</sub> = 4,8 &middot; 10<sup>-11</sup></span>" 
            },
            { 
                id: "t6_15", 
                name: "Уксусная", 
                info: "Формула: <span class='formula'>CH<sub>3</sub>COOH</span><br>Константа K<sub>a</sub>: <span class='result-val'>1,74 &middot; 10<sup>-5</sup></span>" 
            },
            { 
                id: "t6_16", 
                name: "Фенол", 
                info: "Формула: <span class='formula'>C<sub>6</sub>H<sub>5</sub>OH</span><br>Константа K<sub>a</sub>: <span class='result-val'>1,0 &middot; 10<sup>-10</sup></span>" 
            },
            { 
                id: "t6_17", 
                name: "Фосфорная (орто)", 
                info: "Формула: <span class='formula'>H<sub>3</sub>PO<sub>4</sub></span><br>Константа K<sub>a</sub>: <span class='result-val'>K<sub>1</sub> = 7,1 &middot; 10<sup>-3</sup><br>K<sub>2</sub> = 6,2 &middot; 10<sup>-8</sup><br>K<sub>3</sub> = 5,0 &middot; 10<sup>-13</sup></span>" 
            },
            { 
                id: "t6_18", 
                name: "Фтороводородная", 
                info: "Формула: <span class='formula'>HF</span><br>Константа K<sub>a</sub>: <span class='result-val'>6,2 &middot; 10<sup>-1</sup></span>" 
            },
            { 
                id: "t6_19", 
                name: "Хлористая", 
                info: "Формула: <span class='formula'>HClO<sub>2</sub></span><br>Константа K<sub>a</sub>: <span class='result-val'>1,1 &middot; 10<sup>-2</sup></span>" 
            },
            { 
                id: "t6_20", 
                name: "Хлорноватистая", 
                info: "Формула: <span class='formula'>HСlO</span><br>Константа K<sub>a</sub>: <span class='result-val'>2,95 &middot; 10<sup>-8</sup></span>" 
            },
            { 
                id: "t6_21", 
                name: "Щавелевая", 
                info: "Формула: <span class='formula'>H<sub>2</sub>C<sub>2</sub>O<sub>4</sub></span><br>Константа K<sub>a</sub>: <span class='result-val'>K<sub>1</sub> = 5,6 &middot; 10<sup>-2</sup><br>K<sub>2</sub> = 5,4 &middot; 10<sup>-5</sup></span>" 
            }
        ]
    },
    table7: {
        title: "Таблица 7. Константы растворимости некоторых малорастворимых в воде веществ при 25°C",
        instruction: "Выберите малорастворимое вещество:",
        data: [
            { 
                id: "t7_1", 
                name: "Al(OH)3", 
                info: "Формула: <span class='formula'>Al(OH)<sub>3</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>4,6 &middot; 10<sup>-33</sup></span>" 
            },
            { 
                id: "t7_2", 
                name: "BaCrO4", 
                info: "Формула: <span class='formula'>BaCrO<sub>4</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>1,2 &middot; 10<sup>-10</sup></span>" 
            },
            { 
                id: "t7_3", 
                name: "BaF2", 
                info: "Формула: <span class='formula'>BaF<sub>2</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>1,0 &middot; 10<sup>-6</sup></span>" 
            },
            { 
                id: "t7_4", 
                name: "BaSO4", 
                info: "Формула: <span class='formula'>BaSO<sub>4</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>1,1 &middot; 10<sup>-10</sup></span>" 
            },
            { 
                id: "t7_5", 
                name: "CdC2O4", 
                info: "Формула: <span class='formula'>CdC<sub>2</sub>O<sub>4</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>1,5 &middot; 10<sup>-8</sup></span>" 
            },
            { 
                id: "t7_6", 
                name: "CdS", 
                info: "Формула: <span class='formula'>CdS</span><br>Константа K<sub>s</sub>: <span class='result-val'>8,0 &middot; 10<sup>-27</sup></span>" 
            },
            { 
                id: "t7_7", 
                name: "CaCO3", 
                info: "Формула: <span class='formula'>CaCO<sub>3</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>3,8 &middot; 10<sup>-9</sup></span>" 
            },
            { 
                id: "t7_8", 
                name: "CaF2", 
                info: "Формула: <span class='formula'>CaF<sub>2</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>3,4 &middot; 10<sup>-11</sup></span>" 
            },
            { 
                id: "t7_9", 
                name: "CaC2O4", 
                info: "Формула: <span class='formula'>CaC<sub>2</sub>O<sub>4</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>2,3 &middot; 10<sup>-9</sup></span>" 
            },
            { 
                id: "t7_10", 
                name: "Ca3(PO4)2", 
                info: "Формула: <span class='formula'>Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>1,0 &middot; 10<sup>-26</sup></span>" 
            },
            { 
                id: "t7_11", 
                name: "CaSO4", 
                info: "Формула: <span class='formula'>CaSO<sub>4</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>2,4 &middot; 10<sup>-5</sup></span>" 
            },
            { 
                id: "t7_12", 
                name: "CoS", 
                info: "Формула: <span class='formula'>CoS</span><br>Константа K<sub>s</sub>: <span class='result-val'>4,0 &middot; 10<sup>-21</sup></span>" 
            },
            { 
                id: "t7_13", 
                name: "Cu(OH)2", 
                info: "Формула: <span class='formula'>Cu(OH)<sub>2</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>2,6 &middot; 10<sup>-19</sup></span>" 
            },
            { 
                id: "t7_14", 
                name: "CuS", 
                info: "Формула: <span class='formula'>CuS</span><br>Константа K<sub>s</sub>: <span class='result-val'>6,0 &middot; 10<sup>-36</sup></span>" 
            },
            { 
                id: "t7_15", 
                name: "Fe(OH)2", 
                info: "Формула: <span class='formula'>Fe(OH)<sub>2</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>8,0 &middot; 10<sup>-16</sup></span>" 
            },
            { 
                id: "t7_16", 
                name: "FeS", 
                info: "Формула: <span class='formula'>FeS</span><br>Константа K<sub>s</sub>: <span class='result-val'>6,0 &middot; 10<sup>-18</sup></span>" 
            },
            { 
                id: "t7_17", 
                name: "Fe(OH)3", 
                info: "Формула: <span class='formula'>Fe(OH)<sub>3</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>2,5 &middot; 10<sup>-39</sup></span>" 
            },
            { 
                id: "t7_18", 
                name: "Pb3(AsO4)2", 
                info: "Формула: <span class='formula'>Pb<sub>3</sub>(AsO<sub>4</sub>)<sub>2</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>4,0 &middot; 10<sup>-36</sup></span>" 
            },
            { 
                id: "t7_19", 
                name: "PbCl2", 
                info: "Формула: <span class='formula'>PbCl<sub>2</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>1,6 &middot; 10<sup>-5</sup></span>" 
            },
            { 
                id: "t7_20", 
                name: "PbCrO4", 
                info: "Формула: <span class='formula'>PbCrO<sub>4</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>1,8 &middot; 10<sup>-14</sup></span>" 
            },
            { 
                id: "t7_21", 
                name: "PbI2", 
                info: "Формула: <span class='formula'>PbI<sub>2</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>6,5 &middot; 10<sup>-9</sup></span>" 
            },
            { 
                id: "t7_22", 
                name: "PbSO4", 
                info: "Формула: <span class='formula'>PbSO<sub>4</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>1,7 &middot; 10<sup>-8</sup></span>" 
            },
            { 
                id: "t7_23", 
                name: "PbS", 
                info: "Формула: <span class='formula'>PbS</span><br>Константа K<sub>s</sub>: <span class='result-val'>2,5 &middot; 10<sup>-27</sup></span>" 
            },
            { 
                id: "t7_24", 
                name: "MgCO3", 
                info: "Формула: <span class='formula'>MgCO<sub>3</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>1,0 &middot; 10<sup>-5</sup></span>" 
            },
            { 
                id: "t7_25", 
                name: "Mg(OH)2", 
                info: "Формула: <span class='formula'>Mg(OH)<sub>2</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>1,8 &middot; 10<sup>-11</sup></span>" 
            },
            { 
                id: "t7_26", 
                name: "MgC2O4", 
                info: "Формула: <span class='formula'>MgC<sub>2</sub>O<sub>4</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>8,5 &middot; 10<sup>-5</sup></span>" 
            },
            { 
                id: "t7_27", 
                name: "MnS", 
                info: "Формула: <span class='formula'>MnS</span><br>Константа K<sub>s</sub>: <span class='result-val'>2,5 &middot; 10<sup>-10</sup></span>" 
            },
            { 
                id: "t7_28", 
                name: "Hg2Cl2", 
                info: "Формула: <span class='formula'>Hg<sub>2</sub>Cl<sub>2</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>1,3 &middot; 10<sup>-18</sup></span>" 
            },
            { 
                id: "t7_29", 
                name: "HgS", 
                info: "Формула: <span class='formula'>HgS</span><br>Константа K<sub>s</sub>: <span class='result-val'>1,6 &middot; 10<sup>-52</sup></span>" 
            },
            { 
                id: "t7_30", 
                name: "Ni(OH)2", 
                info: "Формула: <span class='formula'>Ni(OH)<sub>2</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>2,0 &middot; 10<sup>-15</sup></span>" 
            },
            { 
                id: "t7_31", 
                name: "NiS", 
                info: "Формула: <span class='formula'>NiS</span><br>Константа K<sub>s</sub>: <span class='result-val'>3,0 &middot; 10<sup>-19</sup></span>" 
            },
            { 
                id: "t7_32", 
                name: "AgC2H3O2", 
                info: "Формула: <span class='formula'>AgC<sub>2</sub>H<sub>3</sub>O<sub>2</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>2,0 &middot; 10<sup>-3</sup></span>" 
            },
            { 
                id: "t7_33", 
                name: "AgBr", 
                info: "Формула: <span class='formula'>AgBr</span><br>Константа K<sub>s</sub>: <span class='result-val'>5,3 &middot; 10<sup>-13</sup></span>" 
            },
            { 
                id: "t7_34", 
                name: "AgCl", 
                info: "Формула: <span class='formula'>AgCl</span><br>Константа K<sub>s</sub>: <span class='result-val'>1,8 &middot; 10<sup>-10</sup></span>" 
            },
            { 
                id: "t7_35", 
                name: "AgCrO4", 
                info: "Формула: <span class='formula'>AgCrO<sub>4</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>1,1 &middot; 10<sup>-12</sup></span>" 
            },
            { 
                id: "t7_36", 
                name: "AgI", 
                info: "Формула: <span class='formula'>AgI</span><br>Константа K<sub>s</sub>: <span class='result-val'>8,3 &middot; 10<sup>-17</sup></span>" 
            },
            { 
                id: "t7_37", 
                name: "Ag2S", 
                info: "Формула: <span class='formula'>Ag<sub>2</sub>S</span><br>Константа K<sub>s</sub>: <span class='result-val'>6,3 &middot; 10<sup>-50</sup></span>" 
            },
            { 
                id: "t7_38", 
                name: "SrCO3", 
                info: "Формула: <span class='formula'>SrCO<sub>3</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>9,3 &middot; 10<sup>-10</sup></span>" 
            },
            { 
                id: "t7_39", 
                name: "SrCrO4", 
                info: "Формула: <span class='formula'>SrCrO<sub>4</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>3,5 &middot; 10<sup>-5</sup></span>" 
            },
            { 
                id: "t7_40", 
                name: "SrSO4", 
                info: "Формула: <span class='formula'>SrSO<sub>4</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>2,5 &middot; 10<sup>-7</sup></span>" 
            },
            { 
                id: "t7_41", 
                name: "Zn(OH)2", 
                info: "Формула: <span class='formula'>Zn(OH)<sub>2</sub></span><br>Константа K<sub>s</sub>: <span class='result-val'>2,1 &middot; 10<sup>-16</sup></span>" 
            },
            { 
                id: "t7_42", 
                name: "ZnS", 
                info: "Формула: <span class='formula'>ZnS</span><br>Константа K<sub>s</sub>: <span class='result-val'>1,1 &middot; 10<sup>-21</sup></span>" 
            }
        ]
    },
    table8: {
        title: "Таблица 8. Стандартные электродные потенциалы (298K) некоторых редокс-систем",
        instruction: "Выберите редокс-систему:",
        data: [
            { id: "t8_1", group: "Ag", text: "Ag2+ / Ag+", eq: "Ag<sup>2+</sup> / Ag<sup>+</sup>", n: 1, e: "+1,99" },
            { id: "t8_2", group: "Ag", text: "Ag+ / Ag", eq: "Ag<sup>+</sup> / Ag", n: 1, e: "+0,80" },
            { id: "t8_3", group: "Ag", text: "AgCl / Ag + Cl–", eq: "AgCl / Ag + Cl<sup>–</sup>", n: 1, e: "+0,22" },
            { id: "t8_4", group: "Al", text: "Al3+ / Al", eq: "Al<sup>3+</sup> / Al", n: 3, e: "–1,66" },
            { id: "t8_5", group: "Au", text: "Au3+ / Au+", eq: "Au<sup>3+</sup> / Au<sup>+</sup>", n: 2, e: "+1,41" },
            { id: "t8_6", group: "Au", text: "Au3+ / Au", eq: "Au<sup>3+</sup> / Au", n: 3, e: "+1,50" },
            { id: "t8_7", group: "Br", text: "Br2 / 2Br–", eq: "Br<sub>2</sub> / 2Br<sup>–</sup>", n: 2, e: "+1,09" },
            { id: "t8_8", group: "Ca", text: "Ca2+ / Ca", eq: "Ca<sup>2+</sup> / Ca", n: 2, e: "–2,87" },
            { id: "t8_9", group: "Cl", text: "Cl2 / 2Cl–", eq: "Cl<sub>2</sub> / 2Cl<sup>–</sup>", n: 2, e: "+1,36" },
            { id: "t8_10", group: "Co", text: "Co3+ / Co2+", eq: "Co<sup>3+</sup> / Co<sup>2+</sup>", n: 1, e: "+1,81" },
            { id: "t8_11", group: "Co", text: "Co3+ / Co", eq: "Co<sup>3+</sup> / Co", n: 3, e: "+0,46" },
            { id: "t8_12", group: "Co", text: "Co2+ / Co", eq: "Co<sup>2+</sup> / Co", n: 2, e: "–0,29" },
            { id: "t8_13", group: "Cr", text: "Cr3+ / Cr2+", eq: "Cr<sup>3+</sup> / Cr<sup>2+</sup>", n: 1, e: "–0,41" },
            { id: "t8_14", group: "Cr", text: "Cr2+ / Cr", eq: "Cr<sup>2+</sup> / Cr", n: 2, e: "–0,91" },
            { id: "t8_15", group: "Cr", text: "Cr3+ / Cr", eq: "Cr<sup>3+</sup> / Cr", n: 3, e: "–0,74" },
            { id: "t8_16", group: "Cr", text: "Cr2O7 2– + 14H+ / 2Cr3+ + 7H2O", eq: "Cr<sub>2</sub>O<sub>7</sub><sup>2–</sup> + 14H<sup>+</sup> / 2Cr<sup>3+</sup> + 7H<sub>2</sub>O", n: 6, e: "+1,33" },
            { id: "t8_17", group: "Cr", text: "CrO4 2– + 4H2O / Cr(OH)3 + 5OH–", eq: "CrO<sub>4</sub><sup>2–</sup> + 4H<sub>2</sub>O / Cr(OH)<sub>3</sub> + 5OH<sup>–</sup>", n: 3, e: "–0,13" },
            { id: "t8_18", group: "Cu", text: "Cu+ / Cu", eq: "Cu<sup>+</sup> / Cu", n: 1, e: "+0,53" },
            { id: "t8_19", group: "Cu", text: "Cu2+ / Cu", eq: "Cu<sup>2+</sup> / Cu", n: 2, e: "+0,35" },
            { id: "t8_20", group: "Mn", text: "MnO4– + 8H+ / Mn2+ + 4H2O", eq: "MnO<sub>4</sub><sup>–</sup> + 8H<sup>+</sup> / Mn<sup>2+</sup> + 4H<sub>2</sub>O", n: 5, e: "+1,51" },
            { id: "t8_21", group: "Mn", text: "MnO4– / MnO4 2–", eq: "MnO<sub>4</sub><sup>–</sup> / MnO<sub>4</sub><sup>2–</sup>", n: 1, e: "+0,56" },
            { id: "t8_22", group: "Mn", text: "MnO4– + 2H2O / MnO2 + 4OH–", eq: "MnO<sub>4</sub><sup>–</sup> + 2H<sub>2</sub>O / MnO<sub>2</sub> + 4OH<sup>–</sup>", n: 3, e: "+0,60" },
            { id: "t8_23", group: "N", text: "N2 + 8H+ / 2NH4+", eq: "N<sub>2</sub> + 8H<sup>+</sup> / 2NH<sub>4</sub><sup>+</sup>", n: 6, e: "+0,26" },
            { id: "t8_24", group: "N", text: "NO3– + 4H+ / NO + 2H2O", eq: "NO<sub>3</sub><sup>–</sup> + 4H<sup>+</sup> / NO + 2H<sub>2</sub>O", n: 3, e: "+0,96" },
            { id: "t8_25", group: "N", text: "NO3– + 2H+ / NO2 + H2O", eq: "NO<sub>3</sub><sup>–</sup> + 2H<sup>+</sup> / NO<sub>2</sub> + H<sub>2</sub>O", n: 1, e: "+0,80" },
            { id: "t8_26", group: "N", text: "NO3– + 3H+ / HNO2 + H2O", eq: "NO<sub>3</sub><sup>–</sup> + 3H<sup>+</sup> / HNO<sub>2</sub> + H<sub>2</sub>O", n: 2, e: "+0,94" },
            { id: "t8_27", group: "N", text: "NO3– + H2O / NO2 + 2HO–", eq: "NO<sub>3</sub><sup>–</sup> + H<sub>2</sub>O / NO<sub>2</sub> + 2HO<sup>–</sup>", n: 1, e: "–0,86" },
            { id: "t8_28", group: "N", text: "NO3– + 2H2O / NO + 4HO–", eq: "NO<sub>3</sub><sup>–</sup> + 2H<sub>2</sub>O / NO + 4HO<sup>–</sup>", n: 3, e: "–0,14" },
            { id: "t8_29", group: "Na", text: "Na+ / Na", eq: "Na<sup>+</sup> / Na", n: 1, e: "–2,71" },
            { id: "t8_30", group: "Ni", text: "Ni2+ / Ni", eq: "Ni<sup>2+</sup> / Ni", n: 2, e: "–0,25" },
            { id: "t8_31", group: "O", text: "O2 + 4H+ / 2H2O (pH = 0)", eq: "O<sub>2</sub> + 4H<sup>+</sup> / 2H<sub>2</sub>O (pH = 0)", n: 4, e: "+1,23" },
            { id: "t8_32", group: "O", text: "O2 + 4H+ / 2H2O (pH = 7)", eq: "O<sub>2</sub> + 4H<sup>+</sup> / 2H<sub>2</sub>O (pH = 7)", n: 4, e: "+0,82" },
            { id: "t8_33", group: "O", text: "O2 + 2H+ / H2O2", eq: "O<sub>2</sub> + 2H<sup>+</sup> / H<sub>2</sub>O<sub>2</sub>", n: 2, e: "+0,68" },
            { id: "t8_34", group: "O", text: "O2 + 2H2O / 4OH–", eq: "O<sub>2</sub> + 2H<sub>2</sub>O / 4OH<sup>–</sup>", n: 4, e: "+0,40" },
            { id: "t8_35", group: "O", text: "O3 + 2H+ / O2 + H2O", eq: "O<sub>3</sub> + 2H<sup>+</sup> / O<sub>2</sub> + H<sub>2</sub>O", n: 2, e: "+2,07" },
            { id: "t8_36", group: "O", text: "O3 + H2O / O2 + 2HO–", eq: "O<sub>3</sub> + H<sub>2</sub>O / O<sub>2</sub> + 2HO<sup>–</sup>", n: 2, e: "+1,24" },
            { id: "t8_37", group: "P", text: "PO4 3– + 2H2O / PO4 2– + 3HO–", eq: "PO<sub>4</sub><sup>3–</sup> + 2H<sub>2</sub>O / PO<sub>4</sub><sup>2–</sup> + 3HO<sup>–</sup>", n: 2, e: "–1,12" },
            { id: "t8_38", group: "P", text: "H3PO4 + 4H+ / H3PO2 + 2H2O", eq: "H<sub>3</sub>PO<sub>4</sub> + 4H<sup>+</sup> / H<sub>3</sub>PO<sub>2</sub> + 2H<sub>2</sub>O", n: 4, e: "–0,39" },
            { id: "t8_39", group: "P", text: "H3PO4 + 5H+ / P + 4H2O", eq: "H<sub>3</sub>PO<sub>4</sub> + 5H<sup>+</sup> / P + 4H<sub>2</sub>O", n: 5, e: "–0,38" },
            { id: "t8_40", group: "Pb", text: "Pb2+ / Pb", eq: "Pb<sup>2+</sup> / Pb", n: 2, e: "–0,13" },
            { id: "t8_41", group: "Pb", text: "PbO2 + 4H+ + SO4 2– / PbSO4 + 2H2O", eq: "PbO<sub>2</sub> + 4H<sup>+</sup> + SO<sub>4</sub><sup>2–</sup> / PbSO<sub>4</sub> + 2H<sub>2</sub>O", n: 2, e: "+1,68" },
            { id: "t8_42", group: "S", text: "S + 2H+ / H2S", eq: "S + 2H<sup>+</sup> / H<sub>2</sub>S", n: 2, e: "+0,17" },
            { id: "t8_43", group: "S", text: "S / S2–", eq: "S / S<sup>2–</sup>", n: 2, e: "–0,48" },
            { id: "t8_44", group: "S", text: "SO3 2– + 6H+ / S+ 3H2O", eq: "SO<sub>3</sub><sup>2–</sup> + 6H<sup>+</sup> / S + 3H<sub>2</sub>O", n: 2, e: "+0,17" },
            { id: "t8_45", group: "S", text: "SO4 2– + H2O / SO3 2– + 2HO–", eq: "SO<sub>4</sub><sup>2–</sup> + H<sub>2</sub>O / SO<sub>3</sub><sup>2–</sup> + 2HO<sup>–</sup>", n: 2, e: "+0,45" },
            { id: "t8_46", group: "S", text: "SO4 2– + 4H+ / SO2 + 2H2O", eq: "SO<sub>4</sub><sup>2–</sup> + 4H<sup>+</sup> / SO<sub>2</sub> + 2H<sub>2</sub>O", n: 4, e: "–0,93" },
            { id: "t8_47", group: "S", text: "SO4 2– + 8H+ / S+ 4H2O", eq: "SO<sub>4</sub><sup>2–</sup> + 8H<sup>+</sup> / S + 4H<sub>2</sub>O", n: 6, e: "+0,36" },
            { id: "t8_48", group: "S", text: "SO4 2– + 8H+ / S2– + 4H2O", eq: "SO<sub>4</sub><sup>2–</sup> + 8H<sup>+</sup> / S<sup>2–</sup> + 4H<sub>2</sub>O", n: 8, e: "+0,15" },
            { id: "t8_49", group: "Sn", text: "Sn2+ / Sn", eq: "Sn<sup>2+</sup> / Sn", n: 2, e: "–0,14" },
            { id: "t8_50", group: "Sn", text: "Sn4+ / Sn2+", eq: "Sn<sup>4+</sup> / Sn<sup>2+</sup>", n: 2, e: "+0,15" },
            { id: "t8_51", group: "Sn", text: "Sn4+ / Sn", eq: "Sn<sup>4+</sup> / Sn", n: 4, e: "+0,01" },
            { id: "t8_52", group: "Zn", text: "Zn2+ / Zn", eq: "Zn<sup>2+</sup> / Zn", n: 2, e: "–0,76" }
        ].map(item => ({
            id: item.id,
            name: `[${item.group}] ${item.text}`,
            info: `Уравнение: <span class='formula'>${item.eq}</span><br>Число электронов (n): <span class='result-val'>${item.n}</span><br>Стандартный потенциал (φ⁰): <span class='result-val'>${item.e} В</span>`
        }))
    }
}; //

let currentTableId = null;

function openTable(tableId) {
    currentTableId = tableId;
    const tableInfo = tablesData[tableId];
    
    document.getElementById('menu').classList.remove('active');
    document.getElementById('table-view').classList.add('active');
    
    document.getElementById('table-title').innerHTML = tableInfo.title;
    document.getElementById('table-instruction').innerHTML = tableInfo.instruction;
    
    const selectEl = document.getElementById('element-select');
    const groupBtns = document.getElementById('group-buttons');
    const resultBox = document.getElementById('result-box');
    
    // Сбрасываем видимость элементов
    selectEl.style.display = 'none';
    resultBox.style.display = 'none';
    groupBtns.innerHTML = '';
    
    // Если таблица большая и разделена на группы (как 3 и 8)
    if (tableInfo.isGrouped) {
        groupBtns.style.display = 'flex';
        // Собираем уникальные названия групп
        const uniqueGroups = [...new Set(tableInfo.data.map(item => item.group))];
        
        uniqueGroups.forEach(group => {
            const btn = document.createElement('button');
            btn.style.padding = '8px 12px';
            btn.style.border = '2px solid #cbd5e1';
            btn.style.borderRadius = '8px';
            btn.style.background = '#f8fafc';
            btn.style.cursor = 'pointer';
            btn.style.fontWeight = '600';
            btn.style.color = '#334155';
            btn.textContent = group;
            
            // Функция нажатия на кнопку группы
            btn.onclick = function() { showGroup(group, this); };
            groupBtns.appendChild(btn);
        });
    } else {
        // Если это обычная таблица без групп (как 2, 4, 5, 6, 7)
        groupBtns.style.display = 'none';
        selectEl.style.display = 'block';
        selectEl.innerHTML = '<option value="" disabled selected>-- Выберите элемент --</option>';
        
        tableInfo.data.forEach(item => {
            const opt = document.createElement('option');
            opt.value = item.id;
            opt.textContent = item.name;
            selectEl.appendChild(opt);
        });
    }
    
    window.scrollTo(0, 0);
}

function showGroup(groupName, btnElement) {
    const tableInfo = tablesData[currentTableId];
    const selectEl = document.getElementById('element-select');
    const resultBox = document.getElementById('result-box');
    const groupBtns = document.getElementById('group-buttons');
    
    // Сбрасываем цвета всех кнопок
    const allBtns = groupBtns.getElementsByTagName('button');
    for(let btn of allBtns) {
        btn.style.background = '#f8fafc';
        btn.style.color = '#334155';
        btn.style.borderColor = '#cbd5e1';
    }
    // Подсвечиваем активную
    btnElement.style.background = '#eef2ff';
    btnElement.style.color = '#4f46e5';
    btnElement.style.borderColor = '#4f46e5';

    document.getElementById('table-instruction').innerHTML = `2. Теперь выберите конкретный элемент из <b>${groupName}</b>:`;
    
    // Показываем выпадающий список ТОЛЬКО для этой группы
    selectEl.style.display = 'block';
    selectEl.innerHTML = `<option value="" disabled selected>-- Выберите элемент --</option>`;
    
    const filtered = tableInfo.data.filter(item => item.group === groupName);
    filtered.forEach(item => {
        const opt = document.createElement('option');
        opt.value = item.id;
        opt.textContent = item.name;
        selectEl.appendChild(opt);
    });
    
    resultBox.style.display = 'none';
}

function closeTable() {
    document.getElementById('table-view').classList.remove('active');
    document.getElementById('menu').classList.add('active');
    currentTableId = null;
}

function showElementInfo() {
    const selectEl = document.getElementById('element-select');
    const selectedId = selectEl.value;
    const resultBox = document.getElementById('result-box');
    
    if (!selectedId || !currentTableId) return;

    const tableInfo = tablesData[currentTableId];
    const selectedData = tableInfo.data.find(item => item.id === selectedId);

    if (selectedData) {
        resultBox.innerHTML = selectedData.info;
        resultBox.style.display = 'block';
    }
}
