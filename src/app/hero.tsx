import Section from "./section";

export default function Hero(){
    return(
        <div className="content ml-16 ">
            <div className="text-[4em] w-[38rem] mt-[4rem] leading-[4.5rem]">
            <h1 className="font-light text-green-800 font-[Poppins]">
               <span>Discover the</span>  
                <span className="elegant font-[Elegant] -ml-1 "> Perfect Place </span>to live 
                <div className="flex">
                and Thrive
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
  className='size-14 mr-[-2rem]'viewBox="0 0 300.000000 300.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
fill="#166534" stroke="none">
<path d="M1476 2268 c-19 -29 -35 -100 -36 -153 0 -22 -3 -50 -6 -63 -5 -18
-11 -11 -29 42 -27 77 -64 145 -87 160 -46 28 -61 -51 -34 -189 8 -38 13 -71
12 -72 -1 -1 -21 26 -44 61 -39 60 -112 136 -131 136 -5 0 -14 -7 -21 -15 -17
-20 7 -109 51 -197 l31 -61 -54 45 c-80 68 -130 98 -160 98 -57 0 -32 -67 70
-188 l45 -54 -61 31 c-88 44 -177 68 -197 51 -8 -7 -15 -16 -15 -21 0 -19 76
-92 136 -131 35 -23 62 -43 61 -44 -1 -1 -33 4 -72 12 -138 27 -217 12 -189
-34 15 -23 83 -60 161 -87 72 -25 71 -31 -2 -34 -78 -3 -152 -20 -177 -42
l-23 -19 23 -19 c25 -22 99 -39 185 -43 31 -2 57 -5 57 -9 0 -3 -21 -11 -47
-18 -58 -15 -163 -70 -177 -93 -28 -47 55 -61 188 -33 38 8 71 13 73 12 1 -2
-26 -22 -61 -45 -60 -39 -136 -112 -136 -131 0 -5 7 -14 15 -21 20 -17 109 7
198 52 l62 31 -46 -54 c-69 -81 -99 -131 -99 -161 0 -24 4 -28 28 -28 30 0 80
30 161 99 l54 46 -31 -62 c-44 -86 -69 -178 -53 -197 6 -7 21 -12 32 -9 24 7
102 92 136 150 14 24 27 43 28 41 2 -2 -3 -34 -11 -73 -14 -75 -18 -153 -8
-179 8 -22 37 -20 58 3 22 24 86 170 86 195 0 48 13 -1 21 -80 10 -93 34 -159
59 -159 22 0 48 62 55 130 3 33 8 75 11 94 5 34 6 33 28 -31 28 -79 65 -147
88 -162 46 -28 61 51 34 189 -8 39 -13 71 -12 72 1 1 21 -26 44 -61 39 -60
112 -136 131 -136 5 0 14 7 21 15 17 20 -7 109 -52 198 l-31 62 54 -46 c81
-69 131 -99 161 -99 24 0 28 4 28 28 0 30 -30 80 -99 161 l-46 54 62 -31 c89
-45 178 -69 198 -52 8 7 15 16 15 21 0 19 -76 92 -136 131 -35 23 -62 43 -61
45 2 1 35 -4 73 -12 72 -15 151 -19 178 -9 22 8 20 37 -3 58 -23 21 -169 86
-193 86 -10 0 -18 3 -18 8 0 4 26 8 58 10 85 4 159 21 184 43 l23 19 -23 19
c-25 22 -101 41 -165 42 -46 0 -100 17 -62 18 27 2 173 66 196 87 23 21 25 50
3 58 -26 10 -104 6 -179 -8 -38 -8 -71 -13 -72 -12 -1 1 26 21 61 44 60 39
136 112 136 131 0 5 -7 14 -15 21 -20 17 -109 -7 -198 -52 l-62 -31 46 54 c69
81 99 131 99 161 0 24 -4 28 -28 28 -30 0 -80 -30 -161 -99 l-54 -46 31 62
c45 89 69 178 52 198 -7 8 -16 15 -21 15 -19 0 -92 -76 -131 -136 -23 -35 -43
-62 -44 -61 -1 1 4 34 12 72 14 75 18 153 8 179 -8 22 -37 20 -58 -3 -22 -24
-86 -170 -86 -195 0 -48 -13 1 -21 80 -9 86 -32 154 -56 162 -6 2 -19 -7 -27
-20z m45 -75 c20 -93 17 -283 -8 -388 -13 -60 -25 -90 -34 -90 -12 0 -14 37
-14 210 1 202 14 325 35 325 5 0 14 -26 21 -57z m-147 -99 c46 -120 54 -159
59 -286 4 -85 2 -108 -8 -108 -32 0 -125 367 -125 490 l0 45 20 -25 c10 -14
35 -66 54 -116z m323 59 c-11 -140 -34 -225 -93 -337 -32 -60 -62 -106 -70
-106 -16 0 -17 -6 27 174 37 153 114 346 137 346 3 0 2 -35 -1 -77z m-519 -50
c69 -83 140 -202 157 -261 8 -31 24 -80 35 -109 22 -59 10 -82 -21 -42 -42 55
-146 239 -181 320 -64 150 -61 177 10 92z m697 20 c-9 -38 -81 -201 -103 -235
-28 -43 -165 -193 -179 -196 -24 -6 -14 22 47 131 68 122 126 210 183 280 44
53 62 60 52 20z m-846 -122 c93 -62 182 -153 247 -253 67 -103 73 -118 51
-118 -20 0 -276 265 -320 330 -54 80 -50 88 22 41z m1001 21 c0 -15 -71 -112
-127 -173 -52 -56 -237 -189 -263 -189 -28 0 1 37 118 152 151 149 272 242
272 210z m-1035 -193 c111 -48 123 -56 227 -148 133 -119 119 -132 -45 -41
-117 65 -193 115 -274 179 -95 75 -64 78 92 10z m1155 42 c0 -31 -229 -184
-308 -206 -31 -8 -80 -24 -109 -35 -48 -17 -63 -17 -63 1 0 20 252 165 372
215 87 35 108 40 108 25z m-1148 -196 c131 -28 380 -172 256 -148 -162 30
-420 115 -468 154 l-25 21 80 -6 c44 -3 115 -12 157 -21z m1208 5 c-29 -22
-186 -84 -251 -99 -24 -5 -92 -12 -151 -14 -135 -6 -144 10 -30 47 164 53 307
83 402 85 l55 1 -25 -20z m-615 -23 c119 -66 116 -250 -5 -316 -161 -89 -336
83 -252 246 24 46 50 67 110 89 45 17 93 10 147 -19z m-395 -145 c57 -13 85
-24 85 -33 0 -12 -36 -14 -210 -14 -202 1 -325 14 -325 35 0 8 59 23 135 34
59 8 232 -3 315 -22z m1003 8 c26 -6 47 -15 47 -20 0 -17 -117 -34 -235 -34
-85 0 -145 6 -207 20 -94 22 -104 26 -93 45 10 15 418 6 488 -11z m-313 -82
c129 -33 286 -92 322 -121 23 -19 23 -19 -57 -13 -134 9 -221 32 -335 90 -58
30 -106 61 -108 70 -4 19 10 17 178 -26z m-590 -12 c0 -33 -362 -126 -488
-126 -52 0 -48 10 15 40 129 61 206 83 318 90 61 4 120 7 133 8 13 1 22 -4 22
-12z m522 -65 c174 -97 343 -219 326 -236 -20 -21 -256 91 -322 153 -28 26
-71 64 -95 84 -37 31 -47 58 -23 58 4 0 56 -27 114 -59z m-492 9 c0 -11 -145
-104 -245 -156 -101 -52 -223 -100 -233 -90 -20 22 219 187 306 211 31 8 80
24 107 34 49 18 65 18 65 1z m492 -138 c129 -132 218 -245 205 -259 -10 -9
-102 56 -175 122 -57 52 -192 239 -192 265 0 28 40 -3 162 -128z m-452 95 c0
-8 -62 -74 -137 -148 -134 -130 -246 -219 -260 -206 -11 12 66 116 145 195 71
70 209 169 240 171 6 1 12 -5 12 -12z m321 -79 c97 -149 203 -378 184 -396
-21 -20 -186 221 -210 306 -8 31 -24 80 -35 109 -17 48 -17 63 1 63 4 0 31
-37 60 -82z m-271 49 c0 -35 -181 -330 -253 -412 -65 -74 -58 -23 18 140 31
66 64 116 126 187 79 91 109 115 109 85z m200 -94 c43 -134 69 -252 76 -353
l6 -85 -21 25 c-23 28 -85 184 -100 251 -5 24 -12 92 -14 152 -6 141 10 144
53 10z m-146 60 c-49 -221 -114 -421 -154 -473 l-20 -25 0 46 c0 25 9 95 20
155 16 93 28 126 75 217 32 61 63 107 71 107 11 0 13 -7 8 -27z m61 -189 c-1
-200 -14 -324 -35 -324 -13 0 -30 95 -37 202 -5 79 -2 117 17 205 29 139 28
135 43 130 9 -3 12 -54 12 -213z"/>
</g>
</svg>

                </div>
            
            </h1>
        </div>
<Section />
        </div>
        
    );
}