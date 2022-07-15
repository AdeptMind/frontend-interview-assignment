interface Attributes {
  COLOR: any[];
  STORE_COLOR: string[];
}

interface BackgroundColor {
  r: number;
  b: number;
  g: number;
}

interface Image {
  hasMultiSize: boolean;
  backgroundColor: BackgroundColor;
  hasDynamicBackground: boolean;
  url: string;
}

interface MallSpecificData {
  quantity?: number;
  timestamp: number | null;
  inventory?: any;
}

interface MallSpecific {
  [key: string]: MallSpecificData;
}

interface InventoryMetadata {
  mall_specific: MallSpecific;
}

interface Dimensions {
  width: number;
  height: number;
}

interface AllImage {
  hasMultiSize: boolean;
  backgroundColor: BackgroundColor;
  original_url: string;
  hasDynamicBackground: boolean;
  url: string;
  dimensions: Dimensions;
}

interface Attributes2 {
  ON_SALE: string[];
  LOCATION: any[];
  TEXT_SIZE: string[];
  PRICE: number[];
  RAW_SIZE: string[];
  MALL_IDS: string[];
  NUMBER_SIZE: number[];
  SOLD_OUT: string[];
  GOOGLE_PRODUCT_CATEGORY_ID: string[];
  GOOGLE_PRODUCT_CATEGORY: string[];
  MPN: string[];
  UPCOREAN: string[];
  GTIN: string[];
  UPC: string[];
}

interface Variant {
  inventory_quantity?: any;
  image: Image;
  inventory_metadata: InventoryMetadata;
  all_images: AllImage[];
  mall_ids: string[];
  sale_price: number;
  url: string;
  size: string;
  price: number;
  meta: Record<string, unknown>;
  product_id: string;
  rank: number;
  attributes: Partial<Attributes2>;
  id: string;
  selected?: boolean;
}

interface Model {
  color: string;
  color_hex: any[];
  attributes: Attributes;
  model_id: string;
  variants: Variant[];
  url: string;
  description?: string;
  selected?: boolean;
}

interface Image2 {
  hasMultiSize: boolean;
  backgroundColor: BackgroundColor;
  hasDynamicBackground: boolean;
  url: string;
}

interface Store {
  store_name: string;
  phone: string;
  url?: any;
  description: string;
  menu_url?: any;
  order_url?: any;
}

interface UnitInfoData {
  store_name: string;
  stores: Store[];
  has_inventory: boolean;
}

interface UnitInfo {
  [key: string]: UnitInfoData;
}

interface ImageUrl {
  url: string;
}

interface GroupNameSuggest {
  input: string;
  weight: number;
}

interface FullStoreInfo {
  STORE_TYPE: string[];
  STORE: string;
  product_store_id: string;
  group_id: number;
  group_name: string;
  unit_info: UnitInfo;
  inventory_available: boolean;
  is_top_store: boolean;
  store_logo: ImageUrl;
  store_image: ImageUrl;
  prod_ready: boolean;
  is_mom_and_pop: boolean;
  has_catalog: boolean;
  MALL_IDS: string[];
  catalog_source: string;
  images: ImageUrl[];
  mall_ids: string[];
  text_autocomplete_secondary: any[];
  autocomplete_secondary_suggest: any[];
  group_name_suggest: GroupNameSuggest[];
  PROD_READY: string;
  MALL_IDS_STORE_TYPE: string[];
  store_name: string;
  stores: Store[];
  has_inventory: boolean;
}

export interface Product {
  prod_id: string;
  categories: string[];
  new_arrival: boolean;
  gender: string[];
  description: string;
  created_at: any;
  availability: boolean;
  mall_ids: string[];
  title: string;
  colors: string[];
  product_store_id: string;
  normalized_colors: any[];
  updated_at: any;
  sizes: string[];
  price: number[];
  product_id: string;
  tag: string;
  sku: any[];
  brand: string;
  barcode: any[];
  bullets: string[];
  document_type: string;
  inventory_quantity: number;
  image: string;
  models: Model[];
  images: Image2[];
  original_product_id: string;
  handle: string;
  store: string[];
  sale_price: number[];
  signiture: string;
  url: string;
  topologies: string[];
  tags: any[];
  basic_is_new_release: boolean;
  product_type: string;
  delta_status: string;
  STORE: string;
  age: string[];
  product_rating?: any;
  status: string;
  full_store_info: FullStoreInfo;
  keywords: string;
  target_users: string[];
  is_valid?: boolean;
}
