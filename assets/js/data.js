// ─ VIDEOS ─────────────────────────────────────────────────────────
const VIDS=[
  {id:"lPe7Oe1H-nE",t:"GreenLoop 3.0 Pitch Deck v1",s:"গ্রিনলুপ ৩.০ পিচ ডেক ১",cat:"Pitch Deck",tag:"tag-ag",g:"pitch"},
  {id:"Bbe8QEzr1V0",t:"GreenLoop 3.0 Pitch Deck v2",s:"গ্রিনলুপ ৩.০ পিচ ডেক ২",cat:"Pitch Deck",tag:"tag-ag",g:"pitch"},
  {id:"WW7olZ1YALs",t:"GreenLoop 3.0 Pitch Deck (Latest ⭐)",s:"পিচ ডেক (সর্বশেষ)",cat:"Pitch Deck",tag:"tag-ag",g:"pitch",featured:true},
  {id:"32383_SHL1k",t:"GreenLoop 3.0 Pitch Deck v4",s:"পিচ ডেক ভিডিও ৪",cat:"Pitch Deck",tag:"tag-ag",g:"pitch"},
  {id:"Zwh3vCOz5iU",t:"Circular Economy Principles",s:"সার্কুলার ইকোনমি নীতিমালা",cat:"Circular Economy",tag:"tag-ag",g:"pitch"},
  {id:"bCl6XNeTWeo",t:"Blockchain Fertilizer Management",s:"ব্লকচেইন সার ব্যবস্থাপনা",cat:"Blockchain",tag:"tag-eb",g:"blockchain"},
  {id:"bClGd5BpqVU",t:"Family Card System",s:"ফ্যামিলি কার্ড সিস্টেম",cat:"Family Card",tag:"tag-pl",g:"card"},
  {id:"ozsVedIqUcA",t:"Family Card — Full Demo",s:"ফ্যামিলি কার্ড ফুল ডেমো",cat:"Family Card",tag:"tag-pl",g:"card"},
  {id:"AC7MdpsIXlg",t:"Farmers Card System",s:"কৃষক কার্ড সিস্টেম",cat:"Farmers Card",tag:"tag-pl",g:"card"},
  {id:"h9zj_nEj6ZY",t:"Bangladesh Lifeline",s:"বাংলাদেশ লাইফলাইন",cat:"Bangladesh",tag:"tag-bd",g:"bd"},
  {id:"X1XDyvrN5-4",t:"Fragile Land — Bangladesh",s:"ভঙ্গুর জমি — বাংলাদেশ",cat:"Fragile Land",tag:"tag-bd",g:"bd"},
];

// ─ DOCS ────────────────────────────────────────────────────────────
const DOCS=[
  {t:"Bangladesh Agriculture Digital Ecosystem & Sustainable Transformation",s:"স্মার্ট বাংলাদেশ ২০৩০ · Vision 2050 · Digital-first agriculture master strategic report",did:"14ougEaxMt7hepiYgcERe4Oa6GtxrfWsi_hTFlOBKK_E",tag:"tag-ag",pg:"30+"},
  {t:"GreenLoop 3.0: Master Technical Proposal & Resilience Blueprint (বাংলা)",s:"3-Layer A/B/C architecture · 3F4D+MD protocol · NEET network · blockchain governance",did:"1fTYd9OO-ptC-X1yl4Tnw5iUELJaECSHyL_FF8jpiopU",tag:"tag-ag",pg:"25+"},
  {t:"GreenLoop 3.0: Healing the Earth, Securing the Smile (English)",s:"Dual-layer physical circularity + digital governance · CIRDAP-REEDS 2026",did:"1Fe-u9AhECw3CDc9goq0NS0e4nSMy7N-qEWNJiJlk8vY",tag:"tag-ag",pg:"20+"},
  {t:"GreenLoop 3.0: Blockchain-Enabled Circular Agriculture for Rural Empowerment",s:"Author profile · project identity · CIRDAP 2026 submission document",did:"1hCmFY_yWCEQaxyNAnzXyafexbJgL7R7bca-2zzgsJ1Q",tag:"tag-ag",pg:"18+"},
  {t:"GreenLoop 3.0: সার্কুলার এগ্রিকালচার মাস্টার প্রপোজাল",s:"৪ কৌশলগত স্তম্ভ · জেন্ডার-রেসপন্সিভ · ক্লাইমেট রেজিলিয়েন্স · ব্লকচেইন গভর্নেন্স",did:"1aOiAIWKlLRiYNp6SJb0rVbw_-jH7HF8ZGZqq64jZAhc",tag:"tag-ag",pg:"22+"},
  {t:"GreenLoop 3.0: Project Success Matrix & Sustainability Report",s:"FRRP/VRRP scoring · BCR>3.0 · IRR 14.47% · CO₂ sequestration 3,500kg/unit",did:"1A3IA9-ky4H5b3Ua3ssYMwNZqrcOjbKClyoAGSxtN1Ao",tag:"tag-ag",pg:"14+"},
  {t:"সার ভর্তুকি সংস্কার — কৌশলগত নীতি রোডম্যাপ",s:"WTO Green Box transition · NUE improvement · dealer audit · Smart Farmer Card",did:"1zyOgf2Mj5O5hpP6i5g6et6EnICOpZhZiRfPiUD46AnI",tag:"tag-eb",pg:"18+"},
  {t:"ডিজিটাল সার ভর্তুকি সংস্কার: স্বচ্ছতা ও সমতা",s:"BADC monopoly analysis · 6M metric ton demand · POS-based subsidy reform roadmap",did:"1CDNvx81K3nkv3LNlqFROlVCssBkax_s72qBXkkOfPn8",tag:"tag-eb",pg:"15+"},
  {t:"Fertilizer Tracking E-Bill System (Blockchain Technical Document)",s:"Hyperledger Fabric · SHA-256 · PostgreSQL off-chain + on-chain hybrid architecture",did:"147iKZri-zO5NMofi1Aj0xmpogOdPWn97snhA1LMGZ_s",tag:"tag-eb",pg:"15+"},
  {t:"Bangladesh Soil Testing Instrument Guide",s:"30 AEZ-calibrated zones · ESP32 sensor integration · Beer-Lambert Law applications",did:"1XEJHjNVYXTpDAZwWyn1srCwvlJtFgb7no7q9rKVfG1I",tag:"tag-ss",pg:"12+"},
  {t:"কৃষক কার্ড বাস্তবায়ন ও AgriStack কৌশল নির্দেশিকা",s:"৩১টি ডেটা ফিল্ড · ভূমিহীন কৃষক শনাক্তকরণ · মাঠ পর্যায়ের কর্মকর্তা নির্দেশিকা",did:"1sxJavweiL-X6xbJ14JWs8OsHm-7MTjWwCPoABM1nbWI",tag:"tag-pl",pg:"20+"},
  {t:"জাতীয় উন্নয়ন কৌশল: কৃষি, যুব ও নারীর ক্ষমতায়ন",s:"৩১-দফা কাঠামো · HIES 2022 · গিনি সহগ ০.৪৯ · তিন-মাত্রিক উন্নয়ন রূপকল্প",did:"1YQUtzysnQnpKnjO2b5R7sDgWkk_eGc1JFp5XoQpUvxo",tag:"tag-bnp",pg:"25+"},
  {t:"Bangladesh Export Dynamics & Post-LDC Macroeconomic Trajectory FY2024–2026",s:"US$48.28B merchandise exports · GDP 3.49% growth · RMG sector analysis",did:"1hxYUYJEmlWTEj9wvIiqswUiTYSBBsANnmYfdpDZSKTA",tag:"tag-bnp",pg:"18+"},
  {t:"বাংলাদেশে পারিবারিক কৃষি ও গ্রামীণ উন্নয়ন পূর্ণাঙ্গ নির্দেশিকা",s:"FAO Four Betters · SDG 1,2,5 alignment · long-term rural development roadmap",did:"1FoPbWLrvJb8ljvaZJjh80XY9PvRkDT13ySwkQJ-Q7KQ",tag:"tag-ag",pg:"22+"},
];

// ─ APPS ────────────────────────────────────────────────────────────
const APPS=[
  {t:"Krishak Card System",s:"Smart Farmer Card — NID biometric KYC Level 1–3, land data, subsidy tracking",url:"https://krishak-card.vercel.app/",icon:"🪪",tag:"tag-pl",col:"#1A2850"},
  {t:"CIRDAP GreenLoop 3.0",s:"Circular agriculture portal — blockchain, soil health, family card, full proposal & demo",url:"https://cirdap-greenloop3-0.vercel.app/",icon:"♻️",tag:"tag-ag",col:"#0A2020"},
  {t:"CABI Crop Diagnosis AI",s:"AI crop disease detection — CABI × Krishi AI Team · IPM-based treatment recommendations",url:"https://cabi-diagnosis-hyx8599s4-krishi-ai-team.vercel.app/",icon:"🔬",tag:"tag-ipm",col:"#140830"},
  {t:"Krishi AI Game Platform",s:"Gamified agri-learning — farmers, students & extension workers · Bengali interface",url:"https://game.krishiai.live/",icon:"🎮",tag:"tag-bd",col:"#200A05"},
  {t:"Krishi AI Web Platform",s:"Full platform — disease detection, soil analysis, yield forecast, market prices, Bengali chatbot",url:"https://web.krishiai.live/",icon:"🌐",tag:"tag-ag",col:"#1A1400"},
  {t:"E-Bill Dashboard (Embedded)",s:"Blockchain fertilizer tracking — farmer/dealer login, subsidy verification, Hyperledger Fabric",url:"#sec-ebill",icon:"💳",tag:"tag-eb",col:"#001020",internal:true},
];

// ─ TAG LABELS ──────────────────────────────────────────────────────
const TL={
  "tag-bnp":"BNP Policy","tag-ag":"GreenLoop","tag-eb":"E-Bill",
  "tag-ipm":"IPM","tag-eg":"eGov","tag-ss":"Soil Sensor",
  "tag-pl":"Farmer Card","tag-bd":"Bangladesh"
};
