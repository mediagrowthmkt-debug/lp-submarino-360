# 🌊 Mundo Submarino 360° — Guia de Geração de Imagens e Vídeos

## Contexto do Projeto

**Nome:** Mundo Submarino 360°  
**O que é:** Uma experiência imersiva em estruturas de LED transparente instaladas em terminais de aeroportos do Brasil. O visitante entra num cubo de LED e é envolvido por imagens em 360° do fundo do oceano — baleias, corais, cardumes, luz submarina — com áudio espacial.  
**Público-alvo:** Passageiros de aeroportos — famílias, crianças, casais, executivos, viajantes frequentes. Pessoas de todas as idades em momento de espera.  
**Ambiente físico:** Interior de aeroporto. Área de embarque. Espaço clean, iluminação artificial branca/fria, piso de porcelanato, grandes janelas. Contraste com a natureza da experiência.  
**Sensação transmitida:** Paz, encantamento, leveza, pausa do caos, conexão com a natureza, tecnologia que emociona.  

---

## Sistema Visual do Site

**Paleta do site:**
- Fundo: branco `#ffffff` e cinza-gelo `#f4f6f8`
- Azul oceano principal: `#0077b6`
- Azul aqua: `#00b4d8` / `#48cae4`
- Azul noite (seções escuras): `#0d1b2a`
- Texto: `#0d1b2a` (quase preto azulado)

**Tipografia do site:** Sora (títulos, bold/extrabold) + Inter (corpo)  
**Estilo visual:** Minimalista. Limpo. Profissional. Sem ornamentos. Fotos realistas, não ilustrações.  
**Referências visuais:** BBC Ocean, National Geographic Oceans, Apple product photography, Singapore Airlines premium content.

---

## Diretrizes Globais para Todas as Imagens

- **Fotografia real**, não 3D cartoon nem ilustração vetorial
- Iluminação **azul oceano** — luz que vem de baixo, como embaixo d'água, ou luz translúcida de LED azul/aqua
- Pessoas **reais, diversas, brasileiras** — não estoque genérico americano
- Expressões: **paz, encantamento, leveza, surpresa positiva** — nunca expressão forçada
- Animais marinhos: **realistas, em alta resolução, escala real** — não cartoon
- Evitar: excesso de brilho neon, texto em imagem, logos, elementos cortados, composições apertadas
- Proporções predominantes: **16:9** (hero/banner), **4:5** ou **1:1** (cards/galeria), **9:16** (mobile/redes)

---

## IMAGEM 1 — Hero Background (Fundo principal)

**Localização no site:** Seção HERO — fundo de tela cheia atrás do título principal  
**Formato:** 1920×1080px (16:9) — imagem ou vídeo loop  
**Uso:** Background com overlay escuro azul-marinho semitransparente sobre ela  

### Prompt (foto):
```
Ultra-wide underwater ocean scene, crystal clear deep blue water, volumetric light rays filtering down from the surface, large humpback whale swimming peacefully in the foreground, smaller fish visible in the background, coral reef details below, color palette: deep navy blue, cyan, aqua tones, photorealistic, shot with wide angle lens, depth of field, cinematic quality, National Geographic style, no people, no text
```

### Prompt (vídeo loop):
```
Seamless loop underwater ocean scene, slow-motion, humpback whale gliding past camera from left to right, small fish school in background, sunlight rays piercing water surface from above, deep blue to cyan color gradient, calm, serene, cinematic, 4K, no camera shake, perfect loop
```

---

## IMAGEM 2 — Hero Visual (Cubo LED no aeroporto)

**Localização no site:** Seção HERO — lado direito, coluna visual ao lado do título  
**Formato:** 460×460px (1:1) — foto produto/ambiente  
**Uso:** Dentro do frame `.cube-showcase__frame` — mostra o cubo físico instalado  

### Prompt:
```
Professional product photography, transparent LED cube installation inside a modern airport terminal, cube emitting deep blue and cyan underwater ocean visuals from all sides, ocean scenes visible through transparent LED panels showing whales and fish, passengers looking at the cube with wonder, clean airport background with white floor and large windows, soft ambient lighting, architectural photography style, tack sharp, 4K detail
```

### Variação (sem pessoas, só o produto):
```
Transparent LED cube display product photography, modern airport terminal background blurred, cube showing immersive 360 underwater ocean scenes in blue and cyan, premium tech installation, clean minimal composition, studio-quality lighting mixed with environmental airport lighting, sharp foreground soft background bokeh
```

---

## IMAGEM 3 — Seção "Sobre a Experiência" (Pessoa dentro da experiência)

**Localização no site:** Seção `#experiencia` — coluna da direita (photo-card)  
**Formato:** 460×540px (proporção retrato ~0.85:1)  
**Uso:** Card com borda, sombra, caption abaixo — foto principal de pessoa vivendo a experiência  

### Prompt:
```
Brazilian adult person standing inside transparent LED cube installation, surrounded by immersive 360-degree underwater ocean projections, whale and tropical fish images projected on all walls around them, face illuminated by blue and cyan LED light, expression of calm wonder and peace, eyes open in amazement, modern airport terminal visible through the transparent walls outside the cube, soft blue color grading, cinematic portrait, natural authentic emotion, medium shot waist up
```

### Variação (família):
```
Brazilian family of three — father, mother and young child — inside immersive 360-degree LED ocean cube at an airport, blue underwater whale projection surrounds them from all sides, child pointing upward at whale image in delight, parents smiling calmly, authentic emotion, blue and aqua lighting, airport terminal visible behind transparent LED panels, candid natural photography style
```

---

## IMAGEM 4 — Galeria Card 1 — Interior do Cubo (visão 360°)

**Localização no site:** Carrossel de galeria — 1° slide  
**Formato:** 360×400px (card ~0.9:1)  
**Label no site:** "Interior do cubo — visão 360°"  

### Prompt:
```
POV shot from inside a 360-degree immersive LED installation, ocean underwater environment projected on all surrounding transparent LED walls, viewer perspective in the center, deep blue water with light rays, large humpback whale approaching from the front, smaller fish on the sides and above, total immersion feel, cyan and navy blue color palette, cinematic quality, wide angle fisheye perspective suggesting 360 coverage
```

---

## IMAGEM 5 — Galeria Card 2 — Baleia em Alta Resolução

**Localização no site:** Carrossel de galeria — 2° slide  
**Formato:** 360×400px (card ~0.9:1)  
**Label no site:** "Baleia jubarte em alta resolução"  

### Prompt:
```
Extreme close-up photorealistic humpback whale, underwater, crystal clear deep ocean water, light rays from above, whale's texture and barnacles visible in ultra-high detail, deep navy and blue tones, cinematic underwater photography, National Geographic quality, no text, no people
```

---

## IMAGEM 6 — Galeria Card 3 — Cardume Tropical

**Localização no site:** Carrossel de galeria — 3° slide  
**Formato:** 360×400px (card ~0.9:1)  
**Label no site:** "Cardume tropical em 360°"  

### Prompt:
```
Dense school of tropical fish — blue and orange tangs, clownfish — swirling in perfect formation underwater, warm tropical reef scene, vivid blue and turquoise water, sunlight filtered through water above, coral in the lower frame, incredibly sharp detail, underwater photography, BBC Earth documentary style
```

---

## IMAGEM 7 — Galeria Card 4 — Família na Experiência

**Localização no site:** Carrossel de galeria — 4° slide  
**Formato:** 360×400px (card ~0.9:1)  
**Label no site:** "Família em experiência imersiva"  

### Prompt:
```
Joyful Brazilian family — couple with two children ages 5 and 10 — inside an immersive underwater LED experience at an airport, surrounded by blue ocean projections, child reaching up toward a projected whale, warm authentic family moment, blue and cyan light illuminating their faces from all sides, emotional candid photography, waist-up framing
```

---

## IMAGEM 8 — Galeria Card 5 — Recife de Coral

**Localização no site:** Carrossel de galeria — 5° slide  
**Formato:** 360×400px (card ~0.9:1)  
**Label no site:** "Recife de coral em detalhes"  

### Prompt:
```
Vibrant coral reef scene, macro photography detail, staghorn coral and brain coral in foreground, tropical fish darting between coral, crystal clear warm water, sunlight dappled patterns on the reef, incredibly detailed textures, turquoise and deep blue water, BBC Planet Ocean documentary quality, no people
```

---

## IMAGEM 9 — Galeria Card 6 — Cubo no Aeroporto (exterior)

**Localização no site:** Carrossel de galeria — 6° slide  
**Formato:** 360×400px (card ~0.9:1)  
**Label no site:** "Cubo instalado no aeroporto"  

### Prompt:
```
Wide-angle architectural shot of transparent LED cube installation in a busy international airport terminal, passengers walking around and stopping to look at the glowing ocean display, cube emitting blue and cyan ocean imagery visible from outside, modern airport architecture background, polished white floor, natural daylight from windows mixing with LED glow, professional architectural photography, clean composition
```

---

## IMAGEM 10 — Seção "Como Funciona" — Step 1 (Entrada)

**Localização no site:** Card de passo 1 — "Entre na experiência"  
**Formato:** 80×80px ícone / 300×200px card (opcional)  
**Uso:** Ícone ou pequena ilustração dentro do card de step  

### Prompt (ícone/ilustração minimalista):
```
Minimal flat icon illustration, person entering a glowing cube doorway, blue and aqua color scheme, simple geometric shapes, clean white background, modern app icon style, no text
```

---

## IMAGEM 11 — Seção "Como Funciona" — Step 2 (Imersão)

**Localização no site:** Card de passo 2 — "Viva a imersão 360°"  
**Formato:** 80×80px ícone  

### Prompt:
```
Minimal flat icon illustration, person standing in center surrounded by circular ocean waves and fish silhouettes in 360 degrees, deep blue and cyan color scheme, simple geometric clean style, white background, no text
```

---

## IMAGEM 12 — Seção "Como Funciona" — Step 3 (Renovação)

**Localização no site:** Card de passo 3 — "Continue transformado"  
**Formato:** 80×80px ícone  

### Prompt:
```
Minimal flat icon illustration, person walking toward airplane silhouette, small ocean wave behind them suggesting they carry the peace with them, blue and aqua colors, clean geometric minimal style, white background, no text
```

---

## IMAGEM 13 — Seção "Quem Somos" — Tecnologia LED

**Localização no site:** Seção `#sobre` — painel da empresa (company-panel), lado esquerdo  
**Formato:** 520×480px  
**Uso:** Imagem de fundo ou destaque mostrando a tecnologia  

### Prompt:
```
Close-up detail of transparent LED display panel technology, semi-transparent LED screen showing deep blue ocean underwater scene visible through the mesh of LEDs, high-tech premium materials, macro photography with bokeh, cool blue and cyan LED glow, ultra clean, tech product photography style, no people, no text
```

---

## IMAGEM 14 — Seção "Para Quem" — Viajante executivo

**Localização no site:** Seção `#para-quem` — pode compor o mosaico visual  
**Formato:** 120×120px circular  

### Prompt:
```
Professional Brazilian business traveler, 35-45 years old, suit without tie, looking peacefully at something off-camera with a calm relieved expression, modern airport background blurred, soft natural light, genuine emotion, LinkedIn profile photo quality but more authentic and warm
```

---

## IMAGEM 15 — Seção "Para Quem" — Criança encantada

**Localização no site:** Seção `#para-quem` — mosaico visual  
**Formato:** 120×120px circular  

### Prompt:
```
Brazilian child age 7-9, face lit by blue aqua LED light, eyes wide open in absolute wonder and delight, looking upward at something amazing, genuine childlike expression of joy and awe, candid authentic emotion, soft blue glow illuminating face, blurred airport background
```

---

## IMAGEM 16 — CTA Final Background

**Localização no site:** Seção CTA final — fundo escuro com gradiente  
**Formato:** 1920×800px (panorâmico)  
**Uso:** Background com overlay escuro `#0d1b2a` semitransparente  

### Prompt:
```
Epic wide underwater ocean scene, deep navy blue water, whale silhouette in the distance, volumetric blue light rays from above, particles floating in water, calm and majestic, extremely wide cinematic aspect ratio, deep ocean atmosphere, color palette strictly navy and aqua blue, photorealistic, no text, no people
```

---

## VÍDEOS PARA O SITE

### Vídeo 1 — Hero Background Loop (substitui a imagem estática no desktop)

```
Seamless 10-second loop video, underwater ocean scene, slow motion, humpback whale gently swimming left to right across frame, small fish school in midground, light rays descending from water surface, deep blue and cyan color palette, cinematic 4K, no camera movement, perfect seamless loop, peaceful and majestic atmosphere
```

### Vídeo 2 — Demonstração da experiência (pode ser usado em destaque)

```
15-second documentary-style video, Brazilian airport interior, 360-degree LED transparent cube installation glowing in blue, person entering the cube, then cut to their face illuminated by ocean blue light with expression of peace and wonder, cut to exterior of cube in full operation, professional corporate video quality, no music placeholder, color grade: desaturated ambient with vivid blue LED
```

---

## Tabela Resumo — Todas as Imagens

| # | Seção | Posição | Formato | Tipo |
|---|---|---|---|---|
| 1 | Hero | Fundo tela cheia | 1920×1080 | Foto/Vídeo loop |
| 2 | Hero | Coluna direita — cubo | 460×460 | Foto produto |
| 3 | Sobre a Experiência | Card foto pessoa | 460×540 | Foto pessoa |
| 4 | Galeria | Slide 1 — POV 360° | 360×400 | Foto imersão |
| 5 | Galeria | Slide 2 — baleia | 360×400 | Foto natureza |
| 6 | Galeria | Slide 3 — cardume | 360×400 | Foto natureza |
| 7 | Galeria | Slide 4 — família | 360×400 | Foto pessoas |
| 8 | Galeria | Slide 5 — coral | 360×400 | Foto natureza |
| 9 | Galeria | Slide 6 — cubo exterior | 360×400 | Foto produto |
| 10 | Como Funciona | Step 1 ícone | 80×80 | Ícone flat |
| 11 | Como Funciona | Step 2 ícone | 80×80 | Ícone flat |
| 12 | Como Funciona | Step 3 ícone | 80×80 | Ícone flat |
| 13 | Quem Somos | Painel tecnologia | 520×480 | Foto tecnologia |
| 14 | Para Quem | Mosaico executivo | 120×120 | Foto pessoa |
| 15 | Para Quem | Mosaico criança | 120×120 | Foto pessoa |
| 16 | CTA Final | Background | 1920×800 | Foto/Vídeo |

---

## Ferramentas Recomendadas para Geração

| Ferramenta | Melhor para |
|---|---|
| **Midjourney v6** | Fotos natureza oceânica, composições épicas, pessoas |
| **DALL·E 3** | Ícones flat, ilustrações simples, composições controladas |
| **Stable Diffusion XL** | Fotos de produto/tecnologia, controle fino |
| **Runway Gen-3** | Vídeos loop hero, animações do cubo LED |
| **Sora (OpenAI)** | Vídeos realistas com pessoas e ambiente de aeroporto |
| **Adobe Firefly** | Fotos de pessoas diversas, controle de direitos de imagem |

---

## Notas de Implementação

1. **Formato de entrega:** WebP para fotos (melhor compressão), MP4/WebM para vídeos
2. **Tamanho máximo recomendado:** Fotos < 300KB, Vídeo hero < 5MB (comprimido)
3. **Acessibilidade:** Toda imagem deve ter `alt` text descritivo no HTML
4. **Background hero:** Usar vídeo com `autoplay muted loop playsinline` + fallback de imagem
5. **Galeria:** Imagens dos slides devem ser colocadas como `background-image` nos `.gcard` ou como `<img>` dentro deles
6. **Pessoas:** Dar preferência a modelos brasileiros com diversidade étnica — o produto é nacional
