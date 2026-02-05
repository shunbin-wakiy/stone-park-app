// Gem data types and constants for Stone Park virtual treasure hunt app

export interface Gem {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
  color: string;
  image: string;
  points: number;
}

export interface GemLocation {
  id: string;
  gemId: string;
  x: number; // percentage position on map (0-100)
  y: number; // percentage position on map (0-100)
  collected: boolean;
  zone: string;
}

export interface CollectedGem {
  gemId: string;
  locationId: string;
  collectedAt: Date;
}

// Gem image URLs (generated assets)
export const GEM_IMAGES = {
  amethyst: 'https://private-us-east-1.manuscdn.com/sessionFile/ffvgSMyMwr3NJGh3RjdESC/sandbox/p14vUS9ZPZN05J8lp1ApU9_1770239152598_na1fn_YW1ldGh5c3Q.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZmZ2Z1NNeU13cjNOSkdoM1JqZEVTQy9zYW5kYm94L3AxNHZVUzlaUFpOMDVKOGxwMUFwVTlfMTc3MDIzOTE1MjU5OF9uYTFmbl9ZVzFsZEdoNWMzUS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=U8Ay2ZRTWpZMbjjqOSKqZNM6DKelFgRflOkjtaYdVrnnV~f67K9v8H-utNzs01Iqx0ns~YPVDrT4IDZMcKdCi~XOq2h4w3DiXKBfZcM9TV2SwP5si2i~6Uc5ugNovH47saSxB9vQbnDD~o~ZJxvWCupeFRHgkkgRCXMW~aTMes~eqRVAYgDpU9zTkEP7uUpOMmy-jIdFosgd2zu5N8B9I3kXwKR0E2u6rNQHdYNc9rTybwW7JCAhffe-Ggl88VyQL-x8WZ4r45O2u3CApHAD~2f5IB1eojQ-yM388k~Ea~yoSPSggUmtNq3wm00QQNnQBl0sxD2yW8rytjAEqIe-0g__',
  ruby: 'https://private-us-east-1.manuscdn.com/sessionFile/ffvgSMyMwr3NJGh3RjdESC/sandbox/p14vUS9ZPZN05J8lp1ApU9_1770239152599_na1fn_cnVieQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZmZ2Z1NNeU13cjNOSkdoM1JqZEVTQy9zYW5kYm94L3AxNHZVUzlaUFpOMDVKOGxwMUFwVTlfMTc3MDIzOTE1MjU5OV9uYTFmbl9jblZpZVEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=G65dMuW0PDcEeHnFIQ~GJyaBh1djfNdvRUEMoX5kRAtUdyuJyzPQNhn5dymYg~co5gRxoX4VYnycoEYV5BJFY2pBrZa3R84kSzkhIBVCnrLAdm1xLpDT3aUWtLN7K-OYi8ArNluejjIJbwcXor01Hr9aXtnaOsgNOl~xgAIa8XoARXvEcd--zyu2mhrjLVAWqqaU8l-zUFugv2xB4LH2VNhhV0TjvK9ddeImpX~JjlGzJXpHPiX-ooEdqWbDc8Aqeix058gxmZeoKMqZGD54Z62wTbd2bCL6op-Ytq-bKQjm6lSRr4m4~wkXnzX9kMo-PVGxZhP2P7g212FMopGD~A__',
  emerald: 'https://private-us-east-1.manuscdn.com/sessionFile/ffvgSMyMwr3NJGh3RjdESC/sandbox/p14vUS9ZPZN05J8lp1ApU9_1770239152599_na1fn_ZW1lcmFsZA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZmZ2Z1NNeU13cjNOSkdoM1JqZEVTQy9zYW5kYm94L3AxNHZVUzlaUFpOMDVKOGxwMUFwVTlfMTc3MDIzOTE1MjU5OV9uYTFmbl9aVzFsY21Gc1pBLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AMxrfsnhGRSbZsfkQPkzEvJGp4eXsGofErwElkw44wD8xAr06bWUdJoDDGGQwnZfoBYeS0GR91xbd0iVul5JvPzQPDg03YDBjWYtuVEJ7K4Nt2sDYGnTbSCzxL3SyOare6BuYZsGphL5QmBYQjrLdow~-g4dUgFdNU8F24zFBAiFgIeMwUemVmxkLQBVjXlpr-6enqE12MlovVIwE17NgPvPZG-0sC2qN-DrO84hD9IqtDbIJcmaaDggkCLeQK4OPQpX5u841Wn9dmu04wLoH8Q8GBfQf1QM92PpMfal7W1tdk5Ca6JzwV1f3PzRN9YFGwoNqUMocaokelstjuigNQ__',
  sapphire: 'https://private-us-east-1.manuscdn.com/sessionFile/ffvgSMyMwr3NJGh3RjdESC/sandbox/p14vUS9ZPZN05J8lp1ApU9_1770239152599_na1fn_c2FwcGhpcmU.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZmZ2Z1NNeU13cjNOSkdoM1JqZEVTQy9zYW5kYm94L3AxNHZVUzlaUFpOMDVKOGxwMUFwVTlfMTc3MDIzOTE1MjU5OV9uYTFmbl9jMkZ3Y0docGNtVS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=mfXQALtmWRqRpg18yH3e98W8eO09XgHTvPYB-me0ozHhDPZ9ym80kstQD60UOJwGoPfljdUIgtVtSJFST5r7mC8ciVdiMXA-UdwwHPK5y4K6ddvZBgVSs4T9~DmYH8WpIpxnxu2qoZ-iFQlegdARDsG08BKcHHiMDkfPOQ~W6mNNbqsIgL3KSXq3KcKv~CGX4ZuxdqDLA7bus3LhUryGzflUjUI73WDYO5KsvCbviXRO2~GJfzI9903c1R5hWG4MuVOkOWtvjW0cI19ksxP00hTZ~P0r4vCDjd4tV6wOmrXfRlbIous9cp0qcVuS~FWozHPE5zdkaTBato5wfeUTqA__',
  diamond: 'https://private-us-east-1.manuscdn.com/sessionFile/ffvgSMyMwr3NJGh3RjdESC/sandbox/p14vUS9ZPZN05J8lp1ApU9_1770239152600_na1fn_ZGlhbW9uZA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZmZ2Z1NNeU13cjNOSkdoM1JqZEVTQy9zYW5kYm94L3AxNHZVUzlaUFpOMDVKOGxwMUFwVTlfMTc3MDIzOTE1MjYwMF9uYTFmbl9aR2xoYlc5dVpBLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UqBrtQwTa-k-W6fk8g69NBu36diKSU2BT4oLpGUF6w3-HYd9xc-rzY0FNYheOISI8kApUg56ptceKWHQmBzYc-LGyJxEPDM8JlGitcUI4hVnF8uGb2DVU7Oo2ia3COCW2cX~HdHVgJAu3F9-EaORvlSlSO~mKzy70lsSKK2ZnTl14EcV-vxj9UU9OA~BZWOz1IeQXZTXkG~gntgk8JmiIE0lUQOtB2~q86fNT~cRkzOm-kEcXgE7Q75O24rPlfcoRnmnY23Z0BdgWQhMWvcUtu74BiVSL-gtFEyPVJ2ggw6hWxAD4kbKKEdjLLDU8qitSR1p20Sj6Qm67rlfsLwizA__',
};

// All available gems in the park
export const GEMS: Gem[] = [
  {
    id: 'amethyst',
    name: 'アメジスト',
    nameEn: 'Amethyst',
    description: '紫水晶とも呼ばれる美しい紫色の宝石。古代から王族に愛されてきました。',
    rarity: 'common',
    color: '#9B59B6',
    image: GEM_IMAGES.amethyst,
    points: 10,
  },
  {
    id: 'ruby',
    name: 'ルビー',
    nameEn: 'Ruby',
    description: '情熱の象徴とされる深紅の宝石。ダイヤモンドに次ぐ硬度を持ちます。',
    rarity: 'rare',
    color: '#E74C3C',
    image: GEM_IMAGES.ruby,
    points: 50,
  },
  {
    id: 'emerald',
    name: 'エメラルド',
    nameEn: 'Emerald',
    description: '鮮やかな緑色が特徴の宝石。クレオパトラが愛した宝石としても有名です。',
    rarity: 'uncommon',
    color: '#27AE60',
    image: GEM_IMAGES.emerald,
    points: 30,
  },
  {
    id: 'sapphire',
    name: 'サファイア',
    nameEn: 'Sapphire',
    description: '深い青色が美しい宝石。誠実と知恵の象徴とされています。',
    rarity: 'uncommon',
    color: '#3498DB',
    image: GEM_IMAGES.sapphire,
    points: 30,
  },
  {
    id: 'diamond',
    name: 'ダイヤモンド',
    nameEn: 'Diamond',
    description: '最も硬い天然鉱物。永遠の愛の象徴として世界中で愛されています。',
    rarity: 'legendary',
    color: '#BDC3C7',
    image: GEM_IMAGES.diamond,
    points: 100,
  },
];

// Park zones
export const PARK_ZONES = [
  { id: 'entrance', name: 'エントランス広場' },
  { id: 'museum', name: '博石館' },
  { id: 'garden', name: '鉱石庭園' },
  { id: 'cave', name: '水晶洞窟' },
  { id: 'shop', name: 'ミュージアムショップ' },
];

// Initial gem locations on the map
export const INITIAL_GEM_LOCATIONS: GemLocation[] = [
  { id: 'loc1', gemId: 'amethyst', x: 25, y: 30, collected: false, zone: 'entrance' },
  { id: 'loc2', gemId: 'emerald', x: 65, y: 25, collected: false, zone: 'garden' },
  { id: 'loc3', gemId: 'ruby', x: 45, y: 55, collected: false, zone: 'museum' },
  { id: 'loc4', gemId: 'sapphire', x: 75, y: 60, collected: false, zone: 'cave' },
  { id: 'loc5', gemId: 'amethyst', x: 35, y: 70, collected: false, zone: 'museum' },
  { id: 'loc6', gemId: 'diamond', x: 55, y: 40, collected: false, zone: 'cave' },
  { id: 'loc7', gemId: 'emerald', x: 20, y: 55, collected: false, zone: 'garden' },
  { id: 'loc8', gemId: 'sapphire', x: 80, y: 35, collected: false, zone: 'shop' },
];

// Helper functions
export function getGemById(id: string): Gem | undefined {
  return GEMS.find(gem => gem.id === id);
}

export function getRarityLabel(rarity: Gem['rarity']): string {
  const labels: Record<Gem['rarity'], string> = {
    common: 'コモン',
    uncommon: 'アンコモン',
    rare: 'レア',
    legendary: 'レジェンダリー',
  };
  return labels[rarity];
}

export function getRarityColor(rarity: Gem['rarity']): string {
  const colors: Record<Gem['rarity'], string> = {
    common: '#8E8E93',
    uncommon: '#34C759',
    rare: '#007AFF',
    legendary: '#FF9500',
  };
  return colors[rarity];
}
