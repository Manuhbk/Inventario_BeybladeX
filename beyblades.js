// Base de datos oficial extraída de tu documento de Google Sheets
const BEYBLADES_DB = [
    // --- BASIC LINE (BX) ---
    // === ACTUALIZACIÓN EN TU BASE DE DATOS ===
               
           { 
                id: "BX-01", 
                linea: "BX", 
                nombre: "DranSword 3-60F", 
                blade: "DranSword", 
                ratchet: "3-60", 
                bit: "Flat (F)",
                // Rutas locales de tu PC preparadas para el navegador:
                imgBlade: "imagenes/blades/bx1.png", 
                imgRatchet: "imagenes/ratchet/3-60-azul.png", 
                imgBit: "imagenes/bits/F.png"
            },

            { 
                id: "BX-02", 
                linea: "BX", 
                nombre: "HellsScythe 4-60T", 
                blade: "HellsScythe", 
                ratchet: "4-60", 
                bit: "T",
                // Rutas locales de tu PC preparadas para el navegador:
                imgBlade: "imagenes/blades/bx2.png", 
                imgRatchet: "imagenes/ratchet/4-60-roja.png", 
                imgBit: "imagenes/bits/T-1.png"
            },
            
             { 
                id: "BX-03", 
                linea: "BX", 
                nombre: "WizardArrow 4-80B", 
                blade: "WizardArrow", 
                ratchet: "4-80", 
                bit: "B",
                // Rutas locales de tu PC preparadas para el navegador:
                imgBlade: "imagenes/blades/bx3.png", 
                imgRatchet: "imagenes/ratchet/4-80-amarilla.png", 
                imgBit: "imagenes/bits/B-1.png"
            },
    
             { 
                id: "BX-04", 
                linea: "BX", 
                nombre: "KnightShield 3-80N", 
                blade: "KnightShield", 
                ratchet: "3-80", 
                bit: "N",
                // Rutas locales de tu PC preparadas para el navegador:
                imgBlade: "imagenes/blades/bx4.png", 
                imgRatchet: "imagenes/ratchet/3-80-verde.png", 
                imgBit: "imagenes/bits/N-1.png"
            },
      
            { 
                id: "BX-05", 
                linea: "BX", 
                nombre: "WizardArrow 4-80B", 
                blade: "WizardArrow - Rojo", 
                ratchet: "4-80", 
                bit: "B",
                // Rutas locales de tu PC preparadas para el navegador:
                imgBlade: "imagenes/blades/bx5.png", 
                imgRatchet: "imagenes/ratchet/4-80-roja.png", 
                imgBit: "imagenes/bits/B-2.png"
            },
    
            { 
                id: "BX-06", 
                linea: "BX", 
                nombre: "KnightShield 3-80N", 
                blade: "KnightShield", 
                ratchet: "3-80", 
                bit: "N",
                // Rutas locales de tu PC preparadas para el navegador:
                imgBlade: "imagenes/blades/bx6.png", 
                imgRatchet: "imagenes/ratchet/3-80-celeste.png", 
                imgBit: "imagenes/bits/N-2.png"
            },

                       { 
                id: "BX-07 Start Dash Set", 
                linea: "BX", 
                nombre: "DranSword 3-60F Special Version", 
                blade: "DranSword", 
                ratchet: "3-60", 
                bit: "Flat (F)",
                // Rutas locales de tu PC preparadas para el navegador:
                imgBlade: "imagenes/blades/bx07.png", 
                imgRatchet: "imagenes/ratchet/3-60-bx07.png", 
                imgBit: "imagenes/bits/F.png"
            },
    
            { 
                id: "BX-08 3on3 Deck Set", 
                linea: "BX", 
                nombre: "HellsScythe 3-80B", 
                blade: "HellsScythe", 
                ratchet: "3-80", 
                bit: "B",
                // Rutas locales de tu PC preparadas para el navegador:
                imgBlade: "imagenes/blades/bx8-hell.png", 
                imgRatchet: "imagenes/ratchet/3-80-naranja.png", 
                imgBit: "imagenes/bits/B-3.png"
            },
   
            { 
                id: "BX-08 3on3 Deck Set", 
                linea: "BX", 
                nombre: "WizardArrow 4-60N", 
                blade: "WizardArrow", 
                ratchet: "4-60", 
                bit: "N",
                // Rutas locales de tu PC preparadas para el navegador:
                imgBlade: "imagenes/blades/bx8-arrow.png", 
                imgRatchet: "imagenes/ratchet/4-60-verde.png", 
                imgBit: "imagenes/bits/N-1.png"
            },
   
            { 
                id: "BX-08 3on3 Deck Set", 
                linea: "BX", 
                nombre: "KnightShield 4-80T", 
                blade: "KnightShield", 
                ratchet: "4-80", 
                bit: "T",
                // Rutas locales de tu PC preparadas para el navegador:
                imgBlade: "imagenes/blades/bx8-shield.png", 
                imgRatchet: "imagenes/ratchet/4-80-rosa.png", 
                imgBit: "imagenes/bits/T-2.png"
            },


         { 
                id: "BX-13", 
                linea: "BX", 
                nombre: "KnightLance 4-80HN", 
                blade: "KnightLance", 
                ratchet: "4-80", 
                bit: "HN",
                // Rutas locales de tu PC preparadas para el navegador:
                imgBlade: "imagenes/blades/bx13.png", 
                imgRatchet: "imagenes/ratchet/4-80-lance.png", 
                imgBit: "imagenes/bits/HN-1.png"
            },


     // RANDOM BOOSTER VOLUMEN 1

{ 
    id: "BX-14 Random Booster 01", 
    linea: "BX", 
    nombre: "SharkEdge 3-60LF (Prize)", 
    blade: "SharkEdge", 
    ratchet: "3-60", 
    bit: "LF",
    // Rutas locales de tu PC preparadas para el navegador:
    imgBlade: "imagenes/blades/bx-14-01.png", 
    imgRatchet: "imagenes/ratchet/3-60-sharkedge.png", 
    imgBit: "imagenes/bits/LF-1.png" 
},

{ 
    id: "BX-14 Random Booster 02", 
    linea: "BX", 
    nombre: "Shark Edge 4-80N", 
    blade: "SharkEdge", 
    ratchet: "4-80", 
    bit: "N",
    // Rutas locales de tu PC preparadas para el navegador:
    imgBlade: "imagenes/blades/bx-14-02.png", 
    imgRatchet: "imagenes/ratchet/4-80-sharknaranjo.png", 
    imgBit: "imagenes/bits/N-3.png" 
},

{ 
    id: "BX-14 Random Booster 03", 
    linea: "BX", 
    nombre: "DranSword 3-80B", 
    blade: "DranSword", 
    ratchet: "3-80", 
    bit: "B",
    // Rutas locales de tu PC preparadas para el navegador:
    imgBlade: "imagenes/blades/bx-14-03.png", 
    imgRatchet: "imagenes/ratchet/3-80-blanca.png", 
    imgBit: "imagenes/bits/B-4.png" 
},


{ 
    id: "BX-14 Random Booster 04", 
    linea: "BX", 
    nombre: "HellsScythe 4-80LF", 
    blade: "HellsScythe", 
    ratchet: "4-80", 
    bit: "LF", 
      // Rutas locales de tu PC preparadas para el navegador:
    imgBlade: "imagenes/blades/bx-14-04.png", 
    imgRatchet: "imagenes/ratchet/4-80-random1.png", 
    imgBit: "imagenes/bits/LF-2.png" 
},

{ 
    id: "BX-14 Random Booster 05", 
    linea: "BX", 
    nombre: "KnightShield 4-60LF", 
    blade: "KnightShield", 
    ratchet: "4-60", 
    bit: "LF", 
      // Rutas locales de tu PC preparadas para el navegador:
    imgBlade: "imagenes/blades/bx-14-05.png", 
    imgRatchet: "imagenes/ratchet/4-60-random1.png", 
    imgBit: "imagenes/bits/LF-3.png" 
},

{ 
    id: "BX-14 Random Booster 06", 
    linea: "BX", 
    nombre: "WizardArrow 3-60T", 
    blade: "WizardArrow", 
    ratchet: "3-60", 
    bit: "T", 
      // Rutas locales de tu PC preparadas para el navegador:
    imgBlade: "imagenes/blades/bx-14-06.png", 
    imgRatchet: "imagenes/ratchet/3-60-random1.png", 
    imgBit: "imagenes/bits/T-3.png" 
},

{ 
    id: "BX-15", 
    linea: "BX", 
    nombre: "LeonClaw 5-60P", 
    blade: "LeonClaw", 
    ratchet: "5-60", 
    bit: "P", 
      // Rutas locales de tu PC preparadas para el navegador:
    imgBlade: "imagenes/blades/bx-15.png", 
    imgRatchet: "imagenes/ratchet/5-60-1.png", 
    imgBit: "imagenes/bits/P-1.png" 

},

{ 
    id: "BX-16 - Random Booster Select 01", 
    linea: "BX", 
    nombre: "ViperTail 5-80O", 
    blade: "ViperTail", 
    ratchet: "5-80", 
    bit: "O", 
      // Rutas locales de tu PC preparadas para el navegador:
    imgBlade: "imagenes/blades/bx-16-01.png", 
    imgRatchet: "imagenes/ratchet/5-80-1.png", 
    imgBit: "imagenes/bits/O-1.png" 

},

{ 
    id: "BX-16 - Random Booster Select 02", 
    linea: "BX", 
    nombre: "ViperTail 3-80HN", 
    blade: "ViperTail", 
    ratchet: "3-80", 
    bit: "HN", 
      // Rutas locales de tu PC preparadas para el navegador:
    imgBlade: "imagenes/blades/bx-16-03.png", 
    imgRatchet: "imagenes/ratchet/3-80-tail.png", 
    imgBit: "imagenes/bits/HN-2.png" 

},

{ 
    id: "BX-16 - Random Booster Select 03", 
    linea: "BX", 
    nombre: "ViperTail 4-60F", 
    blade: "ViperTail", 
    ratchet: "4-60", 
    bit: "F", 
      // Rutas locales de tu PC preparadas para el navegador:
    imgBlade: "imagenes/blades/bx-16-02.png", 
    imgRatchet: "imagenes/ratchet/4-60-tail.png", 
    imgBit: "imagenes/bits/F-2.png" 

},

{ 
    id: "BX-17 Battle Entry Set.", 
    linea: "BX", 
    nombre: "DranSword 3-60F (Red Ver.)", 
    blade: "DranSword", 
    ratchet: "3-60", 
    bit: "F", 
      // Rutas locales de tu PC preparadas para el navegador:
    imgBlade: "imagenes/blades/bx-17.png", 
    imgRatchet: "imagenes/ratchet/3-60-bx17.png", 
    imgBit: "imagenes/bits/F-2.png" 

},

{ 
    id: "BX-17 Battle Entry Set.", 
    linea: "BX", 
    nombre: "WizardArrow 4-80B (Blue Ver.)", 
    blade: "WizardArrow", 
    ratchet: "4-80", 
    bit: "B", 
      // Rutas locales de tu PC preparadas para el navegador:
    imgBlade: "imagenes/blades/bx-17-2.png", 
    imgRatchet: "imagenes/ratchet/4-80-bx17.png", 
    imgBit: "imagenes/bits/B-8.png" 

},

{ 
        id: "BX-19", 
        linea: "BX", 
        nombre: "Booster RhinoHorn 3-80S", 
        blade: "RhinoHorn", 
        ratchet: "3-80", 
        bit: "S",
        imgBlade: "imagenes/blades/bx-19.png", 
        imgRatchet: "imagenes/ratchet/3-80-cx19.png", 
        imgBit: "imagenes/bits/S-1.png" 
    },
    { 
        id: "BX-20 Dran Dagger Deck Set 01", 
        linea: "BX", 
        nombre: "DranDagger 4-60R", 
        blade: "DranDagger", 
        ratchet: "4-60", 
        bit: "R",
        imgBlade: "imagenes/blades/bx-20-01.png", 
        imgRatchet: "imagenes/ratchet/4-60-cx20.png", 
        imgBit: "imagenes/bits/R-1.png" 
    },
    { 
        id: "BX-20 Dran Dagger Deck Set 02", 
        linea: "BX", 
        nombre: "KnightShield 5-80T", 
        blade: "KnightShield", 
        ratchet: "5-80", 
        bit: "T",
        imgBlade: "imagenes/blades/bx-20-02.png", 
        imgRatchet: "imagenes/ratchet/5-80-cx20.png", 
        imgBit: "imagenes/bits/T-4.png" 
    },
    { 
        id: "BX-20 Dran Dagger Deck Set 03", 
        linea: "BX", 
        nombre: "SharkEdge 3-80F", 
        blade: "SharkEdge", 
        ratchet: "3-80", 
        bit: "F",
        imgBlade: "imagenes/blades/bx-20-03.png", 
        imgRatchet: "imagenes/ratchet/3-80-cx20.png", 
        imgBit: "imagenes/bits/F-3.png" 
    },
    { 
        id: "BX-21 HellsChain Deck Set 01", 
        linea: "BX", 
        nombre: "HellsChain 5-60HT", 
        blade: "HellsChain", 
        ratchet: "5-60", 
        bit: "HT",
        imgBlade: "imagenes/blades/bx-21-01.png", 
        imgRatchet: "imagenes/ratchet/5-60-bx21.png", 
        imgBit: "imagenes/bits/HT-1.png" 
    },
    { 
        id: "BX-21 HellsChain Deck Set 02", 
        linea: "BX", 
        nombre: "KnightLance 3-60LF", 
        blade: "KnightLance", 
        ratchet: "3-60", 
        bit: "LF",
        imgBlade: "imagenes/blades/bx-21-02.png", 
        imgRatchet: "imagenes/ratchet/3-60-bx21.png", 
        imgBit: "imagenes/bits/LF-4.png" 
    },
    { 
        id: "BX-21 HellsChain Deck Set 03", 
        linea: "BX", 
        nombre: "WizardArrow 4-80N", 
        blade: "WizardArrow", 
        ratchet: "4-80", 
        bit: "N",
        imgBlade: "imagenes/blades/bx-21-03.png", 
        imgRatchet: "imagenes/ratchet/4-80-bx21.png", 
        imgBit: "imagenes/bits/N-4.png" 
    },


      { 
                id: "BX-22 Entry Package (diciembre 2023)", 
                linea: "BX", 
                nombre: "DranSword 3-60F", 
                blade: "DranSword", 
                ratchet: "3-60", 
                bit: "Flat (F)",
                // Rutas locales de tu PC preparadas para el navegador:
                imgBlade: "imagenes/blades/bx1.png", 
                imgRatchet: "imagenes/ratchet/3-60-azul.png", 
                imgBit: "imagenes/bits/F.png"
            },
  
  { 
        id: "BX-23", 
        linea: "BX", 
        nombre: "PhoenixWing 9-60GF", 
        blade: "PhoenixWing", 
        ratchet: "9-60", 
        bit: "GF",
        imgBlade: "imagenes/blades/bx-23.png", 
        imgRatchet: "imagenes/ratchet/9-60-bx23.png", 
        imgBit: "imagenes/bits/GF-1.png" 
    },
    { 
        id: "BX-24 Random Booster Vol. 2 - 01", 
        linea: "BX", 
        nombre: "WyvernGale 5-80GB (Prize)", 
        blade: "WyvernGale", 
        ratchet: "5-80", 
        bit: "GB",
        imgBlade: "imagenes/blades/bx-24-01.png", 
        imgRatchet: "imagenes/ratchet/5-80-bx24.png", 
        imgBit: "imagenes/bits/GB-1.png" 
    },
    { 
        id: "BX-24 Random Booster Vol. 2 - 02", 
        linea: "BX", 
        nombre: "WyvernGale 3-60T", 
        blade: "WyvernGale", 
        ratchet: "3-60", 
        bit: "T",
        imgBlade: "imagenes/blades/bx-24-02.png", 
        imgRatchet: "imagenes/ratchet/3-60-random1.png", 
        imgBit: "imagenes/bits/T-5.png" 
    },
    { 
        id: "BX-24 Random Booster Vol. 2 - 03", 
        linea: "BX", 
        nombre: "KnightLance 4-60GB", 
        blade: "KnightLance", 
        ratchet: "4-60", 
        bit: "GB",
        imgBlade: "imagenes/blades/bx-24-03.png", 
        imgRatchet: "imagenes/ratchet/4-60-bx24.png", 
        imgBit: "imagenes/bits/GB-2.png" 
    },
    { 
        id: "BX-24 Random Booster Vol. 2 - 04", 
        linea: "BX", 
        nombre: "ViperTail 5-60F", 
        blade: "ViperTail", 
        ratchet: "5-60", 
        bit: "F",
        imgBlade: "imagenes/blades/bx-24-04.png", 
        imgRatchet: "imagenes/ratchet/5-60-bx24.png", 
        imgBit: "imagenes/bits/F-4.png" 
    },
    { 
        id: "BX-24 Random Booster Vol. 2 - 05", 
        linea: "BX", 
        nombre: "LeonClaw 3-80HN", 
        blade: "LeonClaw", 
        ratchet: "3-80", 
        bit: "HN",
        imgBlade: "imagenes/blades/bx-24-05.png", 
        imgRatchet: "imagenes/ratchet/3-80-bx24.png", 
        imgBit: "imagenes/bits/HN-3.png" 
    },
    { 
        id: "BX-24 Random Booster Vol. 2 - 06", 
        linea: "BX", 
        nombre: "WizardArrow 4-80GB", 
        blade: "WizardArrow", 
        ratchet: "4-80", 
        bit: "GB",
        imgBlade: "imagenes/blades/bx-24-06.png", 
        imgRatchet: "imagenes/ratchet/4-80-bx24.png", 
        imgBit: "imagenes/bits/GB-3.png" 
    },

{ 
        id: "BXC-02 Special Cross Bey ", 
        linea: "BX", 
        nombre: "HellsScythe 3-80F SP X Bey", 
        blade: "HellsScythe", 
        ratchet: "3-80", 
        bit: "F",
        imgBlade: "imagenes/blades/bxc-02.png", 
        imgRatchet: "imagenes/ratchet/3-80-bxc-02.png", 
        imgBit: "imagenes/bits/F-14.png" 
    },

{ 
        id: "BX-26", 
        linea: "BX", 
        nombre: "UnicornSting 5-60GP", 
        blade: "UnicornSting", 
        ratchet: "5-60", 
        bit: "GP",
        imgBlade: "imagenes/blades/bx-26.png", 
        imgRatchet: "imagenes/ratchet/5-60-bx26.png", 
        imgBit: "imagenes/bits/GP-1.png" 
    },
    { 
        id: "BX-27 Random Booster Select 01", 
        linea: "BX", 
        nombre: "SphinxCowl 9-80GN", 
        blade: "SphinxCowl", 
        ratchet: "9-80", 
        bit: "GN",
        imgBlade: "imagenes/blades/bx-27-01.png", 
        imgRatchet: "imagenes/ratchet/9-80-bx27.png", 
        imgBit: "imagenes/bits/GN-01.png" 
    },
    { 
        id: "BX-27 Random Booster Select 02", 
        linea: "BX", 
        nombre: "SphinxCowl 4-80HT", 
        blade: "SphinxCowl", 
        ratchet: "4-80", 
        bit: "HT",
        imgBlade: "imagenes/blades/bx-27-02.png", 
        imgRatchet: "imagenes/ratchet/4-80-bx27.png", 
        imgBit: "imagenes/bits/HT-2.png" 
    },
    { 
        id: "BX-27 Random Booster Select 03", 
        linea: "BX", 
        nombre: "SphinxCowl 5-60O", 
        blade: "SphinxCowl", 
        ratchet: "5-60", 
        bit: "O",
        imgBlade: "imagenes/blades/bx-27-03.png", 
        imgRatchet: "imagenes/ratchet/5-60-bx27.png", 
        imgBit: "imagenes/bits/O-2.png" 
    },

   

    { 
        id: "BX-31 Random Booster Vol.3 01", 
        linea: "BX", 
        nombre: "TyrannoBeat 4-70Q (Prize)", 
        blade: "TyrannoBeat", 
        ratchet: "4-70", 
        bit: "Q",
        imgBlade: "imagenes/blades/bx-31-01.png", 
        imgRatchet: "imagenes/ratchet/4-70-bx31.png", 
        imgBit: "imagenes/bits/Q-1.png" 
    },
    { 
        id: "BX-31 Random Booster Vol.3 02", 
        linea: "BX", 
        nombre: "TyrannoBeat 3-60S", 
        blade: "TyrannoBeat", 
        ratchet: "3-60", 
        bit: "S",
        imgBlade: "imagenes/blades/bx-31-02.png", 
        imgRatchet: "imagenes/ratchet/3-60-bx31.png", 
        imgBit: "imagenes/bits/S-2.png" 
    },
    { 
        id: "BX-31 Random Booster Vol.3 03", 
        linea: "BX", 
        nombre: "HellsChain 9-80O", 
        blade: "HellsChain", 
        ratchet: "9-80", 
        bit: "O",
        imgBlade: "imagenes/blades/bx-31-03.png", 
        imgRatchet: "imagenes/ratchet/9-80-bx31.png", 
        imgBit: "imagenes/bits/O-3.png" 
    },
    { 
        id: "BX-31 Random Booster Vol.3 04", 
        linea: "BX", 
        nombre: "DranDagger 4-70P", 
        blade: "DranDagger", 
        ratchet: "4-70", 
        bit: "P",
        imgBlade: "imagenes/blades/bx-31-04.png", 
        imgRatchet: "imagenes/ratchet/4-70-bx31-2.png", 
        imgBit: "imagenes/bits/P-2.png" 
    },
    { 
        id: "BX-31 Random Booster Vol.3 05", 
        linea: "BX", 
        nombre: "SharkEdge 1-60Q", 
        blade: "SharkEdge", 
        ratchet: "1-60", 
        bit: "Q",
        imgBlade: "imagenes/blades/bx-31-05.png", 
        imgRatchet: "imagenes/ratchet/1-60-bx31.png", 
        imgBit: "imagenes/bits/Q-2.png" 
    },

{ 
        id: "BX-31 Random Booster Vol.3 06", 
        linea: "BX", 
        nombre: "RhinoHorn 5-80Q", 
        blade: "RhinoHorn", 
        ratchet: "5-80", 
        bit: "Q",
        imgBlade: "imagenes/blades/bx-31-06.png", 
        imgRatchet: "imagenes/ratchet/5-80-bx31.png", 
        imgBit: "imagenes/bits/Q-3.png" 
    },
    { 
        id: "BX-33", 
        linea: "BX", 
        nombre: "WeissTiger 3-60U", 
        blade: "WeissTiger", 
        ratchet: "3-60", 
        bit: "U",
        imgBlade: "imagenes/blades/bx-33.png", 
        imgRatchet: "imagenes/ratchet/3-60-bx33.png", 
        imgBit: "imagenes/bits/U-1.png" 
    },
    { 
        id: "BX-34", 
        linea: "BX", 
        nombre: "CobaltDragoon 2-60C", 
        blade: "CobaltDragoon", 
        ratchet: "2-60", 
        bit: "C",
        imgBlade: "imagenes/blades/bx-34.png", 
        imgRatchet: "imagenes/ratchet/2-60-bx34.png", 
        imgBit: "imagenes/bits/C-1.png" 
    },
    { 
        id: "BX-35 Random Booster Vol. 4 01", 
        linea: "BX", 
        nombre: "BlackShell 4-60D", 
        blade: "BlackShell", 
        ratchet: "4-60", 
        bit: "D",
        imgBlade: "imagenes/blades/bx-35-01.png", 
        imgRatchet: "imagenes/ratchet/4-60-bx35.png", 
        imgBit: "imagenes/bits/D-1.png" 
    },
    { 
        id: "BX-35 Random Booster Vol. 4 02", 
        linea: "BX", 
        nombre: "BlackShell 9-80B", 
        blade: "BlackShell", 
        ratchet: "9-80", 
        bit: "B",
        imgBlade: "imagenes/blades/bx-35-02.png", 
        imgRatchet: "imagenes/ratchet/9-80-bx35.png", 
        imgBit: "imagenes/bits/B-5.png" 
    },
    { 
        id: "BX-35 Random Booster Vol. 4 03", 
        linea: "BX", 
        nombre: "UnicornSting 3-70D", 
        blade: "UnicornSting", 
        ratchet: "3-70", 
        bit: "D",
        imgBlade: "imagenes/blades/bx-35-03.png", 
        imgRatchet: "imagenes/ratchet/3-70-bx35.png", 
        imgBit: "imagenes/bits/D-2.png" 
    },


    { 
        id: "BX-35 Random Booster Vol. 4 05", 
        linea: "BX", 
        nombre: "PhoenixWing 5-80H", 
        blade: "PhoenixWing", 
        ratchet: "5-80", 
        bit: "H",
        imgBlade: "imagenes/blades/bx-35-05.png", 
        imgRatchet: "imagenes/ratchet/5-80-bx35.png", 
        imgBit: "imagenes/bits/H-1.png" 
    },
    { 
        id: "BX-35 Random Booster Vol. 4 06", 
        linea: "BX", 
        nombre: "ViperTail 5-70D", 
        blade: "ViperTail", 
        ratchet: "5-70", 
        bit: "D",
        imgBlade: "imagenes/blades/bx-35-06.png", 
        imgRatchet: "imagenes/ratchet/5-70-bx35.png", 
        imgBit: "imagenes/bits/D-3.png" 
    },
    { 
        id: "BX-36 Random Booster Select 01", 
        linea: "BX", 
        nombre: "WhaleWave 5-80E (Prize)", 
        blade: "WhaleWave", 
        ratchet: "5-80", 
        bit: "E",
        imgBlade: "imagenes/blades/bx-36-01.png", 
        imgRatchet: "imagenes/ratchet/5-80-bx36.png", 
        imgBit: "imagenes/bits/E-1.png" 
    },
    { 
        id: "BX-36 Random Booster Select 02", 
        linea: "BX", 
        nombre: "WhaleWave 4-70HN", 
        blade: "WhaleWave", 
        ratchet: "4-70", 
        bit: "HN",
        imgBlade: "imagenes/blades/bx-36-02.png", 
        imgRatchet: "imagenes/ratchet/4-70-bx36.png", 
        imgBit: "imagenes/bits/HN-4.png" 
    },
    { 
        id: "BX-36 Random Booster Select 03", 
        linea: "BX", 
        nombre: "WhaleWave 3-80GB", 
        blade: "WhaleWave", 
        ratchet: "3-80", 
        bit: "GB",
        imgBlade: "imagenes/blades/bx-36-03.png", 
        imgRatchet: "imagenes/ratchet/3-80-bx36.png", 
        imgBit: "imagenes/bits/GB-4.png" 
    },

     { 
        id: "BX-37 Double Xtreme Stadium Set", 
        linea: "BX", 
        nombre: "BearScratch 5-60F", 
        blade: "BearScratch", 
        ratchet: "5-60", 
        bit: "F",
        imgBlade: "imagenes/blades/bx-37.png", 
        imgRatchet: "imagenes/ratchet/5-60-bx37.png", 
        imgBit: "imagenes/bits/F-5.png" 
    },


    { 
        id: "BX-38", 
        linea: "BX", 
        nombre: "CrimsonGaruda 4-70TP", 
        blade: "CrimsonGaruda", 
        ratchet: "4-70", 
        bit: "TP",
        imgBlade: "imagenes/blades/bx-38.png", 
        imgRatchet: "imagenes/ratchet/4-70-bx38.png", 
        imgBit: "imagenes/bits/TP-1.png" 
    },
    { 
        id: "BX-39 Random Booster Select 01", 
        linea: "BX", 
        nombre: "ShelterDrake 7-80GP (Prize)", 
        blade: "ShelterDrake", 
        ratchet: "7-80", 
        bit: "GP",
        imgBlade: "imagenes/blades/bx-39-01.png", 
        imgRatchet: "imagenes/ratchet/7-80-bx39.png", 
        imgBit: "imagenes/bits/GP-2.png" 
    },
    { 
        id: "BX-39 Random Booster Select 02", 
        linea: "BX", 
        nombre: "ShelterDrake 5-70O", 
        blade: "ShelterDrake", 
        ratchet: "5-70", 
        bit: "O",
        imgBlade: "imagenes/blades/bx-39-02.png", 
        imgRatchet: "imagenes/ratchet/5-70-bx39.png", 
        imgBit: "imagenes/bits/O-4.png" 
    },
    { 
        id: "BX-39 Random Booster Select 03", 
        linea: "BX", 
        nombre: "ShelterDrake 3-60D", 
        blade: "ShelterDrake", 
        ratchet: "3-60", 
        bit: "D",
        imgBlade: "imagenes/blades/bx-39-03.png", 
        imgRatchet: "imagenes/ratchet/3-60-bx39.png", 
        imgBit: "imagenes/bits/D-4.png" 
    },
    { 
        id: "BX-44", 
        linea: "BX", 
        nombre: "Booster TriceraPress M-85BS", 
        blade: "TriceraPress", 
        ratchet: "M-85", 
        bit: "BS",
        imgBlade: "imagenes/blades/bx-44.png", 
        imgRatchet: "imagenes/ratchet/M-85-bx44.png", 
        imgBit: "imagenes/bits/BS-1.png" 
    },
    { 
        id: "BX-45", 
        linea: "BX", 
        nombre: "SamuraiCalibur 6-70M", 
        blade: "SamuraiCalibur", 
        ratchet: "6-70", 
        bit: "M",
        imgBlade: "imagenes/blades/bx-45.png", 
        imgRatchet: "imagenes/ratchet/6-70-bx45.png", 
        imgBit: "imagenes/bits/M-1.png" 
    },
    { 
        id: "BX-49", 
        linea: "BX", 
        nombre: "DranStrike 4-50FF", 
        blade: "DranStrike", 
        ratchet: "4-50", 
        bit: "FF",
        imgBlade: "imagenes/blades/bx-49.png", 
        imgRatchet: "imagenes/ratchet/4-50-bx49.png", 
        imgBit: "imagenes/bits/FF-1.png" 
    },

    { 
        id: "BX-46 Battle Entry Set Infinity", 
        linea: "BX", 
        nombre: "CobaltDrake 9-60R", 
        blade: "CobaltDrake", 
        ratchet: "9-60", 
        bit: "R",
        imgBlade: "imagenes/blades/bx-46-01.png", 
        imgRatchet: "imagenes/ratchet/9-60-bx46.png", 
        imgBit: "imagenes/bits/R-3.png" 
    },


    { 
        id: "BX-46 Battle Entry Set Infinity", 
        linea: "BX", 
        nombre: "GoatTackle 7-70T", 
        blade: "GoatTackle", 
        ratchet: "7-70", 
        bit: "T",
        imgBlade: "imagenes/blades/bx-46-02.png", 
        imgRatchet: "imagenes/ratchet/7-70-bx46.png", 
        imgBit: "imagenes/bits/T-4.png" 
    },


        { 
        id: "Limited Released Remakes BX-01", 
        linea: "BX", 
        nombre: "Dragoon Storm 4-60RA", 
        blade: "DragoonStorm", 
        ratchet: "4-60", 
        bit: "RA",
        imgBlade: "imagenes/blades/bx-01dragoon.png", 
        imgRatchet: "imagenes/ratchet/4-60blanca.png", 
        imgBit: "imagenes/bits/RA-4.png" 
    },

    { 
        id: "Limited Released Remakes BX-01", 
        linea: "BX", 
        nombre: "DranzerSpiral 3-80T", 
        blade: "DranzerSpiral", 
        ratchet: "3-80", 
        bit: "T",
        imgBlade: "imagenes/blades/bx-01dranzer.png", 
        imgRatchet: "imagenes/ratchet/3-80azul.png", 
        imgBit: "imagenes/bits/T-6.png" 
    },

        { 
        id: "Limited Released Remakes BX-01", 
        linea: "BX", 
        nombre: "DranzerSpiral 3-80T Black", 
        blade: "DranzerSpiral", 
        ratchet: "3-80", 
        bit: "T",
        imgBlade: "imagenes/blades/bx-01dranzer2.png", 
        imgRatchet: "imagenes/ratchet/3-80-negra.png", 
        imgBit: "imagenes/bits/T-10.png" 
    },

 { 
        id: "BX00 Starter Set", 
        linea: "BX", 
        nombre: "DrigerSlash 4-80P", 
        blade: "DrigerSlash", 
        ratchet: "4-80",    
        bit: "P",
        imgBlade: "imagenes/blades/bx-00drigger.png", 
        imgRatchet: "imagenes/ratchet/4-80-amarilla.png", 
        imgBit: "imagenes/bits/P-1.png" 
    },

{ 
        id: "BX00 Starter Set", 
        linea: "BX", 
        nombre: "DracielShield 7-60D", 
        blade: "DracielShield", 
        ratchet: "7-60",    
        bit: "D",
        imgBlade: "imagenes/blades/bx-00draciel.png", 
        imgRatchet: "imagenes/ratchet/7-60-draciel.png", 
        imgBit: "imagenes/bits/D-5.png" 
    },

   { 
        id: "BX00 Starter Set", 
        linea: "BX", 
        nombre: "XenoXcalibur 3-60GF", 
        blade: "XenoXcalibur", 
        ratchet: "3-60",    
        bit: "GF",
        imgBlade: "imagenes/blades/bx-00xeno.png", 
        imgRatchet: "imagenes/ratchet/3-60-bx39.png", 
        imgBit: "imagenes/bits/GF-1.png" 
    },

        { 
        id: "Limited Released Remakes BX-01", 
        linea: "BX", 
        nombre: "Storm Pegasus 3-70RA", 
        blade: "StormPegasus", 
        ratchet: "3-70", 
        bit: "RA",
        imgBlade: "imagenes/blades/bx-01pegasus.png", 
        imgRatchet: "imagenes/ratchet/3-70-storm.png", 
        imgBit: "imagenes/bits/RA-2.png" 
    },

            { 
        id: "Limited Released Remakes BX-01", 
        linea: "BX", 
        nombre: "VictoryValkyrie 2-60RA", 
        blade: "VictoryValkyrie", 
        ratchet: "2-60", 
        bit: "RA",
        imgBlade: "imagenes/blades/bx-01valkyrie.png", 
        imgRatchet: "imagenes/ratchet/2-60-victory.png", 
        imgBit: "imagenes/bits/RA-3.png" 
    },

    { 
        id: "Beyblade Battle Base Tournament Prize", 
        linea: "BX", 
        nombre: "KnightShield (Metal Coat: Gold)", 
        blade: "KnightShield", 
        ratchet: "3-80", 
        bit: "T",
        imgBlade: "imagenes/blades/bx-01knight.png", 
        imgRatchet: "imagenes/ratchet/3-80-tail.png", 
        imgBit: "imagenes/bits/N-3.png" 
    },

    { 
        id: "Rare Bey Get Battle", 
        linea: "BX", 
        nombre: " HellsScythe 4-60T (Metal Coat: Gold)", 
        blade: " HellsScythe", 
        ratchet: "4-60", 
        bit: "T",
        imgBlade: "imagenes/blades/bx-01hell.png", 
        imgRatchet: "imagenes/ratchet/4-60-hells.png", 
        imgBit: "imagenes/bits/T-7.png" 
    },

        { 
        id: "Rare Bey Get Battle", 
        linea: "BX", 
        nombre: "CobaltDrake 4-60F", 
        blade: "CobaltDrake", 
        ratchet: "4-60", 
        bit: "F",
        imgBlade: "imagenes/blades/bx-01drake.png", 
        imgRatchet: "imagenes/ratchet/4-60drake.png", 
        imgBit: "imagenes/bits/F-6.png" 
    },

    

        { 
        id: "Coro Coro Comic Exclusive BX-00", 
        linea: "BX", 
        nombre: "Phoenix Feather Solo Blade",   
        blade: "PhoenixFeather", 
        ratchet: "n/a", 
        bit: "n/a",
        imgBlade: "imagenes/blades/bx00-feather.png", 
        imgRatchet: "imagenes/na.png", 
        imgBit: "imagenes/na.png" 
    },

    { 
        id: "Coro Coro Comic Exclusive BX-00", 
        linea: "BX", 
        nombre: "DranSword Solo Blade",   
        blade: "DranSword", 
        ratchet: "n/a", 
        bit: "n/a",
        imgBlade: "imagenes/blades/bx-00dran.png", 
        imgRatchet: "imagenes/na.png", 
        imgBit: "imagenes/na.png" 
    },

        { 
        id: "Victory Xtra Guide 2026", 
        linea: "BX", 
        nombre: "DranSword Metal Coat Rojo Solo Blade",   
        blade: "DranSword", 
        ratchet: "n/a", 
        bit: "n/a",
        imgBlade: "imagenes/blades/bx-00dranred.png", 
        imgRatchet: "imagenes/na.png", 
        imgBit: "imagenes/na.png" 
    },

        { 
        id: "Rare Bey Get Battle", 
        linea: "BX", 
        nombre: "Leon Claw 5-60P Metal Coat Gold", 
        blade: "LeonClaw", 
        ratchet: "5-60", 
        bit: "P",
        imgBlade: "imagenes/blades/bx-00leon.png", 
        imgRatchet: "imagenes/ratchet/5-60-claw.png", 
        imgBit: "imagenes/bits/P-3.png" 
    },

        { 
        id: "Rare Bey Get Battle", 
        linea: "BX", 
        nombre: "HellsChain 5-60HT Metal Coat Black", 
        blade: "HellsChain", 
        ratchet: "5-60", 
        bit: "HT",
        imgBlade: "imagenes/blades/bx-00chain.png", 
        imgRatchet: "imagenes/ratchet/5-60-1.png", 
        imgBit: "imagenes/bits/HT-2.png" 
    },



    { 
        id: "Asia Championship Commemoration Dran Deck Starter", 
        linea: "BX", 
        nombre: "DranSword 4-80DB", 
        blade: "DranSword", 
        ratchet: "4-80",    
        bit: "DB",
        imgBlade: "imagenes/blades/bx-00dranwhite.png", 
        imgRatchet: "imagenes/ratchet/3-80-tail.png", 
        imgBit: "imagenes/bits/DB-2.png" 
    },

    { 
        id: "Asia Championship Commemoration Dran Deck Starter", 
        linea: "BX", 
        nombre: "DranDagger 9-60LF", 
        blade: "DranDagger", 
        ratchet: "9-60",    
        bit: "LF",
        imgBlade: "imagenes/blades/bx-00daggerwhite.png", 
        imgRatchet: "imagenes/ratchet/9-60-dagger.png", 
        imgBit: "imagenes/bits/LF-5.png" 
    },

     

    { 
        id: "Beyblade Battle Base Retail Store Exclusive", 
        linea: "BX", 
        nombre: "DranDagger 2-80GP Metal Coat Black", 
        blade: "DranDagger", 
        ratchet: "2-80",    
        bit: "GP",
        imgBlade: "imagenes/blades/bx-00dagger.png", 
        imgRatchet: "imagenes/ratchet/2-80-dagger.png", 
        imgBit: "imagenes/bits/GP-3.png" 
    },


    { 
        id: "Random Booster Lighting L-Drago", 
        linea: "BX", 
        nombre: "L-Drago 1-60F (Upper Type)", 
        blade: "L-Drago", 
        ratchet: "1-60",    
        bit: "F",
        imgBlade: "imagenes/blades/bx-00-ldrago.png", 
        imgRatchet: "imagenes/ratchet/1-60-drago.png", 
        imgBit: "imagenes/bits/F.png" 
    },

        { 
        id: "Random Booster Lighting L-Drago", 
        linea: "BX", 
        nombre: "L-Drago 1-60F (Rapid Hit Type)", 
        blade: "L-Drago", 
        ratchet: "1-60",    
        bit: "F",
        imgBlade: "imagenes/blades/bx-00-ldrago2.png", 
        imgRatchet: "imagenes/ratchet/1-60-drago.png", 
        imgBit: "imagenes/bits/F.png" 
    },


    { 
        id: "Coro Coro Comics B4 Beyblade Get", 
        linea: "BX", 
        nombre: "CobaltDragoon 2-60C Metal Coat Black", 
        blade: "CobaltDragoon", 
        ratchet: "2-60",    
        bit: "C",
        imgBlade: "imagenes/blades/bx-00-cobalt.png", 
        imgRatchet: "imagenes/ratchet/2-60-cobalt.png", 
        imgBit: "imagenes/bits/C-2.png" 
    },

    { 
        id: "CoroCoro Comic Mail Order Exclusive", 
        linea: "BX", 
        nombre: "PhoenixWing 9-80DB", 
        blade: "PhoenixWing", 
        ratchet: "9-80",    
        bit: "DB",
        imgBlade: "imagenes/blades/bx-00fenix.png", 
        imgRatchet: "imagenes/ratchet/9-80-fenix.png", 
        imgBit: "imagenes/bits/DB-1.png" 
    },

    { 
        id: "Beyblade X: XONE para Nintendo Switch", 
        linea: "BX", 
        nombre: "ShinobiKnife 4-60LF (Metal Coat Blue)", 
        blade: "ShinobiKnife", 
        ratchet: "4-60",    
        bit: "LF",
        imgBlade: "imagenes/blades/bx-00shinobi.png", 
        imgRatchet: "imagenes/ratchet/4-60-shinobi.png", 
        imgBit: "imagenes/bits/LF-6.png" 
    },

        { 
        id: "CoroCoro Comic Mail Order Exclusive", 
        linea: "BX", 
        nombre: "SamuraiSteel 5-70GF", 
        blade: "SamuraiSteel", 
        ratchet: "5-70",    
        bit: "GF",
        imgBlade: "imagenes/blades/bx-00samurai.png", 
        imgRatchet: "imagenes/ratchet/5-70-bx39.png", 
        imgBit: "imagenes/bits/GF-1.png" 
    },

        { 
        id: "Remake of the Hybrid Wheel System", 
        linea: "BX", 
        nombre: "Rock Leone 6-80GN", 
        blade: "RockLeone", 
        ratchet: "6-80",    
        bit: "GN",
        imgBlade: "imagenes/blades/bx-00rock.png", 
        imgRatchet: "imagenes/ratchet/6-80-rock.png", 
        imgBit: "imagenes/bits/GN-1.png" 
    },

    { 
        id: "Rare Bey Get Battle", 
        linea: "BX", 
        nombre: "CobaltDrake 4-60F", 
        blade: "CobaltDrake", 
        ratchet: "4-60",    
        bit: "F",
        imgBlade: "imagenes/blades/bx-00-drake.png", 
        imgRatchet: "imagenes/ratchet/4-60-drake.png", 
        imgBit: "imagenes/bits/F-7.png" 
    },

{ 
        id: "Rare Bey Get Battle", 
        linea: "BX", 
        nombre: "MammothTusk 2-80E", 
        blade: "MammothTusk", 
        ratchet: "2-80",    
        bit: "E",
        imgBlade: "imagenes/blades/bx-00mamut.png", 
        imgRatchet: "imagenes/ratchet/2-80-mamut.png", 
        imgBit: "imagenes/bits/E-2.png" 
    },

{ 
        id: "CoroCoro Comic Mail Order Exclusive", 
        linea: "BX", 
        nombre: "CrocCrunch 2-60Q", 
        blade: "CrocCrunch", 
        ratchet: "2-60",    
        bit: "Q",
        imgBlade: "imagenes/blades/bx-00-croccrunch.png", 
        imgRatchet: "imagenes/ratchet/2-60-croccrunch.png", 
        imgBit: "imagenes/bits/Q-4.png" 
    },

{ 
        id: "Tatsuya Kitani Version", 
        linea: "BX", 
        nombre: "PhoenixWing 9-60 GF Metal Coat Black", 
        blade: "PhoenixWing", 
        ratchet: "9-60",    
        bit: "GF",
        imgBlade: "imagenes/blades/bx-00fenixblack.png", 
        imgRatchet: "imagenes/ratchet/9-60-fenix.png", 
        imgBit: "imagenes/bits/GF-4.png" 
    },

{ 
        id: "J-League Colaboration", 
        linea: "BX", 
        nombre: "DranSword 1-60V (Metal Coat Black)", 
        blade: "DranSword", 
        ratchet: "1-60",    
        bit: "V",
        imgBlade: "imagenes/blades/bx-00dranblack.png", 
        imgRatchet: "imagenes/ratchet/1-60dranblack.png", 
        imgBit: "imagenes/bits/V-2.png" 
    },


    { 
        id: "J-League Colaboration", 
        linea: "BX", 
        nombre: "CobaltDragoon 9-60F (Metal Coat White)", 
        blade: "CobaltDragoon", 
        ratchet: "9-60",    
        bit: "F",
        imgBlade: "imagenes/blades/bx-00cobalt.png", 
        imgRatchet: "imagenes/ratchet/9-60cobalt.png", 
        imgBit: "imagenes/bits/F-8.png" 
    },

    //HASBRO

 { 
        id: "Hasbro - Beyblade X Booster Pack", 
        linea: "BX", 
        nombre: "TalonPtera 3-80B", 
        blade: "TalonPtera", 
        ratchet: "3-80",    
        bit: "B",
        imgBlade: "imagenes/blades/ptera.png", 
        imgRatchet: "imagenes/ratchet/3-80-talon.png", 
        imgBit: "imagenes/bits/B-5.png" 
    },

     { 
        id: "Hasbro Set Xtreme Battle", 
        linea: "BX", 
        nombre: "TuskMammoth 3-60T", 
        blade: "TuskMammoth", 
        ratchet: "3-60",    
        bit: "T",
        imgBlade: "imagenes/blades/mammoth.png", 
        imgRatchet: "imagenes/ratchet/3-60-tusk.png", 
        imgBit: "imagenes/bits/T-11.png" 
    },

    

 { 
        id: "Hasbro - Beyblade X Booster Pack", 
        linea: "BX", 
        nombre: "SamuraiSteel 4-80T", 
        blade: "SamuraiSteel", 
        ratchet: "4-80",    
        bit: "T",
        imgBlade: "imagenes/blades/steelsamurai.png", 
        imgRatchet: "imagenes/ratchet/4-80-samurai.png", 
        imgBit: "imagenes/bits/T-8.png" 
    },

     { 
        id: "Hasbro - Beyblade X Booster Pack", 
        linea: "BX", 
        nombre: "RoarTyranno 9-60GF", 
        blade: "RoarTyranno", 
        ratchet: "9-60",    
        bit: "GF",
        imgBlade: "imagenes/blades/tyranno.png", 
        imgRatchet: "imagenes/ratchet/9-60-roar.png", 
        imgBit: "imagenes/bits/GF-2.png" 
    },

{ 
        id: "Hasbro - Beyblade X Booster Pack", 
        linea: "BX", 
        nombre: "SavageBear 3-60S", 
        blade: "SavageBear", 
        ratchet: "3-60", 
        bit: "S",
        imgBlade: "imagenes/blades/savage.png", 
        imgRatchet: "imagenes/ratchet/3-80-naranja.png", 
        imgBit: "imagenes/bits/S-1.png" 
    },

    { 
        id: "Hasbro - Beyblade X Booster Pack", 
        linea: "BX", 
        nombre: "WizardArrow 4-60N Verde", 
        blade: "WizardArrow", 
        ratchet: "4-60", 
        bit: "N",
        imgBlade: "imagenes/blades/arrowverde.png", 
        imgRatchet: "imagenes/ratchet/4-60-verde.png", 
        imgBit: "imagenes/bits/N-1.png" 
    },

        { 
        id: "Hasbro - Beyblade X Booster Pack", 
        linea: "BX", 
        nombre: "Yell Kong 3-60GB", 
        blade: "Yell Kong", 
        ratchet: "3-60", 
        bit: "GB",
        imgBlade: "imagenes/blades/yell.png", 
        imgRatchet: "imagenes/ratchet/3-60kong.png", 
        imgBit: "imagenes/bits/GB-6.png" 
    },

        { 
        id: "Hasbro - Beyblade X Booster Pack", 
        linea: "BX", 
        nombre: "GustBat 3-85GP", 
        blade: "GustBat", 
        ratchet: "3-85", 
        bit: "GP",
        imgBlade: "imagenes/blades/gust.png", 
        imgRatchet: "imagenes/ratchet/3-85-gust.png", 
        imgBit: "imagenes/bits/GP-1.png" 
    },

            { 
        id: "Hasbro - Beyblade X Dual Pack", 
        linea: "BX", 
        nombre: "BiteCroc 3-60LF", 
        blade: "BiteCroc", 
        ratchet: "3-60", 
        bit: "F",
        imgBlade: "imagenes/blades/bite.png", 
        imgRatchet: "imagenes/ratchet/3-80-celeste.png", 
        imgBit: "imagenes/bits/LF-8.png" 
    },

            { 
        id: "Hasbro - Beyblade X Dual Pack", 
        linea: "BX", 
        nombre: "StingUnicorn 4-60P", 
        blade: "StingUnicorn", 
        ratchet: "4-60", 
        bit: "P",
        imgBlade: "imagenes/blades/sting.png", 
        imgRatchet: "imagenes/ratchet/4-60-sting.png", 
        imgBit: "imagenes/bits/P-4.png" 
    },

               { 
        id: "Hasbro - Beyblade X Dual Pack", 
        linea: "BX", 
        nombre: "DranSword 3-80B Negro", 
        blade: "DranSword", 
        ratchet: "3-80", 
        bit: "B",
        imgBlade: "imagenes/blades/drannegro.png", 
        imgRatchet: "imagenes/ratchet/3-80-blanca.png", 
        imgBit: "imagenes/bits/B-4.png" 
    },


   { 
        id: "Hasbro - Beyblade X Dual Pack", 
        linea: "BX", 
        nombre: "GillShark 4-70O", 
        blade: "GillShark", 
        ratchet: "4-70", 
        bit: "O",
        imgBlade: "imagenes/blades/gill.png", 
        imgRatchet: "imagenes/ratchet/4-70-gill.png", 
        imgBit: "imagenes/bits/O-5.png" 
    },

       { 
        id: "Hasbro - Beyblade X Dual Pack", 
        linea: "BX", 
        nombre: "TackleGoat 2-70N", 
        blade: "TackleGoat", 
        ratchet: "2-70", 
        bit: "N",
        imgBlade: "imagenes/blades/goat.png", 
        imgRatchet: "imagenes/ratchet/2-70-goat.png", 
        imgBit: "imagenes/bits/N-6.png" 
    },


       { 
        id: "Beyblade Battle Base (B4)", 
        linea: "BX", 
        nombre: "SharkEdge 5-60GF Metal Coat Blue", 
        blade: "SharkEdge", 
        ratchet: "5-60", 
        bit: "GF",
        imgBlade: "imagenes/blades/sharkblue.png", 
        imgRatchet: "imagenes/ratchet/5-60-shark.png", 
        imgBit: "imagenes/bits/GF-5.png" 
    },

           { 
        id: "Beyblade Battle Exclusive CoroCoro Comic", 
        linea: "BX", 
        nombre: "SharkEdge 2-60GP Metal Coat Black", 
        blade: "SharkEdge", 
        ratchet: "2-60", 
        bit: "GP",
        imgBlade: "imagenes/blades/sharkblack.png", 
        imgRatchet: "imagenes/ratchet/2-60-shark.png", 
        imgBit: "imagenes/bits/GP-5.png" 
    },

    { 
        id: "BX48 Random Booster Vol. 9 01", 
        linea: "BX", 
        nombre: "CobaltDragoon 9-80F (Metal Coat: Black Minor Change Version)", 
        blade: "CobaltDragoon", 
        ratchet: "9-80", 
        bit: "F",
        imgBlade: "imagenes/blades/bx-48-cobaltdragoon.png", 
        imgRatchet: "imagenes/ratchet/9-80-bx48.png", 
        imgBit: "imagenes/bits/F-12.png" 
    },


        { 
        id: "BX48 Random Booster Vol. 9 02", 
        linea: "BX", 
        nombre: "MammothTusk 7-60S (Metal Coat: Black Minor Change Version)", 
        blade: "MammothTusk", 
        ratchet: "7-60", 
        bit: "S",
        imgBlade: "imagenes/blades/bx-48-mammothtusk.png", 
        imgRatchet: "imagenes/ratchet/7-60-bx48.png", 
        imgBit: "imagenes/bits/S-4.png" 
    },
        { 
        id: "BX48 Random Booster Vol. 9 03", 
        linea: "BX", 
        nombre: "SharkEdge 4-70E (Metal Coat: Blue Minor Change Version)", 
        blade: "SharkEdge", 
        ratchet: "4-70", 
        bit: "E",
        imgBlade: "imagenes/blades/bx-48-sharkblue.png", 
        imgRatchet: "imagenes/ratchet/4-70-bx48.png", 
        imgBit: "imagenes/bits/E-5.png" 
    },
        { 
        id: "BX48 Random Booster Vol. 9 04", 
        linea: "BX", 
        nombre: "HellsScythe 3-85GB (Metal Coat: Gold Minor Change Version)", 
        blade: "HellsScythe", 
        ratchet: "3-85", 
        bit: "GB",
        imgBlade: "imagenes/blades/bx-48-hellsscythe.png", 
        imgRatchet: "imagenes/ratchet/3-85-bx48.png", 
        imgBit: "imagenes/bits/GB-8.png" 
    },

            { 
        id: "BX48 Random Booster Vol. 9 05", 
        linea: "BX", 
        nombre: "DranBuster 2-80Q (Metal Coat: Red Minor Change Version)", 
        blade: "DranBuster", 
        ratchet: "2-80", 
        bit: "Q",
        imgBlade: "imagenes/blades/bx-48-dranbuster.png", 
        imgRatchet: "imagenes/ratchet/2-80-bx48.png", 
        imgBit: "imagenes/bits/Q-5.png" 
    },

            { 
        id: "BX-00 Starter Set Remake", 
        linea: "BX", 
        nombre: "Storm Spriggan 2-70M", 
        blade: "StormSpriggan", 
        ratchet: "2-70", 
        bit: "M",
        imgBlade: "imagenes/blades/bx-00-stormspriggan.png", 
        imgRatchet: "imagenes/ratchet/2-70-bx00.png", 
        imgBit: "imagenes/bits/M-2.png" 
    },

    { 
        id: "CX-17 05", 
        linea: "BX", 
        nombre: "TyrannoBeat 3-60N", 
        blade: "TyrannoBeat", 
        ratchet: "3-60", 
        bit: "N",
        imgBlade: "imagenes/blades/CX/cx17-05.png", 
        imgRatchet: "imagenes/ratchet/3-60-cx17-05.png", 
        imgBit: "imagenes/bits/N-8.png" 
    },
    { 
        id: "CX-17 06", 
        linea: "BX", 
        nombre: "CrimsonGaruda 7-80GU", 
        blade: "CrimsonGaruda", 
        ratchet: "7-80", 
        bit: "GU",
        imgBlade: "imagenes/blades/CX/cx17-06.png", 
        imgRatchet: "imagenes/ratchet/7-80-cx17-06.png", 
        imgBit: "imagenes/bits/GU-2.png" 
    },
/////////////////////////////////// FIN BX////////////////////////////////////////

    // EASTER EGG

           { 
        id: "Set Dieciocho de Setiembre dijo mi Tata", 
        linea: "BX", 
        nombre: "Trompo Chileno", 
        blade: "Trompo", 
        ratchet: "Cuerda Launcher", 
        bit: "Clavo",
        imgBlade: "imagenes/blades/trompo.png", 
        imgRatchet: "imagenes/ratchet/Cuerda.png", 
        imgBit: "imagenes/bits/clavo.png" 
    },


    ///////////////////////////////////// --- UNIQUE LINE (UX) -////////////////////////--


    { 
        id: "UX-01", 
        linea: "UX", 
        nombre: "DranBuster 1-60A", 
        blade: "DranBuster", 
        ratchet: "1-60", 
        bit: "A",
        imgBlade: "imagenes/blades/UX/ux-01.png", 
        imgRatchet: "imagenes/ratchet/1-60-ux01.png", 
        imgBit: "imagenes/bits/A-1.png" 
    },
    { 
        id: "UX-02", 
        linea: "UX", 
        nombre: "HellsHammer 3-70H", 
        blade: "HellsHammer", 
        ratchet: "3-70", 
        bit: "H",
        imgBlade: "imagenes/blades/UX/ux-02.png", 
        imgRatchet: "imagenes/ratchet/3-70-ux02.png", 
        imgBit: "imagenes/bits/H-2.png" 
    },
    { 
        id: "UX-03", 
        linea: "UX", 
        nombre: "WizardRod 5-70DB", 
        blade: "WizardRod", 
        ratchet: "5-70", 
        bit: "DB",
        imgBlade: "imagenes/blades/UX/ux-03.png", 
        imgRatchet: "imagenes/ratchet/5-70-ux03.png", 
        imgBit: "imagenes/bits/DB-3.png" 
    },

        { 
        id: "BX-35 Random Booster Vol. 4 04", 
        linea: "UX", 
        nombre: "WizardRod 1-60R", 
        blade: "WizardRod", 
        ratchet: "1-60", 
        bit: "R",
        imgBlade: "imagenes/blades/bx-35-04.png", 
        imgRatchet: "imagenes/ratchet/1-60-bx35.png", 
        imgBit: "imagenes/bits/R-2.png" 
    },

  { 
        id: "UX-04 Battle Entry Set U", 
        linea: "UX", 
        nombre: "DranBuster 1-60A", 
        blade: "DranBuster", 
        ratchet: "1-60", 
        bit: "A",
        imgBlade: "imagenes/blades/UX/ux-04-01.png", 
        imgRatchet: "imagenes/ratchet/1-60-ux01.png", 
        imgBit: "imagenes/bits/A-1.png" 
    },


      { 
        id: "UX-04 Battle Entry Set U", 
        linea: "UX", 
        nombre: "WizardRod 5-70DB", 
        blade: "WizardRod", 
        ratchet: "5-70", 
        bit: "DB",
        imgBlade: "imagenes/blades/UX/ux-04-02.png", 
        imgRatchet: "imagenes/ratchet/5-70-ux04-01.png", 
        imgBit: "imagenes/bits/DB-4.png" 
    },



    { 
        id: "UX-05 Random Booster Select 01", 
        linea: "UX", 
        nombre: "ShinobiShadow 1-80MN (Prize)", 
        blade: "ShinobiShadow", 
        ratchet: "1-80", 
        bit: "MN",
        imgBlade: "imagenes/blades/UX/ux-05-01.png", 
        imgRatchet: "imagenes/ratchet/1-80-ux05.png", 
        imgBit: "imagenes/bits/MN-1.png" 
    },
    { 
        id: "UX-05 Random Booster Select 02", 
        linea: "UX", 
        nombre: "ShinobiShadow 9-60LF", 
        blade: "ShinobiShadow", 
        ratchet: "9-60", 
        bit: "LF",
        imgBlade: "imagenes/blades/UX/ux-05-02.png", 
        imgRatchet: "imagenes/ratchet/9-60cobalt.png", 
        imgBit: "imagenes/bits/LF-7.png" 
    },
    { 
        id: "UX-05 Random Booster Select 03", 
        linea: "UX", 
        nombre: "ShinobiShadow 3-70GP", 
        blade: "ShinobiShadow", 
        ratchet: "3-70", 
        bit: "GP",
        imgBlade: "imagenes/blades/UX/ux-05-03.png", 
        imgRatchet: "imagenes/ratchet/3-80-tail.png", 
        imgBit: "imagenes/bits/GP-4.png" 
    },
    { 
        id: "UX-06", 
        linea: "UX", 
        nombre: "LeonCrest 7-60GN", 
        blade: "LeonCrest", 
        ratchet: "7-60", 
        bit: "GN",
        imgBlade: "imagenes/blades/UX/ux-06.png", 
        imgRatchet: "imagenes/ratchet/7-60-ux06.png", 
        imgBit: "imagenes/bits/GN-02.png" 
    },

{ 
        id: "UX-07 PhoenixRudder Deck Set 01", 
        linea: "UX", 
        nombre: "PhoenixRudder 9-70G", 
        blade: "PhoenixRudder", 
        ratchet: "9-70", 
        bit: "G",
        imgBlade: "imagenes/blades/UX/ux-07-01.png", 
        imgRatchet: "imagenes/ratchet/9-70-ux07.png", 
        imgBit: "imagenes/bits/G-1.png" 
    },

    { 
        id: "UX-07 PhoenixRudder Deck Set 02", 
        linea: "UX", 
        nombre: "SphinxCowl 1-80GF", 
        blade: "SphinxCowl", 
        ratchet: "1-80", 
        bit: "GF",
        imgBlade: "imagenes/blades/UX/ux-07-02.png", 
        imgRatchet: "imagenes/ratchet/1-60-ux01.png", 
        imgBit: "imagenes/bits/GF-2.png" 
    },
    { 
        id: "UX-07 PhoenixRudder Deck Set 03", 
        linea: "UX", 
        nombre: "WyvernGale 2-60S", 
        blade: "WyvernGale", 
        ratchet: "2-60", 
        bit: "S",
        imgBlade: "imagenes/blades/UX/ux-07-03.png", 
        imgRatchet: "imagenes/ratchet/2-60-ux07.png", 
        imgBit: "imagenes/bits/S-3.png" 
    },
    { 
        id: "UX-08", 
        linea: "UX", 
        nombre: "SilverWolf 3-80FB", 
        blade: "SilverWolf", 
        ratchet: "3-80", 
        bit: "FB",
        imgBlade: "imagenes/blades/UX/ux-08.png", 
        imgRatchet: "imagenes/ratchet/3-80-ux08.png", 
        imgBit: "imagenes/bits/FB-1.png" 
    },
    { 
        id: "UX-09", 
        linea: "UX", 
        nombre: "SamuraiSaber 2-70L", 
        blade: "SamuraiSaber", 
        ratchet: "2-70", 
        bit: "L",
        imgBlade: "imagenes/blades/UX/ux-09.png", 
        imgRatchet: "imagenes/ratchet/2-70-ux09.png", 
        imgBit: "imagenes/bits/L-1.png" 
    },

{ 
        id: "UX-10 Customize Set", 
        linea: "UX", 
        nombre: "KnightMail 3-85BS", 
        blade: "KnightMail", 
        ratchet: "3-85", 
        bit: "BS",
        imgBlade: "imagenes/blades/UX/ux-10-01.png", 
        imgRatchet: "imagenes/ratchet/3-85-ux10.png", 
        imgBit: "imagenes/bits/BS-2.png" 
    },
    { 
        id: "UX-10 Customize Set", 
        linea: "UX", 
        nombre: "PteraSwing 7-70B", 
        blade: "PteraSwing", 
        ratchet: "7-70", 
        bit: "B",
        imgBlade: "imagenes/blades/UX/ux-10-02.png", 
        imgRatchet: "imagenes/ratchet/7-70-ux10.png", 
        imgBit: "imagenes/bits/B-6.png" 
    },
    { 
        id: "UX-10 Customize Set", 
        linea: "UX", 
        nombre: "HellsHammer (Metal Coat: Blue)", 
        blade: "HellsHammer", 
        ratchet: "n/a", 
        bit: "R",
        imgBlade: "imagenes/blades/UX/ux-10-03.png", 
        imgRatchet: "imagenes/NA.png", 
        imgBit: "imagenes/bits/R-4.png" 
    },
    { 
        id: "UX-10 Customize Set", 
        linea: "UX", 
        nombre: "TyrannoBeat 1-60RA (Metal Coat: Red)", 
        blade: "TyrannoBeat", 
        ratchet: "1-60", 
        bit: "RA",
        imgBlade: "imagenes/blades/UX/ux-10-04.png", 
        imgRatchet: "imagenes/ratchet/1-60-ux10.png", 
        imgBit: "imagenes/bits/RA-1.png" 
    },

              { 
        id: "UX-10 Customize Set", 
        linea: "UX", 
        nombre: "n/a", 
        blade: "n-a", 
        ratchet: "n-a", 
        bit: "P",
        imgBlade: "imagenes/NA.png", 
        imgRatchet: "imagenes/NA.png", 
        imgBit: "imagenes/bits/P-5.png" 
    },


                  { 
        id: "UX-10 Customize Set", 
        linea: "UX", 
        nombre: "n/a", 
        blade: "n-a", 
        ratchet: "n-a", 
        bit: "MN",
        imgBlade: "imagenes/NA.png", 
        imgRatchet: "imagenes/NA.png", 
        imgBit: "imagenes/bits/MN-2.png" 
    },

    { 
        id: "UX-11", 
        linea: "UX", 
        nombre: "Starter ImpactDrake 9-60LR", 
        blade: "ImpactDrake", 
        ratchet: "9-60", 
        bit: "LR",
        imgBlade: "imagenes/blades/UX/ux-11.png", 
        imgRatchet: "imagenes/ratchet/9-60-ux11.png", 
        imgBit: "imagenes/bits/LR-1.png" 
    },
 
 { 
        id: "UX-12 Random Booster Vol. 5 01", 
        linea: "UX", 
        nombre: "GhostCircle 0-80GB", 
        blade: "GhostCircle", 
        ratchet: "0-80", 
        bit: "GB",
        imgBlade: "imagenes/blades/UX/ux-12-01.png", 
        imgRatchet: "imagenes/ratchet/0-80-ux12-01.png", 
        imgBit: "imagenes/bits/GB-5.png" 
    },
    { 
        id: "UX-12 Random Booster Vol. 5 02", 
        linea: "UX", 
        nombre: "GhostCircle 4-60H", 
        blade: "GhostCircle", 
        ratchet: "4-60", 
        bit: "H",
        imgBlade: "imagenes/blades/UX/ux-12-02.png", 
        imgRatchet: "imagenes/ratchet/4-60-ux12-02.png", 
        imgBit: "imagenes/bits/H-3.png" 
    },
    { 
        id: "UX-12 Random Booster Vol. 5 03", 
        linea: "UX", 
        nombre: "ShinobiShadow 3-80F", 
        blade: "ShinobiShadow", 
        ratchet: "3-80", 
        bit: "F",
        imgBlade: "imagenes/blades/UX/ux-12-03.png", 
        imgRatchet: "imagenes/ratchet/3-80-ux12-03.png", 
        imgBit: "imagenes/bits/F-9.png" 
    },
    { 
        id: "UX-12 Random Booster Vol. 5 04", 
        linea: "BX", 
        nombre: "LeonClaw 0-80E", 
        blade: "LeonClaw", 
        ratchet: "0-80", 
        bit: "E",
        imgBlade: "imagenes/blades/UX/ux-12-04.png", 
        imgRatchet: "imagenes/ratchet/0-80-ux12-04.png", 
        imgBit: "imagenes/bits/E-3.png" 
    },
    { 
        id: "UX-12 Random Booster Vol. 5 05", 
        linea: "BX", 
        nombre: "PhoenixFeather 2-60N", 
        blade: "PhoenixFeather", 
        ratchet: "2-60", 
        bit: "N",
        imgBlade: "imagenes/blades/UX/ux-12-05.png", 
        imgRatchet: "imagenes/ratchet/2-60-ux12-05.png", 
        imgBit: "imagenes/bits/N-5.png" 
    },
    { 
        id: "UX-12 Random Booster Vol. 5 06", 
        linea: "BX", 
        nombre: "WyvernGale 0-80C", 
        blade: "WyvernGale", 
        ratchet: "0-80", 
        bit: "C",
        imgBlade: "imagenes/blades/UX/ux-12-06.png", 
        imgRatchet: "imagenes/ratchet/0-80-ux12-06.png", 
        imgBit: "imagenes/bits/C-3.png" 
    },

{ 
        id: "UX-13", 
        linea: "UX", 
        nombre: "GolemRock 1-60UN", 
        blade: "GolemRock", 
        ratchet: "1-60", 
        bit: "UN",
        imgBlade: "imagenes/blades/UX/ux-13.png", 
        imgRatchet: "imagenes/ratchet/1-60-ux13.png", 
        imgBit: "imagenes/bits/UN-1.png" 
    },
    { 
        id: "UX-14", 
        linea: "UX", 
        nombre: "ScorpioSpear 0-70Z", 
        blade: "ScorpioSpear", 
        ratchet: "0-70", 
        bit: "Z",
        imgBlade: "imagenes/blades/UX/ux-14.png", 
        imgRatchet: "imagenes/ratchet/0-70-ux14.png", 
        imgBit: "imagenes/bits/Z-1.png" 
    },

{ 
        id: "UX-15 Shark Scale Deck Set", 
        linea: "UX", 
        nombre: "SharkScale 4-50UF", 
        blade: "SharkScale", 
        ratchet: "4-50", 
        bit: "UF",
        imgBlade: "imagenes/blades/UX/ux-15-01.png", 
        imgRatchet: "imagenes/ratchet/4-50-ux15.png", 
        imgBit: "imagenes/bits/UF-1.png" 
    },
    { 
        id: "UX-15 Shark Scale Deck Set", 
        linea: "BX", 
        nombre: "TyrannoRoar 1-70L", 
        blade: "TyrannoRoar", 
        ratchet: "1-70", 
        bit: "L",
        imgBlade: "imagenes/blades/UX/ux-15-02.png", 
        imgRatchet: "imagenes/ratchet/1-70-ux15-02.png", 
        imgBit: "imagenes/bits/L-2.png" 
    },

{ 
        id: "UX-16 Random Booster Select 01", 
        linea: "UX", 
        nombre: "ClockMirage 9-65B (Prize)", 
        blade: "ClockMiragePrize", 
        ratchet: "9-65", 
        bit: "B",
        imgBlade: "imagenes/blades/UX/ux-16-01.png", 
        imgRatchet: "imagenes/ratchet/9-65-ux16.png", 
        imgBit: "imagenes/bits/B-1.png" 
    },

{ 
        id: "UX-16 Random Booster Select 02", 
        linea: "UX", 
        nombre: "ClockMirage 9-65B", 
        blade: "ClockMiragePrize", 
        ratchet: "9-65", 
        bit: "B",
        imgBlade: "imagenes/blades/UX/ux-16-02.png", 
        imgRatchet: "imagenes/ratchet/9-65-ux16-02.png", 
        imgBit: "imagenes/bits/B-7.png" 
    },
{ 
        id: "UX-16 Random Booster Select 03", 
        linea: "UX", 
        nombre: "ClockMirage 9-65B", 
        blade: "ClockMiragePrize", 
        ratchet: "9-65", 
        bit: "B",
        imgBlade: "imagenes/blades/UX/ux-16-03.png", 
        imgRatchet: "imagenes/ratchet/9-65-ux16-03.png", 
        imgBit: "imagenes/bits/B-4.png" 
    },


   { 
        id: "UX-17", 
        linea: "UX", 
        nombre: "MeteorDragoon 3-70J", 
        blade: "MeteorDragoon", 
        ratchet: "3-70", 
        bit: "J",
        imgBlade: "imagenes/blades/UX/ux-17.png", 
        imgRatchet: "imagenes/ratchet/3-70-ux17.png", 
        imgBit: "imagenes/bits/J-1.png" 
    },

    { 
        id: "UX-18 Random Booster Vol. 8 01", 
        linea: "UX", 
        nombre: "MummyCurse 7-55W (Prize)", 
        blade: "MummyCurse", 
        ratchet: "7-55", 
        bit: "W",
        imgBlade: "imagenes/blades/UX/ux-18-01.png", 
        imgRatchet: "imagenes/ratchet/7-55-ux18-01.png", 
        imgBit: "imagenes/bits/W-1.png" 
    },
    { 
        id: "UX-18 Random Booster Vol. 8 02", 
        linea: "UX", 
        nombre: "MummyCurse 4-60C", 
        blade: "MummyCurse", 
        ratchet: "4-60", 
        bit: "C",
        imgBlade: "imagenes/blades/UX/ux-18-02.png", 
        imgRatchet: "imagenes/ratchet/4-60-verde.png", 
        imgBit: "imagenes/bits/C-4.png" 
    },


    { 
        id: "UX-18 Random Booster Vol. 8 05", 
        linea: "BX", 
        nombre: "DranDagger 7-55G", 
        blade: "DranDagger", 
        ratchet: "7-55", 
        bit: "G",
        imgBlade: "imagenes/blades/UX/ux-18-05.png", 
        imgRatchet: "imagenes/ratchet/7-55-ux18-05.png", 
        imgBit: "imagenes/bits/G-2.png" 
    },
    { 
        id: "UX-18 Random Booster Vol. 8 06", 
        linea: "BX", 
        nombre: "WeissTiger 4-80LR", 
        blade: "WeissTiger", 
        ratchet: "4-80", 
        bit: "LR",
        imgBlade: "imagenes/blades/UX/ux-18-06.png", 
        imgRatchet: "imagenes/ratchet/4-80-ux18-06.png", 
        imgBit: "imagenes/bits/LR-2.png" 
    },
    { 
        id: "UX-19", 
        linea: "UX", 
        nombre: "BulletGriffon H", 
        blade: "Bullet", 
        ratchet: "Griffon", 
        bit: "H",
        imgBlade: "imagenes/blades/UX/ux-19.png", 
        imgRatchet: "imagenes/ratchet/Griffon.png", 
        imgBit: "imagenes/bits/H-3.png" 
    },


  { 
        id: "UX-00 02", 
        linea: "UX", 
        nombre: "WizardRod (Metal Coat: Gold)", 
        blade: "WizardRodGold", 
        ratchet: "5-70", 
        bit: "DB",
        imgBlade: "imagenes/blades/UX/ux-00-02.png", 
        imgRatchet: "imagenes/ratchet/5-70-ux002.png", 
        imgBit: "imagenes/bits/DB-5.png" 
    },
    { 
        id: "UX-00 03", 
        linea: "UX", 
        nombre: "AeroPegasus 3-70A", 
        blade: "AeroPegasus", 
        ratchet: "3-70", 
        bit: "A",
        imgBlade: "imagenes/blades/UX/aeroblue.png", 
        imgRatchet: "imagenes/ratchet/3-70-aero.png", 
        imgBit: "imagenes/bits/A-2.png" 
    },
    { 
        id: "UX-00 Asia Championship Commemoration Dran Deck Starter", 
        linea: "UX", 
        nombre: "DranBuster 3-70N (Metal Coat: White)", 
        blade: "DranBuster", 
        ratchet: "3-70", 
        bit: "N",
        imgBlade: "imagenes/blades/UX/busterwhite.png", 
        imgRatchet: "imagenes/ratchet/3-70-buster.png", 
        imgBit: "imagenes/bits/N-7.png" 
    },

    
    { 
        id: "UX-00 07", 
        linea: "UX", 
        nombre: "KnightMail 3-85BS (Metal Coat: Navy)", 
        blade: "KnightMail", 
        ratchet: "3-85", 
        bit: "BS",
        imgBlade: "imagenes/blades/UX/knightnavy.png", 
        imgRatchet: "imagenes/ratchet/3-85-navy.png", 
        imgBit: "imagenes/bits/BS-3.png" 
    },
    { 
        id: "UX-00 08", 
        linea: "UX", 
        nombre: "OrochiCluster 6-60LF", 
        blade: "OrochiCluster", 
        ratchet: "6-60", 
        bit: "LF",
        imgBlade: "imagenes/blades/UX/orochi.png", 
        imgRatchet: "imagenes/ratchet/6-60-2.png", 
        imgBit: "imagenes/bits/LF-9.png" 
    },
    { 
        id: "UX-00 09", 
        linea: "UX", 
        nombre: "AeroPegasus 3-70A (Red Version)", 
        blade: "AeroPegasus", 
        ratchet: "3-70", 
        bit: "A",
        imgBlade: "imagenes/blades/UX/aerored.png", 
        imgRatchet: "imagenes/ratchet/3-70-aerored.png", 
        imgBit: "imagenes/bits/A-3.png" 
    },
    { 
        id: "UX-00 10", 
        linea: "UX", 
        nombre: "ScorpioSpear 0-70Z (Metal Coat: Magenta)", 
        blade: "ScorpioSpear", 
        ratchet: "0-70", 
        bit: "Z",
        imgBlade: "imagenes/blades/UX/scorpiopink.png", 
        imgRatchet: "imagenes/ratchet/0-70-scorpio.png", 
        imgBit: "imagenes/bits/Z-2.png" 
    },

    { 
        id: "UX-00 Japan National Football Team Version", 
        linea: "UX", 
        nombre: "SamuraiSaber 5-60K Metal Coat Samurai Blue", 
        blade: "SamuraiSaber", 
        ratchet: "5-60", 
        bit: "K",
        imgBlade: "imagenes/blades/UX/samurai.png", 
        imgRatchet: "imagenes/ratchet/5-60-samurai.png", 
        imgBit: "imagenes/bits/K-1.png" 
    },


        { 
        id: "UX-00 Color Choice Booster Beyblade Park", 
        linea: "UX", 
        nombre: "DranBuster 1-60A Metal Coat Cyan", 
        blade: "DranBuster", 
        ratchet: "1-60", 
        bit: "A",
        imgBlade: "imagenes/blades/UX/bustercyan.png", 
        imgRatchet: "imagenes/ratchet/1-60-bustercyan.png", 
        imgBit: "imagenes/bits/A-6.png" 
    },


        { 
        id: "UX-00 Color Choice Booster Beyblade Park", 
        linea: "UX", 
        nombre: "DranBuster 1-60A Metal Coat Black", 
        blade: "DranBuster", 
        ratchet: "1-60", 
        bit: "A",
        imgBlade: "imagenes/blades/UX/busterblack.png", 
        imgRatchet: "imagenes/ratchet/1-60-busterblack.png", 
        imgBit: "imagenes/bits/A-7.png" 
    },

        { 
        id: "UX-00 Color Choice Booster Beyblade Park", 
        linea: "UX", 
        nombre: "DranBuster 1-60A Metal Coat Violet", 
        blade: "DranBuster", 
        ratchet: "1-60", 
        bit: "A",
        imgBlade: "imagenes/blades/UX/busterviolet.png", 
        imgRatchet: "imagenes/ratchet/1-60-busterviolet.png", 
        imgBit: "imagenes/bits/A-8.png" 
    },

    //BARCELONA COLABORACION//

        { 
        id: "UX-00 Colaboracion Barcelona", 
        linea: "UX", 
        nombre: "DranBuster 1-60A Metal Coat Barcelona", 
        blade: "DranBuster", 
        ratchet: "1-60", 
        bit: "A",
        imgBlade: "imagenes/blades/UX/busterbarcelona.png", 
        imgRatchet: "imagenes/ratchet/1-60-busterbarcelona.png", 
        imgBit: "imagenes/bits/A-9.png" 
    },

            { 
        id: "UX-00 Colaboracion Barcelona", 
        linea: "UX", 
        nombre: "HellsHammer 3-70H Metal Coat Barcelona", 
        blade: "HellsHammer", 
        ratchet: "3-70", 
        bit: "H",
        imgBlade: "imagenes/blades/UX/hammerbarcelona.png", 
        imgRatchet: "imagenes/ratchet/3-70-hammerbarcelona.png", 
        imgBit: "imagenes/bits/H-4.png" 
    },

                { 
        id: "UX-00 Coro Coro Comics B4 Beyblade Get", 
        linea: "UX", 
        nombre: "Samurai Saber 2-70L Metallic Coat: Orange", 
        blade: "SamuraiSaber", 
        ratchet: "2-70", 
        bit: "L",
        imgBlade: "imagenes/blades/UX/samuraisaberorange.png", 
        imgRatchet: "imagenes/ratchet/2-70-samuraisaberorange.png", 
        imgBit: "imagenes/bits/L-4.png" 
    },


// ==========================================
   // HASBRO UX

        { 
        id: "Hasbro Beyblade X Basic/Unique Line Starter Packs", 
        linea: "UX", 
        nombre: "DranBuster 5-70DB", 
        blade: "DranBuster", 
        ratchet: "5-70", 
        bit: "DB",
        imgBlade: "imagenes/blades/UX/buster.png", 
        imgRatchet: "imagenes/ratchet/5-70-ux03.png", 
        imgBit: "imagenes/bits/DB-3.png" 
    },

 { 
        id: "Hasbro Beyblade X Basic/Unique Line Starter Packs", 
        linea: "UX", 
        nombre: "Stun Medusa 9-60GB", 
        blade: "StunMedusa", 
        ratchet: "9-60", 
        bit: "GB",
        imgBlade: "imagenes/blades/UX/stun.png", 
        imgRatchet: "imagenes/ratchet/9-60-stun.png", 
        imgBit: "imagenes/bits/GB-7.png" 
    },
    { 
        id: "Hasbro Beyblade X Infinity Starter Packs", 
        linea: "UX", 
        nombre: "Valor Bison 5-60FB", 
        blade: "ValorBison", 
        ratchet: "5-60", 
        bit: "FB",
        imgBlade: "imagenes/blades/UX/valor.png", 
        imgRatchet: "imagenes/NA.png", 
        imgBit: "imagenes/bits/FB-2.png" 
    },
    { 
        id: "Hasbro Beyblade X Infinity Starter Packs", 
        linea: "UX", 
        nombre: "Shatter Horus 9-65GB", 
        blade: "ShatterHorus", 
        ratchet: "9-65", 
        bit: "GB",
        imgBlade: "imagenes/blades/UX/horus.png", 
        imgRatchet: "imagenes/ratchet/9-65-crab.png", 
        imgBit: "imagenes/bits/GB-1.png" 
    },
    
       { 
        id: "Hasbro - Beyblade X Dual Pack", 
        linea: "UX", 
        nombre: "HackViking 4-55O", 
        blade: "HackViking", 
        ratchet: "4-55", 
        bit: "O",
        imgBlade: "imagenes/blades/viking.png", 
        imgRatchet: "imagenes/ratchet/4-55-viking.png", 
        imgBit: "imagenes/bits/O-3.png" 
    },


           { 
        id: "Hasbro - Beyblade X Dual Pack", 
        linea: "UX", 
        nombre: "Ghost Circle 4-60LR (Ya registrado)", 
        blade: "n-a", 
        ratchet: "n-a", 
        bit: "LR",
        imgBlade: "imagenes/NA.png", 
        imgRatchet: "imagenes/NA.png", 
        imgBit: "imagenes/bits/LR-3.png" 
    },

       { 
        id: "Hasbro - Beyblade X Dual Pack", 
        linea: "UX", 
        nombre: "ClampCrab 9-65S", 
        blade: "ClampCrab", 
        ratchet: "9-65", 
        bit: "S",
        imgBlade: "imagenes/blades/crab.png", 
        imgRatchet: "imagenes/ratchet/9-65-crab.png", 
        imgBit: "imagenes/bits/S-3.png" 
    },

       { 
        id: "Hasbro - Drop Attack Stadium", 
        linea: "UX", 
        nombre: "Hover Wyvern 3-85N", 
        blade: "HoverWyvern", 
        ratchet: "3-85", 
        bit: "N",
        imgBlade: "imagenes/blades/UX/wyvern.png", 
        imgRatchet: "imagenes/ratchet/3-85-ux10.png", 
        imgBit: "imagenes/bits/N-9.png" 
    },

////////////////////////ULTIMOS UX////////////////////////////////////7


           { 
        id: "UX-00 DMM Kuji Premio A", 
        linea: "UX", 
        nombre: "Hover Wyvern 2-80GN", 
        blade: "HoverWyvern", 
        ratchet: "2-80", 
        bit: "GN",
        imgBlade: "imagenes/blades/UX/wyvern-a.png", 
        imgRatchet: "imagenes/ratchet/2-80-ux00.png", 
        imgBit: "imagenes/bits/GN-2.png" 
    },

       { 
        id: "UX-00 DMM Kuji Last Chance", 
        linea: "UX", 
        nombre: "Hover Wyvern 2-80GN Metal Coat Violet", 
        blade: "HoverWyvern", 
        ratchet: "2-80", 
        bit: "GN",
        imgBlade: "imagenes/blades/UX/wyvern-last.png", 
        imgRatchet: "imagenes/ratchet/2-80-ux00-1.png", 
        imgBit: "imagenes/bits/GN-3.png" 
    },


   { 
        id: "UX-00 Fishing Spirits Wonder Colaboration", 
        linea: "UX", 
        nombre: "WhaleWave 1-80GF Metal Coat Blue", 
        blade: "WhaleWave", 
        ratchet: "1-80", 
        bit: "GF",
        imgBlade: "imagenes/blades/UX/whalewaveblue.png", 
        imgRatchet: "imagenes/ratchet/1-80-ux00-1.png", 
        imgBit: "imagenes/bits/GF-6.png" 
    },


    { 
        id: "UX-00 01", 
        linea: "UX", 
        nombre: "Glory Valkerion 3-60LF", 
        blade: "GloryValkerion", 
        ratchet: "n-a", 
        bit: "LF",
        imgBlade: "imagenes/blades/glory.png", 
        imgRatchet: "imagenes/NA.png", 
        imgBit: "imagenes/bits/LF-10.png" 
    },

    // ==========================================
    // RANDOM BOOSTER VOL. 11 (LINEA BX)
    // ==========================================
    { 
        id: "BX-50 Random Booster Vol. 11 01", 
        linea: "BX", 
        nombre: "HeavensRing 0-80DS", 
        blade: "HeavensRing", 
        ratchet: "0-80", 
        bit: "DS",
        imgBlade: "imagenes/blades/bx-50-01.png", 
        imgRatchet: "imagenes/ratchet/0-80-bx50.png", 
        imgBit: "imagenes/bits/DS-1.png" 
    },
    { 
        id: "BX-50 Random Booster Vol. 11 02", 
        linea: "BX", 
        nombre: "HeavensRing 6-60TP", 
        blade: "HeavensRing 02", 
        ratchet: "6-60", 
        bit: "TP",
        imgBlade: "imagenes/blades/bx-50-02.png", 
        imgRatchet: "imagenes/ratchet/6-60-bx50.png", 
        imgBit: "imagenes/bits/TP-3.png" 
    },
    { 
        id: "BX-50 Random Booster Vol. 11 03", 
        linea: "UX", 
        nombre: "ImpactDrake 7-55FB", 
        blade: "ImpactDrakeVariante", 
        ratchet: "7-55", 
        bit: "FB",
        imgBlade: "imagenes/blades/bx-50-03.png", 
        imgRatchet: "imagenes/ratchet/7-55-bx50.png", 
        imgBit: "imagenes/bits/FB-3.png" 
    },
    { 
        id: "BX-50 Random Booster Vol. 11 04", 
        linea: "UX", 
        nombre: "GhostCircle M-85DS", 
        blade: "GhostCircleVariante", 
        ratchet: "M-85", 
        bit: "DS",
        imgBlade: "imagenes/blades/bx-50-04.png", 
        imgRatchet: "imagenes/ratchet/M-85-bx50.png", 
        imgBit: "imagenes/bits/DS-2.png" 
    },

       { 
        id: "CX-17 03", 
        linea: "UX", 
        nombre: "SamuraiSaber 9-65LO", 
        blade: "SamuraiSaber", 
        ratchet: "9-65", 
        bit: "LO",
        imgBlade: "imagenes/blades/CX/cx17-03.png", 
        imgRatchet: "imagenes/ratchet/9-65-cx17-03.png", 
        imgBit: "imagenes/bits/LO-3.png" 
    },
    { 
        id: "CX-17 04", 
        linea: "UX", 
        nombre: "HellsHammer 3-85GU", 
        blade: "HellsHammer", 
        ratchet: "3-85", 
        bit: "GU",
        imgBlade: "imagenes/blades/CX/cx17-04.png", 
        imgRatchet: "imagenes/ratchet/3-85-cx17-04.png", 
        imgBit: "imagenes/bits/GU-1.png" 
    },

     
   
    
 
    ///////////////////////////////////FIN UX/////////////////////////////////////

    //==========================================
    // LINEA CUSTOM LINE (CX)
    // ==========================================
    { 
        id: "CX-01", 
        linea: "CX", 
        nombre: "DranBrave S 6-60V", 
        blade: "DranBrave", 
        assistBlade: "S", 
        ratchet: "6-60", 
        bit: "V",
        imgBlade: "imagenes/blades/cx1.png", 
        imgAssist: "imagenes/assist/S-1.png", 
        imgRatchet: "imagenes/ratchet/6-60-1.png", 
        imgBit: "imagenes/bits/V-1.png" 
    },


{ 
        id: "CX-02", 
        linea: "CX", 
        nombre: "WizardArc R 4-55LO", 
        blade: "WizardArc", 
        assistBlade: "R", 
        ratchet: "4-55", 
        bit: "LO",
        imgBlade: "imagenes/blades/CX/cx02.png", 
        imgAssist: "imagenes/assist/R.png", 
        imgRatchet: "imagenes/ratchet/4-55-cx02.png", 
        imgBit: "imagenes/bits/LO-1.png" 
    },


    { 
        id: "CX-03", 
        linea: "CX", 
        nombre: "PerseusDark B 6-80W", 
        blade: "PerseusDark", 
        assistBlade: "B", 
        ratchet: "6-80", 
        bit: "W",
        imgBlade: "imagenes/blades/CX/cx03.png", 
        imgAssist: "imagenes/assist/B-2.png", 
        imgRatchet: "imagenes/ratchet/6-80-cx03.png", 
        imgBit: "imagenes/bits/W-3.png" 
    },
    { 
        id: "CX-04 01", 
        linea: "CX", 
        nombre: "DranBrave S 6-60V (Special Ver.)", 
        blade: "DranBrave", 
        assistBlade: "S", 
        ratchet: "6-60", 
        bit: "V",
        imgBlade: "imagenes/blades/CX/cx04-01.png", 
        imgAssist: "imagenes/assist/S-2.png", 
        imgRatchet: "imagenes/ratchet/6-60-cx04-01.png", 
        imgBit: "imagenes/bits/V-3.png" 
    },
    { 
        id: "CX-04 02", 
        linea: "CX", 
        nombre: "PerseusDark B 6-80W (Special Ver.)", 
        blade: "PerseusDarkSpecial", 
        assistBlade: "B", 
        ratchet: "6-80", 
        bit: "W",
        imgBlade: "imagenes/blades/CX/cx04-02.png", 
        imgAssist: "imagenes/assist/B-3.png", 
        imgRatchet: "imagenes/ratchet/6-80-cx04.png", 
        imgBit: "imagenes/bits/W-4.png" 
    },

            { 
        id: "UX-15 Shark Scale Deck Set", 
        linea: "CX", 
        nombre: "HellsBrave 3-60GF", 
        blade: "HellsBrave", 
        assistBlade: "J", 
        ratchet: "3-60", 
        bit: "GF",
        imgBlade: "imagenes/blades/UX/ux-15-03.png",
        imgAssist: "imagenes/assist/J-2.png", 
        imgRatchet: "imagenes/ratchet/3-60-ux15-03.png", 
        imgBit: "imagenes/bits/GF-3.png" 
    },
   
    { 
        id: "UX-18 Random Booster Vol. 8 03", 
        linea: "CX", 
        nombre: "PegasusBrush M3-85W", 
        blade: "PegasusBrushVariante", 
        assistBlade: "M", 
        ratchet: "6-60", 
        bit: "V",
        imgBlade: "imagenes/blades/UX/ux-18-03.png", 
        imgAssist: "imagenes/assist/M-1.png",
        imgRatchet: "imagenes/ratchet/3-85-ux18-03.png", 
        imgBit: "imagenes/bits/W-2.png" 
    },
    { 
        id: "UX-18 Random Booster Vol. 8 04", 
        linea: "CX", 
        nombre: "SolBrave C9-70TP", 
        blade: "SolBrave", 
        assistBlade: "C", 
        ratchet: "6-60", 
        bit: "V",
        imgBlade: "imagenes/blades/UX/ux-18-04.png", 
        imgAssist: "imagenes/assist/C-1.png",
        imgRatchet: "imagenes/ratchet/C9-70-ux18-04.png", 
        imgBit: "imagenes/bits/TP-2.png" 
    },


    { 
        id: "CX-05 Random Booster Vol. 6 01", 
        linea: "CX", 
        nombre: "HellsReaper T 4-70K (Prize)", 
        blade: "HellsReaper", 
        assistBlade: "T", 
        ratchet: "4-70", 
        bit: "K",
        imgBlade: "imagenes/blades/CX/cx05-01.png", 
        imgAssist: "imagenes/assist/T-1.png", 
        imgRatchet: "imagenes/ratchet/4-70-cx05-01.png", 
        imgBit: "imagenes/bits/K-2.png" 
    },
    { 
        id: "CX-05 Random Booster Vol. 6 02", 
        linea: "CX", 
        nombre: "RhinoReaper C 4-55D (Prize)", 
        blade: "RhinoReaper", 
        assistBlade: "C", 
        ratchet: "4-55", 
        bit: "D",
        imgBlade: "imagenes/blades/CX/cx05-02.png", 
        imgAssist: "imagenes/assist/C-2.png", 
        imgRatchet: "imagenes/ratchet/4-55-cx05.png", 
        imgBit: "imagenes/bits/D-6.png" 
    },
    { 
        id: "CX-05 Random Booster Vol. 6 03", 
        linea: "CX", 
        nombre: "HellsArc T 3-85O", 
        blade: "HellsArc",
        assistBlade: "T",  
        ratchet: "3-85", 
        bit: "O",
        imgBlade: "imagenes/blades/CX/cx05-03.png", 
        imgAssist: "imagenes/assist/T-2.png", 
        imgRatchet: "imagenes/ratchet/3-85-cx05-03.png", 
        imgBit: "imagenes/bits/O-6.png" 
    },
    { 
        id: "CX-05 Random Booster Vol. 6 04", 
        linea: "UX", 
        nombre: "LeonCrest 9-80K", 
        blade: "LeonCrest", 
        ratchet: "9-80", 
        bit: "K",
        imgBlade: "imagenes/blades/CX/cx05-04.png", 
        imgRatchet: "imagenes/ratchet/9-80-cx05.png", 
        imgBit: "imagenes/bits/K-3.png" 
    },
    { 
        id: "CX-05 Random Booster Vol. 6 05", 
        linea: "BX", 
        nombre: "PhoenixRudder 4-70LF", 
        blade: "PhoenixRudder", 
        assistBlade: "None", 
        ratchet: "4-70", 
        bit: "LF",
        imgBlade: "imagenes/blades/CX/cx05-05.png", 
        imgAssist: "imagenes/assist/None.png", 
        imgRatchet: "imagenes/ratchet/4-70-cx05-05.png", 
        imgBit: "imagenes/bits/LF-11.png" 
    },

{ 
        id: "CX-05 Random Booster Vol. 6 06", 
        linea: "BX", 
        nombre: "WhaleWave 7-60K", 
        blade: "WhaleWave", 
        ratchet: "7-60", 
        bit: "K",
        imgBlade: "imagenes/blades/CX/cx05-06.png", 
        imgRatchet: "imagenes/ratchet/7-60-cx05-06.png", 
        imgBit: "imagenes/bits/K-4.png" 
    },
    { 
        id: "CX-06 Random Booster Select 01", 
        linea: "CX", 
        nombre: "FoxBrush J 9-70GR (Prize)", 
        blade: "FoxBrushPrize", 
        assistBlade: "J", 
        ratchet: "9-70", 
        bit: "GR",
        imgBlade: "imagenes/blades/CX/cx06-01.png", 
        imgAssist: "imagenes/assist/J-1.png", 
        imgRatchet: "imagenes/ratchet/9-70-cx06-01.png", 
        imgBit: "imagenes/bits/GR-1.png" 
    },

        { 
        id: "CX-06 Random Booster Select 02", 
        linea: "CX", 
        nombre: "FoxBrush J 2-60U", 
        blade: "FoxBrush", 
        assistBlade: "J", 
        ratchet: "2-60", 
        bit: "U",
        imgBlade: "imagenes/blades/CX/cx06-02.png", 
        imgAssist: "imagenes/assist/J-3.png", 
        imgRatchet: "imagenes/ratchet/2-60-cx06-02.png", 
        imgBit: "imagenes/bits/U-2.png" 
    },

    { 
        id: "CX-06 Random Booster Select 03", 
        linea: "CX", 
        nombre: "FoxBrush J 0-80DB", 
        blade: "FoxBrush", 
        assistBlade: "J", 
        ratchet: "0-80", 
        bit: "DB",
        imgBlade: "imagenes/blades/CX/cx06-03.png", 
        imgAssist: "imagenes/assist/J-4.png", 
        imgRatchet: "imagenes/ratchet/0-80-cx06-03.png", 
        imgBit: "imagenes/bits/DB-7.png" 
    },

{ 
        id: "CX-07", 
        linea: "CX", 
        nombre: "PegasusBlast Turbo", 
        blade: "PegasusBlast", 
        assistBlade: "A", 
        ratchet: "n-a", 
        bit: "Tr",
        imgBlade: "imagenes/blades/CX/cx07.png", 
        imgAssist: "imagenes/assist/A-1.png", 
        imgRatchet: "imagenes/NA.png", 
        imgBit: "imagenes/bits/Tr-1.png" 
    },

{ 
        id: "CX-00 Special Edition", 
        linea: "CX", 
        nombre: "PegasusBlast Turbo Metal Coat Rojo", 
        blade: "PegasusBlast", 
        assistBlade: "A", 
        ratchet: "n-a", 
        bit: "Tr",
        imgBlade: "imagenes/blades/CX/cxpeg.png", 
        imgAssist: "imagenes/assist/A-2.png", 
        imgRatchet: "imagenes/NA.png", 
        imgBit: "imagenes/bits/Tr-2.png" 
    },

    { 
        id: "CX-08 Random Booster Vol. 7 01", 
        linea: "CX", 
        nombre: "CerberusFlame W 5-80WB (Prize)", 
        blade: "CerberusFlame", 
        assistBlade: "W", 
        ratchet: "5-80", 
        bit: "WB",
        imgBlade: "imagenes/blades/CX/cx08-01.png", 
        imgAssist: "imagenes/assist/W-1.png", 
        imgRatchet: "imagenes/ratchet/5-80-cx08-01.png", 
        imgBit: "imagenes/bits/WB-4.png" 
    },
    { 
        id: "CX-08 Random Booster Vol. 7 02", 
        linea: "CX", 
        nombre: "WhaleFlame M 3-85HT (Prize)", 
        blade: "WhaleFlamePrize", 
        assistBlade: "M", 
        ratchet: "3-85", 
        bit: "HT",
        imgBlade: "imagenes/blades/CX/cx08-02.png", 
        imgAssist: "imagenes/assist/M-2.png", 
        imgRatchet: "imagenes/ratchet/3-85-cx08-02.png", 
        imgBit: "imagenes/bits/HT-3.png" 
    },
    { 
        id: "CX-08 Random Booster Vol. 7 03", 
        linea: "CX", 
        nombre: "CerberusDark W 1-60F", 
        blade: "CerberusDark", 
        assistBlade: "W", 
        ratchet: "1-60", 
        bit: "F",
        imgBlade: "imagenes/blades/CX/cx08-03.png", 
        imgAssist: "imagenes/assist/W-2.png", 
        imgRatchet: "imagenes/ratchet/1-60-cx08-03.png", 
        imgBit: "imagenes/bits/F-11.png" 
    },
    { 
        id: "CX-08 Random Booster Vol. 7 04", 
        linea: "UX", 
        nombre: "DranBuster 5-80MN", 
        blade: "DranBuster", 
        ratchet: "5-80", 
        bit: "MN",
        imgBlade: "imagenes/blades/CX/cx08-04.png", 
        imgRatchet: "imagenes/ratchet/5-80-cx08-04.png", 
        imgBit: "imagenes/bits/MN-3.png" 
    },
    { 
        id: "CX-08 Random Booster Vol. 7 05", 
        linea: "BX", 
        nombre: "BlackShell 7-70WB", 
        blade: "BlackShell", 
        ratchet: "7-70", 
        bit: "WB",
        imgBlade: "imagenes/blades/CX/cx08-05.png", 
        imgRatchet: "imagenes/ratchet/7-70-cx08-05.png", 
        imgBit: "imagenes/bits/WB-3.png" 
    },
    { 
        id: "CX-08 Random Booster Vol. 7 06", 
        linea: "BX", 
        nombre: "CobaltDragoon 4-55WB", 
        blade: "CobaltDragoon", 
        ratchet: "4-55", 
        bit: "WB",
        imgBlade: "imagenes/blades/CX/cx08-06.png", 
        imgRatchet: "imagenes/ratchet/4-55-cx08-06.png", 
        imgBit: "imagenes/bits/WB-2.png" 
    },
    { 
        id: "CX-09", 
        linea: "CX", 
        nombre: "Starter SolEclipse D 5-70TK", 
        blade: "SolEclipse", 
        assistBlade: "D", 
        ratchet: "5-70", 
        bit: "TK",
        imgBlade: "imagenes/blades/CX/cx09.png", 
        imgAssist: "imagenes/assist/D-2.png", 
        imgRatchet: "imagenes/ratchet/5-70-cx09.png", 
        imgBit: "imagenes/bits/TK-1.png" 
    },
    { 
        id: "CX-10", 
        linea: "CX", 
        nombre: "WolfHunt F 0-60DB", 
        blade: "WolfHunt", 
        assistBlade: "F", 
        ratchet: "0-60", 
        bit: "DB",
        imgBlade: "imagenes/blades/CX/cx10.png", 
        imgAssist: "imagenes/assist/F-1.png", 
        imgRatchet: "imagenes/ratchet/0-60-cx10.png", 
        imgBit: "imagenes/bits/DB-8.png" 
    },
    { 
        id: "CX-11 Emperor Might Set", 
        linea: "CX", 
        nombre: "EmperorMight HOp (Metal Coat: Black)", 
        blade: "EmperorMight", 
        assistBlade: "H", 
        ratchet: "n-a", 
        bit: "Op",
        imgBlade: "imagenes/blades/CX/cx11-01.png", 
        imgAssist: "imagenes/assist/H-1.png", 
        imgRatchet: "imagenes/NA.png", 
        imgBit: "imagenes/bits/Op-1.png" 
    },
    { 
        id: "CX-11 Emperor Might Set", 
        linea: "UX", 
        nombre: "GolemRock M-85HN (Metal Coat: Green)", 
        blade: "GolemRockGreen", 
        ratchet: "M-85", 
        bit: "HN",
        imgBlade: "imagenes/blades/CX/cx11-02.png",   
        imgRatchet: "imagenes/ratchet/M-85-cx11-02.png", 
        imgBit: "imagenes/bits/HN-5.png" 
    },
    { 
        id: "CX-11 Emperor Might Set", 
        linea: "BX", 
        nombre: "SharkGill 5-60FB", 
        blade: "SharkGill", 
        ratchet: "5-60", 
        bit: "FB",
        imgBlade: "imagenes/blades/CX/cx11-03.png",         
        imgRatchet: "imagenes/ratchet/5-60-cx11-03.png", 
        imgBit: "imagenes/bits/FB-4.png" 
    },
    { 
        id: "CX-12", 
        linea: "CX", 
        nombre: "PhoenixFlare Z 9-80WW", 
        blade: "PhoenixFlare", 
        assistBlade: "Z", 
        ratchet: "9-80", 
        bit: "WW",
        imgBlade: "imagenes/blades/CX/cx12.png", 
        imgAssist: "imagenes/assist/Z-1.png", 
        imgRatchet: "imagenes/ratchet/9-80-cx12.png", 
        imgBit: "imagenes/bits/WW-1.png" 
    },

    { 
        id: "BX-50 Random Booster Vol. 11 05", 
        linea: "CX", 
        nombre: "WolfFlame D 9-65L", 
        blade: "WolfFlame", 
        assistBlade: "D", 
        ratchet: "9-65", 
        bit: "L",
        imgBlade: "imagenes/blades/bx-50-05.png", 
        imgAssist: "imagenes/assist/D-1.png", 
        imgRatchet: "imagenes/ratchet/9-65-bx50.png", 
        imgBit: "imagenes/bits/L-3.png" 
    },
    { 
        id: "BX-50 Random Booster Vol. 11 06", 
        linea: "CX", 
        nombre: "CerberusReaper B 0-80WB", 
        blade: "CerberusReaper", 
        assistBlade: "B", 
        ratchet: "0-80", 
        bit: "WB",
        imgBlade: "imagenes/blades/bx-50-06.png", 
        imgAssist: "imagenes/assist/B-1.png", 
        imgRatchet: "imagenes/ratchet/0-80-BX50-2.png", 
        imgBit: "imagenes/bits/WB-1.png" 
    },

        { 
        id: "CX-00 Beyblade X App Prize", 
        linea: "CX", 
        nombre: "WizardArc 4-55LO Metal Coat: Black", 
        blade: "WizardArc", 
        assistBlade: "R", 
        ratchet: "4-55", 
        bit: "LO",
        imgBlade: "imagenes/blades/CX/cx-wizardnegro.png", 
        imgAssist: "imagenes/assist/R-2.png", 
        imgRatchet: "imagenes/ratchet/4-55-arcnegro.png", 
        imgBit: "imagenes/bits/LO-2.png" 
    },


// ==========================================
    // LANZAMIENTOS GLOBALES / PROMOS CX
    // ==========================================
    { 
        id: "Hasbro CX Starter", 
        linea: "CX", 
        nombre: "Fort Hornet R 7-60T", 
        blade: "FortHornet", 
        assistBlade: "R", 
        ratchet: "7-60", 
        bit: "T",
        imgBlade: "imagenes/blades/CX/hornet.png", 
        imgAssist: "imagenes/assist/R-3.png", 
        imgRatchet: "imagenes/ratchet/7-60-hornet.png", 
        imgBit: "imagenes/bits/HT-2.png" 
    },
    { 
        id: "Hasbro CX Starter", 
        linea: "CX", 
        nombre: "Wriggle Kraken S 3-85O", 
        blade: "WriggleKraken", 
        assistBlade: "S", 
        ratchet: "3-85", 
        bit: "O",
        imgBlade: "imagenes/blades/CX/kraken.png", 
        imgAssist: "imagenes/assist/J-5.png", 
        imgRatchet: "imagenes/ratchet/3-85-kraken.png", 
        imgBit: "imagenes/bits/O-7.png" 
    },
    { 
        id: "Hasbro CX Starter", 
        linea: "CX", 
        nombre: "Antler Stag B 2-60HN", 
        blade: "AntlerStag", 
        assistBlade: "B", 
        ratchet: "2-60", 
        bit: "HN",
        imgBlade: "imagenes/blades/CX/antler.png", 
        imgAssist: "imagenes/assist/B-4.png", 
        imgRatchet: "imagenes/ratchet/2-60-antler.png", 
        imgBit: "imagenes/bits/HN-6.png" 
    },
    { 
        id: "Hasbro CX Starter", 
        linea: "CX", 
        nombre: "Fang Leon T 4-60U", 
        blade: "FangLeon", 
        assistBlade: "T", 
        ratchet: "4-60", 
        bit: "U",
        imgBlade: "imagenes/blades/CX/leon.png", 
        imgAssist: "imagenes/assist/T-3.png", 
        imgRatchet: "imagenes/ratchet/4-60-leon.png", 
        imgBit: "imagenes/bits/U-3.png" 
    },
    { 
        id: "CX-00 01", 
        linea: "CX", 
        nombre: "ValkyrieVolt S 4-70V (Metal Coat: Gold)", 
        blade: "ValkyrieVoltGold", 
        assistBlade: "S", 
        ratchet: "4-70", 
        bit: "V",
        imgBlade: "imagenes/blades/CX/valkirie.png", 
        imgAssist: "imagenes/assist/S-3.png", 
        imgRatchet: "imagenes/ratchet/4-70-cx00-01.png", 
        imgBit: "imagenes/bits/V-4.png" 
    },
    { 
        id: "Beyblade X: Evobattle (Nintendo Switch Package Edition)", 
        linea: "CX", 
        nombre: "Booster LeonFang T 4-60A (Red Ver.)", 
        blade: "LeonFang", 
        assistBlade: "T", 
        ratchet: "4-60", 
        bit: "A",
        imgBlade: "imagenes/blades/CX/leonred.png", 
        imgAssist: "imagenes/assist/T-4.png", 
        imgRatchet: "imagenes/ratchet/4-60-cx00-04.png", 
        imgBit: "imagenes/bits/A-4.png" 
    },
    { 
        id: "CX-00 05", 
        linea: "CX", 
        nombre: "DranBrave S 6-60V (Metal Coat: Black)", 
        blade: "DranBrave", 
        assistBlade: "S", 
        ratchet: "6-60", 
        bit: "V",
        imgBlade: "imagenes/blades/CX/cx00-05.png", 
        imgAssist: "imagenes/assist/S-4.png", 
        imgRatchet: "imagenes/ratchet/6-60-cx00-05.png", 
        imgBit: "imagenes/bits/V-5.png" 
    },
    { 
        id: "CX-00 Evangelion Deck Set 00", 
        linea: "CX", 
        nombre: "EvaArc B 0-70E (Ver. Metal Coat: Orange)", 
        blade: "EvaArc", 
        assistBlade: "B", 
        ratchet: "0-70", 
        bit: "E",
        imgBlade: "imagenes/blades/CX/cx00-06.png", 
        imgAssist: "imagenes/assist/B-5.png", 
        imgRatchet: "imagenes/ratchet/0-70-cx00-06.png", 
        imgBit: "imagenes/bits/E-4.png" 
    },
    { 
        id: "CX-00 Evangelion Deck Set 01", 
        linea: "CX", 
        nombre: "EvaBrave A 1-70V (Ver. Metal Coat: Violet)", 
        blade: "EvaBrave", 
        assistBlade: "A", 
        ratchet: "1-70", 
        bit: "V",
        imgBlade: "imagenes/blades/CX/cx00-07.png", 
        imgAssist: "imagenes/assist/A-3.png", 
        imgRatchet: "imagenes/ratchet/1-70-cx00-07.png", 
        imgBit: "imagenes/bits/V-6.png" 
    },
    { 
        id: "CX-00 Evangelion Deck Set 02", 
        linea: "CX", 
        nombre: "EvaBrush T 2-70A (Ver. Metal Coat: Red)", 
        blade: "EvaBrush", 
        assistBlade: "T", 
        ratchet: "2-70", 
        bit: "A",
        imgBlade: "imagenes/blades/CX/cx00-08.png", 
        imgAssist: "imagenes/assist/T-5.png", 
        imgRatchet: "imagenes/ratchet/2-70-cx00-08.png", 
        imgBit: "imagenes/bits/A-5.png" 
    },

        { 
        id: "CX-00 Edición especial del Volumen 3 del manga de Beyblade X", 
        linea: "CX", 
        nombre: "DranArc S 2-70K Metallic Coat: Blue", 
        blade: "DranArc", 
        assistBlade: "S", 
        ratchet: "2-70", 
        bit: "K",
        imgBlade: "imagenes/blades/CX/cx00-dranarc.png", 
        imgAssist: "imagenes/assist/S-5.png", 
        imgRatchet: "imagenes/ratchet/2-70-cx00-dranarc.png", 
        imgBit: "imagenes/bits/K-5.png" 
    },

           { 
        id: "CX-00 Rare Bey Get Campaign", 
        linea: "CX", 
        nombre: "DrakeBrave G4-70I Metal Coat: Blue", 
        blade: "DrakeBrave", 
        assistBlade: "G", 
        ratchet: "4-70", 
        bit: "I",
        imgBlade: "imagenes/blades/CX/cx-00drakebrave.png", 
        imgAssist: "imagenes/assist/G-1.png", 
        imgRatchet: "imagenes/ratchet/2-70-cx00-drake.png", 
        imgBit: "imagenes/bits/I-4.png" 
    },

        { 
        id: "CX-00 Hasbro Japan Starter", 
        linea: "CX", 
        nombre: "Bucks Antlers B 2-60D Metal Coat: Orange", 
        blade: "BucksAntlers", 
        assistBlade: "B", 
        ratchet: "2-6'", 
        bit: "D",
        imgBlade: "imagenes/blades/CX/cx-00bucks.png", 
        imgAssist: "imagenes/assist/B-6.png", 
        imgRatchet: "imagenes/ratchet/2-70-cx00-bucks.png", 
        imgBit: "imagenes/bits/D-7.png" 
    },


            { 
        id: "CX-00 Hasbro Japan Starter", 
        linea: "CX", 
        nombre: "Kraken Wriggle S 3-70O Metal Coat: Blue", 
        blade: "KrakenWriggle", 
        assistBlade: "S", 
        ratchet: "3-70", 
        bit: "D",
        imgBlade: "imagenes/blades/CX/cx-00kracken.png", 
        imgAssist: "imagenes/assist/S-7.png", 
        imgRatchet: "imagenes/ratchet/3-70-cx00-kracken.png", 
        imgBit: "imagenes/bits/O-8.png" 
    },


            { 
        id: "CX-00 Hasbro Japan Starter", 
        linea: "CX", 
        nombre: "Hornet Fort R 7-60T Metal Coat: Yellow", 
        blade: "HornetFort", 
        assistBlade: "B", 
        ratchet: "7-60", 
        bit: "T",
        imgBlade: "imagenes/blades/CX/cx-00hornet.png", 
        imgAssist: "imagenes/assist/R-4.png", 
        imgRatchet: "imagenes/ratchet/7-60-cx00-hornet.png", 
        imgBit: "imagenes/bits/T-13.png" 
    },




    // Sublínea Infinite (CXI)
// ==========================================
// LINEA CXI: COMBOS BASE Y VERSIONES ESPECIALES
// ==========================================
{ 
    id: "CXI-13", 
    linea: "CXI", 
    nombre: "BahamutBlitz BK 1-50I", 
    lockChip: "Bahamut", 
    overBlade: "Break", 
    metalBlade: "Blitz", 
    assistBlade: "Knuckle", 
    ratchet: "1-50", 
    bit: "I", 
    imgLockChip: "imagenes/lockchip/Bahamut.png", 
    imgOverBlade: "imagenes/overblade/Break.png", 
    imgMetalBlade: "imagenes/metalblade/Blitz.png", 
    imgAssist: "imagenes/assist/K-1.png", 
    imgRatchet: "imagenes/ratchet/1-50-cxi13.png", 
    imgBit: "imagenes/bits/I-1.png" 
},
{ 
    id: "CXI-14", 
    linea: "CXI", 
    nombre: "KnightFortress GV 8-70UN", 
    lockChip: "Knight", 
    overBlade: "Guard", 
    metalBlade: "Fortress", 
    assistBlade: "Vertical", 
    ratchet: "8-70", 
    bit: "UN", 
    imgLockChip: "imagenes/lockchip/Knight.png", 
    imgOverBlade: "imagenes/overblade/Guard.png", 
    imgMetalBlade: "imagenes/metalblade/Fortress.png", 
    imgAssist: "imagenes/assist/V-1.png", 
    imgRatchet: "imagenes/ratchet/8-70-cxi14.png", 
    imgBit: "imagenes/bits/UN-2.png" 
},

{ 
    id: "CXI-15", 
    linea: "CXI", 
    nombre: "RagnaRage FE 4-55Y", 
    lockChip: "Ragna", 
    overBlade: "Flow", 
    metalBlade: "Rage", 
    assistBlade: "Erase", 
    ratchet: "4-55", 
    bit: "Y", 
    imgLockChip: "imagenes/lockchip/Ragna.png", 
    imgOverBlade: "imagenes/overblade/Flow.png", 
    imgMetalBlade: "imagenes/metalblade/Rage.png", 
    imgAssist: "imagenes/assist/E-1.png", 
    imgRatchet: "imagenes/ratchet/4-55-cxi15.png", 
    imgBit: "imagenes/bits/Y-1.png" 
},

{ 
    id: "CXI-16 Start Dash Set", 
    linea: "CXI", 
    nombre: "BahamutBlitz BK 1-50I Special Version", 
    lockChip: "Bahamut", 
    overBlade: "Break", 
    metalBlade: "Blitz", 
    assistBlade: "Knuckle", 
    ratchet: "1-50", 
    bit: "I", 
    imgLockChip: "imagenes/lockchip/Bahamutazul.png", 
    imgOverBlade: "imagenes/overblade/Breakazul.png", 
    imgMetalBlade: "imagenes/metalblade/Blitzazul.png", 
    imgAssist: "imagenes/assist/K-2.png", 
    imgRatchet: "imagenes/ratchet/1-50-cxi16.png", 
    imgBit: "imagenes/bits/I-2.png" 
},


{ 
    id: "CXI-16", 
    linea: "CXI", 
    nombre: "BahamutBlitz BK 1-50I Metal Coat Yellow", 
    lockChip: "Bahamut", 
    overBlade: "Break", 
    metalBlade: "Blitz", 
    assistBlade: "Knuckle", 
    ratchet: "1-50", 
    bit: "I", 
    imgLockChip: "imagenes/lockchip/Bahamut-Special.png", 
    imgOverBlade: "imagenes/overblade/Break-Special.png", 
    imgMetalBlade: "imagenes/metalblade/Blitz-Special.png", 
    imgAssist: "imagenes/assist/K-3.png", 
    imgRatchet: "imagenes/ratchet/1-50-cxispecial.png", 
    imgBit: "imagenes/bits/I-3.png" 
},

// ==========================================
// LINEA CXI: RANDOM BOOSTER VOL. 1 (CXI-17)
// ==========================================
{ 
    id: "CXI-17 Random Booster Vol. 10 01", 
    linea: "CXI", 
    nombre: "UnicornDelta PO 3-60GU (Prize)", 
    lockChip: "Unicorn", 
    overBlade: "Peak", 
    metalBlade: "Delta", 
    assistBlade: "Odd", 
    ratchet: "3-60", 
    bit: "GU", 
    imgLockChip: "imagenes/lockchip/Unicorn-Prize.png", 
    imgOverBlade: "imagenes/overblade/Peak01.png", 
    imgMetalBlade: "imagenes/metalblade/Delta01.png", 
    imgAssist: "imagenes/assist/O-1.png", 
    imgRatchet: "imagenes/ratchet/3-60-cxi17-01.png", 
    imgBit: "imagenes/bits/GU-3.png" 
},
{ 
    id: "CXI-17 Random Booster Vol. 10 01", 
    linea: "CXI", 
    nombre: "UnicornDelta PO 1-80GR", 
    lockChip: "Unicorn", 
    overBlade: "Peak", 
    metalBlade: "Delta", 
    assistBlade: "Odd", 
    ratchet: "1-80", 
    bit: "GR", 
    imgLockChip: "imagenes/lockchip/Unicorn.png", 
    imgOverBlade: "imagenes/overblade/Peak02.png", 
    imgMetalBlade: "imagenes/metalblade/Delta02.png", 
    imgAssist: "imagenes/assist/O-2.png", 
    imgRatchet: "imagenes/ratchet/1-80-cxi17-02.png", 
    imgBit: "imagenes/bits/GR-2.png" 
},

// ==========================================
// LINEA CXI: RANDOM BOOSTER VOL. 2 (CXI-18)
// ==========================================
{ 
    id: "CXI-18 Random Select 01", 
    linea: "CXI", 
    nombre: "BrachioWhip OW 5-70Nr (Prize)", 
    lockChip: "Brachio", 
    overBlade: "Outer", 
    metalBlade: "Whip", 
    assistBlade: "Wheel", 
    ratchet: "5-70", 
    bit: "Nr", 
    imgLockChip: "imagenes/lockchip/Brachio-Prize.png", 
    imgOverBlade: "imagenes/overblade/Outer01.png", 
    imgMetalBlade: "imagenes/metalblade/Whip01.png", 
    imgAssist: "imagenes/assist/W-3.png", 
    imgRatchet: "imagenes/ratchet/5-70-cxi18-01.png", 
    imgBit: "imagenes/bits/Nr-1.png" 
},
{ 
    id: "CXI-18 Random Select 02", 
    linea: "CXI", 
    nombre: "BrachioWhip OW 5-70Nr (Ver. 2)", 
    lockChip: "Brachio", 
    overBlade: "Outer", 
    metalBlade: "Whip", 
    assistBlade: "Wheel", 
    ratchet: "5-70", 
    bit: "Nr", 
    imgLockChip: "imagenes/lockchip/Brachio02.png", 
    imgOverBlade: "imagenes/overblade/Outer02.png", 
    imgMetalBlade: "imagenes/metalblade/Whip02.png", 
    imgAssist: "imagenes/assist/W-4.png", 
    imgRatchet: "imagenes/ratchet/5-70-cxi18-02.png", 
    imgBit: "imagenes/bits/Nr-2.png" 
},
{ 
    id: "CXI-18 Random Select 03", 
    linea: "CXI", 
    nombre: "BrachioWhip OW 5-70Nr (Ver. 3)", 
    lockChip: "Brachio", 
    overBlade: "Outer", 
    metalBlade: "Whip", 
    assistBlade: "Wheel", 
    ratchet: "5-70", 
    bit: "Nr", 
    imgLockChip: "imagenes/lockchip/Brachio03.png", 
    imgOverBlade: "imagenes/overblade/Outer03.png", 
    imgMetalBlade: "imagenes/metalblade/Whip03.png", 
    imgAssist: "imagenes/assist/W-5.png", 
    imgRatchet: "imagenes/ratchet/5-70-cxi18-03.png", 
    imgBit: "imagenes/bits/Nr-3.png" 
},

// ==========================================
// LINEA CXI: PROMOCIONALES / EVENTOS ESPECIALES
// ==========================================
{ 
    id: "CXI Hasbro Starter Infinite", 
    linea: "CXI", 
    nombre: "Hurricane Enlil IS 7-55T", 
    lockChip: "Enlil", 
    overBlade: "I", 
    metalBlade: "Hurricane", 
    assistBlade: "Slash", 
    ratchet: "7-55", 
    bit: "T", 
    imgLockChip: "imagenes/lockchip/Enlil.png", 
    imgOverBlade: "imagenes/overblade/i.png", 
    imgMetalBlade: "imagenes/metalblade/Hurricane.png", 
    imgAssist: "imagenes/assist/S-6.png", 
    imgRatchet: "imagenes/ratchet/7-55-g2750.png", 
    imgBit: "imagenes/bits/T-12.png" 
},
   
 


    ];