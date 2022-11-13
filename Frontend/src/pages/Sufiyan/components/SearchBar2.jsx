import { HStack, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import { useNavigate } from 'react-router-dom'

import { ReactSearchAutocomplete } from 'react-search-autocomplete'


let dataTobeMatch= [
  {id:1,name:"Symbol Men Casual Shirt",quantity:1,defaultImage:"https://i.ibb.co/sFmzN2j/61-CF-f-F-1q-L-SX569-SX-UX-SY-UY.jpg",hoverImage:"https://i.ibb.co/2c6v0bz/71p-NSl-Ga-Og-L-SX569-SX-UX-SY-UY.jpg",price:529,strikePrice:1390,
firstImages:["https://i.ibb.co/sFmzN2j/61-CF-f-F-1q-L-SX569-SX-UX-SY-UY.jpg",
"https://i.ibb.co/2c6v0bz/71p-NSl-Ga-Og-L-SX569-SX-UX-SY-UY.jpg",
"https://i.ibb.co/YtvKTJD/71q-RUolt9-ML-SY741-SX-UX-SY-UY.jpg",
"https://i.ibb.co/9rrcMsk/71-J4-QFJYd-L-SX569-SX-UX-SY-UY.jpg",
"https://i.ibb.co/QFT52k3/71zm-Gl-IGv-EL-SX569-SX-UX-SY-UY.jpg"],
secondImages:["https://i.ibb.co/n10gPsZ/71f-Dx-CFXJXL-SX569-SX-UX-SY-UY.jpg",
"https://i.ibb.co/6BBvXfc/61-Gf-D31-Ro8-L-SX569-SX-UX-SY-UY.jpg",
"https://i.ibb.co/DCgJQTK/81uf-VXh9x-TL-SX569-SX-UX-SY-UY.jpg",
"https://i.ibb.co/5163SrQ/71-F-FZ939i-L-SX569-SX-UX-SY-UY.jpg",
"https://i.ibb.co/HgRWfj7/714-QSOg-O7-ZL-SX569-SX-UX-SY-UY.jpg"],
thirdImages:["https://i.ibb.co/tbkzs03/719e-WOR-Ue-L-UX569.jpg",
"https://i.ibb.co/HCVy21N/81aq028-Qf-LL-UX569.jpg",
"https://i.ibb.co/PYHzMTG/71s-OGrs-Gj5-L-UX569.jpg",
"https://i.ibb.co/7C5Knmx/715y-AT0uk-HL-UX569.jpg",
"https://i.ibb.co/bdJ943Y/71uh-Okxv-Ip-L-UY879.jpg"]
, type:"mens" },
{id:2,name:"Symbol Men's Regular Fit Formal Shirt",quantity:1,defaultImage:"https://i.ibb.co/hZwnt4r/81-HY85-Smt-JL-SX569-SX-UX-SY-UY.jp",hoverImage:"https://i.ibb.co/nmwfQq2/91e3k-V7y-Qr-L-SX569-SX-UX-SY-UY.jpg",price:679,strikePrice:1490,
firstImages:["https://i.ibb.co/hZwnt4r/81-HY85-Smt-JL-SX569-SX-UX-SY-UY.jpg",
"https://i.ibb.co/nmwfQq2/91e3k-V7y-Qr-L-SX569-SX-UX-SY-UY.jpg",
"https://i.ibb.co/bzwDkGj/81p-BHF0c9-VL-SX569-SX-UX-SY-UY-1.jpg",
"https://i.ibb.co/mTq6StJ/91-WMr-GJoz-LL-SX569-SX-UX-SY-UY.jpg",
"https://i.ibb.co/bzwDkGj/81p-BHF0c9-VL-SX569-SX-UX-SY-UY-1.jpg"],
secondImages:["https://i.ibb.co/2jNvWvW/91e-E7ds-TI3-L-SX569-SX-UX-SY-UY.jpg",
"https://i.ibb.co/4ffK2vr/91-JESYMA67-L-SX569-SX-UX-SY-UY.jpg",
"https://i.ibb.co/qjzJ2bQ/71-FQB8us-Af-L-SX569-SX-UX-SY-UY.jpg",
"https://i.ibb.co/QKMFG51/81cu-Ryw-In-L-SX569-SX-UX-SY-UY.jpg",
"https://i.ibb.co/h8fY9Mq/81-YMn-zer-JL-SX569-SX-UX-SY-UY.jpg"],
thirdImages:["https://i.ibb.co/vJRrXKY/71sy-ZWvc9i-L-UX569.jpg",
"https://i.ibb.co/SxcmhMJ/81n-Mm-ZBo-Sl-L-UX569.jpg",
"https://i.ibb.co/MsCg15C/81f-PETf-LF5-L-UX569.jpg",
"https://i.ibb.co/J7Jm4mC/8155foup-Th-L-UX569.jpg",
"https://i.ibb.co/7yMXcGM/81-Ow-RZwg-HL-UX569.jpg",]
, type:"mens"},
{id:3,name:"Wallets Men Leather ",quantity:1,defaultImage:"https://i.ibb.co/bKMy6vQ/71h-Me6-Zh-YKL-SX679.jpg",hoverImage:"https://i.ibb.co/YtYdGSz/81o-A7ci-YWIL-SX679.jpg",price:599,strikePrice:1090,
firstImages:["https://i.ibb.co/g49GfZR/71-Wj-QQQy-GAL-SX679.jpg",
"https://i.ibb.co/bKMy6vQ/71h-Me6-Zh-YKL-SX679.jpg",
"https://i.ibb.co/LkW8kMr/81-Dt5-Vu-wm-L-SX679.jpg",
"https://i.ibb.co/n8X7qnR/81g-1-C-y-Lp-L-SX679.jpg",
"https://i.ibb.co/YtYdGSz/81o-A7ci-YWIL-SX679.jpg",],
secondImages:["https://i.ibb.co/R2PNzV3/71-Ktpr-BR2-BL-SX679.jpg",
"https://i.ibb.co/YNPDXr7/71tu-F3-Xaz-VL-SX679.jpg",
"https://i.ibb.co/8Dkvh01/71g-SW2-EXm-QL-SX679.jpg",
"https://i.ibb.co/J5r2K3w/71m-IEm-Qjes-L-SX679.jpg",
"https://i.ibb.co/TWJmfHP/717-MPr-EOa-ML-SX679.jpg",],
thirdImages:["https://i.ibb.co/sVZpV42/71g7-Wmi4-Xm-L-SX679.jpg",
"https://i.ibb.co/xSzWND6/71m1u-Ge-Pyt-L-SX679.jpg",
"https://i.ibb.co/m9VrFVG/714-VDgw-Ae-UL-SX679.jpg",
"https://i.ibb.co/WW5VDsQ/71nrj-NKv-Lo-L-SX679.jpg",
"https://i.ibb.co/5TNGSxt/81-WWj-5gaz-L-SX679.jpg",]
, type:"mens"},
{id:4,name:"Sparx Mens Casual Stripped Sneakers",quantity:1,defaultImage:"https://i.ibb.co/m4xpWLJ/81-MNegd-J57-L-SX695-SX-UX-SY-UY-1.jpg",hoverImage:"https://i.ibb.co/X7hpgnJ/81j-O0j1qf5-L-SX695-SX-UX-SY-UY.jpg",price:899,rikePrice:1299,
firstImages:["https://i.ibb.co/mB3GJPH/51-HDK1-Hama-L-SY695-SX-UX-SY-UY.jpg",
"https://i.ibb.co/5kmhxqy/71-UG58x-Tx6-L-SX695-SX-UX-SY-UY.jpg",
"https://i.ibb.co/X7hpgnJ/81j-O0j1qf5-L-SX695-SX-UX-SY-UY.jpg",
"https://i.ibb.co/m4xpWLJ/81-MNegd-J57-L-SX695-SX-UX-SY-UY-1.jpg",
"https://i.ibb.co/m4xpWLJ/81-MNegd-J57-L-SX695-SX-UX-SY-UY-1.jpg",],
secondImages:[
    "https://i.ibb.co/cygCtsG/617-Zss-RMc-VL-SX695-SX-UX-SY-UY.jpg",
    "https://i.ibb.co/J5VFqFg/71cvl-JOk-Sw-L-SX695-SX-UX-SY-UY.jpg",
    "https://i.ibb.co/7Y38tS8/712-Xuv-GI2-ML-SX695-SX-UX-SY-UY.jpg",
    "https://i.ibb.co/28ZJkvC/61kqb-WOh-Zm-L-SY695-SX-UX-SY-UY.jpg",
    "https://i.ibb.co/cTd56yh/61h-BVn-Wi-KGL-SX695-SX-UX-SY-UY.jpg",],
thirdImages:[
    "https://i.ibb.co/NTjbxBD/514dhgt-An-GL-UY695.jpg",
    "https://i.ibb.co/fD6HRBy/51h9z-Zvx58-L-UY695.jpg",
    "https://i.ibb.co/rsSbRdb/51m-Sb-A-GCy-L-UY695.jpg",
    "https://i.ibb.co/BjKb8ZG/51-P5-FKI7i2-L-UY695.jpg",
    "https://i.ibb.co/SdhYc2T/51g6-S2-Xo-Ac-L-UY695.jpg"], type:"mens"},
{id:5,name:"Urban Forest Leather Belt",quantity:1,defaultImage:"https://i.ibb.co/Pgrh55L/81-Yh-Ac-WEf-AL-SY741-SX-UX-SY-UY.jpg",hoverImage:"https://i.ibb.co/8NqFMB8/91sb-Rfn-H5w-L-SX679-SX-UX-SY-UY.jpg",price:569,strikePrice:959,
firstImages:[],
secondImages:[],
thirdImages:[]
, type:"mens"},
{id:6,name:"Matrix Blue, Black & Blue Dial",quantity:1,defaultImage:"https://i.ibb.co/v3vwNd6/71-Boc-Wif-SUL-SY550-SX-UX-SY-UY.jpg",hoverImage:"https://i.ibb.co/2WQsYqY/710b7-VW7-X9-L-SX522-SX-UX-SY-UY.jpg",price:1290,strikePrice:1990,
firstImages:[],
secondImages:[],
thirdImages:[]
, type:"mens"},
{id:7,name:"Sparx  Brown Beige Outdoor Sandals",quantity:1,defaultImage:"https://i.ibb.co/cQ7W3NS/71-KLd-ADfuq-L-UX695.jpg",hoverImage:"https://i.ibb.co/nMxM09F/6166-NSf82-AL-UX695.jpg",price:699,strikePrice:1190,
firstImages:[],
secondImages:[],
thirdImages:[]
, type:"mens"},
{id:8,name:"Allen Solly Men Polo",quantity:1,defaultImage:"https://i.ibb.co/txjRMKq/51c-Eq-O-m-RS-SY741-SX-UX-SY-UY.jpg",hoverImage:"https://i.ibb.co/ZSffHnd/51j-WTj-Te-ZKS-SY741-SX-UX-SY-UY.jpg",price:499,strikePrice:759,
firstImages:[],
secondImages:[],
thirdImages:[]
, type:"mens"},
{id:9,name:"Vincent Chase Eyewear",quantity:1,defaultImage:"https://i.ibb.co/kyC1zGm/51-Lh-f1-WNz-S-SX679-SX-UX-SY-UY.jpg",hoverImage:"https://i.ibb.co/HYKpYTK/51-Y3bwvcs2-S-SX679-SX-UX-SY-UY.jpg",price:999,strikePrice:1490,
firstImages:[],
secondImages:[],
thirdImages:[]
, type:"mens"},
{id:10,name:"Diverse Men Jeans",quantity:1,defaultImage:"https://i.ibb.co/dccjDKZ/71-JAMx-Ckd-PL-UX569.jpg",hoverImage:"https://i.ibb.co/RStpjgY/81d-Z97-Jc2-GL-UY879.jpg",price:789,strikePrice:1290,
firstImages:[],
secondImages:[],
thirdImages:[]
, type:"mens"},
{id:11,name:" Womens Waterproof Raincoat",quantity:1,defaultImage:" https://i.ibb.co/ZdHnbtK/61-Hagy8e-BL-SY741-SX-UX-SY-UY.jpg",hoverImage:" https://i.ibb.co/6cQdtvw/61kf-IBH7-1-L-SY741-SX-UX-SY-UY.jpg",price:789,strikePrice:1160,
firstImages:[ " https://i.ibb.co/LCWtK9j/61-Hagy8e-BL-SY741-SX-UX-SY-UY-1.jpg",
" https://i.ibb.co/ZdHnbtK/61-Hagy8e-BL-SY741-SX-UX-SY-UY.jpg",
" https://i.ibb.co/6cQdtvw/61kf-IBH7-1-L-SY741-SX-UX-SY-UY.jpg",
" https://i.ibb.co/T8pPj7p/61w-ZXk-UGxr-L-SY741-SX-UX-SY-UY.jpg",
" https://i.ibb.co/KVhjZ1p/61-WLqy-VIh-CL-SY741-SX-UX-SY-UY.jpg",],
secondImages:[  " https://i.ibb.co/tLWcd7R/7110-Bz-Lq-Zk-L-SX679-SX-UX-SY-UY.jpg",
" https://i.ibb.co/qxpCtYr/61ne3jwh-CTL-SY741-SX-UX-SY-UY.jpg",
" https://i.ibb.co/PWjzws7/61-R-r443n-PL-SY741-SX-UX-SY-UY.jpg",
" https://i.ibb.co/48G5Hdb/611xx-Bc-JH3-L-SY741-SX-UX-SY-UY.jpg",
" https://i.ibb.co/0QVtz1S/61-Rn-Pkr7-YYL-SY741-SX-UX-SY-UY.jpg",],
thirdImages:[" https://i.ibb.co/P1Gs8wh/71tsj-JDHux-L-UX679.jpg",
" https://i.ibb.co/CWh5vRh/6138-E2-Ld-Ep-L-UY741.jpg",
" https://i.ibb.co/PGk2jmx/61-Dx-RPSP2-HL-UY741.jpg",
" https://i.ibb.co/gwCLsks/61-DPbh0-BCx-L-UY741.jpg",
" https://i.ibb.co/zN6TZ8B/61q-FYGb7n9-L-UY741.jpg",]
, type:"womens" },
{id:12,name:"ASIAN Women's Shoes",quantity:1,defaultImage:"https://i.ibb.co/X7Vqn3t/61f4-Fo-D9-Fp-L-SY695-SX-UX-SY-UY.jpg",hoverImage:"https://i.ibb.co/hX1pH2b/61v2-A4-YSOl-L-SY695-SX-UX-SY-UY.jpg",price:499,strikePrice:799,
firstImages:["https://i.ibb.co/hX1pH2b/61v2-A4-YSOl-L-SY695-SX-UX-SY-UY.jpg",
"https://i.ibb.co/p3LJ91j/61ku-Pz-R4y-HL-SY695-SX-UX-SY-UY.jpg",
"https://i.ibb.co/pLGn8M8/61-BUuyl-LUUL-SY695-SX-UX-SY-UY.jpg",
"https://i.ibb.co/x6xyw9G/61-Pa-FDc-MNr-L-SY695-SX-UX-SY-UY.jpg",
"https://i.ibb.co/X7Vqn3t/61f4-Fo-D9-Fp-L-SY695-SX-UX-SY-UY.jpg",],
secondImages:["https://i.ibb.co/nmhQZZ9/71-Ry-Ukpd0-OL-SY695-SX-UX-SY-UY.jpg",
"https://i.ibb.co/WnHBn9w/61-UM2-Dm-XUg-L-SY695-SX-UX-SY-UY.jpg",
"https://i.ibb.co/WPv2JHw/51-YSGRJyth-L-SY695-SX-UX-SY-UY-1.jpg",
"https://i.ibb.co/WPv2JHw/51-YSGRJyth-L-SY695-SX-UX-SY-UY-1.jpg",
"https://i.ibb.co/LRZWm8T/61pm-Ivqp-XLL-SY695-SX-UX-SY-UY.jpg",],
thirdImages:["https://i.ibb.co/qWFZCGD/617-Htirp-QNL-UY695.jpg",
"https://i.ibb.co/F7387sd/71ll2-UZXy4-L-UY695.jpg",
"https://i.ibb.co/7C8v3fM/61n-Jo-Be-Dp-YL-UY695.jpg",
"https://i.ibb.co/RPSR4yd/81-Zw-VGw-Bk-L-UX695.jpg",
"https://i.ibb.co/5X3CcsM/71-IR1-Wwv-Jk-L-UY695.jpg",]
, type:"womens"},
{id:13,name:"dockstreet Sweatshirt Hoodie",quantity:1,defaultImage:"https://i.ibb.co/SwDZdQv/71kd-XCIx49-L-SY741-SX-UX-SY-UY.jpg",hoverImage:"https://i.ibb.co/6yMGLhP/61kw63ym-Jt-L-SX679-SX-UX-SY-UY.jpg",price:699,strikePrice:824,
firstImages:["https://i.ibb.co/SwDZdQv/71kd-XCIx49-L-SY741-SX-UX-SY-UY.jpg",
"https://i.ibb.co/6yMGLhP/61kw63ym-Jt-L-SX679-SX-UX-SY-UY.jpg",
"https://i.ibb.co/6w07prZ/81ys4je1-s-L-SY741-SX-UX-SY-UY-1.jpg",
"https://i.ibb.co/1swJ4w3/81ys4je1-s-L-SY741-SX-UX-SY-UY.jpg",
"https://i.ibb.co/KLHPBFt/7154d-ZYR-AL-SY741-SX-UX-SY-UY.jpg",],
secondImages:[
    "https://i.ibb.co/M6yrSHf/616na-PKLNOL-SY741-SX-UX-SY-UY.jpg",
    "https://i.ibb.co/Kqp0hRj/61vu-UZDOKk-L-SY741-SX-UX-SY-UY.jpg",
    "https://i.ibb.co/V0FhJyy/61ti-V5n176-L-SY741-SX-UX-SY-UY.jpg",
    "https://i.ibb.co/YpMsM6L/61-FTX2e-ZSy-L-SY741-SX-UX-SY-UY-1.jpg",
    "https://i.ibb.co/b77YSmG/61-FTX2e-ZSy-L-SY741-SX-UX-SY-UY.jpg",],
thirdImages:["https://i.ibb.co/vsgxPNM/81-KMAk-Qp-Gx-L-UX569-1.jpg",
"https://i.ibb.co/myPR2Dy/818-Av-Om-k-TL-UY741.jpg",
"https://i.ibb.co/BsVNGWM/71s-XWR-i8-CL-UY741.jpg",
"https://i.ibb.co/WgzGhdF/81friw-Ie-WQL-UY741.jpg",
"https://i.ibb.co/vsgxPNM/81-KMAk-Qp-Gx-L-UX569-1.jpg"]
, type:"womens"},
{id:14,name:"Lavie Women's Handbag",quantity:1,defaultImage:"https://i.ibb.co/G0D5Bw0/71-m-GCrbqm-S-SY695-SX-UX-SY-UY.jpg",hoverImage:"https://i.ibb.co/GpYPDb1/712-HIk-Jm8-NS-SY695-SX-UX-SY-UY.jpg",price:899,strikePrice:1080,
firstImages:[],
secondImages:[],
thirdImages:[]
, type:"womens"},
{id:15,name:"TIMEX Analog Women's Watch",quantity:1,defaultImage:"https://i.ibb.co/vzqBjW3/71s4i-4-Kx6-L-SY550-SX-UX-SY-UY.jpg",hoverImage:"https://i.ibb.co/NmmRyxG/71q-Lf3q-Lch-L-SY550-SX-UX-SY-UY.jpg",price:2170,strikePrice:2890,
firstImages:[],
secondImages:[],
thirdImages:[]
, type:"womens"},
{id:16,name:"Yellow Chimes Classic Bracelet ",quantity:1,defaultImage:"https://i.ibb.co/p1CRZn9/61dz-Bzx-K5-L-UY625.jpg",hoverImage:"https://i.ibb.co/DVs0gF5/61nh-Walhq-OL-UY625.jpg",price:321,strikePrice:429,
firstImages:[],
secondImages:[],
thirdImages:[]
, type:"womens"},
{id:17,name:"SIRIL Women's saree",quantity:1,defaultImage:"https://i.ibb.co/r5mprdZ/61-Q5-KMIJhk-L-SY741-SX-UX-SY-UY.jpg",hoverImage:"https://i.ibb.co/RDTfsB6/61hr-VHk-Ju9-L-SY741-SX-UX-SY-UY.jpg",price:1290,strikePrice:1580,
firstImages:[],
secondImages:[],
thirdImages:[]
, type:"womens"},
{id:18,name:"Ethnic Women's Salwar Suit",quantity:1,defaultImage:"https://i.ibb.co/9rwSJRw/61-B0a-U0-Z-L-SY741-SX-UX-SY-UY.jpg",hoverImage:"https://i.ibb.co/j8XSNk2/61-GKYe-BWkj-L-SY741-SX-UX-SY-UY.jpg",price:789,strikePrice:1180,
firstImages:[],
secondImages:[],
thirdImages:[]
, type:"womens"},
{id:19,name:"Doctor Ortho Slippers for Women.",quantity:1,defaultImage:"https://i.ibb.co/h10HxgN/51g-ADGPRAIL-UX575-1.jpg",hoverImage:"https://i.ibb.co/dQsbtN9/51d-Mc66bc-ZL-UX575.jpg",price:499,strikePrice:629,
firstImages:[],
secondImages:[],
thirdImages:[]
, type:"womens"},
{id:20,name:"Sparx Womens Walking Shoes",quantity:1,defaultImage:"https://i.ibb.co/Qrrkx8m/81-Og-N4zwd-L-UX695.jpg",hoverImage:"https://i.ibb.co/6tB50D2/81s-VD78m-Ou-L-UX695.jpg",price:799,strikePrice:1090,
firstImages:[],
secondImages:[],
thirdImages:[]
, type:"womens"},
{id:21,name:"boAt Airdopes 141 ",quantity:1,defaultImage:"https://i.ibb.co/mzpSm3P/grey-600x.webp",hoverImage:"https://i.ibb.co/n1dRLS5/AD-141-FI-1-3-fa14e3d5-7538-435c-948c-64d624fabdc8-800x.webp",price:1490,strikePrice:2190,
firstImages:["https://i.ibb.co/yFJVDcB/AD-141-FI-3-2-d337a5ce-9131-4063-a180-9bc77eacd5b9-800x.webp",
"https://i.ibb.co/CKWXp8V/AD-141-FI-2-2-d6078a63-f047-4ede-954a-b74da96588d1-800x.webp",
"https://i.ibb.co/sFDH4Rf/AD-141-FI-1-2-3-ccf8a545-4111-4a1e-bf5e-ce085f932965-800x.webp",
"https://i.ibb.co/n1dRLS5/AD-141-FI-1-3-fa14e3d5-7538-435c-948c-64d624fabdc8-800x.webp",
"https://i.ibb.co/mzpSm3P/grey-600x.webp",],
secondImages:["https://i.ibb.co/mb5JsX2/AD-141-FI-3-1-130d5490-85ba-47c3-9b9c-f96817325533-800x.webp",
"https://i.ibb.co/ZBc1StH/AD-141-FI-2-3-45b033c9-9f39-440b-a033-2abb0bda0c6b-800x.webp",
"https://i.ibb.co/3WTbNZJ/AD-141-FI-1-2-2-7a8923bd-05d5-4e5e-b364-f788ce7a7e43-800x.webp",
"https://i.ibb.co/55nxKP3/AD-141-FI-1-2-71c44a8c-2006-472c-bd6a-bdaf150bc5a5-800x.webp",
"https://i.ibb.co/r3nQhzM/white-600x.webp",],
thirdImages:[
    "https://i.ibb.co/VBt9Py7/AD-141-FI-3-25e4be39-aa68-4c07-94de-75afabaeef11-800x.webp",
    "https://i.ibb.co/Cmn9YJX/AD-141-FI-2-5f7d05ca-6358-4ff8-899f-c6720e201a72-800x.webp",
    "https://i.ibb.co/G7BKWNN/AD-141-FI-1-2-d9489be8-8f88-4832-991d-28b012711719-800x.webp",
    "https://i.ibb.co/FX1XcY0/AD-141-FI-1f060ff5-cbbf-43f3-b673-41e4aacc7d79-800x.webp",
    "https://i.ibb.co/G72NnmP/back-600x.webp",]
, type:"electronics" },
{id:22,name:"boAt Rockerz 255 Pro",quantity:1,defaultImage:"https://i.ibb.co/ScfLJ9q/8654ab35-d654-4a82-a9ff-ddcbebbaf31d-600x.webp",hoverImage:"https://i.ibb.co/0jWJYhj/asap-navy-732952c4-fceb-440b-b6f8-1ac94ea52a2b-800x.webp",price:1290,strikePrice:1590,
firstImages:["https://i.ibb.co/tJHRXyv/playback-navy-0aa7114b-ff9d-4148-b14a-138dbc257d1e-800x.webp",
"https://i.ibb.co/KqqGCpT/ipx5-navy-1aad5624-3c44-42df-9042-99bb0d060af4-800x.webp",
"https://i.ibb.co/0MFSCTK/drivers-navy-df787026-2ab5-4e85-b7e7-cdfee9d0146c-800x.webp",
"https://i.ibb.co/0jWJYhj/asap-navy-732952c4-fceb-440b-b6f8-1ac94ea52a2b-800x.webp",
"https://i.ibb.co/ScfLJ9q/8654ab35-d654-4a82-a9ff-ddcbebbaf31d-600x.webp",],
secondImages:["https://i.ibb.co/NtRRDM7/ipx5-teal-ab87ab8e-cff0-4a0a-a15c-e7850617576b-800x-1.webp",
"https://i.ibb.co/C7Pphwr/ipx5-teal-ab87ab8e-cff0-4a0a-a15c-e7850617576b-800x.webp",
"https://i.ibb.co/YXXGC5m/drivers-teal-61252f12-aeac-4e04-957a-0f2ca2dca4e5-800x.webp",
"https://i.ibb.co/LvTRCg5/asap-teal-45ff5553-c489-42a4-8b49-e2fc598bf862-800x.webp",
"https://i.ibb.co/DRN66jF/1be19528-6d06-4cab-8815-02618b93d3c9-600x.webp",],
thirdImages:[
    "https://i.ibb.co/kXZ41SW/playback-red-5c79f775-dc8f-4116-9eba-1b012e647490-800x.webp",
    "https://i.ibb.co/ZSwV7RD/ipx5-red-b8dac271-f083-407b-9382-a32464f95ffc-800x.webp",
    "https://i.ibb.co/GW1BC6m/drivers-red-896425ae-7d1b-4469-8597-ee0d49ed6d54-800x.webp",
    "https://i.ibb.co/4TnVS6Z/asap-red-56382970-abfe-4896-ba96-378ab66f1484-800x.webp",
    "https://i.ibb.co/XjJnzXJ/756866f0-25e4-4b5d-8b7c-546c2111da69-600x.webp",]
, type:"electronics" },
{id:23,name:"boAt Watch",quantity:1,defaultImage:"https://i.ibb.co/RpKhHmD/blue-58bd5e28-de95-4f31-909d-6bce484bdbd9-600x.webp",hoverImage:"https://i.ibb.co/p4tq7b4/005-2-800x.webp",price:2170,strikePrice:3290,
firstImages:["https://i.ibb.co/sK9hKgg/004-2-ce2aefa1-ef72-457d-872d-6547bb8bbb7f-800x.webp",
"https://i.ibb.co/74NG97n/002-2-07f55eee-5e16-4287-bc71-74b40aa0d48f-800x.webp",
"https://i.ibb.co/p4tq7b4/005-2-800x.webp",
"https://i.ibb.co/K2603nM/001-2-855abb6f-8ae6-412b-a030-2cb82006d717-800x.webp",
"https://i.ibb.co/RpKhHmD/blue-58bd5e28-de95-4f31-909d-6bce484bdbd9-600x.webp",],
secondImages:["https://i.ibb.co/68vvhSt/002-3-800x-1.webp",
"https://i.ibb.co/Bj0ZCTf/002-3-800x.webp",
"https://i.ibb.co/27p47TN/005-3-800x.webp",
"https://i.ibb.co/ZNDYDsX/001-3-800x.webp",
"https://i.ibb.co/FhJwdXS/Green-6c922a0e-c3a0-46bc-a3dc-113a89a82207-600x.webp",],
thirdImages:["https://i.ibb.co/dBw4FGh/004-8cabd448-5ff8-4227-9d2f-96b1d7c686cd-800x.webp",
"https://i.ibb.co/6bCt0jN/002-ea5f69f6-2cff-4168-9529-7d53f256d32d-800x.webp",
"https://i.ibb.co/5cVmX6L/005-a226d1dd-6277-405a-b9a5-031a588f5a9c-800x.webp",
"https://i.ibb.co/qrRNPJF/001-427f42b5-e6df-4fc5-a025-1db1f9eb2117-800x.webp",
"https://i.ibb.co/jhYYqkV/Untitled-5-600x.webp"]
, type:"electronics" },
{id:24,name:"Rockerz 450 DC edition",quantity:1,defaultImage:"  https://i.ibb.co/ZJy0JQX/1-5-600x.webp",hoverImage:"https://i.ibb.co/Qr0GPrz/05-3-800x.webp",price:1490,strikePrice:1990,
firstImages:[],
secondImages:[],
thirdImages:[]
, type:"electronics" },
{id:25,name:"boAt Rockerz 355 Pro",quantity:1,defaultImage:"https://i.ibb.co/HTKM2BF/rockerz-518-blue-600x.webp",hoverImage:" https://i.ibb.co/86J3Gmf/Dual-Mode-ddc40b42-2e31-4e0d-8081-07301eb1ca4e-800x.webp",price:1590,strikePrice:2290,
firstImages:[],
secondImages:[],
thirdImages:[]
, type:"electronics" },
{id:26,name:"boAt Rockerz 450R",quantity:1,defaultImage:"https://i.ibb.co/jk8Pt7B/eb8e0fbd-c412-48b3-9c91-5b49ddf35800-17432771-6821-4dbf-86ac-9cb7c8dfe460-600x.webp",hoverImage:" https://i.ibb.co/xYdKfT9/drivers-blue-e11cfd3a-d2b1-4b76-8676-f2b1e8813849-800x.webp",price:1890,strikePrice:2990,
firstImages:[],
secondImages:[],
thirdImages:[]
, type:"electronics" },
{id:27,name:"boAt Wave Pro ",quantity:1,defaultImage:"  https://i.ibb.co/mBBkyvw/main3-4d128bbd-a1e7-4045-a5c5-25c744f3133f-600x.webp",hoverImage:"https://i.ibb.co/k4JNXM2/Wave-Pro-FI-Blue4-14faa9f4-c87f-4271-a44b-ec8522ee70eb-800x.webp",price:3490,strikePrice:4990,
firstImages:[],
secondImages:[],
thirdImages:[]
, type:"electronics" },
{id:28,name:"boAt Earphone 250",quantity:1,defaultImage:"    https://i.ibb.co/F483H5w/3-30fc6c73-8b14-432f-8419-322dc2e8a42c-480x.webp",hoverImage:"https://i.ibb.co/LQwg88g/4-5649e20a-0b38-41a1-b505-a7d433367208-655x.webp",price:459,strikePrice:699,
firstImages:[],
secondImages:[],
thirdImages:[]
, type:"electronics" },
{id:29,name:"boAt wireless 375",quantity:1,defaultImage:" https://i.ibb.co/c6GW0Xx/airdopes-171-blue-c6dc7d5b-da81-40a0-9946-1c3ceab16c18-600x.webp",hoverImage:"https://i.ibb.co/ByrWgvr/mic-1-2-60b7b839-ae26-492c-ba3b-522a3c98b5e9-800x.webp",price:1690,strikePrice:3290,
firstImages:[],
secondImages:[],
thirdImages:[]
, type:"electronics" },
{id:30,name:"boAt Stone 190 DC Edition",quantity:1,defaultImage:" https://i.ibb.co/vVmFVJB/S190-FI-DC-Superman02-800x.webp",hoverImage:"https://i.ibb.co/qj56RCy/S190-FI-DC-Superman03-800x.webp",price:1790,strikePrice:2890,
firstImages:[],
secondImages:[],
thirdImages:[]
, type:"electronics" },

]
  
const SearchBar2 = ( OpenSearch , SetOpenSearch ) => {

    const navigate = useNavigate()

    const formatResult = (item) => {
        return (
          <HStack   
          onClick={()=>SetOpenSearch( OpenSearch=="none" ? "block" : "none" )}  >
          
            <Image boxSize={50} src={item.defaultImage} />
            <Text>{item.name}</Text>
          </HStack>
        )
      }


      
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    navigate(`/products/${item.type}/${item.id}`)
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }


  return (
    


    <Stack position="fixed"  style={{ width: "90%", left:20, top:90 }}>

    <ReactSearchAutocomplete

    // data to be match
      items={dataTobeMatch}
      onSearch={handleOnSearch}
     // onHover={handleOnHover}
      onSelect={handleOnSelect}
     // onFocus={handleOnFocus}
      autoFocus
      formatResult={formatResult}
    />

  </Stack>
 
  )
}

export default SearchBar2
